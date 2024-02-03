import { ActivityIndicator, Text, View } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={30} color='black' />
      
    </View>
  )
}