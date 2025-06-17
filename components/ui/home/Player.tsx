import Pause from "@/assets/images/pause.svg";
import Resume from "@/assets/images/resume.svg";
import { usePlayTime } from "@/hooks/usePlayTime";
import { useMusicControlStore } from "@/stores/musicControllStore";
import { useMusicInfoStore } from "@/stores/musicInfoStore";
import { COLOR } from "@/styles/color";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TrackPlayer from "react-native-track-player";
import PlayOverlay from "./PlayOverlay";

const Player = () => {
    const { isMusicPlaying, toggleMusicPlaying, isMusicSelected } =
        useMusicControlStore();
    const { music } = useMusicInfoStore();
    const { position, duration } = usePlayTime();
    const [showOverlay, setShowOverlay] = useState(false);

    if (!isMusicSelected) {
        return null;
    }
    return (
        <>
            <TouchableOpacity onPress={() => setShowOverlay(!showOverlay)}>
                <View style={styles.container}>
                    <View style={styles.infoWrap}>
                        <Image
                            source={{ uri: music.artwork }}
                            style={styles.album}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{music.title}</Text>
                            <Text style={styles.artist}>{music.artist}</Text>
                        </View>
                    </View>
                    <View style={styles.controlWrap}>
                        <Text style={styles.time}>
                            {Math.floor(position / 60)}:
                            {String(Math.floor(position % 60)).padStart(2, "0")}{" "}
                            / {Math.floor(duration / 60)}:
                            {String(Math.floor(duration % 60)).padStart(2, "0")}
                        </Text>
                        {isMusicPlaying ? (
                            <Resume
                                onPress={async () => {
                                    await TrackPlayer.pause();
                                    toggleMusicPlaying(false);
                                }}
                                width={30}
                                height={30}
                            />
                        ) : (
                            <Pause
                                onPress={async () => {
                                    await TrackPlayer.play();
                                    toggleMusicPlaying(true);
                                }}
                                width={30}
                                height={30}
                            />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
            {showOverlay && (
                <PlayOverlay onClose={() => setShowOverlay(false)} />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 90,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLOR.dark,
        backgroundColor: COLOR.black,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        zIndex: 999,
    },
    infoWrap: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    controlWrap: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    textContainer: {
        gap: 2,
    },
    album: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    title: {
        color: COLOR.white,
        fontSize: 12,
        fontWeight: "600",
    },
    artist: {
        color: COLOR.white,
        fontSize: 10,
        fontWeight: "400",
    },
    time: {
        color: COLOR.gray,
        fontSize: 10,
        fontWeight: "400",
    },
});

export default Player;
