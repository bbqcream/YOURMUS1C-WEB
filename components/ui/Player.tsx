import Pause from "@/assets/images/pause.svg";
import Resume from "@/assets/images/resume.svg";
import { useMusicControlStore } from "@/stores/musicControllStore";
import { COLOR } from "@/styles/color";
import { Image, StyleSheet, Text, View } from "react-native";

const Player = () => {
    const { isMusicPlaying, toggleMusicPlaying, isMusicSelected } =
        useMusicControlStore();

    if (!isMusicSelected) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.infoWrap}>
                <Image
                    source={{ uri: "https://i.pravatar.cc/100?u=4" }}
                    style={styles.album}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>넘어와 (feat. 백예린)</Text>
                    <Text style={styles.artist}>DEAN</Text>
                </View>
            </View>
            <View style={styles.controlWrap}>
                <Text style={styles.time}>0:00 / 3:30</Text>
                {isMusicPlaying ? (
                    <Pause onPress={() => toggleMusicPlaying()} width={30} />
                ) : (
                    <Resume onPress={() => toggleMusicPlaying()} width={30} />
                )}
            </View>
        </View>
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
