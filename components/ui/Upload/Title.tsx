import { COLOR } from "@/styles/color";
import { Text } from "react-native";

interface TitleProps {
    require: boolean;
    title: string;
}

const Title = ({ require, title }: TitleProps) => {
    return (
        <Text style={{ fontSize: 20, fontWeight: 600, color: COLOR.white }}>
            {title}
            <Text style={{ color: COLOR.red }}>{require ? "*" : ""}</Text>
        </Text>
    );
};

export default Title;
