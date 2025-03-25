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

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

function HomeScreen({ navigation }: HomeScreenProps): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDialogReady, setIsDialogReady] = useState(false);

  useEffect(() => {
    // Ensure Dialog is loaded before showing it
    setIsDialogReady(true);
  }, []);

  return (
    <View style={styles.content}>
      <Text style={styles.text}>HELLO WORLD</Text>
      <TouchableOpacity 
        style={styles.button}
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
    color: '#000000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
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