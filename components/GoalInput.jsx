import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal
} from 'react-native';

function GoalInput({ onAddGoal, visible, onCancel }) {

  const [newGoal, setNewGoal] = useState('');

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setNewGoal(enteredText);
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal!!"
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={newGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={() => {
              if (newGoal) {
                onAddGoal(newGoal);
                setNewGoal("");
              }
            }} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel}></Button>
          </View>
        </View>

      </View>
    </Modal>)

}

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 20
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "100%",
    padding: 8
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
});



export default GoalInput;