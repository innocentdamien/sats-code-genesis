import { Bitcoin, Copy, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Donation = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const addresses = [
    {
      name: "SatsCode Dev Fund",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      network: "Bitcoin Mainnet",
    },
    {
      name: "Lightning Network",
      address: "lnbc10u1p3pj257pp5qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
      network: "Lightning",
    },
  ];

  const copyToClipboard = (address: string, name: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast.success(`${name} address copied!`);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <section id="donate" className="py-24 bg-slate-darker text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-8 shadow-glow">
            <Bitcoin className="w-10 h-10 text-accent-foreground" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fuel the Mission
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed">
            SatsCode is committed to building a Bitcoin-powered future. Your donations directly support development, 
            server costs, and creating more open-source tools for the community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {addresses.map((addr, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:shadow-elevated transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {addr.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{addr.network}</p>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 break-all font-mono text-sm text-foreground">
                    {addr.address}
                  </div>
                  
                  <Button
                    variant="bitcoin"
                    size="sm"
                    className="w-full"
                    onClick={() => copyToClipboard(addr.address, addr.name)}
                  >
                    {copiedAddress === addr.address ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Address
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
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
