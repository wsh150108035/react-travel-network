import React, { Component } from 'react'
import { Col, Row, Typography, Spin } from 'antd';
import SideMenu from '../../components/sideMenu/SideMenu';
import MyCarousel from '../../components/myCarousel/MyCarousel';
import sideImage from '../../assets/sider_2019_12-09.png';
import sideImage2 from '../../assets/sider_2019_02-04.png';
import sideImage3 from '../../assets/sider_2019_02-04-2.png';
import ProductCollection from '../../components/productCollection/ProductCollection';
import BusinessPartners from '../../components/businesspartners/BusinessPartners';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RootState } from '../../redux/store'
import {
  giveMeDataActionCreator
} from "../../redux/actions/recommendProducts"
import { MainLayout } from '../../layouts/mainLayout/MainLayout';

const mapStateToProps = (state: RootState) => {
  const { loading, error, productlist } = state.recommendProducts
  return {
    loading,
    error,
    productlist
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator())
    }
  }
}
type PropsType =
  WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>


class HomePageComponent extends Component<PropsType> {

  componentDidMount() {
    const { giveMeData } = this.props
    giveMeData()
  }

  render() {
    const { t, productlist, loading, error } = this.props
    if (loading) {
      return <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: "100%"
        }}
      />
    }
    if (error) {
      return <div>网站出错：{error}</div>
    }
    return (
      <MainLayout>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <MyCarousel />
          </Col>
        </Row>
        {/* 爆款推荐部分 */}
        <ProductCollection
          title={<Typography.Title level={3} type="warning">{t('home_page.hot_recommended')}</Typography.Title>}
          sideImage={sideImage}
          products={productlist[0].touristRoutes}
        />
        {/* 新品上市部分 */}
        <ProductCollection
          title={<Typography.Title level={3} type="danger">{t('home_page.new_arrival')}</Typography.Title>}
          sideImage={sideImage2}
          products={productlist[1].touristRoutes}
        />
        {/* 国内推荐游 */}
        <ProductCollection
          title={<Typography.Title level={3} type="success">{t('home_page.domestic_travel')}</Typography.Title>}
          sideImage={sideImage3}
          products={productlist[2].touristRoutes}
        />
        <BusinessPartners />
      </MainLayout>
    )
  }
}
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent))
