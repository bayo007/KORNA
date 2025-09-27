import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  height: 100vh;
  width: 300px;
  background: #fff;
  transition: left 0.3s ease;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 100;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #1a8917;
  }
`;

export default function HamburgerModal({ hamburgerOpen, setHamburgerOpen }) {
  return (
    <ModalContainer open={hamburgerOpen}>
      <CloseButton onClick={() => setHamburgerOpen(false)}>×</CloseButton>
      <MenuItem>Home</MenuItem>
      <MenuItem>Explore</MenuItem>
      <MenuItem>Topics</MenuItem>
      <MenuItem>Bookmarks</MenuItem>
      <MenuItem>Stories</MenuItem>
    </ModalContainer>
  );
}
