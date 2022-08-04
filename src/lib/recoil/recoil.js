import { atom } from "recoil";
import { STATES } from "@common/constants";

/* Added this file for declaring recoil global atoms */
export const playlistsState = atom({
  key: STATES.PLAYLISTS,
  default: {},
});
