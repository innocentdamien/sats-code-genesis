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
    <Card className="p-6 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border relative overflow-hidden group">
      {comingSoon && (
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
          Coming Soon
        </Badge>
      )}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-card-foreground mb-2">{name}</h3>
          <p className="text-accent font-medium">{tagline}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {commandExample && (
          <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <code className="text-foreground">{commandExample}</code>
          </div>
        )}

        <div className="flex items-center justify-between pt-4">
          <Badge variant="outline" className="border-accent/30 text-accent">
            {platform}
          </Badge>
          
          <Button
            variant="bitcoin"
            onClick={handleClick}
            disabled={comingSoon}
            className="group-hover:shadow-glow"
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
