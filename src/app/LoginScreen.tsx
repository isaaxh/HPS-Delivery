import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
/* import { StatusBar } from "expo-status-bar"; */

const LoginScreen = () => {
  return (
    <SafeAreaView>
      {/* <StatusBar backgroundColor="red" /> */}
      <View className="bg-red-50 text-black">
        <Text>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
