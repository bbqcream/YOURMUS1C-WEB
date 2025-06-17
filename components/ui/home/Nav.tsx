import Chat from "@/assets/images/chat.svg";
import Heart from "@/assets/images/heart.svg";
import Logo from "@/assets/images/logo.svg";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";

const Nav = () => {
    return (
        <View style={styles.navWrap}>
            <Logo height={20} />
            <View style={styles.navOptionWrap}>
                <TouchableOpacity>
                    <Heart width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Chat width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navWrap: {
        paddingTop: Platform.OS === "android" ? 50 : 0,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
    },
    navOptionWrap: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
});

export default Nav;
