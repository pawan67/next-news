import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="background">
      <Header />
      <img className=" w-3/4  mx-auto mt-20 " src="/home.svg" alt="" />

      <h1 className=" text-3xl font-semibold mt-10 text-center">
        Next js News App
      </h1>
      <p className=" text-center text-md mt-5 ">
        Realtime API based news fetch from{" "}
        <a className=" underline" href="https://newsapi.org/">
          NewsAPI
        </a>{" "}
      </p>
    </div>
  );
}
