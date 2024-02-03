import {  StyleSheet, View } from 'react-native';
import { Map } from '../../components/maps/Map';
import { getCurrentLocation } from '../../../actions/location/location';

export const MapScreen = () => {

  // NO HACER!!!
  getCurrentLocation().then((location) => {
    console.log(location);
  })


  return (
    <View style={ styles.container}>



      {/* <Map /> */}


   </View>
  )
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

 });