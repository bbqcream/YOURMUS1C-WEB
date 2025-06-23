import { useEffect, useRef } from "react";
import TrackPlayer, { Capability } from "react-native-track-player";

export default function TrackPlayerInitializer() {
    const isInitialized = useRef(false);

    useEffect(() => {
        const setup = async () => {
            if (isInitialized.current) return;
            isInitialized.current = true;

            try {
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
                console.log("TrackPlayer successfully initialized");
            } catch (error) {
                console.log("TrackPlayer setup error:", error);
            }
        };

        setup();
    }, []);

    return null;
}
