import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { add, sub, mul, div } from '../utils/math';

export default function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const toNum = (s: string) => Number(s.replace(',', '.'));

  const calcula = (op: (x: number, y: number) => number) => {
    try {
      const na = toNum(a);
      const nb = toNum(b);
      const r = op(na, nb);
      setResult(String(r));
    } catch (e: any) {
      setResult(e?.message ?? 'error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID="input-a"
        placeholder="Número A"
        value={a}
        onChangeText={setA}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        testID="input-b"
        placeholder="Número B"
        value={b}
        onChangeText={setB}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => calcula(add)} />
        <Button title="-" onPress={() => calcula(sub)} />
        <Button title="×" onPress={() => calcula(mul)} />
        <Button title="÷" onPress={() => calcula(div)} />
      </View>
      <Text testID="result" style={styles.result}>
        {result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
  },
});