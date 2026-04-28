import { Users, Send, Shield, Star, Trash2, Ban, TrendingUp, CheckCircle } from "lucide-react";

const leftFeatures = [
  { icon: Users, title: "Engage New Members", desc: "New members see the chat history and join the conversation." },
  { icon: Shield, title: "Keep Members' Privacy", desc: "All community members' phone numbers are hidden." },
  { icon: Star, title: "Moderate the Discussion", desc: "Add superadmins and admins to help you manage your community." },
  { icon: TrendingUp, title: "Grow Your Community", desc: "Share your community link and watch it grow organically." },
];

const rightFeatures = [
  { icon: Send, title: "Manage the Conversation", desc: "Decide whether your members can post in the chat." },
  { icon: Trash2, title: "Delete Unwanted Messages", desc: "Keep your conversations safe and on topic." },
  { icon: Ban, title: "Ban Users", desc: "Remove members who violate your community rules." },
  { icon: CheckCircle, title: "Encourage Safe Chats", desc: "Built-in tools to maintain respectful conversations." },
];

export default function CommunitiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Getting Started With<br />Communities
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Unlimited members, endless growth possibilities, more admin controls. A brand-new group chat experience.
          </p>
        </div>
      </section>

      {/* Features layout */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Left */}
          <div className="flex-1 space-y-10">
            {leftFeatures.map((f) => (
              <div key={f.title} className="flex gap-4 items-start text-right flex-row-reverse lg:flex-row-reverse">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="shrink-0 mx-auto">
            <div className="w-56 h-[440px] bg-gradient-to-b from-primary to-viber-purple-light rounded-[2.5rem] p-2.5 shadow-xl">
              <div className="w-full h-full bg-background rounded-[2rem] flex flex-col">
                <div className="bg-primary rounded-t-[2rem] p-4 text-center">
                  <p className="text-primary-foreground text-sm font-medium">🍔🍟🧁 Foodie Addicts</p>
                  <p className="text-primary-foreground/70 text-xs">15,364 members</p>
                </div>
                <div className="flex-1 p-4 space-y-3">
                  <div className="text-xs text-muted-foreground font-medium">Anton</div>
                  <div className="bg-muted rounded-xl p-3 text-xs text-foreground">Just tried this amazing burger place! 🍔</div>
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span>❤️ 6.6K</span>
                    <span>💬 234</span>
                  </div>
                  <div className="bg-secondary rounded-xl p-3 text-xs text-secondary-foreground mt-2">Where is it? I need to try! 😋</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 space-y-10">
            {rightFeatures.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
