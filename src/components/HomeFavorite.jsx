import { useNavigate } from 'react-router-dom'
import React, { useEffect, useCallback } from 'react'

import styled from 'styled-components'

function HomeFavorite() {
  const navigate = useNavigate()
  useEffect(() => {}, [navigate])

  const favoriteHandler = useCallback(() => {
    navigate('/favorite')
  }, [navigate])

  return (
    <StyledHomeFavorite onClick={favoriteHandler}>
      즐겨찾기 🌟
    </StyledHomeFavorite>
  )
}

export default HomeFavorite
const StyledHomeFavorite = styled.button`
  color: #fff;
  background-color: #2d71c3;
  border: none;
  padding: 10px;
  border-radius: 5px;

  :hover {
    background-color: #3e95ff;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
  }
`
