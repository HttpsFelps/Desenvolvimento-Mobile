import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const bmi = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || h <= 0) return null;

    return (w / (h * h)).toFixed(2);
  }, [weight, height]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Input your weight (kg)"
        inputMode="decimal"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        placeholder="Input your height (m)"
        inputMode="decimal"
        value={height}
        onChangeText={setHeight}
      />

      <Text>
        {bmi ? `Your BMI is: ${bmi}` : 'Enter weight and height'}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
