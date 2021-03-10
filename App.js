import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { handleNotification, showNotification } from './src/notification.android'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Push notification</Text>
      <TouchableOpacity style={styles.button} onPress={()=> showNotification('test', 'lucunya')}>
        <Text style={{fontSize: 16, color: "#FFFFFF"}}>Click me to get notification</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 16, color: "#FFFFFF"}}>Click me to get notification after 5 sec</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 16, color: "#FFFFFF"}}>Click me to get cancel</Text>

      </TouchableOpacity>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "blue",
    borderRadius: 10,
    marginTop: 12
  }

})
