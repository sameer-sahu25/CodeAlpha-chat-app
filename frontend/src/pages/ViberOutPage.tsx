import { Phone, Globe, CreditCard, Star } from "lucide-react";

const plans = [
  { region: "United States", rate: "$0.01/min", popular: false },
  { region: "United Kingdom", rate: "$0.02/min", popular: false },
  { region: "India", rate: "$0.01/min", popular: true },
  { region: "Philippines", rate: "$0.03/min", popular: true },
  { region: "Mexico", rate: "$0.02/min", popular: false },
  { region: "Brazil", rate: "$0.03/min", popular: false },
];

export default function ViberOutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Call any number<br />with <span className="text-primary">Viber Out</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Make low-cost calls to any landline or mobile number worldwide, even if they don't have Viber.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Get Viber Out Credits
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, step: "1", title: "Buy Credits", desc: "Purchase a calling plan or credit pack from the app." },
              { icon: Phone, step: "2", title: "Dial Any Number", desc: "Call landlines and mobiles just like a regular phone call." },
              { icon: Globe, step: "3", title: "Call Worldwide", desc: "Reach 200+ countries at low per-minute rates." },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Popular Calling Rates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <div key={plan.region} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{plan.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  {plan.popular && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                  <span className="text-sm font-semibold text-primary">{plan.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
