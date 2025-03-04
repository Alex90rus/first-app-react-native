import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Поле не должно быть пустым!');
    }

  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Введите название'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Button title="Добавить" onPress={pressHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
});

export default AddTodo;
