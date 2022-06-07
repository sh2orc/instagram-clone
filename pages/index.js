import Head from 'next/head'
import Header from "../components/Header";
import {HomeIcon, PlusCircleIcon} from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
        <Header/>

      {/*Feed*/}

      {/*Modal*/}

    </div>

  )
}
