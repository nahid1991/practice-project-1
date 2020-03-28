import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length > 0) {
      setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    }
    setIsAddMode(false);
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title={"Add new goal"} onPress={() => setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalHandler}/>
      <FlatList data={courseGoals} renderItem={itemData =>
        (<GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={(id) => removeGoalHandler(id)}/>)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

