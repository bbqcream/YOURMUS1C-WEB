import TrackPlayer, { Event } from "react-native-track-player";

export default async () => {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemoteStop, () => {
        TrackPlayer.reset();
    });
};
