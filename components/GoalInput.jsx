import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

function GoalInput({ onAddGoal }) {

  const [newGoal, setNewGoal] = useState('');

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setNewGoal(enteredText);
  }

  return (<View style={styles.inputContainer}>
    <TextInput placeholder="Your Course Goal!!"
      onChangeText={goalInputHandler}
      style={styles.textInput}
      value={newGoal} />
    <Button title="Add Goal" onPress={() => {
      if (newGoal) {
        onAddGoal(newGoal);
        setNewGoal("");
      }
    }} />
  </View>)

}

const styles = StyleSheet.create({

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

});



export default GoalInput;