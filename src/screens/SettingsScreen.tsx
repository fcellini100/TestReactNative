import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function SettingsScreen(): React.JSX.Element {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Settings Page</Text>
      {/* Add your settings content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default SettingsScreen; 