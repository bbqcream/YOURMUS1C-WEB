import Chat from "@/assets/images/chat.svg";
import Heart from "@/assets/images/heart.svg";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Nav = () => {
    return (
        <View style={styles.navWrap}>
            <Image
                source={require("@/assets/images/logo.png")}
                style={{ width: 176, height: 21 }}
            />
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
