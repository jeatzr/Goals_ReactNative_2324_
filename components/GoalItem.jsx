import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

function GoalItem({ text, id }) {
  return (
    <View key={id}
      style={styles.goalItem}>
      <Text style={styles.goalText} >
        {text}
      </Text>
    </View>)
}

const styles = StyleSheet.create({
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


export default GoalItem;

