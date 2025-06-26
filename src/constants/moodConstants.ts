import {createElement} from 'react';
import {Smile, Frown, Meh} from '@tamagui/lucide-icons';

import {Suggestions, MoodOption} from '../types/moodTypes';

const badIcon = createElement(Frown, {size: '1'});
const normalIcon = createElement(Meh, {size: '1'});
const goodIcon = createElement(Smile, {size: '1'});

export const moodOptions: MoodOption[] = [
  {icon: badIcon, value: 'bad', label: 'Bad', color: '$red10'},
  {icon: normalIcon, value: 'normal', label: 'Normal', color: '$yellow10'},
  {icon: goodIcon, value: 'good', label: 'Good', color: '$green10'},
];

export const suggestions: Suggestions = {
  bad: [
    'Try meditating for 10 minutes today',
    'Take a short walk outside',
    "Write down three things you're grateful for",
  ],
  normal: [
    'Listen to your favorite music',
    'Call a friend or family member',
    'Try a new healthy recipe',
  ],
  good: [
    'Share your positive energy with others',
    'Document what made today great',
    'Set a small personal goal',
  ],
};

export const sleepSuggestions = [
  'Aim for 7-9 hours of sleep tonight',
  'Try going to bed 30 minutes earlier',
  'Avoid screens 1 hour before bedtime',
] as const;
