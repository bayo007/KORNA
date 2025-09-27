import React from 'react'
import styled from 'styled-components'
import NavigationTabs from './NavigationTabs'
import ArticleCard from './ArticleCard'

const MainContainer = styled.div`
  width: 100%;
`

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`

function MainContent() {
  const articles = [
    {
      id: 1,
      publication: "Language Lab",
      author: "Benben",
      title: "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
      subtitle: "It's not a skill issue, but a marketing issue",
      readTime: "5d ago",
      claps: "1.2K",
      responses: "45",
      image: "https://dummyimage.com/200x150/e8e8e8/666666?text=Language+Skills",
      clapped: false
    },
    {
      id: 2,
      publication: "Level Up Coding",
      author: "Attila Vago",
      title: "Welcome To Dream-Driven Development Where Nothing Works",
      subtitle: "Half-baked diagrams, features that make no sense, Mikado architecture. You've seen it, you've lived it, and it has a name...",
      readTime: "4d ago",
      claps: "709",
      responses: "16",
      image: "https://dummyimage.com/200x150/ff6b6b/ffffff?text=Development",
      clapped: false
    },
    {
      id: 3,
      publication: "Predict",
      author: "iswarya writes",
      title: "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
      subtitle: "What if I told you that by this time next year, you could land a job that pays over $100,000—and it won't be threatened by AI?",
      readTime: "Jul 30",
      claps: "3.7K",
      responses: "165",
      image: "https://dummyimage.com/200x150/4ecdc4/ffffff?text=AI+Future",
      clapped: false
    },
    {
      id: 4,
      publication: "Clean Compiler",
      author: "",
      title: "10 Java Collections Tricks Only Seniors Know",
      subtitle: "If you've been coding in Java for a while, you probably use List, Set, and Map every single day. But here's the thing: most...",
      readTime: "3d ago",
      claps: "52",
      responses: "5",
      image: "https://dummyimage.com/200x150/45b7d1/ffffff?text=Java+Code",
      clapped: false
    },
    {
      id: 5,
      publication: "The Generator",
      author: "Jim the AI Whisperer",
      title: "Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
      subtitle: "Limiting output length reveals AI isn't intelligent—it's chatty!",
      readTime: "3d ago",
      claps: "2K",
      responses: "35",
      image: "https://dummyimage.com/200x150/9b59b6/ffffff?text=AI+Chat",
      clapped: false
    }
  ]

  return (
    <MainContainer>
      <NavigationTabs />
      <ArticlesList>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticlesList>
    </MainContainer>
  )
}

export default MainContent
