import ConstructionHero from "@/components/ConstructionHero";
import AboutMekark from "@/components/AboutMekark";
import WhyChooseRCC from "@/components/WhyChooseRCC"; 
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseMekark from "@/components/WhyChooseMekark";
import ProblemsVsSolutions from "@/components/ProblemsVsSolutions";
import ConstructionProcess from "@/components/ConstructionProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import TrustedClientSection from "@/components/TrustedClientsection";

export default function Page() {
  return (
    <main>
      <ConstructionHero />
      <TrustedClientSection  />
      <AboutMekark />
      <WhyChooseRCC />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseMekark />
      <ProblemsVsSolutions />
      <ConstructionProcess />
      <TestimonialsSection /> 
      <FaQSection />  
      <CTASection />
    </main>
  );
}