import AdditionalServices from "@/components/AdditionalServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Products from "@/components/Products";
import Suggestions from "@/components/Suggestions";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <OurStory />
      <Suggestions />
      <AdditionalServices />
    </>
  );
}
