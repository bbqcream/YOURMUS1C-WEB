import Logo from "@/assets/images/bluelogo.svg";
import { COLOR } from "@/styles/color";
import { router } from "expo-router";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Logo width={400} />
            <View style={styles.spacer} />
            <View style={styles.inputWrap}>
                <View style={styles.textWrap}>
                    <Text style={styles.inputText}>아이디</Text>
                    <TextInput
                        placeholder="아이디를 입력해주세요."
                        style={styles.input}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.inputText}>비밀번호</Text>
                    <TextInput
                        placeholder="비밀번호를 입력해주세요."
                        style={styles.input}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.inputText}>비밀번호 재입력</Text>
                    <TextInput
                        placeholder="비밀번호를 재입력해주세요."
                        style={styles.input}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.inputText}>이메일</Text>
                    <TextInput
                        placeholder="이메일을 입력해주세요."
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.spacer} />
            <TouchableOpacity style={styles.button}>
                <Text
                    style={{
                        color: COLOR.white,
                        fontSize: 20,
                        fontWeight: 600,
                    }}
                >
                    회원가입
                </Text>
            </TouchableOpacity>
            <View style={{ height: 40 }} />
            <Text style={styles.options} onPress={() => router.push("/login")}>
                로그인
            </Text>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.white,
        paddingHorizontal: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
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
        fontWeight: "600",
    },
    textWrap: {
        alignItems: "flex-start",
        width: "100%",
        gap: 4,
    },
    spacer: {
        height: 70,
    },
    inputWrap: {
        gap: 20,
        width: "100%",
    },
    button: {
        backgroundColor: COLOR.main,
        width: "100%",
        alignItems: "center",
        borderRadius: 4,
        paddingVertical: 10,
    },
    options: {
        fontSize: 16,
        color: COLOR.main,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.main,
    },
    optionWrap: {
        gap: 12,
        alignItems: "center",
    },
});

export default Register;
