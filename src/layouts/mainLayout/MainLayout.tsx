import React from 'react'
import MyFooter from '../../components/myFooter/MyFooter'
import MyHeader from '../../components/myHeader/MyHeader'
import styles from './MainLayout.module.css'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <MyHeader />
      <div className={styles['page-content']}>{children}</div>
      <MyFooter />
    </>
  )
}