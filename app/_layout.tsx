import TrackPlayerInitializer from "@/components/TrackPlayerInitializer";
import Player from "@/components/ui/Player";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import TrackPlayer from "react-native-track-player";
TrackPlayer.registerPlaybackService(
    () => require("@/components/trackPlayerService").default
);

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            <Player />
            <TrackPlayerInitializer />
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );
}
