import { COLOR } from "@/styles/color";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

interface ButtonProps {
    title: string;
}

const Button = ({ title }: ButtonProps) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Pressable onPress={() => setIsClicked(!isClicked)}>
            <View
                style={{
                    alignSelf: "flex-start",
                    backgroundColor: isClicked ? COLOR.white : COLOR.black,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 20,
                    borderColor: COLOR.white,
                    borderWidth: 1,
                }}
            >
                <Text style={{ color: isClicked ? COLOR.black : COLOR.white }}>
                    {title}
                </Text>
            </View>
        </Pressable>
    );
};

export default Button;
