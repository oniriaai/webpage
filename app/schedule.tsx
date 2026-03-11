"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";


function Schedule() {
    const router = useRouter();

    const onclickHandler = () => {
        router.push('/contact');
        };

  return (
    <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h3>
          <p className="mb-8">
            Transform repetitive workflows into intelligent automated systems.
          </p>
          <Button size="lg" className="rounded-2xl" onClick={onclickHandler}>Schedule a Consultation</Button>
    </div>
  )
}

export default Schedule
