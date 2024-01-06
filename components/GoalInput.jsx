import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
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
        <Image source={require("../assets/img/goal.png")}
          style={styles.image}
        />
        <TextInput placeholder="Your Course Goal!!"
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={newGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282"></Button>
          </View>
          <View style={styles.button}>
            <Button
              color="#b496dc"
              title="Add Goal" onPress={() => {
                if (newGoal) {
                  onAddGoal(newGoal);
                  setNewGoal("");
                }
              }} />
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
    padding: 20,
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    color: "#120438",
    width: "100%",
    borderRadius: 10,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  },
  image:
  {
    width: 100,
    height: 100,
    margin: 20


  }
});



export default GoalInput;