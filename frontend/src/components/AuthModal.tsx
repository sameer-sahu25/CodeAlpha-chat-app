import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { login, signup, isLoggingIn, isSigningUp } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login({ email: formData.email, password: formData.password });
      } else {
        await signup(formData);
      }
      onClose();
      navigate("/chat");
    } catch (error) {
      // Error handled in store
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>{isLogin ? "Login to Viber" : "Create an Account"}</DialogTitle>
          <DialogDescription>
            {isLogin 
              ? "Enter your credentials to access your chats." 
              : "Join millions of people connecting for free."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="m@example.com" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isLoggingIn || isSigningUp}
          >
            {(isLoggingIn || isSigningUp) ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : null}
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <div className="text-center text-sm">
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
