import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import TopScrollBar from "@/components/TopScrollBar";

export default function Home() {
  return (
    <>
      <TopScrollBar />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
