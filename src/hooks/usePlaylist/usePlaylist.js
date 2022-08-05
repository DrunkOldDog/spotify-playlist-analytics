import { useEffect } from "react";
import { useRouter } from "next/router";
import { playlistsState } from "@lib/recoil";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const currentPlaylistId = atom({
  key: "currentPlaylistId",
  default: null,
});

const currentPlaylist = selector({
  key: "currentPlaylist",
  get: ({ get }) => {
    return get(playlistsState)[get(currentPlaylistId)];
  },
});

export const usePlaylist = (tracks) => {
  const { query } = useRouter();
  const playlist = useRecoilValue(currentPlaylist);
  const setCurrentPlaylistId = useSetRecoilState(currentPlaylistId);

  useEffect(() => {
    if (query.playlistId) {
      setCurrentPlaylistId(query.playlistId);
    }
  }, []);

  return { tracks, playlist };
};
