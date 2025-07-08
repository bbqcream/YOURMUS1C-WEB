import { COLOR } from "@/styles/color";
import { Text } from "react-native";

interface TitleProps {
    title: string;
}

const SmallTitle = ({ title }: TitleProps) => {
    return (
        <Text style={{ fontSize: 16, fontWeight: 600, color: COLOR.white }}>
            {title}
        </Text>
    );
};

export default SmallTitle;
