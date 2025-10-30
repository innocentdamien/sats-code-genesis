import { Users, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const CAT = () => {
  const pillars = [
    {
      icon: Users,
      title: "Community",
      description: "We build and support the Bitcoin ecosystem. Our public bots are a gift to the community.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Action",
      description: "We don't just talk, we build. Our tools are designed for action—automating, securing, and simplifying.",
      gradient: "from-accent to-orange-500",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Transparency and security are non-negotiable. Our code is open for review, and our practices are verifiable.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="cat" className="py-24 bg-slate-darker relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Community. Action. Trust.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These three pillars are the foundation of everything we do at SatsCode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-slate-card border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-center space-y-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CAT;
