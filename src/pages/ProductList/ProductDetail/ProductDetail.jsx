import React from 'react'
//은행로고
import kbLogo from '~/assets/KB-logo.png'
import wbLogo from '~/assets/WB-logo.jpg'
import sbLogo from '~/assets/SB-logo.png'
import baseLogo from '~/assets/logo2.png'
//react 관련 데이터
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ProductNotice from './ProductNotice'
import {
  modalHandler,
  useProduct,
  purchaseRequest,
  isVisibleHandler,
} from '~/stores/productSlice'
import { useCart } from '../../../stores/reducers/cartSlice'
import FavoriteButton from '../../../components/FavoriteButton'
import CartButton from '../../../components/Buttons/CartButton'

const ProductDetail = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { dispatch, purchasedList } = useProduct()
  const { cartList } = useCart()

  const purchaseRequestHandler = state => {
    if (purchasedList.some(purchasedItem => purchasedItem.id === state.id)) {
      alert('이미 구매한 상품입니다.')
    } else {
      dispatch(purchaseRequest(state))
      dispatch(isVisibleHandler())
      dispatch(modalHandler())
    }
  }

  const imageSeletor = () => {
    switch (state.kor_co_nm) {
      case '우리은행':
        return wbLogo
      case '신한은행':
        return sbLogo
      case '국민은행':
        return kbLogo
      default:
        return baseLogo
    }
  }

  return (
    <StyledProductDetail>
      <section className="pageTitle">
        <h1>상세정보</h1>
      </section>

      <section className="product-info">
        <div className="product-icons">
          <FavoriteButton item={state} />
          <CartButton item={state} />
        </div>

        <div className="detail-info">
          <div className="left-info">
            <ul>
              <li>은행명: {state.kor_co_nm}</li>
              <li>상품명: {state.fin_prdt_nm}</li>
              <li>
                저축한도:
                {state.max_limit === null
                  ? '한도 없음'
                  : `${state.max_limit}원`}
              </li>
              <li>가입대상: {state.join_member}</li>
              <li>가입경로: {state.join_way}</li>
              <li>가입기간: {state.etc_note}</li>
              <li>
                상세 설명: {state.mtrt_int}
                <p>{state.spcl_cnd}</p>
              </li>
            </ul>
          </div>
          <div className="right-bg">
            <img src={imageSeletor()} alt="국민은행" />
          </div>
        </div>
      </section>
      <section className="actions">
        <button
          className="btn btn_gray"
          onClick={() => {
            navigate('/productlist')
          }}
        >
          목록
        </button>
        <button
          className="btn"
          onClick={() => {
            purchaseRequestHandler(state)
          }}
        >
          신청하기
        </button>
      </section>
      <section className="test">
        <ProductNotice />
      </section>
    </StyledProductDetail>
  )
}
const StyledProductDetail = styled.div`
  margin: auto;
  width: 1320px;
  .pageTitle {
    width: 100%;
    margin: 40px 0 30px 0;
    border-bottom: 2px solid #808080;
    box-sizing: border-box;
    h1 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
  .product-info {
    width: 100%;
    background: linear-gradient(to bottom right, #5d5ffc, #47e975);
    height: 350px;

    .product-icons {
      text-align: end;
      margin-right: 15px;
      padding-top: 20px;
      box-sizing: border-box;
    }
    .detail-info {
      display: flex;
      justify-content: space-between;
      .left-info {
        ul {
          color: #fff;
          margin-left: 15px;
          li {
            margin: 10px 0;
            p {
              margin: 5px 0;
            }
          }
        }
      }
      .right-bg {
        background-color: #808080;
        width: 200px;
        height: 200px;
        margin: 10px 30px;
        img {
          width: 200px;
        }
      }
    }
  }
  .actions {
    text-align: center;
    margin-top: 50px;
    .btn {
      margin: 10px;
      padding: 5px 80px;
      outline: none;
      border: none;
      background-color: #2d71c4;
      color: #fff;
    }
    .btn_gray {
      background-color: #808080;
    }
  }
`

export default ProductDetail
