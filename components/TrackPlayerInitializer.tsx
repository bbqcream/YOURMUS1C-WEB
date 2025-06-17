import { useEffect } from "react";
import TrackPlayer, { Capability } from "react-native-track-player";

export default function TrackPlayerInitializer() {
    useEffect(() => {
        const setup = async () => {
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
            } catch (error) {
                console.error(error);
            }
        };

        setup();
    }, []);

    return null;
}
