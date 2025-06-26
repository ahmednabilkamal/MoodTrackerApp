import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {
  YStack,
  XStack,
  Text,
  Button,
  Slider,
  H4,
  AnimatePresence,
  Paragraph,
} from 'tamagui';
import {Check} from '@tamagui/lucide-icons';
import {moodOptions, sleepSuggestions, suggestions} from '../../constants';
import {en} from '../../lang/en';
import styles from './styles';
import {AppButton, Input} from '../../component';

function MoodTrackerScreen() {
  const [mood, setMood] = useState<string | null>(null);
  const [sleepHours, setSleepHours] = useState(6);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showMoodError, setShowMoodError] = useState(false);

  const handleSubmit = () => {
    if (!mood) {
      setShowMoodError(true);
      setTimeout(() => setShowMoodError(false), 3000);
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setMood(null);
    setSleepHours(7);
    setNotes('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <View style={styles.submitView}>
        <YStack f={1} p="$4" bg="$background" space="$4">
          <YStack ai="center" space="$4" mt="$8">
            <AnimatePresence>
              <YStack
                animation="bouncy"
                enterStyle={{scale: 0.5, opacity: 0}}
                exitStyle={{scale: 0.5, opacity: 0}}>
                <YStack ai="center" space="$2">
                  <Check size="$4" color="$green10" />
                  <H4 theme="alt4">{en.thanksForYouMood}</H4>
                </YStack>
              </YStack>
            </AnimatePresence>

            <YStack mt="$6" space="$4" w="100%">
              <H4>{en.suggestForYou}</H4>

              {mood && (
                <YStack
                  animation="lazy"
                  enterStyle={{x: -50, opacity: 0}}
                  exitStyle={{x: -50, opacity: 0}}
                  space="$2">
                  <Text fontWeight="bold">{en.basedOnYourMood}</Text>
                  {suggestions[mood as keyof typeof suggestions].map(
                    (suggestion, index) => (
                      <Text key={index} animation="quick" delay={index * 100}>
                        • {suggestion}
                      </Text>
                    ),
                  )}
                </YStack>
              )}

              <YStack
                animation="lazy"
                enterStyle={{x: 50, opacity: 0}}
                exitStyle={{x: 50, opacity: 0}}
                space="$2">
                <Text fontWeight="bold">{en.sleepSteps}</Text>
                {sleepHours < 7 ? (
                  <>
                    <Text>{en.youSleptMore}</Text>
                    {sleepSuggestions.map((tip, index) => (
                      <Text key={index} animation="quick" delay={index * 100}>
                        • {tip}
                      </Text>
                    ))}
                  </>
                ) : (
                  <Text>{en.greatJob}</Text>
                )}
              </YStack>
            </YStack>
          </YStack>

          <AppButton
            onPress={resetForm}
            label={en.done}
            animation="bouncy"
            pressStyle={{scale: 0.95}}
          />
        </YStack>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <YStack f={1} p="$4" bg="$background" space="$4">
          {/* Header Section */}
          <YStack space="$2">
            <H4>{en.howAreYouFeeling}</H4>
            <Text theme="alt2">{en.trackYourMood}</Text>
          </YStack>

          {/* Mood Selection */}
          <YStack space="$2">
            <Text>{en.moodToday}</Text>
            <XStack space="$3">
              {moodOptions.map(option => (
                <Button
                  key={option.value}
                  theme={mood === option.value ? 'active' : undefined}
                  backgroundColor={
                    mood === option.value ? option.color : '$color3'
                  }
                  borderWidth={1}
                  borderColor={
                    mood === option.value ? option.color : '$borderColor'
                  }
                  icon={option.icon}
                  onPress={() => {
                    setMood(option.value);
                    setShowMoodError(false);
                  }}
                  flex={1}
                  paddingVertical="$3"
                  animation="quick"
                  pressStyle={{
                    backgroundColor:
                      mood === option.value ? option.color : '$color4',
                    scale: 0.98,
                  }}
                  hoverStyle={{
                    backgroundColor:
                      mood === option.value ? option.color : '$color4',
                  }}>
                  <Text style={styles.moodButtonText}>{option.label}</Text>
                </Button>
              ))}
            </XStack>
          </YStack>

          <AnimatePresence>
            {showMoodError && (
              <Paragraph
                color="$red10"
                animation="quick"
                enterStyle={{opacity: 0, y: -10}}
                exitStyle={{opacity: 0, y: -10}}>
                {en.pleaseSelectYourMood}
              </Paragraph>
            )}
          </AnimatePresence>

          {/* Sleep Slider */}
          <YStack space="$2">
            <Text>
              {en.sleepLastNight}: {sleepHours} {en.hours}
            </Text>
            <Slider
              defaultValue={[sleepHours]}
              min={1}
              max={12}
              step={1}
              onValueChange={val => setSleepHours(val[0])}>
              <Slider.Track>
                <Slider.TrackActive />
              </Slider.Track>
              <Slider.Thumb
                index={0}
                circular
                size="$2"
                backgroundColor="green"
                pressStyle={{backgroundColor: 'green'}}
                hoverStyle={{scale: 1.1}}
                animation="bouncy"
              />
            </Slider>
          </YStack>

          <YStack space="$2" style={styles.inputContainer} pb="$8">
            <Text style={styles.inputLabel}>{en.NotesOptional}</Text>
            <Input
              value={notes}
              onChangeText={setNotes}
              animation="lazy"
              enterStyle={{opacity: 0, y: 10}}
              multiline
              minHeight={100}
              textAlignVertical="top"
            />
          </YStack>

          <AppButton
            onPress={handleSubmit}
            label={en.submit}
            animation="bouncy"
            pressStyle={{scale: 0.95}}
          />
        </YStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export {MoodTrackerScreen};
