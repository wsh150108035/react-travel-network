import { Footer } from 'antd/lib/layout/layout'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MyFooter: React.FC = () => {
  const { t } = useTranslation()
  return (
    < Footer>
      <Title level={3} style={{ textAlign: 'center' }}>
        {t('footer.detail')}
      </Title>
    </Footer>
  )
}
export default MyFooter