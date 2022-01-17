import React from 'react'
import { Image, StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomePage"
import ScanScreen from "./ScanPage"
import SavedScreen from "./SavedPage"
import AccountScreen from "./AccountPage"

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                     headerShown: false,
                     tabBarStyle: {height: responsiveHeight(10.22), paddingTop: responsiveHeight(1.3)},
                     tabBarLabelStyle: {paddingBottom: responsiveHeight(2.7)},
                     tabBarActiveTintColor: "#026670",
                     tabBarInactiveTintColor: "#7D7D7D",}}
            >
                <Tab.Screen 
                    name="EXPLORE" 
                    component={HomeScreen}
                    options={{
                        tabBarIcon : ({ focused }) => {
                            return (focused ?
                                <Image  
                                source={require("../images/active_explore.png")} 
                            /> : <Image  
                            source={require("../images/inactive_explore.png")}/>
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="SCAN" 
                    component={ScanScreen}
                    options={{
                        tabBarIcon : ({ focused }) => {
                            return (focused ?
                                <Image  
                                source={require("../images/active_scan.png")} 
                            /> : <Image  
                            source={require("../images/inactive_scan.png")}/>
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="SAVED" 
                    component={SavedScreen}
                    options={{
                        tabBarIcon : ({ focused }) => {
                            return (focused ?
                                <Image  
                                source={require("../images/active_saved.png")} 
                            /> : <Image  
                            source={require("../images/inactive_saved.png")}/>
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="ACCOUNT" 
                    component={AccountScreen}
                    options={{
                        tabBarIcon : ({ focused }) => {
                            return (focused ?
                                <Image  
                                source={require("../images/active_account.png")} 
                            /> : <Image  
                            source={require("../images/inactive_account.png")}/>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})