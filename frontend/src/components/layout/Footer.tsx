import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Viber</span>
          </div>
          <p className="text-sm text-muted-foreground">Free and secure calls and messages to anyone, anywhere.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Product</h4>
          <div className="space-y-2">
            {["Features", "Communities", "Security", "Viber Out"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(" ", "-")}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Company</h4>
          <div className="space-y-2">
            {["About", "Blog", "Careers", "Press"].map((item) => (
              <span key={item} className="block text-sm text-muted-foreground">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Download</h4>
          <div className="space-y-2">
            {["Android", "iPhone", "Windows", "Mac", "Linux"].map((item) => (
              <span key={item} className="block text-sm text-muted-foreground">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Viber Media S.à r.l. All rights reserved.
      </div>
    </footer>
  );
}
