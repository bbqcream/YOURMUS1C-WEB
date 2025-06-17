// useMusicInfoStore.ts
import { MusicType } from "@/types/MusicType";
import { create } from "zustand";

interface MusicInfoStore {
    music: MusicType;
    setMusic: (music: MusicType) => void;
    resetMusic: () => void;
}

const initialMusic: MusicType = {
    id: 0,
    url: null,
    title: "",
    artist: "",
    date: "",
    duration: 0,
    artwork: "",
    album: "",
    plays: 0,
    isPlay: false,
    playTime: 0,
    lyrics: "",
    lyricist: "",
    composer: "",
    arranger: "",
    description: "",
};

export const useMusicInfoStore = create<MusicInfoStore>((set) => ({
    music: initialMusic,
    setMusic: (music) => set({ music }),
    resetMusic: () => set({ music: initialMusic }),
}));
