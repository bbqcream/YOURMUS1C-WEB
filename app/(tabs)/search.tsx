import Recommendbox from "@/components/ui/search/Recommendbox";
import Searchbar from "@/components/ui/search/Searchbar";
import { COLOR } from "@/styles/color";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <View style={styles.wrap}>
                        <View style={styles.spacer} />
                        <Searchbar />
                        <ScrollView style={styles.recWrap}>
                            <Recommendbox id={1} title="안녕" />
                            <Recommendbox id={1} title="안녕" />
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
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
        gap: 50,
    },
    spacer: {
        height: 30,
    },
    recWrap: {
        width: "100%",
        height: "100%",
    },
});
