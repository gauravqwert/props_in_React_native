import Home from "./screens/Home";
import Message from "./screens/Message";
import Profile from "./screens/Profile";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={true}
        initialRouteName="Home"
        activeColor="#f0eded"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Message" component={Message} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
