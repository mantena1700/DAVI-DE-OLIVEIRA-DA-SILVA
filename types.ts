import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export interface MetricProps {
  value: string;
  label: string;
}

export enum AdviserState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}