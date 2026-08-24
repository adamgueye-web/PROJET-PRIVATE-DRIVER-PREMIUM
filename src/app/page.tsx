import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { Vehicle } from "@/components/sections/vehicle";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Destinations } from "@/components/sections/destinations";
import { Booking } from "@/components/sections/booking";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Pricing />
        <Vehicle />
        <HowItWorks />
        <Destinations />
        <Booking />
        <Faq />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
