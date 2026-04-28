import { Lock, ShieldCheck, Eye, KeyRound, UserX, FileCheck } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "End-to-End Encryption", desc: "All private calls and one-on-one messages are protected with end-to-end encryption by default. No one can read your messages—not even us." },
  { icon: ShieldCheck, title: "Hidden Number", desc: "Your phone number stays hidden in communities and group chats. Communicate freely without sharing personal info." },
  { icon: Eye, title: "Disappearing Messages", desc: "Set a self-destruct timer so messages vanish after being read. Perfect for sensitive conversations." },
  { icon: KeyRound, title: "Authentication", desc: "Verify the identity of people you chat with using authentication keys. Know exactly who you're talking to." },
  { icon: UserX, title: "Block & Report", desc: "Easily block unwanted contacts and report spam or abusive behavior to keep your experience safe." },
  { icon: FileCheck, title: "Data Protection", desc: "We follow strict data protection standards and comply with international regulations like GDPR." },
];

export default function SecurityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Privacy, Our Priority
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We believe everyone deserves privacy. That's why security is built into every message, call, and shared moment.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Security is not optional</h2>
          <p className="text-muted-foreground">
            Every message and call on Viber is protected. No extra steps, no settings to enable—it just works.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Learn More About Security
          </button>
        </div>
      </section>
    </div>
  );
}
