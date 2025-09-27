import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 16px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #242424;
  margin-bottom: 8px;
`

const StaffPickCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;

  &:last-child {
    border-bottom: none;
  }
`

const StaffPickHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const AuthorAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #6b6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: bold;
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
`

const AuthorName = styled.span`
  color: #242424;
  font-weight: 500;
`

const PublicationName = styled.span`
  color: #6b6b6b;
`

const StaffPickTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: #242424;
  cursor: pointer;

  &:hover {
    color: #1a8917;
  }
`

const StaffPickMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b6b6b;
`

const StarIcon = styled.span`
  color: #ffc017;
`

const TopicTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const TopicTag = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 13px;
  color: #6b6b6b;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`

const SeeMoreLink = styled.button`
  background: none;
  border: none;
  color: #1a8917;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

const WhoToFollowCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f2f2f2;

  &:last-child {
    border-bottom: none;
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #6b6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #242424;
`

const UserDescription = styled.div`
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.3;
`

const FollowButton = styled.button`
  background: none;
  border: 1px solid #1a8917;
  color: #1a8917;
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #1a8917;
    color: white;
  }
`

const ReadingListInfo = styled.div`
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.4;
`

const BookmarkIcon = styled.span`
  margin-right: 4px;
`

const SidebarFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 12px;
  color: #6b6b6b;
  padding-top: 16px;
  border-top: 1px solid #f2f2f2;
`

const FooterItem = styled.span`
  cursor: pointer;

  &:hover {
    color: #1a8917;
  }
`

function Sidebar() {
  const staffPicks = [
    { id: 1, author: "Zulie", publication: "Medium", title: "How this brand strategist uses Medium to explore ideas, repurpose content, and land clients", timeAgo: "2d ago", avatar: "M" },
    { id: 2, author: "Jud Brewer MD PhD", title: 'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain', timeAgo: "5d ago", avatar: "J" },
    { id: 3, author: "Linh Nguyen", title: "Golden Design Lessons from Tokyo Metro", timeAgo: "Sep 3", avatar: "L" }
  ]

  const recommendedTopics = [
    "Data Science", "React", "Coding", "Mental Health", "UX", "Python", "Productivity"
  ]

  const whoToFollow = [
    { id: 1, name: "Dr. Derek Austin", description: "AI Context Engineer. I teach LLMs to think. Full...", avatar: "D", verified: true },
    { id: 2, name: "ITNEXT", description: "ITNEXT is a platform for IT developers & software...", avatar: "I", isPublication: true },
    { id: 3, name: "Oliver Foster", description: "Primarily proficient in the Java programming...", avatar: "O" }
  ]

  return (
    <SidebarContainer>
      {/* Staff Picks */}
      <Section>
        <SectionTitle>Staff Picks</SectionTitle>
        {staffPicks.map(pick => (
          <StaffPickCard key={pick.id}>
            <StaffPickHeader>
              <AuthorAvatar>{pick.avatar}</AuthorAvatar>
              <AuthorInfo>
                <AuthorName>{pick.author}</AuthorName>
                {pick.publication && (
                  <>
                    <span>in</span>
                    <PublicationName>{pick.publication}</PublicationName>
                  </>
                )}
              </AuthorInfo>
            </StaffPickHeader>
            <StaffPickTitle>{pick.title}</StaffPickTitle>
            <StaffPickMeta>
              <StarIcon>★</StarIcon>
              <span>{pick.timeAgo}</span>
            </StaffPickMeta>
          </StaffPickCard>
        ))}
        <SeeMoreLink>See the full list</SeeMoreLink>
      </Section>

      {/* Recommended Topics */}
      <Section>
        <SectionTitle>Recommended topics</SectionTitle>
        <TopicTags>
          {recommendedTopics.map(topic => (
            <TopicTag key={topic}>{topic}</TopicTag>
          ))}
        </TopicTags>
        <SeeMoreLink>See more topics</SeeMoreLink>
      </Section>

      {/* Who to Follow */}
      <Section>
        <SectionTitle>Who to follow</SectionTitle>
        {whoToFollow.map(user => (
          <WhoToFollowCard key={user.id}>
            <UserInfo>
              <UserAvatar>{user.avatar}</UserAvatar>
              <UserDetails>
                <UserName>
                  {user.name}
                  {user.verified && <span style={{ color: '#1a8917', marginLeft: '4px' }}>✓</span>}
                </UserName>
                <UserDescription>{user.description}</UserDescription>
              </UserDetails>
            </UserInfo>
            <FollowButton>Follow</FollowButton>
          </WhoToFollowCard>
        ))}
        <SeeMoreLink>See more suggestions</SeeMoreLink>
      </Section>

      {/* Reading List */}
      <Section>
        <SectionTitle>Reading list</SectionTitle>
        <ReadingListInfo>
          <BookmarkIcon>📑</BookmarkIcon>
          Click the <BookmarkIcon>🔖</BookmarkIcon> on any story to easily add it to your reading list or a custom list that you can share.
        </ReadingListInfo>
      </Section>

      {/* Bottom Footer */}
      <SidebarFooter>
        {["Help", "Status", "About", "Careers", "Press", "Blog", "Privacy", "Rules", "Terms", "Text to Speech"].map(item => (
          <FooterItem key={item}>{item}</FooterItem>
        ))}
      </SidebarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
