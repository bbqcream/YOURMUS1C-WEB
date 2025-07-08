import { COLOR } from "@/styles/color";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

interface TextInputProps {
    value: string;
    setValue: (text: string) => void;
    placeholder: string;
}

const CustomTextBox = ({ value, setValue, placeholder }: TextInputProps) => {
    return (
        <RNTextInput
            value={value}
            style={styles.input}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={COLOR.gray}
            multiline={true}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        display: "flex",
        width: "100%",
        backgroundColor: COLOR.black,
        height: 200,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 4,
        borderColor: COLOR.gray,
        borderWidth: 1,
        color: COLOR.white,
        fontWeight: "600",
    },
});

export default CustomTextBox;
