import React, { useEffect } from 'react';
import styles from './App.module.css'
import { HomePage } from './pages/home/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './pages/signIn/SignIn';
import Register from './pages/register/Register';
import Detail from './pages/detail/Detail';
import Search from './pages/search/Search';
import { Redirect } from 'react-router-dom';
import { useSelector } from './redux/hooks';
import { ShoppingCart } from './pages/shoppingCart/shoppingCart';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/slice';
import { PlaceOrder } from './pages/placeOrder/PlaceOrder';


const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) => {
    return isAuthenticated ? (React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    )
  }
  return <Route render={routeComponent} {...rest} />
}

const App: React.FC = () => {
  const jwt = useSelector(state => state.user.tocken)
  const dispathch = useDispatch();
  useEffect(() => {
    if (jwt) {
      dispathch(getShoppingCart(jwt))
    }
  }, [jwt])
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:touristRouteId" component={Detail} />
          <Route path="/search/:keywords?" component={Search} />
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path='/shoppingCart' component={ShoppingCart} />
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path='/placeOrder' component={PlaceOrder} />
          <Route render={() => (<h1>404 not found 页面被黑洞吸走了</h1>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
