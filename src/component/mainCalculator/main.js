/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [result, setResult] = useState('');

  const calculate = title => {
    if (title === 'C') {
      setResult('');
    } else if (title === 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if (title === '=') {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } else {
      setResult(result + title);
    }
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Btn = ({title, type}) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={[styles.button, {backgroundColor: 'gray'}]}>
      <Text
        style={[
          styles.buttonText,
          {
            color:
              type === 'top'
                ? '#0000FF'
                : type === 'right'
                ? '#FF5733'
                : '#FFF',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.buttonContainer}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="+" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="-" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    elevation: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 12,
    padding: 10,
    elevation: 4,
  },
  buttonText: {
    fontSize: 37,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  resultText: {
    fontSize: 40,
    width: '100%',
    textAlign: 'right',
    paddingRight: 20,
    marginTop: 100,
    paddingBottom: 20,
  },
});
