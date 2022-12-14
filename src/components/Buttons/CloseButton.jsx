import React from 'react'
import styled from 'styled-components'
import { BsXLg } from "react-icons/bs";
import cartList from '../../stores/reducers/cartSlice';

const CloseButton = (props) => {
  return (
    <StyledBotton>
      <div className='close-button-container'>
        <p>삭제하기</p>
        <button className="btn btn_close" onClick={props.onDeleteClick}>
            <BsXLg size="28" />
        </button>
      </div>
      {console.log(cartList.getInitialState)}
    </StyledBotton>
  )

}

export default CloseButton

const StyledBotton = styled.div`
  p {
    text-indent: -9999px;
  }
  .btn {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    color: ${({ theme }) => theme.palette.lightGray};
    cursor: pointer;
  }
`