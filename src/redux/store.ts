import language from './reducers/language';
import recommendProducts from './reducers/recommendProducts'
import productDataSlice from './productDetail/slice';
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import productSearchSlice from "./productSearch/slice"
import { userSlice } from "./user/slice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import shoppingCartSlice from './shoppingCart/slice';
import orderSlice from './order/slice'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ["user"]
}

const rootReducer = combineReducers({
  language,
  recommendProducts,
  productDetail: productDataSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  order: orderSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
// redux 创建store
// const store = createStore(rootReducer, applyMiddleware(thunk))

// redux-toolkit 创建store
const store = configureStore({
  reducer: persistedReducer,
  devTools: true
})


const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor }