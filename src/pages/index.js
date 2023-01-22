import Head from "next/head";
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-black">
          <h1 className={styles.heading}>Hello World</h1>
        </div>
      </main>
    </>
  );
}
