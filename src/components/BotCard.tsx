import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Terminal } from "lucide-react";

interface BotCardProps {
  name: string;
  tagline: string;
  description: string;
  commandExample?: string;
  platform: string;
  buttonText: string;
  redirectLink: string;
  comingSoon?: boolean;
}

const BotCard = ({
  name,
  tagline,
  description,
  commandExample,
  platform,
  buttonText,
  redirectLink,
  comingSoon = false,
}: BotCardProps) => {
  const handleClick = () => {
    if (!comingSoon && redirectLink) {
      window.open(redirectLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card className="p-8 bg-slate-card border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
      {comingSoon && (
        <Badge className="absolute top-6 right-6 bg-gradient-accent text-accent-foreground border-0">
          Coming Soon
        </Badge>
      )}

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="space-y-6 relative z-10">
        <div>
          <h3 className="text-3xl font-bold text-card-foreground mb-2">{name}</h3>
          <p className="text-accent font-semibold text-lg">{tagline}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed text-base">{description}</p>

        {commandExample && (
          <div className="bg-slate-darker/50 rounded-xl p-4 font-mono text-sm flex items-center gap-3 border border-border/30">
            <Terminal className="w-5 h-5 text-accent flex-shrink-0" />
            <code className="text-primary-foreground">{commandExample}</code>
          </div>
        )}

        <div className="flex items-center justify-between pt-4">
          <Badge variant="outline" className="border-accent/40 text-accent bg-accent/5 px-4 py-1.5">
            {platform}
          </Badge>
          
          <Button
            variant="bitcoin"
            onClick={handleClick}
            disabled={comingSoon}
            className="group-hover:shadow-glow"
            size="lg"
          >
            {buttonText}
            {!comingSoon && <ExternalLink className="ml-2 w-4 h-4" />}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BotCard;
