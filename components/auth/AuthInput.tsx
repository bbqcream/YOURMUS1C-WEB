import { COLOR } from "@/styles/color";
import { AuthInputProps } from "@/types/AuthInputProps";
import { StyleSheet, Text, TextInput, View } from "react-native";

const AuthInput = ({
    placeholder,
    value,
    setValue,
    isError,
    title,
    isPw,
}: AuthInputProps) => {
    return (
        <View style={styles.textWrap}>
            <Text style={styles.inputText}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.input, isError && { borderColor: COLOR.red }]}
                value={value}
                onChangeText={setValue}
                secureTextEntry={isPw}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: COLOR.black,
        borderColor: COLOR.main,
        borderWidth: 1,
        width: "100%",
        height: 50,
        paddingLeft: 20,
        borderRadius: 4,
    },
    inputText: {
        fontSize: 16,
        color: COLOR.black,
        fontWeight: 600,
    },
    textWrap: {
        alignItems: "flex-start",
        width: "100%",
        gap: 4,
    },
});

export default AuthInput;
