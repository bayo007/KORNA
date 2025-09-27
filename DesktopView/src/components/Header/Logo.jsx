import React from 'react'
import styled from 'styled-components'

const LogoText = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: #242424;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.5px;
`

export default function Logo() {
  return <LogoText>Medium</LogoText>
}
