import React from "react";
// nav
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from "./Drawer";
import ReactegisterSteps from '../Components/Resgistersteps'
// components
import { Register } from "../Screens/Register/index";
import { Welcome } from "../Screens/Welcome/index";

import { Login } from "../Screens/Login/index";
import { SplashScreen } from "../Screens/SplashScreen/index";

import { selectUser } from "../redux/selector/AuthSelector";
import { useSelector } from "react-redux";
import { Text } from "@ui-kitten/components";
// style
import { ThemeContext } from "../theme/theme-context";
import { BottomNavigator } from "./Bottom";

export function AppNavigator() {
  const { Navigator, Screen } = createStackNavigator();
  const currentUser = useSelector(selectUser);
  const { themeElements } = React.useContext(ThemeContext);
  const [loading, setLoading] = React.useState(true);
  console.log("user", currentUser);
  const onEnd = () => setLoading(false);
  if (loading) {
    return <SplashScreen onEnd={onEnd} />;
  } else {
  return (
    <NavigationContainer
      onReady={async () => {
        // setLoading(false);
        setTimeout(() => setLoading(false), 3000);
        // await RNBootSplash.hide({fade: true});
      }}
    >
    
     
        <Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: themeElements["color-background"],
            },
          }}
           initialRouteName={currentUser?.ID ? "Home" : "Welcome"}
        >
          <Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name="Register"
            component={ReactegisterSteps}
            options={{ headerShown: false }}
          />
          <Screen
            name="Home"
            component={DrawerNavigation}
            options={{ headerShown: true }}
          />
          <Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
           <Screen
            name="HomePage"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
        </Navigator>
   
    </NavigationContainer>
  )};
}
