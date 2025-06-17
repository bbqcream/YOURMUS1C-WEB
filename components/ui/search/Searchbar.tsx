import Search from "@/assets/images/search.svg";
import { COLOR } from "@/styles/color";
import { StyleSheet, TextInput, View } from "react-native";

const Searchbar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="검색어를 입력하세요."
                placeholderTextColor={COLOR.gray}
            />
            <View style={styles.iconWrapper}>
                <Search width={20} height={20} fill={COLOR.white} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        position: "relative",
    },
    input: {
        backgroundColor: COLOR.black,
        height: "100%",
        borderColor: COLOR.gray,
        borderWidth: 1,
        borderRadius: 50,
        color: COLOR.white,
        paddingHorizontal: 20,
        fontWeight: "600",
        paddingRight: 50,
    },
    iconWrapper: {
        position: "absolute",
        right: 15,
        top: "50%",
        transform: [{ translateY: -10 }],
    },
});

export default Searchbar;
