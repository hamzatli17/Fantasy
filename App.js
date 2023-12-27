import "react-native-gesture-handler"; // must be top most import
// ui
import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { ThemeContext } from "./App/theme/theme-context";
import appTheme from "./App/theme";
import { Mymapping } from "./App/theme/mapping.js";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
// nav
import { AppNavigator } from "./App/navigation";
// localization
import { I18nextProvider } from "react-i18next";
import i18n from "./App/localization/i18n";
// redux
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./App/redux/store";
// components
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import ErrorBoundary from "./ErrorBoundary";
import LinearGradient from "react-native-linear-gradient";

// toast config
const toastConfig = {
  success: (props) => (
    <BaseToast {...props} text1NumberOfLines={2} text2NumberOfLines={4} />
  ),
  error: (props) => (
    <ErrorToast {...props} text1NumberOfLines={2} text2NumberOfLines={4} />
  ),
};

function getRootRenderingTarget() {
  return <AppNavigator />;
}

const App = () => {
  const [theme, setTheme] = useState("light");
  const persistor = persistStore(store);
  function toggleTheme(value) {
    const nextTheme = theme === "light" ? "light" : "light";
    setTheme(nextTheme);
  }

  return (
    <ErrorBoundary>
      <SafeAreaView
        style={{
          flex: 1,
         // backgroundColor: theme === "light" ? "#000317" : "#000317",
        }}
      >
         <LinearGradient
      colors={["#000317", "#000041"]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{
        borderRadius: 10,

        flex: 1,

       // opacity: 0.5,
        width: "100%",
        height: '200%',
        position:'absolute',

        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center'
      }}
    >
       </LinearGradient>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        <IconRegistry icons={EvaIconsPack} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n}>
              <ThemeContext.Provider
                value={{
                  themeElements: appTheme[theme],
                  theme,
                  toggleTheme,
                }}
              >
                <ApplicationProvider
                  {...eva}
                  theme={{ ...eva[theme], ...appTheme[theme] }}
                  customMapping={Mymapping}
                >
                  {getRootRenderingTarget()}
                  <Toast config={toastConfig} />
                </ApplicationProvider>
              </ThemeContext.Provider>
            </I18nextProvider>
          </PersistGate>
        </Provider>
       
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default App;
