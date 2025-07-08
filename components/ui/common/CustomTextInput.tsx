import { COLOR } from "@/styles/color";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

interface TextInputProps {
    value: string;
    setValue: (text: string) => void;
    placeholder: string;
}

const CustomTextInput = ({ value, setValue, placeholder }: TextInputProps) => {
    return (
        <RNTextInput
            value={value}
            style={styles.input}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={COLOR.gray}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: COLOR.black,
        height: 50,
        borderColor: COLOR.gray,
        borderBottomWidth: 1,
        color: COLOR.white,
        fontWeight: "600",
    },
});

export default CustomTextInput;
