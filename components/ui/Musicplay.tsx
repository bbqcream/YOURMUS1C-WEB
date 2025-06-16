import Pause from "@/assets/images/pause.svg";
import Play from "@/assets/images/play.svg";
import Resume from "@/assets/images/resume.svg";
import { useMusicControlStore } from "@/stores/musicControllStore";
import { COLOR } from "@/styles/color";
import { MusicplayProps } from "@/types/MusicplayProps";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Musicplay = ({
    img,
    title,
    artist,
    link,
    runningtime,
    plays,
}: MusicplayProps) => {
    const [isPlay, setIsPlay] = useState(false);
    const { isMusicSelected, toggleMusicSelected } = useMusicControlStore();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log(link)}>
                <Image source={{ uri: img }} style={styles.img} />
            </TouchableOpacity>
            <View style={styles.wrap}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>
                <View style={styles.playWrap}>
                    <Play width={5} />
                    <Text style={styles.plays}>
                        {plays} · {runningtime}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPressOut={() => {
                    setIsPlay((prev) => !prev);
                    {!isMusicSelected ? toggleMusicSelected() : ""}
                }}
            >
                {isPlay ? <Resume width={30} /> : <Pause width={30} />}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 120,
        gap: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    wrap: {},
    img: {
        height: 120,
        width: 120,
        borderRadius: 4,
    },
    title: {
        color: COLOR.white,
        fontSize: 18,
        fontWeight: "600",
    },
    artist: {
        color: COLOR.white,
        fontWeight: "400",
        fontSize: 14,
    },
    playWrap: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    plays: {
        fontSize: 12,
        color: COLOR.dark,
    },
});

export default Musicplay;
