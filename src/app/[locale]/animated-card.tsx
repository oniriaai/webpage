"use client";
import React from 'react';
import { motion } from "motion/react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageSquare, Bot, Database, BarChart, Webhook } from 'lucide-react';

export default function AnimatedCard() {
  const t = useTranslations("AnimatedCard");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" as const, bounce: 0.4 } }
  };

  const nodes = [
    { name: "WhatsApp", icon: <MessageSquare className="w-5 h-5 text-green-500" /> },
    { name: "n8n", icon: <Webhook className="w-5 h-5 text-pink-500" /> },
    { name: "CRM", icon: <Database className="w-5 h-5 text-blue-500" /> },
    { name: "AI", icon: <Bot className="w-5 h-5 text-purple-500" /> },
    { name: "Analytics", icon: <BarChart className="w-5 h-5 text-orange-500" /> }
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center overflow-hidden">
      {/* Background glowing effects for premium feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show"
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
          ✨ Transformando Negocios con IA
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-9 bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
          {t('title')}
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
          {t('description')}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="rounded-2xl h-14 px-8 text-base group relative overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_var(--primary)]">
            <span className="relative z-10 flex items-center gap-2">
              {t('button1')} 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl h-14 px-8 text-base transition-all hover:bg-secondary/10">
            {t('button2')}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.3 }}
        className="relative z-10 perspective-[1000px] w-full"
      >
        <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl -z-10" />
        <Card className="rounded-3xl border-white/10 bg-background/60 backdrop-blur-xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-primary opacity-50"></div>
          <CardContent className="p-8 md:p-10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">Automation Flow Example</h3>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {nodes.map((node, i) => (
                <motion.div 
                  key={node.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="p-4 rounded-2xl bg-card border border-border/50 shadow-sm flex flex-col items-center justify-center gap-3 group transition-all hover:border-primary/50 hover:shadow-md cursor-default"
                >
                  <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-background transition-colors">
                    {node.icon}
                  </div>
                  <span className="font-medium text-sm text-foreground/80">{node.name}</span>
                </motion.div>
              ))}
              
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1.1, duration: 0.5 }}
                 className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center gap-2"
              >
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  <span className="text-xs font-medium text-primary/80">Processing...</span>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
