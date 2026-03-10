"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Zap, Workflow, Bot, Globe } from "lucide-react";

// export const metadata = {
//   title: 'Oniria Solutions',
//   description: 'Learn more about our company',
// };

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-be">
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

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-12 text-center">Automation Capabilities</h3>
        <div className="grid md:grid-cols-4 gap-8">
          <Feature icon={<Workflow/>} title="Workflow Automation" description="Connect apps and automate complex processes."/>
          <Feature icon={<Bot/>} title="AI Agents" description="Deploy AI assistants that handle tasks automatically."/>
          <Feature icon={<Zap/>} title="Real-time Integrations" description="Sync data across your entire tech stack instantly."/>
          <Feature icon={<Globe/>} title="Global Infrastructure" description="Secure and scalable cloud architecture."/>
        </div>
      </section>

      <section className="py-24 border-t">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h3>
          <p className="mb-8">
            Transform repetitive workflows into intelligent automated systems.
          </p>
          <Button size="lg" className="rounded-2xl">Schedule a Consultation</Button>
        </div>
      </section>
    </div>
  );
}

function Feature({icon,title,description}:{icon:React.ReactNode,title:string,description:string}){
  return (
    <Card className=" rounded-2xl hover:border-slate-700 transition">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="">{description}</p>
      </CardContent>
    </Card>
  )
}
