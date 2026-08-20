import Contact from "../sections/Contact";
import {
  Analytics,
  ClosingCta,
  CustomPricing,
  Engagement,
  Faq,
} from "../sections/Convert";
import { Hero, PositioningStrip } from "../sections/Hero";
import { Approach, Industries, LayerStack, Services, WhyZeal } from "../sections/Offer";

export default function Home() {
  return (
    <>
      <Hero />
      <PositioningStrip />
      <Services />
      <Industries />
      <Approach />
      <WhyZeal />
      <LayerStack />
      <Analytics />
      <Engagement />
      <CustomPricing />
      <Faq />
      <Contact />
      <ClosingCta />
    </>
  );
}
