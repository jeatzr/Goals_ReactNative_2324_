import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';


function GoalItem({ text, id, onGoalDelete }) {
  return (
    <Pressable
      onPress={() => onGoalDelete(id)}
      android_ripple={{ color: "#210644" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View key={id}
        style={styles.goalItem}>
        <Text style={styles.goalText} >
          {text}
        </Text>
      </View>
    </Pressable>)
}

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 8,
    marginVertical: 6,
    padding: 14,
    backgroundColor: "#512091",

  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5
  }
});

export default GoalItem;

