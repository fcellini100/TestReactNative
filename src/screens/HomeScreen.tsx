import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation';
import Dialog from '../components/Dialog';
import { useTheme } from '../theme/ThemeContext';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

function HomeScreen({ navigation }: HomeScreenProps): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDialogReady, setIsDialogReady] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    // Ensure Dialog is loaded before showing it
    setIsDialogReady(true);
  }, []);

  return (
    <View style={[styles.content, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>HELLO WORLD</Text>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Open Dialog</Text>
      </TouchableOpacity>

      {isDialogReady && (
        <Dialog
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          title="Test!"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen; 