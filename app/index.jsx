
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    // <View style={styles.container}>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-orange-600">Aora App</Text>
      <Text>Made with ❤️ by Satish Kr.</Text>
      <Link href="/profile" style={{ color: 'blue' }}>link to profile</Link>
      <Link href="/testpage" style={{ color: 'green' }}>link to testpage</Link>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
