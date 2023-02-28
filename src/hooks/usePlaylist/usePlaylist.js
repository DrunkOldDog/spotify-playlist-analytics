import { getData, SERVER } from "@common/server";
import { filterBySearch } from "@common/utils/filterBySearch";
import { useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";
import { atom, selector, useRecoilState } from "recoil";

const tracksState = atom({
  key: "tracksState",
  default: {},
});

const trackItems = selector({
  key: "trackItems",
  get: ({ get }) => {
    const tracks = get(tracksState);
    return tracks.items || [];
  },
  set: ({ get, set }, newTracks) => {
    const tracks = get(tracksState);
    set(tracksState, { ...tracks, items: newTracks });
  },
});

export const usePlaylist = (currentPlaylist, searchTerm) => {
  const { data: session } = useSession();
  const [tracks, setTracksState] = useRecoilState(tracksState);
  const [tracksList, setTracksList] = useRecoilState(trackItems);

  useEffect(() => {
    /* Don't return anything in case of error in the SSR */
    if (!currentPlaylist) return;
    setTracksState(currentPlaylist.tracks);
  }, [currentPlaylist]);

  useEffect(() => {
    const getIncrementalTracks = async () => {
      const { data: newTracks } = await getData(SERVER.PLAYLIST_TRACKS, {
        params: { playlistId: currentPlaylist.id, offset: tracksList.length },
      });

      if (newTracks.length) {
        setTracksList([...tracksList, ...newTracks]);
      }
    };

    if (
      tracksList.length < currentPlaylist.tracks.total &&
      session?.refreshToken
    ) {
      getIncrementalTracks();
    }
  }, [tracks, session]);

  const filteredTracks = useMemo(() => {
    if (!searchTerm || !tracksList.length) {
      return tracksList;
    }

    return tracksList.filter(({ track }) => filterBySearch(track, searchTerm));
  }, [tracksList, searchTerm]);

  return { tracks: tracksList, filteredTracks };
};
