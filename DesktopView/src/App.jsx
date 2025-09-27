import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import { HashRouter, Routes, Route } from 'react-router-dom';

const AppContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;

  @media (min-width: 769px) {
    max-width: 1200px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 24px;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding: 0 16px;
  }
`;

const Divider = styled.div`
  width: 1px;
  background-color: #f2f2f2;
  margin: 0 32px;

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
  }
`;

const MainSection = styled.main`
  flex: 1;
  min-width: 0;
`;

const SidebarSection = styled.aside`
  width: 320px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  return (
    <HashRouter>
      <AppContainer>
        <Header />
        <ContentWrapper>
          <MainSection>
            <Routes>
              <Route path="/" element={<MainContent />} />
              {/* Add more routes here if needed */}
            </Routes>
          </MainSection>
          <Divider />
          <SidebarSection>
            <Sidebar />
          </SidebarSection>
        </ContentWrapper>
      </AppContainer>
    </HashRouter>
  );
}

export default App;
