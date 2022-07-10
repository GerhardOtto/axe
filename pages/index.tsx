import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={"grid grid-rows-[1fr_60px] h-screen"}>
      <Head>
        <title>Workout Tracker</title>
        <meta name="description" content="Easily track your wourkouts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <h1 className="text-3xl">
          Welcome to my workout tracker
        </h1>

        <div>
          <h2 className="text-2xl">Workouts</h2>
          <ul className="list-disc">
            <li>Squats</li>
            <li>Pause Bench</li>
          </ul>
        </div>
      </main>

      <footer>
        Created by Gerhard Otto
      </footer>
    </div>
  );
};

export default Home;
