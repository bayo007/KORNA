import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: absolute;
  top: 50px;
  right: 0;
  background: #fff;
  flex-direction: column;
  border-radius: 12px;
  width: 200px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 150;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
`;

const MenuItem = styled.div`
  padding: 8px 0;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #1a8917;
  }
`;

export default function ProfileModal({ profileOpen, setProfileOpen }) {
  return (
    <ModalOverlay open={profileOpen}>
      <CloseButton onClick={() => setProfileOpen(false)}>×</CloseButton>
      <MenuItem>About Me</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Sign Out</MenuItem>
    </ModalOverlay>
  );
}
