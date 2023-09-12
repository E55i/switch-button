import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Text>Enabled</Text>
        <Switch
        value = {isEnabled}
        onValueChange={toggleSwitch}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.fields}>
        <Text>toggleSwitch is enabled: {isEnabled}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  }
});
