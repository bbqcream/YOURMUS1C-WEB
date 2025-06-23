import { useLoadingStore } from "@/stores/setLoadingStore";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

export const useLogin = () => {
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [error, setError] = useState<any>();
    const { setLoading } = useLoadingStore();

    const loginRes = {
        id: id,
        pw: pw,
    };

    const login = async () => {
        try {
            setLoading(true);
            const res = await axios.post(`${API_URL}/`, loginRes);
            if (res.status === 200 || res.status === 201) {
                alert("로그인에 성공했습니다.");
                await AsyncStorage.setItem("accessToken", res.data.accessToken);
                await AsyncStorage.setItem(
                    "refreshToken",
                    res.data.refeshToken
                );
                setLoading(false);
            } else {
                setError(res.status);
            }
        } catch (err) {
            alert("로그인에 실패했습니다.");
        }
    };
    return { login, id, setId, pw, setPw, error };
};
