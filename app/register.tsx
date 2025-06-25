import Logo from "@/assets/images/bluelogo.svg";
import AuthInput from "@/components/auth/AuthInput";
import { useRegister } from "@/hooks/useRegister";
import { useLoadingStore } from "@/stores/setLoadingStore";
import { COLOR } from "@/styles/color";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
    const {
        register,
        id,
        setId,
        pw,
        setPw,
        error,
        name,
        setEmail,
        email,
        setName,
        rePw,
        setRePw,
    } = useRegister();
    const { loading } = useLoadingStore();
    return (
        <SafeAreaView style={styles.container}>
            <Logo width={400} />
            <View style={styles.spacer} />
            <View style={styles.inputWrap}>
                <AuthInput
                    title="이름"
                    value={name}
                    setValue={setName}
                    isError={error}
                    placeholder="이름을 입력해주세요."
                    isPw={false}
                />
                <AuthInput
                    title="아이디"
                    value={id}
                    setValue={setId}
                    isError={error}
                    placeholder="아이디를 입력해주세요."
                    isPw={false}
                />
                <AuthInput
                    title="비밀번호"
                    value={pw}
                    setValue={setPw}
                    isError={error}
                    placeholder="비밀번호을 입력해주세요."
                    isPw={true}
                />
                <AuthInput
                    title="비밀번호 재입력"
                    value={rePw}
                    setValue={setRePw}
                    isError={error}
                    placeholder="비밀번호를 재입력해주세요."
                    isPw={true}
                />
                <AuthInput
                    title="이메일"
                    value={email}
                    setValue={setEmail}
                    isError={error}
                    placeholder="이메일을 입력해주세요."
                    isPw={false}
                />
            </View>
            <View style={styles.spacer} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (!loading) {
                        register();
                    } else {
                        console.log("로딩 중");
                    }
                }}
            >
                <Text style={styles.loginText}>
                    {!loading ? "회원가입" : "로딩중"}
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

    loginText: {
        color: COLOR.white,
        fontSize: 20,
        fontWeight: "600",
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
