import { Bot, Shield, GraduationCap, TrendingUp, Lock, Zap } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Bot,
      title: "Automated Trading",
      description: "24/7 Bitcoin strategy execution",
    },
    {
      icon: TrendingUp,
      title: "Smart DCA",
      description: "Dollar-cost averaging made easy",
    },
    {
      icon: Shield,
      title: "Secure Wallets",
      description: "Military-grade Bitcoin security",
    },
    {
      icon: Lock,
      title: "Self-Custody",
      description: "Your keys, your Bitcoin",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master Bitcoin fundamentals",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in minutes",
    },
  ];

  return (
    <section className="py-24 bg-slate-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            What You'll Get
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to participate in the Bitcoin ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-slate-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-4 mx-auto shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
