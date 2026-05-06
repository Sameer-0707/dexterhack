import Image from "next/image";



import React from "react";
import HomePage from "./HomePage/page";
import Head from "next/head";
import Footer from "./common-components/Footer/Footer";
import Header from "./common-components/Header/Header";

export default function Page() {
  return (


    <>
      <Header />
      <HomePage />
      <Footer />

    </>

  );
}
