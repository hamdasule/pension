import React from 'react';

export interface Room {
  id: string;
  name: string;
  engName: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}