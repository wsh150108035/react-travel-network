import userEvent from '@testing-library/user-event'
import { Col, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CheckOutCard } from '../../components/checkOutCard/CheckOutCard'
import { PaymentForm } from '../../components/paymentForm/PaymentForm'
import { MainLayout } from '../../layouts/mainLayout/MainLayout'
import { useSelector } from '../../redux/hooks'
import { placeOrder } from '../../redux/order/slice'

export const PlaceOrder: React.FC = (props: any) => {
  const jwt = useSelector(state => state.user.tocken) as string
  const loading = useSelector(state => state.order.loading)
  const order = useSelector(state => state.order.currentOrder)
  const dispatch = useDispatch()
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          <CheckOutCard
            loading={loading}
            order={order}
            onCheckout={() => {
              dispatch(placeOrder({ jwt, orderId: order.id }))
            }}
          />
        </Col>
      </Row>

    </MainLayout>
  )
}
