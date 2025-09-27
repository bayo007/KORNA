import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 24px;
  padding: 8px 16px;
  gap: 8px;
  width: 240px;

  @media (max-width: 768px) {
    width: 160px;
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

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const handleSearchKey = (e) => {
    if (e.key === 'Enter') setSearchText('');
  };

  return (
    <SearchContainer>
      <svg viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
      <SearchInput
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleSearchKey}
      />
    </SearchContainer>
  );
}
