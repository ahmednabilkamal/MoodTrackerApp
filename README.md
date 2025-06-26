# Mood Tracker App

A React Native mood tracking application with Tamagui UI and animations.

## Tech Stack
- React Native
- TypeScript
- Tamagui (UI library)

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app

## Implementation Approach
- Used Tamagui's styled components for consistent theming and responsive design
- Implemented staggered animations using Tamagui's animation system (which uses Reanimated under the hood)
- Created reusable components (AppButton, Input) to maintain consistency

## Design Decisions
1. **Animation Logic**:
   - Button animation
   - Error message animation
2. **UI Structure**: 
   - Used a vertical stack (YStack) layout for natural form flow
   - Implemented a keyboard-avoiding view for better mobile UX
   - Color-coded mood buttons for quick visual recognition

## Improvements
If I had more time, I would:
- Add a proper backend integration with real AI suggestions
- Implement a mood history
- Add more detailed sleep tracking
- Add user feedback