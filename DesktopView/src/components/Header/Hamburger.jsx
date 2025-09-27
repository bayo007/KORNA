import React, { useState } from 'react'
import styled from 'styled-components'
import HamburgerModal from './modal/HamburgerModal'

const MenuIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    fill: #242424;
  }
`

export default function Hamburger() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MenuIcon onClick={() => setOpen(!open)}>
        <svg viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </MenuIcon>
      {open && <HamburgerModal onClose={() => setOpen(false)} />}
    </>
  )
}
