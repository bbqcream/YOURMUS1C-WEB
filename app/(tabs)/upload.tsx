import Button from "@/components/ui/common/Button";
import CustomTextBox from "@/components/ui/common/CustomTextBox";
import CustomTextInput from "@/components/ui/common/CustomTextInput";
import Nav from "@/components/ui/home/Nav";
import SmallTitle from "@/components/ui/Upload/SmallTitle";
import Title from "@/components/ui/Upload/Title";
import { genres } from "@/data/genres";
import { COLOR } from "@/styles/color";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function UploadScreen() {
    const [title, setTitle] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [info, setInfo] = useState("");
    const [lyricist, setLyricist] = useState("");
    const [composer, setComposer] = useState("");
    const [arranger, setArranger] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <Nav />
            <ScrollView style={styles.wrap}>
                <View style={styles.contentContainer}>
                    <View style={styles.genreWrap}>
                        <Title title="노래 제목" require={true} />
                        <CustomTextInput
                            placeholder="제목을 입력해주세요."
                            value={title}
                            setValue={setTitle}
                        />
                    </View>
                    <View style={styles.genreWrap}>
                        <Title title="장르" require={true} />
                        <View style={styles.genres}>
                            {genres.map((i: any) => {
                                return <Button title={i} key={i} />;
                            })}
                        </View>
                    </View>
                    <View style={styles.contentWrap}>
                        <Title title="가사" require={false} />
                        <CustomTextBox
                            placeholder="가사를 입력해주세요."
                            value={lyrics}
                            setValue={setLyrics}
                        />
                    </View>
                    <View style={styles.contentWrap}>
                        <Title title="노래 정보" require={false} />
                        <CustomTextBox
                            placeholder="가사를 입력해주세요."
                            value={info}
                            setValue={setInfo}
                        />
                    </View>
                    <View style={styles.contentWrap}>
                        <Title title="크레딧" require={false} />
                        <View style={styles.contentWrap}>
                            <SmallTitle title="작사" />
                            <CustomTextInput
                                placeholder="작사가를 입력해주세요."
                                value={lyricist}
                                setValue={setLyricist}
                            />
                        </View>
                        <View style={styles.contentWrap}>
                            <SmallTitle title="작곡" />
                            <CustomTextInput
                                placeholder="작곡가를 입력해주세요."
                                value={composer}
                                setValue={setComposer}
                            />
                        </View>
                        <View style={styles.contentWrap}>
                            <SmallTitle title="편곡" />
                            <CustomTextInput
                                placeholder="편곡가를 입력해주세요."
                                value={arranger}
                                setValue={setArranger}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.black,
        flex: 1,
    },
    wrap: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    input: {
        width: "100%",
    },
    contentContainer: {
        width: "100%",
        gap: 20,
    },
    contentWrap: {
        width: "100%",
        gap: 10,
    },
    genreWrap: {
        width: "60%",
        gap: 10,
    },
    genres: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
    },
});
