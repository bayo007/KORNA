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
  width: 300px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 150;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 12px;
`;

const Item = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
`;

export default function NotificationModal({ notifOpen, setNotifOpen }) {
  return (
    <ModalOverlay open={notifOpen}>
      <CloseButton onClick={() => setNotifOpen(false)}>×</CloseButton>
      <Title>Unread Messages</Title>
      <Item>You have 3 unread messages</Item>
      <Item>You have 1 draft</Item>
    </ModalOverlay>
  );
}
