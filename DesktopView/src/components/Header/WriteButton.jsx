import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #6b6b6b;
  padding: 8px;

  svg {
    width: 20px;
    height: 20px;
    fill: #6b6b6b;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function WriteButton({ writeOpen, setWriteOpen }) {
  return (
    <Button onClick={() => setWriteOpen(true)}>
      <svg viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
      Write
    </Button>
  );
}
