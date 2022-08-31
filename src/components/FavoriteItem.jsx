import React from 'react'
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom'
import { useFavorite } from '../stores/favoriteSlice';
import { modalHandler } from '../stores/productSlice';
import FavoriteButton from './FavoriteButton';

function FavoriteItem({ item }) {
  const { dispatch } = useFavorite();
  const navigate = useNavigate()

  return (
    <StyledProductItem>
      <div className="item-container">
        <div className="left-info">
          <h2>{item.fin_prdt_nm}</h2>
          <p>상품 가격: {item.max_limit}원</p>
        </div>
        <div className="actions">
          <button
            className="btn"
            onClick={() => {
              dispatch(modalHandler())
            }}
          >
            신청하기
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate(`/productlist/${item.id}`, { state: item })
            }}
          >
            상세보기
          </button>
          <FavoriteButton item={item} />
        </div>
      </div>
    </StyledProductItem>
  )
}

const StyledProductItem = styled.div`
  background: linear-gradient(to bottom right, #5d5ffc, #47e975);
  border-radius: 8px;
  margin: 20px;
  box-sizing: border-box;
  padding: 10px 0;
  box-sizing: border-box;
  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-info {
      padding: 10px;
      box-sizing: border-box;
      h2 {
        margin-bottom: 10px;
      }
    }
    .actions {
      margin-right: 10px;
      .btn {
        margin: 0 5px;
        outline: none;
        border: none;
        padding: 5px 20px;
        background-color: ${({ theme }) => theme.palette.cobaltBlue};
        color: #fff;
      }
      .btn_favorite {
        background-color: transparent;
        padding: 0;
      }
    }
  }
`

export default FavoriteItem