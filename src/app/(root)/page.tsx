import { About, Contact, Hero, Services, Blog } from "@/components/pages/home";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services/>
      <Blog />
      <Contact />
      <WhatsappButton />
    </main>
  );
}
