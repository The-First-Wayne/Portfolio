import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

interface ContactDialogProps {
  children: React.ReactNode
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "I'll get back to you as soon as possible.",
        })
        form.reset()
        setOpen(false)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-surface-container border-outline/20 text-on-surface">
        <DialogHeader>
          <DialogTitle className="font-headline-md text-2xl">Start a Project</DialogTitle>
          <DialogDescription className="font-body-md text-on-surface-variant">
            Fill out the form below and I'll get back to you with next steps.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-on-surface">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-surface border-outline-variant text-on-surface focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage className="text-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-on-surface">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="bg-surface border-outline-variant text-on-surface focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage className="text-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-on-surface">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="resize-none bg-surface border-outline-variant text-on-surface focus-visible:ring-primary min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-error" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary text-on-primary-container hover:bg-primary-fixed-dim rounded-none glow-hover font-label-sm uppercase tracking-widest text-black">
              Send Message
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
