import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need prior Bitcoin experience to use your tools?",
      answer: "Not at all! Our tools are designed for everyone, from complete beginners to advanced users. We provide comprehensive guides and support to help you get started.",
    },
    {
      question: "How secure are your wallet solutions?",
      answer: "Security is our top priority. We use industry-leading encryption, multi-signature support, and hardware wallet integration. Your keys remain in your control at all times.",
    },
    {
      question: "Can I get support after completing a course?",
      answer: "Absolutely! Our community and support team are always available to help. You'll also get access to exclusive resources and ongoing updates to stay current with Bitcoin developments.",
    },
    {
      question: "How does automated trading work?",
      answer: "Our bots execute dollar-cost averaging strategies automatically based on your preferences. You set the parameters, and the bot handles the rest, removing emotion from your Bitcoin investment strategy.",
    },
    {
      question: "What makes SatsCode different from other Bitcoin services?",
      answer: "We're Bitcoin-only, open-source, and community-driven. We believe in sovereignty, transparency, and building tools that empower individuals rather than creating dependencies.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white">
              Everything you need to know about SatsCode
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-card border-border/50 rounded-2xl px-8 py-2"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-accent hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
