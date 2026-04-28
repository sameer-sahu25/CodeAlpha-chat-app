import { MessageSquare, Phone, Video, Users, Smile, Pencil, Clock, Monitor } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Send Messages", desc: "Send texts, photos, videos, or files. Record quick-sending voice and instant video messages.", color: "text-primary" },
  { icon: Phone, title: "Voice & Video Calls", desc: "Make crystal clear calls and switch to video easily.", color: "text-primary" },
  { icon: Users, title: "Group Chats & Calls", desc: "Family meeting, group hangout, or yoga class—everything can happen on group chat.", color: "text-primary" },
  { icon: Smile, title: "Stickers & GIFs", desc: "Communicate genuinely, playfully, and expressively with endless stickers and GIFs.", color: "text-primary" },
  { icon: Pencil, title: "Delete & Edit Messages", desc: "Take back what you didn't mean to send—from all members of the chat.", color: "text-primary" },
  { icon: Clock, title: "Disappearing Messages", desc: "Add a self-destruct timer to messages for extra privacy.", color: "text-primary" },
];

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Authentic conversations,<br />the way you like them
          </h1>
          <p className="text-lg text-muted-foreground">
            Deepen your relationships with a wide range of communication features.
          </p>
        </div>
      </section>

      {/* Features grid with phone mockup */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left features */}
          <div className="flex-1 space-y-10">
            {features.slice(0, 3).map((f) => (
              <div key={f.title} className="flex gap-4 items-start text-right lg:text-right flex-row-reverse lg:flex-row-reverse">
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
          <div className="shrink-0">
            <div className="w-56 h-[440px] bg-gradient-to-b from-primary to-viber-purple-light rounded-[2.5rem] p-2.5 shadow-xl">
              <div className="w-full h-full bg-background rounded-[2rem] flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div className="px-5 w-full space-y-2.5">
                  <div className="bg-secondary rounded-xl rounded-tl-sm p-2.5 text-xs text-secondary-foreground">
                    You have to see the cute puppy I adopted 🐕
                  </div>
                  <div className="bg-primary/10 rounded-xl rounded-tr-sm p-2.5 text-xs text-foreground ml-auto w-fit">
                    OMG send pics!! 😍
                  </div>
                  <div className="bg-secondary rounded-xl rounded-tl-sm p-2.5 text-xs text-secondary-foreground">
                    📸 🐶
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="flex-1 space-y-10">
            {features.slice(3).map((f) => (
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

      {/* Multiplatform */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-viber-purple-light/10 rounded-2xl flex items-center justify-center">
              <Monitor className="w-20 h-20 text-primary/40" />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Multiplatform.<br />Always Synced.</h2>
            <p className="text-muted-foreground">
              Available on mobile, tablet, desktop, and smartwatch. Your conversations sync across all your devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
