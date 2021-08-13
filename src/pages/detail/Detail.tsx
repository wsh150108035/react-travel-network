import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { Col, Row, Spin, DatePicker, Divider, Anchor, Menu, Button } from 'antd'
import styles from './Detail.module.css'
import ProductIntro from '../../components/productintro/ProductIntro';
import Title from 'antd/lib/typography/Title';
import ProductComments from '../../components/productComments/productComments';
import { commentMockData } from './mockup';
import productDataSlice, { getProductDetail } from '../../redux/productDetail/slice';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { MainLayout } from '../../layouts/mainLayout/MainLayout';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { addShoppingCartItem } from '../../redux/shoppingCart/slice';

const { Link } = Anchor
const { Item } = Menu



interface MatchParams {
  touristRouteId: string;
}

const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const { touristRouteId } = useParams<MatchParams>();
  // const [loading, setLoading] = useState<boolean>(true)
  // const [product, setProduct] = useState<any>(null)
  // const [error, setError] = useState<string | null>(null)
  const loading = useSelector(state => state.productDetail.loading)
  const error = useSelector(state => state.productDetail.error)
  const product = useSelector(state => state.productDetail.data)
  const jwt = useSelector(state => state.user.tocken) as string
  const shoppingCartLoading = useSelector(state => state.shoppingCart.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(touristRouteId))
  }, [])

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

  const { RangePicker } = DatePicker

  return (
    <MainLayout>
      {/* 产品简介 与 日期选择 */}
      <div className={styles['product-intro-container']}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={product.touristRoutePictures.map((p: any) => p.url)}
            />
          </Col>
          <Col span={11}>
            <Button
              style={{ marginTop: 50, marginBottom: 30, display: "block" }}
              type="primary"
              danger
              loading={shoppingCartLoading}
              onClick={() => {
                dispatch(addShoppingCartItem({ jwt, touristRouteId: product.id }))
              }}
            >
              <ShoppingCartOutlined />
              放入购物车
            </Button>
            <RangePicker open style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>
      {/* 锚点菜单 */}
      <Anchor className={styles['product-detail-anchor']}>
        <Menu mode='horizontal'>
          <Item key="1">
            <Link href="#feature" title="产品特色" />
          </Item>
          <Item key="3">
            <Link href="#fees" title="费用" />
          </Item>
          <Item key="4">
            <Link href="#notes" title="预订须知" />
          </Item>
          <Item key="5">
            <Link href="#comments" title="用户评价" />
          </Item>
        </Menu>
      </Anchor>
      {/* 产品特色 */}
      <div id="feature" className={styles['product-detail-container']}>
        <Divider orientation={'center'}>
          <Title level={3}>产品特色</Title>
        </Divider>
        <div dangerouslySetInnerHTML={{ __html: product.features }} style={{ margin: 50 }}></div>
      </div>
      {/* 费用 */}
      <div id="fees" className={styles['product-detail-container']}>
        <Divider orientation={'center'}>
          <Title level={3}>费用</Title>
        </Divider>
        <div dangerouslySetInnerHTML={{ __html: product.fees }} style={{ margin: 50 }}></div>
      </div>
      {/* 预订须知 */}
      <div id='notes' className={styles['product-detail-container']}>
        <Divider orientation={'center'}>
          <Title level={3}>预订须知</Title>
        </Divider>
        <div dangerouslySetInnerHTML={{ __html: product.notes }} style={{ margin: 50 }}></div>
      </div>
      {/* 商品评价 */}
      <div id='comments' className={styles['product-detail-container']}>
        <Divider orientation={'center'}>
          <Title level={3}>用户评价</Title>
        </Divider>
        <div style={{ margin: 40 }}>
          <ProductComments data={commentMockData} />
        </div>
      </div>
    </MainLayout>
  )
}
export default Detail