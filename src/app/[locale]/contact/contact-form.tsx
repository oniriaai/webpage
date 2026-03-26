"use client";
import React from "react";
import { useActionState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Label } from "../../../components/ui/label";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Building2,
  MessageSquare,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { submitContact } from "./submit-contact";

type ActionState = { success?: boolean; error?: string } | null;

function ContactForm() {
  const t = useTranslations("Contact");
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    submitContact,
    null
  );

  const success = state?.success === true;
  const error = state?.error;

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background glowing circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
         />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl relative z-10"
      >
        <Card className="rounded-2xl shadow-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r text-white bg-clip-text">
                {t("title")}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                {t("description")}
              </p>
            </motion.div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center text-center gap-6 py-12"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-brand-500 to-brand-800 rounded-full blur-xl opacity-30" />
                  <CheckCircle
                    className="h-20 w-20 text-brand-500 relative z-10"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-2">
                    {t("sent.title")}
                  </p>
                  <p className="text-white/60">{t("sent.description")}</p>
                </div>
              </motion.div>
            ) : (
              <form action={formAction} className="space-y-6">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="space-y-6"
                >
                  {/* Name field */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="name"
                      className="text-white/80 text-sm font-medium"
                    >
                      {t("name")}
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={t("name")}
                        disabled={isPending}
                        className="pl-10 bg-black/40 border border-white/10 rounded-xl focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 text-white placeholder:text-white/30 transition-all duration-200"
                      />
                    </div>
                  </motion.div>

                  {/* Email field */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="email"
                      className="text-white/80 text-sm font-medium"
                    >
                      {t("email")}
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("email")}
                        disabled={isPending}
                        className="pl-10 bg-black/40 border border-white/10 rounded-xl focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 text-white placeholder:text-white/30 transition-all duration-200"
                      />
                    </div>
                  </motion.div>

                  {/* Company field */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="company"
                      className="text-white/80 text-sm font-medium"
                    >
                      {t("company")}
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                      <Input
                        id="company"
                        name="company"
                        placeholder={t("company")}
                        disabled={isPending}
                        className="pl-10 bg-black/40 border border-white/10 rounded-xl focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 text-white placeholder:text-white/30 transition-all duration-200"
                      />
                    </div>
                  </motion.div>

                  {/* Message field */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="message"
                      className="text-white/80 text-sm font-medium"
                    >
                      {t("project.title")}
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-white/40 pointer-events-none" />
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder={t("project.description")}
                        className="min-h-30 pl-10 bg-black/40 border border-white/10 rounded-xl focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 text-white placeholder:text-white/30 transition-all duration-200 resize-y"
                        disabled={isPending}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl bg-linear-to-r from-brand-500 to-brand-800 text-white font-semibold border-0 shadow-[0_0_20px_-4px_rgba(98,165,236,0.4)] hover:shadow-[0_0_30px_-4px_rgba(98,165,236,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("button.sending")}
                      </>
                    ) : (
                      t("button.pending")
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default ContactForm;