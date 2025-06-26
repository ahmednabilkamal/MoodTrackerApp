import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  submitView: {flex: 1},
  inputContainer: {
    marginVertical: 20,
  },
  inputLabel: {
    fontSize: 16,
    lineHeight: 22,
    color: '#495057',
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'left',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonBG: {backgroundColor: '$blue8'},
  buttonHover: {
    scale: 0.975,
    backgroundColor: '$blue9',
  },
  moodButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    includeFontPadding: false,
  },
});

export default styles;
