import Back from "@/assets/images/back.svg";
import Next from "@/assets/images/next.svg";
import Pause from "@/assets/images/pause.svg";
import Previous from "@/assets/images/previous.svg";
import Resume from "@/assets/images/resume.svg";
import { usePlayTime } from "@/hooks/usePlayTime";
import { useMusicControlStore } from "@/stores/musicControllStore";
import { useMusicInfoStore } from "@/stores/musicInfoStore";
import { COLOR } from "@/styles/color";
import { useEffect, useRef } from "react";
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
    const { isMusicPlaying, toggleMusicPlaying } = useMusicControlStore();
    const { position, duration } = usePlayTime();
    const { music } = useMusicInfoStore();
    const slideAnim = useRef(new Animated.Value(height)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) =>
                Math.abs(gestureState.dy) > 10,

            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    slideAnim.setValue(gestureState.dy);
                }
            },

            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 300) {
                    Animated.timing(slideAnim, {
                        toValue: height,
                        duration: 200,
                        useNativeDriver: true,
                    }).start(() => onClose());
                } else {
                    Animated.spring(slideAnim, {
                        toValue: 0,
                        useNativeDriver: true,
                    }).start();
                }
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
    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
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
        <Animated.View
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
                {/* 재생바 */}
                <View style={styles.spacer} />
                <View
                    style={{
                        flexDirection: "row",
                        width: width,
                        height: 4,
                        borderRadius: 4,
                        overflow: "hidden",
                    }}
                >
                    {/* 진행된 부분 */}
                    <View
                        style={{
                            backgroundColor: COLOR.white,
                            width: width * (position / duration),
                            height: 4,
                            borderRadius: 4,
                            overflow: "hidden",
                        }}
                    />

                    {/* 남은 부분 */}
                    <View style={{ backgroundColor: COLOR.gray, flex: 1 }} />
                </View>
                {/* 재생 시간 */}
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
                {/* 가사 */}
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>가사</Text>
                    <Text style={styles.detail}>
                        {music.lyrics !== "" ? (
                            <Text style={styles.detail}>{music.lyrics}</Text>
                        ) : (
                            <Text style={styles.detail}>가사가 없습니다.</Text>
                        )}
                    </Text>
                </View>
                <View style={styles.spacer} />
                {/* 크레딧 */}
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>크레딧</Text>
                    <View style={styles.detailWrap}>
                        {music.lyricist !== "" && (
                            <Text style={styles.detail}>
                                작사 | {music.lyricist}
                            </Text>
                        )}
                        {music.composer !== "" && (
                            <Text style={styles.detail}>
                                작곡 | {music.composer}
                            </Text>
                        )}
                        {music.arranger !== "" && (
                            <Text style={styles.detail}>
                                편곡 | {music.arranger}
                            </Text>
                        )}
                    </View>
                </View>
                <View style={styles.spacer} />
                {/* 노래 정보 */}
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>노래 정보</Text>
                    <Text style={styles.detail}>
                        {music.description !== "" ? (
                            <Text style={styles.detail}>
                                {music.description}
                            </Text>
                        ) : (
                            <Text style={styles.detail}>
                                노래 정보가 없습니다.
                            </Text>
                        )}
                    </Text>
                </View>
                <View style={styles.spacer} />
            </ScrollView>
        </Animated.View>
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
        gap: 20,
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
