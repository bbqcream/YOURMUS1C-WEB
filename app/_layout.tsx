import Player from "@/components/ui/Player";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import TrackPlayer, { Capability } from "react-native-track-player";
TrackPlayer.registerPlaybackService(
    () => require("@/components/trackPlayerService").default
);

export default function RootLayout() {
    useEffect(() => {
        async function setup() {
            await TrackPlayer.setupPlayer();

            await TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.SeekTo,
                ],
                compactCapabilities: [Capability.Play, Capability.Pause],
            });
        }
        setup();
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            <Player />
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );
}
