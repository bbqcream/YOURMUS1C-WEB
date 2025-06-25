import Community from "@/assets/images/community.svg";
import Home from "@/assets/images/home.svg";
import Profile from "@/assets/images/profile.svg";
import Search from "@/assets/images/search.svg";
import Upload from "@/assets/images/upload.svg";
import { HapticTab } from "@/components/HapticTab";
import { COLOR } from "@/styles/color";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarBackground: () => (
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: `${COLOR.black}`,
                            borderColor: "none",
                            borderTopWidth: 0,
                        }}
                    />
                ),
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "HOME",
                    tabBarIcon: ({ color }) => <Home width={24} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "SEARCH",
                    tabBarIcon: ({ color }) => <Search width={24} />,
                }}
            />
            <Tabs.Screen
                name="upload"
                options={{
                    title: "UPLOAD",
                    tabBarIcon: ({ color }) => <Upload width={24} />,
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    title: "COMMUNITY",
                    tabBarIcon: ({ color }) => <Community width={24} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "PROFILE",
                    tabBarIcon: ({ color }) => <Profile width={24} />,
                }}
            />
        </Tabs>
    );
}
