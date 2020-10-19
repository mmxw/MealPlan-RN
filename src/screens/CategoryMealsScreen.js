import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> Meals </Text>
      <Button
        title="Show me meals!"
        onPress={() => {
          props.navigation.push('CategoryMeals');
        }}
      />
      <Button
        title="Go back to categories"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title="Go back to root screen"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Button
        title="Go there and never comeback"
        onPress={() => {
          props.navigation.replace('MealDetail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
