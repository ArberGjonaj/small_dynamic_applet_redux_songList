//here are reducers
import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Rockin' in the Free World", duration: "4:41" },
    { title: "Walk This Way", duration: "3:40" },
    { title: "Iron Man", duration: "5:54" },
    { title: "Smoke on the Water", duration: "5:40" },
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
