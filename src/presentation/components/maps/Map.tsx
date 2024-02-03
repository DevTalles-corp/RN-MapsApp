import { Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Location } from '../../../infrastructure/interfaces/location';
import { FAB } from '../ui/FAB';
import { useRef } from 'react';
import { useLocationStore } from '../../store/location/useLocationStore';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: Location;
}


export const Map = ({ showsUserLocation = true, initialLocation }: Props) => {

  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<Location>( initialLocation );

  const { getLocation, lastKnownLocation } = useLocationStore();

  const moveCameraToLocation = ( location: Location ) => {
    if ( !mapRef.current ) return;
    mapRef.current.animateCamera({center: location});
  }

  const moveToCurrentLocation = async() => {
    if ( !lastKnownLocation ) {
      moveCameraToLocation( initialLocation );
    }
    const location = await getLocation();
    if ( !location ) return;
    moveCameraToLocation(location);
  }




  return (
    <>
      <MapView
        ref={ (map) => mapRef.current = map! }
        showsUserLocation={ showsUserLocation }
        provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ flex: 1 }}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
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


        <FAB 
          iconName="compass-outline"
          onPress={ moveToCurrentLocation }
          style={{
            bottom: 20,
            right: 20,
          }}
        />
    </>
  );
};




