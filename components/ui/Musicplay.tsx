import Pause from "@/assets/images/pause.svg";
import Play from "@/assets/images/play.svg";
import Resume from "@/assets/images/resume.svg";
import { useMusicControlStore } from "@/stores/musicControllStore";
import { useMusicInfoStore } from "@/stores/musicInfoStore";
import { COLOR } from "@/styles/color";
import { MusicType } from "@/types/MusicType";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Musicplay = ({ music }: { music: MusicType }) => {
    const {
        isMusicSelected,
        toggleMusicSelected,
        isMusicPlaying,
        toggleMusicPlaying,
    } = useMusicControlStore();
    const { music: thisMusic, setMusic } = useMusicInfoStore();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log(music.id)}>
                <Image source={{ uri: music.artwork }} style={styles.img} />
            </TouchableOpacity>
            <View style={styles.wrap}>
                <Text style={styles.title}>{music.title}</Text>
                <Text style={styles.artist}>{music.artist}</Text>
                <View style={styles.playWrap}>
                    <Play width={7} />
                    <Text style={styles.plays}>
                        {music.plays.toLocaleString()} ·{" "}
                        {Math.floor(music.duration / 60)}:
                        {String(music.duration % 60).padStart(2, "0")}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    if (!isMusicSelected) toggleMusicSelected();
                    if (music.id !== thisMusic.id) {
                        setMusic(music);
                        toggleMusicPlaying(true);
                    } else {
                        if (isMusicPlaying) {
                            toggleMusicPlaying(false);
                        } else {
                            toggleMusicPlaying(true);
                        }
                    }
                }}
            >
                {music.id === thisMusic.id ? (
                    isMusicPlaying ? (
                        <Resume width={30} />
                    ) : (
                        <Pause width={30} />
                    )
                ) : (
                    <Pause width={30} />
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 120,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    wrap: {
        width: 160,
        gap: 5,
    },
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
