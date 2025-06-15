import { COLOR } from "@/styles/color";
import Logo from "@/assets/images/logo.svg";
import { StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Logo />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${COLOR.black}`,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
