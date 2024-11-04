import React, { useState } from 'react';

import SpaceCard from '@/components/SpaceCard/HorizontalSpaceCard/HorizontalSpaceCard';

import { Container, TabContainer, Tab, CardList } from './home.style';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('nearby');

  const dummySpaces = [
    {
      id: 1,
      name: 'eea',
      size: '보통',
      outlet: '부족',
      wifi: '없어요',
      moods: ['🌌 차분한', '🪑 아늑한'],
      reviewCount: 10,
      isSaved: false,
      imageUrls: [
        'https://images.unsplash.com/photo-1724269964916-0b4e11542083?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1724269964916-0b4e11542083?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 2,
      name: 'eea',
      size: '보통',
      outlet: '부족',
      wifi: '없어요',
      moods: ['🌌 차분한', '🪑 아늑한'],
      reviewCount: 10,
      isSaved: true,
      imageUrls: [
        'https://images.unsplash.com/photo-1724266156926-9baa490ce408?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1724266156926-9baa490ce408?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D',
      ],
    },
    {
      id: 3,
      name: 'eea',
      size: '보통',
      outlet: '부족',
      wifi: '없어요',
      moods: ['🌌 차분한', '🪑 아늑한'],
      reviewCount: 10,
      isSaved: false,
      imageUrls: [
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 4,
      name: 'eea',
      size: '보통',
      outlet: '부족',
      wifi: '없어요',
      moods: ['🌌 차분한', '🪑 아늑한'],
      reviewCount: 10,
      isSaved: false,
      imageUrls: [
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 5,
      name: 'eea',
      size: '보통',
      outlet: '부족',
      wifi: '없어요',
      moods: ['🌌 차분한', '🪑 아늑한'],
      reviewCount: 10,
      isSaved: false,
      imageUrls: [
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 6,
      name: 'eea',
      size: '보통',
      outlet: '부족',
      wifi: '없어요',
      moods: ['🌌 차분한', '🪑 아늑한'],
      reviewCount: 10,
      isSaved: false,
      imageUrls: [
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
  ];

  return (
    <Container>
      <TabContainer>
        <Tab onClick={() => setActiveTab('nearby')} $active={activeTab === 'nearby'}>
          근처 공간 추천
        </Tab>
        <Tab onClick={() => setActiveTab('bookmark')} $active={activeTab === 'bookmark'}>
          북마크 기반 공간
        </Tab>
      </TabContainer>

      <CardList>
        {dummySpaces.map((space) => (
          <SpaceCard key={space.id} {...space} imageUrl={space.imageUrls[0]} />
        ))}
      </CardList>
    </Container>
  );
};
