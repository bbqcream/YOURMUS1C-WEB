export interface MusicType {
    id: number;
    url: any;
    title: string;
    artist: string;
    date: string;
    duration: number;
    artwork: string;
    isPlay: boolean; // 지금 선택 돼있는지의 여부
    album: string;
    plays: number;
    playTime: number; // 노래 틀리기
}

