"use client";
import React from 'react'
import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";


function ContactForm() {
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);


    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
        createdAt: new Date().toISOString()
        };

        try{
        await new Promise((r)=>setTimeout(r,1200));

        await fetch("/api/contact",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(payload)
        });
        setSuccess(true);
        }catch(err){
        console.error(err);
        }finally{
        setLoading(false);
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="w-full max-w-2xl"
        >
            <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-10">
                <h1 className="text-3xl font-bold mb-2">Contact ONIRIASOLUTIONS</h1>
                <p className="mb-8">Tell us about the automation you want to build.</p>

                {success ? (
                <div className="flex flex-col items-center text-center gap-4 py-8">
                    <CheckCircle className="h-10 w-10 " />
                    <p className=" text-lg font-medium">Message sent successfully</p>
                    <p className="text-sm">Our team will get back to you shortly.</p>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input name="name" required placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" type="email" required placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input name="company" placeholder="Your company" />
                    </div>

                    <div className="space-y-2">
                    <Label htmlFor="message">Project Description</Label>
                    <Textarea
                        name="message"
                        required
                        placeholder="Describe the automation you want to build"
                        className="min-h-[120px]"
                    />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-2xl" disabled={loading}>
                    {loading ? "Sending message..." : "Send Message"}
                    </Button>
                </form>
                )}
            </CardContent>
            </Card>
        </motion.div>
    </div>
  )
}

export default ContactForm