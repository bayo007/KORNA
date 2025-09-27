import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.article`
  display: flex;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const PublicationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

const PublicationIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color || '#6b6b6b'};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`

const PublicationText = styled.span`
  font-size: 13px;
  color: #242424;
  font-weight: 500;
`

const AuthorText = styled.span`
  font-size: 13px;
  color: #6b6b6b;
`

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  color: #242424;
  margin-bottom: 4px;
  cursor: pointer;

  &:hover {
    color: #1a8917;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const Subtitle = styled.p`
  font-size: 16px;
  color: #6b6b6b;
  line-height: 1.4;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #6b6b6b;
`

const StarIcon = styled.div`
  color: #ffc017;
  font-size: 16px;
`

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
`

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f2f2f2;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #6b6b6b;
  }
`

const ImageSection = styled.div`
  width: 112px;
  height: 112px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

const ClappedIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #6b6b6b;
  margin-bottom: 8px;
`

function ArticleCard({ article }) {
  const getPublicationColor = (publication) => {
    const colors = {
      'Language Lab': '#ff6b6b',
      'Level Up Coding': '#4ecdc4',
      'Predict': '#45b7d1',
      'Clean Compiler': '#96ceb4',
      'The Generator': '#feca57'
    }
    return colors[publication] || '#6b6b6b'
  }

  const getPublicationInitial = (publication) => {
    if (publication === 'Language Lab') return 'LL'
    if (publication === 'Level Up Coding') return 'LC'
    if (publication === 'Predict') return 'P'
    if (publication === 'Clean Compiler') return 'CC'
    if (publication === 'The Generator') return 'TG'
    return publication.charAt(0)
  }

  return (
    <CardContainer>
      <ContentSection>
        {article.clapped && (
          <ClappedIndicator>
            <StarIcon>★</StarIcon>
            <span>Trey Huffine clapped</span>
          </ClappedIndicator>
        )}
        <PublicationInfo>
          <PublicationIcon color={getPublicationColor(article.publication)}>
            {getPublicationInitial(article.publication)}
          </PublicationIcon>
          <PublicationText>in {article.publication}</PublicationText>
          {article.author && (
            <>
              <span style={{ color: '#6b6b6b' }}>by</span>
              <AuthorText>{article.author}</AuthorText>
            </>
          )}
        </PublicationInfo>
        <Title>{article.title}</Title>
        <Subtitle>{article.subtitle}</Subtitle>
        <MetaInfo>
          <StarIcon>★</StarIcon>
          <MetaItem>{article.readTime}</MetaItem>
          <MetaItem>
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: '#6b6b6b' }}>
              <path d="M11.5 9H13v6l4.2 2.5-.8 1.3L11.5 16V9z"/>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
            </svg>
            {article.claps}
          </MetaItem>
          <MetaItem>
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: '#6b6b6b' }}>
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h11c.55 0 1-.45 1-1z"/>
            </svg>
            {article.responses}
          </MetaItem>
          <ActionButtons>
            <ActionButton>
              <svg viewBox="0 0 24 24">
                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h11c.55 0 1-.45 1-1z"/>
              </svg>
            </ActionButton>
            <ActionButton>
              <svg viewBox="0 0 24 24">
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14l7-3 7 3V5c0-1.1-.89-2-2-2z"/>
              </svg>
            </ActionButton>
            <ActionButton>
              <svg viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </ActionButton>
          </ActionButtons>
        </MetaInfo>
      </ContentSection>
      <ImageSection>
        <ArticleImage src={article.image} alt={article.title} referrerPolicy="no-referrer" />
      </ImageSection>
    </CardContainer>
  )
}

export default ArticleCard
