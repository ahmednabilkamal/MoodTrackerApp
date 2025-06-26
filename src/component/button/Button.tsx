import React from 'react';
import {Button, ButtonProps} from 'tamagui';

import styles from './styles';

type AppButtonProps = ButtonProps & {
  onPress: () => void;
  label: string;
};

export const AppButton = ({onPress, label, ...props}: AppButtonProps) => {
  return (
    <Button
      mt="auto"
      onPress={onPress}
      theme="active"
      backgroundColor="$blue10"
      pressStyle={styles.buttonBG}
      borderRadius="$10"
      height="$5"
      shadowColor="#000"
      shadowOffset={{width: 0, height: 2}}
      shadowOpacity={0.2}
      shadowRadius={4}
      elevation={4}
      animation="quick"
      hoverStyle={styles.buttonHover}
      {...props}>
      {label}
    </Button>
  );
};
