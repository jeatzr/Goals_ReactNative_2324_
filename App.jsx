import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [myGoals, setMyGoals] = useState([]);

  function deleteGoalHandler(id) {
    console.log("DELETE " + id)
    setMyGoals(myGoals => myGoals.filter((goal) => goal.id != id));
  }

  function addGoalHandler(newGoal) {
    console.log(newGoal);
    setMyGoals(currentGoals =>
      [...currentGoals,
      {
        text: newGoal,
        id: Date.now()
      }
      ]);

  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          alwaysBounceVertical="false"
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}
              id={itemData.item.id}
              onGoalDelete={deleteGoalHandler}
            />
          }}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },

});
