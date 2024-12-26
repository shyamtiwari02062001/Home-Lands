import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { MARKERS } from './constants/markers';
import { PATHS } from './constants/paths';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        mapType="satellite"
        style={styles.map}
        initialRegion={{
          latitude: 25.62747,
          longitude: 84.4335,
          latitudeDelta: 0.00175,
          longitudeDelta: 0.00175,
        }}>
        {MARKERS.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
        <Polyline strokeColor="#4B0082" coordinates={PATHS} strokeWidth={6} />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
