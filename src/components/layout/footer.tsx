import React from 'react'
import { useTranslations } from 'next-intl'

function Footer() {
  const t = useTranslations('Navigation');
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between">
        <p>© {new Date().getFullYear()} ONIRIASOLUTIONS</p>
        <p>{t('Footer')}</p>
    </div>
  )
}

export default Footer
