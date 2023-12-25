import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [newGoal, setNewGoal] = useState('');
  const [myGoals, setMyGoals] = useState([]);

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setNewGoal(enteredText);

  }

  function addGoalHandler() {
    console.log(newGoal);
    setMyGoals(currentGoals => [...currentGoals, newGoal]);

  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal!!"
          onChangeText={goalInputHandler}
          style={styles.textInput} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical="false">
          {myGoals.map((goal) =>
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText} >{goal}</Text>
            </View>
          )}
        </ScrollView>
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 10,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    borderRadius: 8,
    marginVertical: 6,
    padding: 14,
    backgroundColor: "#092FE0",

  },
  goalText: {
    color: "white",
  }
});
