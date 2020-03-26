import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    if(enteredGoal.length > 0) {
      setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    }

    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Course Goal"} style={styles.input} onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title={"ADD"} onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal, i) => <Text key={i}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  }
});

