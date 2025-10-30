import { Bot, Shield, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const ValueProposition = () => {
  const values = [
    {
      icon: Bot,
      title: "Automated Trading Bots",
      description: "Intelligent bots that execute your Bitcoin strategy 24/7, so you never miss an opportunity.",
    },
    {
      icon: Shield,
      title: "Secure Wallet Solutions",
      description: "Military-grade security for your Bitcoin. Your keys, your coins, your sovereignty.",
    },
    {
      icon: GraduationCap,
      title: "Bitcoin-Only Education",
      description: "Deep-dive resources and community support to master Bitcoin fundamentals and beyond.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-6 shadow-glow">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
