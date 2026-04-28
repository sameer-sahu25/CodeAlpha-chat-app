import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getSafeAvatarUrl } from "@/lib/utils";

const navLinks = [
  { label: "Download", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Communities", href: "/communities" },
  { label: "Security", href: "/security" },
  { label: "Viber Out", href: "/viber-out" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { authUser, logout } = useAuthStore();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Viber</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-0.5"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Actions */}
        <div className="hidden md:flex items-center gap-4">
          {authUser ? (
            <div className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={getSafeAvatarUrl(authUser.profilePic)} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {authUser.fullName.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" onClick={logout} className="text-muted-foreground hover:text-primary">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Link
              to="/"
              className="text-sm font-medium border border-primary text-primary rounded-full px-5 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Business
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium py-2 ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {authUser && (
            <button 
              onClick={() => { logout(); setOpen(false); }}
              className="w-full text-left text-sm font-medium py-2 text-red-500 flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
