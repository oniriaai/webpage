import React from 'react'
import Solutions from './solutions'
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  
  const { locale } = await params;
  // Get the translation function for the "Metadata" namespace
  const t = await getTranslations({ locale, namespace: 'Solutions.Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}



function Page() {
  return (
    <>
     <Solutions/> 
    </>
  )
}

export default Page
