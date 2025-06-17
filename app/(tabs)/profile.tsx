import Nav from "@/components/ui/home/Nav";
import { COLOR } from "@/styles/color";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Nav />
            <ScrollView style={styles.wrap}>
                
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
});
