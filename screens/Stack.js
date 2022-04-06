import { createStackNavigator } from '@react-navigation/stack';
import ScanPage from "./ScanPage";
import ArtworkPage from "./ArtworkPage"
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ScanStack() {
    return (
        <Stack.Navigator
            initialRouteName="Scan"
            screenOptions={({ route, navigation }) => ({
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.DefaultTransition,
        })}
        >
          <Stack.Screen name="Scan" component={ScanPage} />
          <Stack.Screen headerShown={false} name="Artwork" component={ArtworkPage}/>
        </Stack.Navigator>
      );
}