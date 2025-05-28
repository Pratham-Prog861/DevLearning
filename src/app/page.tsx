import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyAmIDeveloping from "@/components/WhyAmIDeveloping";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 text-white">
      <Hero />
      <Features />
      <WhyAmIDeveloping />
      <Footer />
    </div>
  );
}
