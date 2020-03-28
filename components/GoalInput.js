import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={props.visible} animationType={"slide"} transparent={false}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Course Goal"} style={styles.input} onChangeText={goalInputHandler}
                  value={enteredGoal} placeholderTextColor={"#ccc"}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title={"CANCEL"} color={"red"} onPress={props.onCancel}/></View>
          <View style={styles.button}><Button title={"ADD"} onPress={addGoalHandler}/></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  button: {
    width: '50%'
  }
});

export default GoalInput;