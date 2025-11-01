import { Zap, Target, Compass } from "lucide-react";

const Story = () => {
  const storyPoints = [
    {
      icon: Zap,
      title: "The Why",
      content: "We believe in a world where individuals have absolute financial sovereignty. Bitcoin is the tool to achieve it.",
    },
    {
      icon: Target,
      title: "The What",
      content: "SatsCode builds the infrastructure and tools that make using Bitcoin seamless, secure, and powerful for everyone.",
    },
    {
      icon: Compass,
      title: "The Mission",
      content: "To accelerate the world's transition to a Bitcoin standard.",
    },
  ];

  return (
    <section id="story" className="py-24 bg-slate-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary-foreground">
            The SatsCode Philosophy
          </h2>
          
          <p className="text-xl text-white text-center mb-16 leading-relaxed">
            Every great movement starts with a belief. Ours is simple: financial freedom is a fundamental human right.
          </p>

          <div className="space-y-8">
            {storyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 items-start group bg-slate-card p-8 rounded-2xl border border-border/50 hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">
                      {point.title}
                    </h3>
                    <p className="text-lg text-primary-foreground/90 leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
