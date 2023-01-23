import Head from "next/head";
import styles from "@/styles/Home.module.css"
import {supabase} from "@/lib/supabaseClient"

export default function Home({countries}) {
  return (
    <>
    <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select()

  return {
    props: {
     countries: data
    },
  }
}
