
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="involve" className="py-12 md:py-16 lg:py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Get Involved
          </h2>
          <p className="text-2xl text-white/80">
            Collaborate with governments, NGOs, and private sectors to advocate for universal access to menstrual products and WASH infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {involveItems.map((item, index) => (
            <Card
              key={index}
              className="bg-zinc-800/60 border-white/10 hover:border-white/20 transition-all rounded-2xl"
            >
              <CardContent className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                {/* Divider */}
                <div className="mt-2 h-px w-14 bg-white/40" />
                {/* Body */}
                <p className="mt-6 text-white/80 leading-relaxed">
                  {item.body}
                </p>
                </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12" >
          <Link to="/">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-500/90
                 px-12 py-6 rounded-full text-xl font-semibold
                 flex items-center gap-4 mx-auto shadow-lg transition">
              Donate
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

const involveItems = [
  {
    title: "Policy Engagement",
    body:
      "Collaborate with governments, NGOs, and private sectors to advocate for universal access to menstrual products and WASH infrastructure",
  },
  {
    title: "Community Outreach",
    body:
      "Design initiatives addressing the unique needs of vulnerable groups, including transgender menstruators and Indigenous communities",
  },
  {
    title: "Partnership Support",
    body:
      "Advocate for funding, sponsorship and partnership support to enable accelerated participation in sports, aviation, business and more",
  },
];

export default TestimonialsSection;
