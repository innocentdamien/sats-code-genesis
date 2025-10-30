import { Twitter, Github, Mail } from "lucide-react";
import satscodeLogo from "@/assets/satscode-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-darker text-primary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={satscodeLogo} 
                alt="SatsCode Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                SatsCode
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Building the Bitcoin future, one block at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("access")}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Tools
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("story")}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Story
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("blog")}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("donate")}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 SatsCode. All rights reserved. Building sovereignty, one satoshi at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
