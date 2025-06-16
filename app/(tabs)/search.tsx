import { COLOR } from "@/styles/color";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.wrap}></ScrollView>
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
