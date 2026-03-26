"use client";
import React from 'react'
import { useActionState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Label } from "../../../components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from 'next-intl';
import { submitContact } from './submit-contact';


// Define the shape of the action state
type ActionState = { success?: boolean; error?: string } | null;

function ContactForm() {
    const t = useTranslations("Contact");

    // useActionState returns [state, formAction, isPending]
    const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    submitContact,
    null);

    // Determine if submission succeeded
    const success = state?.success === true;
    const error = state?.error;

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
                <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
                <p className="mb-8">{t('description')}</p>

                {success ? (
                <div className="flex flex-col items-center text-center gap-4 py-8">
                    <CheckCircle className="h-10 w-10 " />
                    <p className=" text-lg font-medium">{t('sent.title')}</p>
                    <p className="text-sm">{t('sent.description')}</p>
                </div>
                ) : (
                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">{t('name')}</Label>
                        <Input name="name" 
                            required 
                            placeholder={t('name')} 
                            disabled={isPending}
                            />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">{t('email')}</Label>
                        <Input name="email" 
                            type="email" 
                            required   
                            placeholder={t('email')} 
                            disabled={isPending}
                            />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">{t('company')}</Label>
                        <Input name="company" 
                            placeholder={t('company')} 
                            disabled={isPending}
                            />
                    </div>

                    <div className="space-y-2">
                    <Label htmlFor="message">{t('project.title')}</Label>
                    <Textarea
                        name="message"
                        required
                        placeholder={t('project.description')}
                        className="min-h-30"
                        disabled={isPending}
                    />
                    </div>


                        {error && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{error}</span>
                    </div>
                    )}

                    <Button type="submit" 
                        size="lg" 
                        className="w-full rounded-2xl bg-brand-500 hover:from-brand-500 hover:to-brand-800 text-white border-0 shadow-[0_0_20px_-4px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_-4px_rgba(124,58,237,0.6)] transition-all duration-300 group" 
                        disabled={isPending}
                        >
                        {isPending ? t('button.sending') : t('button.pending')}
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