import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' })
      return
    }
    setIsSubmitting(true)
    // Simulate submission — connect to a backend to actually send
    setTimeout(() => {
      toast({ title: 'Message sent!', description: "We'll get back to you soon." })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Let's Create Together
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Ready to Light Up the Screen?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tell us about your project and we'll get back to you with a plan to bring your vision to cinematic reality
          </p>
        </div>

        {/* Contact Form placeholder removed */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background clean-border rounded-3xl overflow-hidden elevated-shadow p-12 text-center">
            <h3 className="text-2xl font-black text-foreground mb-4">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-8">
              We're currently updating our contact system. Please check back soon!
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-accent-emerald rounded-full" />
              <span className="text-sm text-muted-foreground font-medium">Available now</span>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-blue rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Project Discussion</h4>
              <p className="text-muted-foreground text-sm">
                Share your vision and requirements with our team
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-emerald rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Custom Strategy</h4>
              <p className="text-muted-foreground text-sm">
                Get a tailored approach for your unique project
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-purple rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Next Steps</h4>
              <p className="text-muted-foreground text-sm">
                Clear timeline and roadmap to bring your idea to life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}