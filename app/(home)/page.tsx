import Footer7 from "@/components/blocks/footer7";
import Hero10 from "@/components/blocks/hero10";
import Testimonial3 from "@/components/blocks/testimonial3";
import { CommandMenu } from "@/components/command-menu";
import ChatGPTCarousel from "@/components/style-ui/chatgpt-carousel";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero10 />
      <Testimonial3 />
      <ChatGPTCarousel />
      <Footer7 />
      <CommandMenu />
    </>
  );
}
