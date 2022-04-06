import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions } from 'react-native';
import BarcodeMask, {LayoutChangeEvent} from 'react-native-barcode-mask';
export default function ScanPage({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({bounds, data}) => {
      const {origin, size } = bounds;
    //   console.log(bounds)
        setScanned(true);
        setTimeout(() => { 
            navigation.navigate('Artwork');          
        }, 1000);

    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
            
            <BarcodeMask width={300} height={300} showAnimatedLine={false} outerMaskOpacity={0.7}
            />
        </BarCodeScanner>
        {scanned && setScanned(false)}
      </View>
    );
}
  

const styles = StyleSheet.create({
    container: {
      opacity: 1,
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    barCodeStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 844
    }
  });