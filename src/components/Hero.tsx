import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import cryptoBtc from "@/assets/crypto-3d-btc.png";
import cryptoEth from "@/assets/crypto-3d-eth.png";
import cryptoWallet from "@/assets/crypto-3d-wallet.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-darker"
    >
      {/* Gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      
      {/* Floating 3D crypto icons */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={cryptoBtc}
          alt=""
          className="absolute top-1/4 right-[15%] w-32 h-32 md:w-48 md:h-48 animate-float opacity-90"
          style={{ 
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        <img 
          src={cryptoEth}
          alt=""
          className="absolute top-1/3 right-[8%] w-24 h-24 md:w-36 md:h-36 animate-float opacity-80"
          style={{ 
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '1s'
          }}
        />
        <img 
          src={cryptoWallet}
          alt=""
          className="absolute bottom-1/4 right-[20%] w-28 h-28 md:w-40 md:h-40 animate-float opacity-85"
          style={{ 
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        <div className="absolute top-1/2 right-[10%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent/20 blur-2xl animate-pulse" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
      `}</style>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 inline-flex items-center gap-2 mb-8">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground">
              Secure. Automated. Bitcoin-Focused.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Building Your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Bitcoin Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
            Automate. Educate. Participate in the Bitcoin revolution with powerful tools built for sovereignty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("access")}
            >
              Explore Our Tools
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/20 text-black hover:text-primary-foreground hover:bg-primary-foreground/10 hover:border-accent"
              onClick={() => scrollToSection("story")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
