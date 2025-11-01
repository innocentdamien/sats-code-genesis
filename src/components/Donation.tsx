import { Bitcoin, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Donation = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleDonateClick = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open('https://demo.lnbits.com/tipjar/NtZ3R7LWvSNuFHggqYw38f', '_blank');
      setIsRedirecting(false);
    }, 500);
  };

  return (
    <section id="donate" className="py-24 bg-slate-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-8 shadow-glow">
            <Bitcoin className="w-10 h-10 text-accent-foreground" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Fuel the Mission
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            SatsCode is committed to building a Bitcoin-powered future. Your donations directly support development, 
            server costs, and creating more open-source tools for the community.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <Card className="p-8 bg-slate-card border-border/50 hover:shadow-elevated transition-all duration-300 text-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Support SatsCode
                  </h3>
                  <p className="text-white/80">Help us build the Bitcoin future</p>
                </div>
                
                <Button
                  variant="bitcoin"
                  size="lg"
                  className="w-full text-lg py-4"
                  onClick={handleDonateClick}
                  disabled={isRedirecting}
                >
                  {isRedirecting ? (
                    <>
                      Redirecting...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Donate Now
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>

          <p className="text-sm text-primary-foreground/60 italic">
            All major donations and fund usage will be publicly acknowledged. Transparency is our promise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donation;
