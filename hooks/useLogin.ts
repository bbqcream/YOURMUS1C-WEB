import { useLoadingStore } from "@/stores/setLoadingStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";

export const useLogin = () => {
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const { setLoading } = useLoadingStore();

    const login = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:9090/auth/login", {
                username: id,
                password: pw,
            });
            if (res.status === 200 || res.status === 201) {
                router.push("/home");
                await AsyncStorage.setItem("accessToken", res.data.accessToken);
                await AsyncStorage.setItem(
                    "refreshToken",
                    res.data.refreshToken
                );
                return;
            } else {
                alert("로그인에 실패했습니다.");
                setError(false);
            }
        } catch (err: any) {
            alert("로그인에 실패했습니다.");
            console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return { login, id, setId, pw, setPw, error };
};
