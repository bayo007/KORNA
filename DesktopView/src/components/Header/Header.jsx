import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerModal from "./modal/HamburgerModal";
import WriteModal from "./modal/WriteModal";
import NotificationModal from "./modal/NotificationModal";
import ProfileModal from "./modal/ProfileModal";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #f2f2f2;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

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
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: #242424;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.5px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 24px;
  padding: 8px 16px;
  gap: 8px;
  width: 240px;

  @media (max-width: 768px) {
    width: 180px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #6b6b6b;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  font-size: 14px;
  color: #242424;
  flex: 1;

  &::placeholder {
    color: #6b6b6b;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const WriteButton = styled.button`
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

const NotificationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;

  svg {
    width: 24px;
    height: 24px;
    fill: #6b6b6b;
    transition: fill 0.2s;
  }

  &:hover svg {
    fill: #1a8917;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileButton = styled.button`
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

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [writeOpen, setWriteOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchText('');
    }
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <MenuIcon onClick={() => setHamburgerOpen(true)}>
          <svg viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </MenuIcon>
        <Logo>Medium</Logo>
        <SearchContainer>
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <SearchInput
            value={searchText}
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />
        </SearchContainer>
      </LeftSection>

      <RightSection>
        <WriteButton onClick={() => setWriteOpen(true)}>
          <svg viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
          Write
        </WriteButton>
        <NotificationButton onClick={() => setNotifOpen(!notifOpen)}>
          <svg viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </NotificationButton>
        <ProfileButton onClick={() => setProfileOpen(!profileOpen)}>A</ProfileButton>
      </RightSection>

      <HamburgerModal hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
      <WriteModal writeOpen={writeOpen} setWriteOpen={setWriteOpen} />
      <NotificationModal notifOpen={notifOpen} setNotifOpen={setNotifOpen} />
      <ProfileModal profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
    </HeaderContainer>
  );
}
