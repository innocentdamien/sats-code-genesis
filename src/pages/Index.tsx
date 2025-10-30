import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import AccessPage from "@/components/AccessPage";
import Story from "@/components/Story";
import CAT from "@/components/CAT";
import Donation from "@/components/Donation";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <AccessPage />
      <Story />
      <CAT />
      <Donation />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
