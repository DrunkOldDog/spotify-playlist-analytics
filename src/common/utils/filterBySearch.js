const setSearchToLowerCase = (searchTerm) => (char) => {
  return char.toLowerCase().includes(searchTerm.toLowerCase());
};

export const filterBySearch = (track, searchTerm) => {
  const { name, album, artists } = track;
  const searchToLowerCase = setSearchToLowerCase(searchTerm);

  if (searchToLowerCase(name) || searchToLowerCase(album.name)) {
    return true;
  }

  return artists.some((artist) => searchToLowerCase(artist.name));
};
