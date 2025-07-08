import Logo from "@/assets/images/logo.svg";
import { COLOR } from "@/styles/color";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function CommunityScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.wrap}>
                <Logo />
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${COLOR.black}`,
        height: "100%",
    },
    wrap: {
        paddingHorizontal: 10,
    },
    logo: {
        width: 1000,
        height: 1000,
    },
});
