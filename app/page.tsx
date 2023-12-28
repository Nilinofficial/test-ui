"use client";

import DashboardTable from "@/components/dashboard/DashboardTable";
import Banner from "@/components/homepage/banner/Banner";
import Details from "@/components/homepage/details/Details";
import Footer from "@/components/homepage/footer/Footer";
import Navbar from "@/components/homepage/navbar/Navbar";
import Prices from "@/components/homepage/prices/Prices";
import "@stripe/stripe-js";
import { useRef } from "react";
import { specs } from "@/utils/constants";
import TableLayout from "@/components/table/TableLayout";
import { SpecsTable } from "@/components/homepage/specsTable/SpecsTable";
import Specifications from "@/components/homepage/specifications/Specifications";


function Home() {
  const pricesRef = useRef<HTMLDivElement>(null);

  const scrollToPrices = () => {
    if (pricesRef.current) {
      pricesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <main className="w-full">
     <div className=" w-full xl:px-40 bg-slate-100 px-8 ">
      <Navbar scrollToPrices={scrollToPrices} />
      <Banner />
      <Details />

      <div ref={pricesRef}>
      <Specifications/>
      </div>




    </div>
    <Footer/>
   </main>
  );
}

export default Home;
