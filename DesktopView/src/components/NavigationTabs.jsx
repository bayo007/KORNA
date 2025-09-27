import React, { useState } from 'react'
import styled from 'styled-components'

const TabsContainer = styled.nav`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 16px;
`

const Tab = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${props => props.active ? '#242424' : '#6b6b6b'};
  font-weight: ${props => props.active ? '500' : '400'};
  padding: 8px 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -17px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #242424;
    opacity: ${props => props.active ? '1' : '0'};
    transition: opacity 0.2s ease;
  }

  &:hover {
    color: #242424;
  }
`

function NavigationTabs() {
  const [activeTab, setActiveTab] = useState('For you')

  const tabs = ['For you', 'Featured']

  return (
    <TabsContainer>
      {tabs.map(tab => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Tab>
      ))}
    </TabsContainer>
  )
}

export default NavigationTabs
