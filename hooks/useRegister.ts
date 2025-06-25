import { useLoadingStore } from "@/stores/setLoadingStore";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";

export const useRegister = () => {
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [rePw, setRePw] = useState<string>("");
    const [error, setError] = useState<any>();
    const { setLoading } = useLoadingStore();

    const registerRes = {
        username: id,
        password: pw,
        name,
        email,
    };

    const reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
    const regE = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isPw = reg.test(pw) && pw === rePw;
    const isEmail = regE.test(email);

    const register = async () => {
        if (!isPw) {
            alert(
                "비밀번호는 8~16자, 영문+숫자 조합이어야 하며, 확인 비밀번호와 일치해야 합니다."
            );
            return;
        }

        if (!registerRes.username || !registerRes.name || !registerRes.email) {
            alert("아이디, 이름, 이메일을 모두 입력해주세요.");
            return;
        }

        if (!isEmail) {
            alert("올바른 email형태가 아닙니다.");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post(
                `http://localhost:9090/auth/register`,
                registerRes
            );
            if (res.status === 200 || res.status === 201) {
                alert("회원가입에 성공했습니다.");
                router.push("/login");
            } else {
                setError(res.status);
                alert("회원가입에 실패했습니다.");
            }
        } catch (err) {
            alert("회원가입 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return {
        register,
        id,
        setId,
        pw,
        setPw,
        error,
        name,
        setName,
        email,
        setEmail,
        rePw,
        setRePw,
    };
};
