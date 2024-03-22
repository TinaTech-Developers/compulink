"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import HomeCarousel from "@/components/HomeCarousel";
import Layout from "@/components/Layout";
import Parnters from "@/components/Partners";
import Promotion from "@/components/Promotion";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  // console.log(`Hello ${process.env.MONGODB_URI}`);
  return (
    <Layout>
      <main className="pt-20 ">
        <Hero />
        <Parnters />
        <About />
        <Work />
        <Service />
        <Testimonials />
        <HomeCarousel />
        <Promotion />
      </main>
    </Layout>
  );
}
