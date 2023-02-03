import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { supabase } from "@/lib/supabaseClient";

export default function Home({ countries }) {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }
  return (
    <>
      <div>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      </div>
      <div>
        <ul>
          {countries.map((country) => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("countries").select();

  return {
    props: {
      countries: data,
    },
  };
}
