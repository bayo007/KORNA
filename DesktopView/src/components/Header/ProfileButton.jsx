import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #242424;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProfileButton({ profileOpen, setProfileOpen }) {
  return (
    <Button onClick={() => setProfileOpen(!profileOpen)}>
      A
    </Button>
  );
}
