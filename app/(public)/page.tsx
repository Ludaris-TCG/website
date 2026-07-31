import CTA from "@/components/landing/sections/CTA";
import Features from "@/components/landing/sections/Features";
import Hero from "@/components/landing/sections/Hero";
import Philosophy from "@/components/landing/sections/Philosophy";
import Promise from "@/components/landing/sections/Promise";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Philosophy />
      <Promise />
      <CTA />
    </>
  );
}
