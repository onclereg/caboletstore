import ContactSection from "@/components/contact";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full pt-[15vh]">
      <Hero/>
      <Hero2/>
      <ContactSection/>
    </div>
  );
}
