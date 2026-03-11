"use client";
import React from 'react'
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

function AnimatedCard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Intelligent Automation for Modern Businesses
          </h2>
          <p className="text-lg mb-8">
            ONIRIASOLUTIONS builds powerful automation systems that connect
            your tools, streamline operations, and unlock scalable growth.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-2xl">Start Automating</Button>
            <Button size="lg" variant="outline" className="rounded-2xl">See How It Works</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.6}}
        >
          <Card className="rounded-2xl">
            <CardContent className="p-10">
              <p className="">Automation Flow Example</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4rounded-xl">WhatsApp</div>
                <div className="p-4rounded-xl">n8n</div>
                <div className="p-4rounded-xl">CRM</div>
                <div className="p-4rounded-xl">AI</div>
                <div className="p-4rounded-xl">Database</div>
                <div className="p-4rounded-xl">Analytics</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
  )
}

export default AnimatedCard
