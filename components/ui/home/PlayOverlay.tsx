import Back from "@/assets/images/back.svg";
import Next from "@/assets/images/next.svg";
import Pause from "@/assets/images/pause.svg";
import Previous from "@/assets/images/previous.svg";
import Resume from "@/assets/images/resume.svg";
import { usePlayTime } from "@/hooks/usePlayTime";
import { useMusicControlStore } from "@/stores/musicControllStore";
import { useMusicInfoStore } from "@/stores/musicInfoStore";
import { COLOR } from "@/styles/color";
import { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    Easing,
    Image,
    PanResponder,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import TrackPlayer from "react-native-track-player";

const { height, width } = Dimensions.get("window");
const NAV_HEIGHT = 80;

const PlayOverlay = ({ onClose }: { onClose: () => void }) => {
    const [startSeek, setStartSeek] = useState(0);
    const { isMusicPlaying, toggleMusicPlaying } = useMusicControlStore();
    const { position, duration } = usePlayTime();
    const { music } = useMusicInfoStore();
    const slideAnim = useRef(new Animated.Value(height)).current;
    const [seek, setSeek] = useState(position);
    const [isSeeking, setIsSeeking] = useState(false);

    useEffect(() => {
        if (!isSeeking) {
            setSeek(position);
        }
    }, [position]);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => false,
            onPanResponderGrant: () => {
                setIsSeeking(true);
                setStartSeek(seek);
            },
            onPanResponderRelease: async (_, gestureState) => {
                const deltaX = gestureState.dx;
                if (Math.abs(deltaX) < 5) {
                    setIsSeeking(false);
                    return;
                }

                const finalSeek = Math.min(
                    Math.max(0, startSeek + (deltaX / width) * duration),
                    duration
                );
                await TrackPlayer.seekTo(finalSeek);
                setSeek(finalSeek);
                setIsSeeking(false);
            },
        })
    ).current;

    const barResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setIsSeeking(true);
                setStartSeek(seek);
            },
            onPanResponderMove: (_, gestureState) => {
                const deltaX = gestureState.dx;
                const seekPercent = deltaX / width;
                const newSeek = Math.min(
                    Math.max(0, startSeek + seekPercent * duration),
                    duration
                );
                setSeek(newSeek);
            },
            onPanResponderRelease: async (_, gestureState) => {
                const deltaX = gestureState.dx;

                if (Math.abs(deltaX) < 5) {
                    setIsSeeking(false);
                    return;
                }

                const finalSeek = Math.min(
                    Math.max(0, startSeek + (deltaX / width) * duration),
                    duration
                );
                await TrackPlayer.seekTo(finalSeek);
                setSeek(finalSeek);
                setIsSeeking(false);
            },
        })
    ).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
        }).start();
    }, []);

    const handleClose = () => {
        Animated.timing(slideAnim, {
            toValue: height,
            duration: 300,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start(() => {
            onClose();
        });
    };

    return (
        <Animated.ScrollView
            style={[styles.overlay, { transform: [{ translateY: slideAnim }] }]}
            {...panResponder.panHandlers}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Back width={20} height={20} onPress={handleClose} />
                <View style={styles.spacer} />
                <Image source={{ uri: music.artwork }} style={styles.album} />
                <View style={styles.infoWrap}>
                    <Text style={styles.title}>{music.title}</Text>
                    <Text style={styles.artist}>{music.artist}</Text>
                </View>
                <View style={styles.spacer} />
                {/* Seek Bar */}
                <View
                    {...barResponder.panHandlers}
                    style={{
                        flexDirection: "row",
                        width: width,
                        height: 6,
                        backgroundColor: COLOR.gray,
                        borderRadius: 3,
                        overflow: "hidden",
                    }}
                >
                    <View
                        style={{
                            width: width * (seek / duration),
                            backgroundColor: COLOR.white,
                            height: 6,
                        }}
                    />
                </View>
                <View style={{ backgroundColor: COLOR.gray, flex: 1 }} />
                <View style={{ marginTop: 5 }} />
                <View style={styles.runTimeWrap}>
                    <Text style={styles.time}>
                        {Math.floor(position / 60)}:
                        {String(Math.floor(position % 60)).padStart(2, "0")}
                    </Text>
                    <Text style={styles.time}>
                        {Math.floor(duration / 60)}:
                        {String(Math.floor(duration % 60)).padStart(2, "0")}
                    </Text>
                </View>
                <View style={styles.controlWrap}>
                    <Previous width={20} height={20} />
                    {isMusicPlaying ? (
                        <Resume
                            onPress={async () => {
                                await TrackPlayer.pause();
                                toggleMusicPlaying(false);
                            }}
                            width={50}
                            height={50}
                        />
                    ) : (
                        <Pause
                            onPress={async () => {
                                await TrackPlayer.play();
                                toggleMusicPlaying(true);
                            }}
                            width={50}
                            height={50}
                        />
                    )}
                    <Next width={20} height={20} />
                </View>
                <View style={styles.spacer} />
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>가사</Text>
                    <Text style={styles.detail}>
                        {music.lyrics !== ""
                            ? music.lyrics
                            : "가사가 없습니다."}
                    </Text>
                </View>
                <View style={styles.spacer} />
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>크레딧</Text>
                    <View style={styles.detailWrap}>
                        {music.lyricist && (
                            <Text style={styles.detail}>
                                작사 | {music.lyricist}
                            </Text>
                        )}
                        {music.composer && (
                            <Text style={styles.detail}>
                                작곡 | {music.composer}
                            </Text>
                        )}
                        {music.arranger && (
                            <Text style={styles.detail}>
                                편곡 | {music.arranger}
                            </Text>
                        )}
                    </View>
                </View>
                <View style={styles.spacer} />
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>노래 정보</Text>
                    <Text style={styles.detail}>
                        {music.description !== ""
                            ? music.description
                            : "노래 정보가 없습니다."}
                    </Text>
                </View>
                <View style={styles.spacer} />
            </ScrollView>
        </Animated.ScrollView>
    );
};
const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        left: 0,
        width: "100%",
        bottom: NAV_HEIGHT,
        height: height - NAV_HEIGHT,
        backgroundColor: COLOR.black,
        zIndex: 10000,
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    container: {
        alignItems: "center",
        paddingVertical: 20,
    },
    spacer: {
        height: 30,
    },
    musicbar: {
        backgroundColor: COLOR.dark,
    },
    album: {
        width: "100%",
        height: width,
        marginBottom: 20,
        borderRadius: 4,
    },
    title: {
        color: COLOR.white,
        fontSize: 24,
        fontWeight: "600",
    },
    artist: {
        color: COLOR.white,
        fontSize: 20,
        fontWeight: "400",
    },
    infoWrap: {
        width: "100%",
        alignItems: "flex-start",
    },
    controlWrap: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
    },
    runTimeWrap: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    time: {
        color: COLOR.white,
        fontSize: 12,
        fontWeight: "300",
    },
    infoContainer: {
        width: "100%",
        gap: 10,
    },
    header: {
        color: COLOR.white,
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 8,
    },
    detail: {
        fontSize: 16,
        fontWeight: "600",
        color: COLOR.white,
    },
    detailWrap: {
        gap: 2,
    },
});

export default PlayOverlay;
