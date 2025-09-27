import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  resize: none;
  font-size: 14px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  ${({ cancel }) => cancel && `
    background: #f2f2f2;
    color: #242424;
  `}

  ${({ send }) => send && `
    background: #1a8917;
    color: #fff;
  `}
`;

export default function WriteModal({ writeOpen, setWriteOpen }) {
  return (
    <ModalOverlay open={writeOpen}>
      <ModalContent>
        <ModalHeader>
          <span>New Story</span>
          <span style={{cursor: 'pointer'}} onClick={() => setWriteOpen(false)}>×</span>
        </ModalHeader>
        <Textarea placeholder="Write your story here..." />
        <ButtonRow>
          <Button cancel onClick={() => setWriteOpen(false)}>Cancel</Button>
          <Button send>Send</Button>
        </ButtonRow>
      </ModalContent>
    </ModalOverlay>
  );
}
