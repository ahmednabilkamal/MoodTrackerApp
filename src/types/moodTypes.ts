import {ReactElement} from 'react';

export type MoodValue = 'bad' | 'normal' | 'good';

export interface MoodOption {
  icon: ReactElement;
  value: MoodValue;
  label: string;
  color: string;
}

export type Suggestions = {
  [key in MoodValue]: string[];
};
