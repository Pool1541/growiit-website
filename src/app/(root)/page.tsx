import { About, Contact, Hero, Services, Blog } from "@/components/pages/home";
import { AditionalServices } from "@/components/pages/home/aditional-services";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services/>
      <AditionalServices />
      <Blog />
      <Contact />
      <WhatsappButton />
    </main>
  );
}
