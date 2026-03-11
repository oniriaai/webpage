import { Card, CardContent } from "@/components/ui/card";
import AnimatedCard from './animated-card';
import Schedule from './schedule';
import { Zap, Workflow, Bot, Globe } from "lucide-react";

export const metadata = {
  title: 'Oniria Solutions',
  description: 'Learn more about our company',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-be">
      
      <AnimatedCard/>
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
        <Schedule/>
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
