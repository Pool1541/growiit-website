import { About, Contact, Hero, Services } from "@/components/pages/home";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services/>
      <Contact />
      <WhatsappButton />
    </>
  );
}
