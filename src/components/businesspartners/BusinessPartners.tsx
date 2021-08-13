import React from 'react'
import image1 from '../../assets/microsoft-80658_640.png'
import image2 from '../../assets/facebook-807588_640.png'
import image3 from '../../assets/follow-826033_640.png'
import image4 from '../../assets/icon-720944_640.png'
import { Col, Divider, Row, Typography } from 'antd'
import styles from './BusinessPartners.module.css'

const companies = [
  { src: image1, title: 'Microsoft' },
  { src: image2, title: 'Facebook' },
  { src: image3, title: 'Ins' },
  { src: image4, title: 'Youtube' }
]


const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation='left'>
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {companies.map((c, index) => (<Col span={6} key={`business-${index}`}>
          <img
            src={c.src}
            alt='business-partner'
            style={{
              width: "82%",
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
        </Col>))}
      </Row>
    </div>
  )
}
export default BusinessPartners