import React from 'react'
import { useTranslation } from 'react-i18next'

const En = () => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      {t('En.label')}
    </div>
  )
}

export default En