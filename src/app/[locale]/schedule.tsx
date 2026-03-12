"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from "../../components/ui/button";
import { useTranslations } from 'next-intl';


function Schedule() {
    const router = useRouter();
    const t = useTranslations('Schedule');
    const onclickHandler = () => {
        router.push('/contact');
        };

  return (
    <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-6">{t('title')}</h3>
          <p className="mb-8">
            {t('description')}
          </p>
          <Button size="lg" className="rounded-2xl" onClick={onclickHandler}>{t('button')}</Button>
    </div>
  )
}

export default Schedule
