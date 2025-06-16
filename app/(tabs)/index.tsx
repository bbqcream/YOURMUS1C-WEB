import Musicplay from "@/components/ui/Musicplay";
import Nav from "@/components/ui/Nav";
import Userprofile from "@/components/ui/Userprofile";
import { COLOR } from "@/styles/color";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Nav />
            <ScrollView style={styles.wrap}>
                <View style={styles.spacer} />
                <Text style={styles.header}>요즘 뜨는 아티스트</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.userprofileContent}
                >
                    <Userprofile
                        img="https://i.pravatar.cc/100?u=1"
                        name="DEAN"
                        link=""
                    />
                </ScrollView>
                <View style={styles.spacer} />
                <Text style={styles.header}>나와 어울리는 노래</Text>
                <View style={styles.musicWrap}>
                    <Musicplay
                        img="https://i.pravatar.cc/100?u=2"
                        title="넘어와 (feat. 백예린)"
                        artist="DEAN"
                        runningtime="4:31"
                        plays="5000"
                        isPlay={true}
                        link=""
                    />
                    <Musicplay
                        img="https://i.pravatar.cc/100?u=10"
                        title="넘어와 (feat. 백예린)"
                        artist="DEAN"
                        runningtime="4:31"
                        plays="5000"
                        isPlay={true}
                        link=""
                    />
                </View>
                <View style={styles.spacer} />
                <Text style={styles.header}>과거에 들어본 아티스트</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.userprofileContent}
                >
                    <Userprofile
                        img="https://i.pravatar.cc/100?u=4"
                        name="DEAN"
                        link=""
                    />
                </ScrollView>
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.black,
        flex: 1,
        paddingBottom: 30,
    },
    navWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 30,
    },
    navOptionWrap: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    header: {
        color: COLOR.white,
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 8,
    },
    spacer: {
        height: 30,
    },
    musicWrap: {
        flexDirection: "column",
        gap: 10,
    },
    wrap: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    userprofileContent: {
        flexDirection: "row",
        paddingVertical: 10,
    },
});
