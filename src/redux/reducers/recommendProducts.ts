import { FETCH_RECOMMEND_PRODUCTS_FAIL, FETCH_RECOMMEND_PRODUCTS_START, FETCH_RECOMMEND_PRODUCTS_SUCCESS, RecommendProductAction } from '../actions/recommendProducts'

interface RecommendProductsState {
  productlist: any[]
  loading: boolean
  error: string | null
}

const defaultState: RecommendProductsState = {
  loading: true,
  error: null,
  productlist: []
}

export default (state = defaultState, action: RecommendProductAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productlist: action.data }
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, loading: true, error: action.data }
    default:
      return state;
  }
}