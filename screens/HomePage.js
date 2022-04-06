import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, Image, SafeAreaView, } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export default function HomePage() {
    const [searchInput, setSearchInput] = useState(""); 

    return (
      <ScrollView contentContainerStyle={styles.container}
                  scrollEnabled={true}
      >
        <View style={styles.searchBar}>
          <Image
            style={styles.searchBarImage}
            source={require("../images/search_bar.png")} 
          />
          <Image
            style={{
              bottom: responsiveHeight(4),
              left: responsiveWidth(5)
            }}
            source={require("../images/Union.png")} 
          />
          <Image
            style={{
              bottom: responsiveHeight(6.2),
              left: responsiveWidth(83)
            }}
            source={require("../images/mic.png")} 
          />
          <TextInput
            style={styles.input}
            onChangeText={setSearchInput}
            value={searchInput}
            placeholder="Where do you want to go?"
          />
        </View>
        <Image
            style={{right: responsiveWidth(43), bottom: responsiveHeight(1.3)}}
            source={require("../images/filter.png")} 
        />
        <Text style={styles.primaryTitle}>
          Explore Museums
        </Text>
        <Text style={styles.subText}>
          See what museums people are going to...
        </Text>
        <Text style={{...styles.subText,
              marginTop: 5,
              right: responsiveWidth(39),
              fontWeight: '600',
              padding: 16,
              color: 'black'}}>
          Trending
        </Text>
        <View style={styles.trendingLocations}>
          <Image
              style={{marginLeft: 55}}
              source={require("../images/Denmark.png")} 
          />
          <Image
              style={{marginLeft: 15}}
              source={require("../images/Canada.png")} 
          />
          <Image
              style={{marginLeft: 15}}
              source={require("../images/Chicago.png")} 
          />
        </View>

        <View style={styles.buttons}>
          <Image
              source={require("../images/buttons.png")} 
          />
        </View>

        <Image
            style={{right: responsiveWidth(20.1)}}
            source={require("../images/whats_on.png")} 
        />
        <Image
            style={{left: responsiveWidth(6)}}
            source={require("../images/carouselwhatson.png")} 
        />
        <Image
            style={{right: responsiveWidth(17.2)}}
            source={require("../images/Recommended.png")} 
        />
        <Image
            style={{left: responsiveWidth(4)}}
            source={require("../images/Carousel.png")} 
        />
        <Image
            style={{right: responsiveWidth(17.2)}}
            source={require("../images/Interactive.png")} 
        />
        <Image
            style={{left: responsiveWidth(4)}}
            source={require("../images/Carousel.png")} 
        />
        <Image
            style={{right: responsiveWidth(17.2)}}
            source={require("../images/Special_Event.png")} 
        />
        <Image
            style={{left: responsiveWidth(4)}}
            source={require("../images/Carousel.png")} 
        />
      </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    searchBar: {
      top: responsiveHeight(6),
    },
    input: {
      bottom: responsiveHeight(10.5),
      left: responsiveWidth(11.5),
      height: responsiveHeight(6.16),
      width: responsiveWidth(80)
    },
    primaryTitle: {
      right: responsiveWidth(12.5),
      padding: 5,
      fontWeight: '700',
      lineHeight: 40,
      fontSize: 32
    },
    subText: {
      marginTop: -6,
      right: responsiveWidth(16),
      fontWeight: '400',
      lineHeight: 16,
      fontSize: 12,
      color: '#7D7D7D'
    },
    trendingLocations: {
      flex: 1,
      flexDirection: 'row',
    },
    buttons: {
      left: responsiveWidth(7), 
      padding: responsiveHeight(2)
    },
    searchBarImage: {
      width: 360,
      height: 50,
      resizeMode: 'contain'
  }
  });
  
