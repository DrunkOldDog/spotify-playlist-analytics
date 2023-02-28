import { filterBySearch } from "./filterBySearch";

const singleTrack = {
  album: {
    id: "0hbwAcjGBGP2gutKpQHA8d",
    name: "Enema Of The State",
  },
  artists: [
    {
      id: "5Rj6rNR8zIlUUDCs1OyPmW",
      name: "MYA",
    },
    {
      name: "TINI",
      type: "artist",
    },
    {
      id: "1bAftSH8umNcGZ0uyV7LMg",
      name: "Duki",
    },
  ],
  id: "74znaWw1hmQBusGPSOuTFy",
  name: "2:50 Remix",
};

describe("filterBySearch", () => {
  test("should filter by track name", () => {
    expect(filterBySearch(singleTrack, "2:50")).toBe(true);
    expect(filterBySearch(singleTrack, "Yonaguni")).toBe(false);
  });

  test("should filter by track artists", () => {
    expect(filterBySearch(singleTrack, "Duk")).toBe(true);
    expect(filterBySearch(singleTrack, "Tini")).toBe(true);
    expect(filterBySearch(singleTrack, "Bad Bunny")).toBe(false);
  });

  test("should filter by album name", () => {
    expect(filterBySearch(singleTrack, "Enema Of")).toBe(true);
    expect(filterBySearch(singleTrack, "Slipknot")).toBe(false);
  });
});
