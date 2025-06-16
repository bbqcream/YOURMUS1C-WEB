import { create } from "zustand";

interface UseMusicControlStoreProps {
    isMusicSelected: boolean;
    toggleMusicSelected: () => void;

    isMusicPlaying: boolean;
    toggleMusicPlaying: () => void;
}

export const useMusicControlStore = create<UseMusicControlStoreProps>(
    (set) => ({
        isMusicSelected: false,
        toggleMusicSelected: () =>
            set((state) => ({ isMusicSelected: !state.isMusicSelected })),

        isMusicPlaying: false,
        toggleMusicPlaying: () =>
            set((state) => ({ isMusicPlaying: !state.isMusicPlaying })),
    })
);
