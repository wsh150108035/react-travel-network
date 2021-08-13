import React from "react";
import styles from "./shoppingCart.module.css";
import { MainLayout } from '../../layouts/mainLayout/MainLayout';
import { Row, Col, Affix } from "antd";
import { useSelector } from "../../redux/hooks"
import { useDispatch } from "react-redux"
import { clearShoppingCartItem, checkout } from '../../redux/shoppingCart/slice'
import ProductList from "../../components/productList/ProductList";
import { PaymentCard } from "../../components/paymentCard/PaymentCard";
import { useHistory } from "react-router-dom"

export const ShoppingCart: React.FC = (props) => {

  const loading = useSelector(state => state.shoppingCart.loading)
  const shoppingCartItems = useSelector(state => state.shoppingCart.items)
  const jwt = useSelector(state => state.user.tocken) as string
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            <ProductList data={shoppingCartItems.map(s => s.touristRoute)} />
          </div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              <PaymentCard
                loading={loading}
                originalPrice={shoppingCartItems
                  .map((s) => (s.originalPrice))
                  .reduce((a: number, b: number) => a + b, 0)
                }
                price={shoppingCartItems
                  .map((s) => (s.originalPrice *
                    (s.discountPresent ? s.discountPresent : 1)))
                  .reduce((a: number, b: number) => a + b, 0)
                }
                onCheckout={() => {
                  if (shoppingCartItems.length <= 0) { return }
                  dispatch(checkout(jwt))
                  history.push("/placeOrder")
                }}
                onShoppingCartClear={() => {
                  dispatch(clearShoppingCartItem({ jwt, itemIds: shoppingCartItems.map(s => s.id) }))
                }}
              />
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
