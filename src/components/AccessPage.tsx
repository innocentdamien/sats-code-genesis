import BotCard from "./BotCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AccessPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="access" className="py-24 bg-slate-darker relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Your Bitcoin Toolkit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A curated suite of tools to enhance your Bitcoin journey. From community engagement to automated execution.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("story")}
          >
            Learn Our Story
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <BotCard
            name="BlockPulse"
            tagline="Discord BTC Updates"
            description="Your all-in-one Discord companion for Bitcoin. Features live price feeds, news from Bitcoin Magazine, and automated member engagement (welcomes, reminders)."
            commandExample="!ping"
            platform="Discord"
            buttonText="Add to Discord"
            redirectLink="https://discord.com/oauth2/authorize?client_id=1419373752839307304"
          />

          <BotCard
            name="BoomBox"
            tagline="Discord Music Bot"
            description="Manage and play music in your Discord voice channels. Keep your community engaged with a high-quality audio experience."
            platform="Discord"
            buttonText="Add to Discord"
            redirectLink="#"
          />

          <BotCard
            name="SatsCode Wallet"
            tagline="Your Sovereign Bitcoin Vault"
            description="Non-custodial Bitcoin wallet with advanced security features. Your keys, your Bitcoin, your future."
            platform="iOS & Android"
            buttonText="Join Waitlist"
            redirectLink="#"
            comingSoon={true}
          />

          <BotCard
            name="Trading Terminal"
            tagline="Automated DCA & Strategies"
            description="Execute sophisticated Bitcoin trading strategies with our automated terminal. Dollar-cost averaging, smart alerts, and more."
            platform="Web App"
            buttonText="Join Waitlist"
            redirectLink="#"
            comingSoon={true}
          />
        </div>
      </div>
    </section>
  );
};

export default AccessPage;
