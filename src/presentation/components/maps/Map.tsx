import { Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

interface Props {
  
}


export const Map = () => {
  return (
    <>
      <MapView
        provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ flex: 1 }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
          
        



          
          {/* <Marker 
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="Este es el título del marcador"
            description="Este es el cuerpo del marcador"
            image={ require('../../../assets/marker.png') }
          /> */}


        </MapView>
    </>
  );
};




