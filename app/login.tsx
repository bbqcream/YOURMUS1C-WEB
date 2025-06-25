import Logo from "@/assets/images/bluelogo.svg";
import LoginInput from "@/components/auth/AuthInput";
import { useLogin } from "@/hooks/useLogin";
import { useLoadingStore } from "@/stores/setLoadingStore";
import { COLOR } from "@/styles/color";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    const { id, setId, pw, setPw, login, error } = useLogin();
    const { loading } = useLoadingStore();
    return (
        <SafeAreaView style={styles.container}>
            <Logo width={250} height={60} />
            <View style={styles.spacer} />
            <View style={styles.inputWrap}>
                <LoginInput
                    placeholder="아이디를 입력해주세요."
                    value={id}
                    setValue={setId}
                    isError={error}
                    title="아이디"
                    isPw={false}
                />
                <LoginInput
                    placeholder="비밀번호를 입력해주세요."
                    value={pw}
                    setValue={setPw}
                    isError={error}
                    title="비밀번호"
                    isPw={true}
                />
            </View>
            <View style={styles.spacer} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (!loading) {
                        login();
                    } else {
                        console.log("로딩 중");
                    }
                }}
            >
                <Text style={styles.loginText}>
                    {!loading ? "로그인" : "로딩중"}
                </Text>
            </TouchableOpacity>
            <View style={{ height: 40 }} />
            <View style={styles.optionWrap}>
                <Text
                    style={styles.options}
                    onPress={() => router.push("/register")}
                >
                    회원가입
                </Text>
                <TouchableOpacity>
                    <Text style={styles.options}>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
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
        fontWeight: 600,
    },
    textWrap: {
        alignItems: "flex-start",
        width: "100%",
        gap: 4,
    },
    loginText: {
        color: COLOR.white,
        fontSize: 20,
        fontWeight: "600",
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

export default Login;
