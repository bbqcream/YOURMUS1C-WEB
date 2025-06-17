import { COLOR } from "@/styles/color";
import { UserprofileProps } from "@/types/UserprofileProps";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Userprofile = ({ name, link, img }: UserprofileProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => console.log(`${link}`)}
        >
            <View style={styles.imgContainer}>
                <Image source={{ uri: img }} style={styles.img} />
            </View>
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
    imgContainer: {
        width: 90,
        height: 90,
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: COLOR.gray,
    },
    img: {
        width: "100%",
        height: "100%",
    },
    title: {
        color: COLOR.white,
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
});

export default Userprofile;
