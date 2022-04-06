import React from 'react'
import { StyleSheet, SafeAreaView, Text, ScrollView, View, Image, ImageBackground } from 'react-native'

export default function ArtworkPage({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}
              scrollEnabled={true}
          >
            <Text
              style={styles.backText}
              onPress={() => navigation.goBack()}
            >
              Back
            </Text>
            <ImageBackground
              style={{marginTop: 24, height: 327}}
              source={require('../images/Artwork.png')}
            >
              <Image
                style={{marginLeft: 340, marginTop: 22.75}}
                source={require('../images/zoom_out_map.png')}
              
              />
            </ImageBackground>
            <View style={{alignItems: 'center',}}>
              <Image
                  style={{ resizeMode: 'contain',
                    width: 400, marginTop: -10}}
                  source={require('../images/All.png')}
                />
              {/* <Image
                  style={{marginTop: 8, resizeMode: 'contain',
                          width: 360}}
                  source={require('../images/artist_desc.png')}
                
              />
              <Image
                  style={{marginTop: 16, marginLeft: 20}}
                  source={require('../images/Socials.png')}
              />
              <Image
                style={{marginTop: 5, resizeMode:"contain", width: 394}}
                source={require('../images/Information.png')}
              />

              <Image
                style={{resizeMode: "contain", width: 370}}
                source={require('../images/artist_info.png')}
              /> */}
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    backText: {
      marginLeft: 16,
      color: "#026670",
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20,
    }
  });
  