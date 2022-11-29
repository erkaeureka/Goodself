// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { PostIndex } from "./src/scenes/posts";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import {
  Colors,
  Header,
  LearnMoreLinks,
} from "react-native/Libraries/NewAppScreen";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? "light-content" : "dark-content"}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}
            >
              {/* <Header /> */}
              <PostIndex />
            </ScrollView>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
}
