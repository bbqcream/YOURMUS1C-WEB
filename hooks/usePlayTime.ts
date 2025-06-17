import { useEffect, useState } from "react";
import TrackPlayer from "react-native-track-player";

export const usePlayTime = () => {
    const [playTime, setPlayTime] = useState({
        position: 0,
        duration: 0,
        buffered: 0,
    });

    useEffect(() => {
        const interval = setInterval(async () => {
            const progress = await TrackPlayer.getProgress();
            setPlayTime(progress);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return playTime;
};
