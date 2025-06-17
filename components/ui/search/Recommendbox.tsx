import { COLOR } from "@/styles/color";
import { RecommendboxProps } from "@/types/RecommendboxProps";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Recommendbox = ({ id, title }: RecommendboxProps) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        height: 50,
        justifyContent: "center",
        width: "100%",
        borderBottomColor: COLOR.gray,
        borderBottomWidth: 1,
    },
    text: {
        color: COLOR.white,
        fontSize: 12,
        fontWeight: 400,
    },
});

export default Recommendbox;
