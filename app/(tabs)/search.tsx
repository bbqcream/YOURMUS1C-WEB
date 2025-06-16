import { COLOR } from "@/styles/color";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
    return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${COLOR.black}`,
        height: "100%",
    },
});
