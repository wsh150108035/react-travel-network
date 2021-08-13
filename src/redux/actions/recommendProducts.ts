import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import axios from 'axios'

export const FETCH_RECOMMEND_PRODUCTS_START =
  "FETCH_RECOMMEND_PRODUCTS_START"; //正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS" //推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL =
  "FETCH_RECOMMEND_PRODUCTS_FAIL" //推荐信息api调用成功

interface FetchRecommendProductsStart {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductsSuccess {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS
  data: any
}

interface FetchRecommendProductsFail {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL
  data: any
}

export type RecommendProductAction =
  | FetchRecommendProductsStart
  | FetchRecommendProductsSuccess
  | FetchRecommendProductsFail;

const fetchRecommendProductStartActionCreator = (): FetchRecommendProductsStart => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START,
  }
}

const fetchRecommendProductSuccessActionCreator = (data: any): FetchRecommendProductsSuccess => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    data
  }
}

const fetchRecommendProductFaltActionCreator = (error: any): FetchRecommendProductsFail => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    data: error
  }
}
export const giveMeDataActionCreator = (): ThunkAction<void, RootState, unknown, RecommendProductAction> => async (dispatch, getState) => {
  dispatch(fetchRecommendProductStartActionCreator())
  try {
    const { data } = await axios
      .get("http://123.56.149.216:8080/api/productCollections")
    dispatch(fetchRecommendProductSuccessActionCreator(data))
  } catch (error) {
    dispatch(fetchRecommendProductFaltActionCreator(error.message))
  }
}