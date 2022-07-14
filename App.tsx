import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native'
import { WebView } from 'react-native-webview/lib'
import Constants from 'expo-constants'


export default function App() {
  const uri = 'https://dev-cc.mel-meccano.ru/'
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'auto'} backgroundColor='#17171f' />
      <SafeAreaView style={styles.safeAreaView}>
        <WebView
          style={styles.container}
          source={{ uri }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeAreaView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  }
})
