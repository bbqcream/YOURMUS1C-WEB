import { create } from "zustand";

interface UseMusicControlStoreProps {
    isMusicSelected: boolean;
    toggleMusicSelected: () => void;

    isMusicPlaying: boolean;
    toggleMusicPlaying: (val: boolean) => void;
}

export const useMusicControlStore = create<UseMusicControlStoreProps>(
    (set) => ({
        isMusicSelected: false,
        toggleMusicSelected: () =>
            set((state) => ({ isMusicSelected: !state.isMusicSelected })),

        isMusicPlaying: false,
        toggleMusicPlaying: (val: boolean) => set({ isMusicPlaying: val }),
    })
);
