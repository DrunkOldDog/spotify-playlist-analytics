const user = {
  name: "Juani Reyes",
  email: "juanisoul@gmail.com",
  image: "https://i.scdn.co/image/ab6775700000ee8561a4fb9b0a47f9564fe29bcb",
};

const singleTrack = {
  album: {
    id: "0hbwAcjGBGP2gutKpQHA8d",
    name: "2:50 Remix",
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

const tracks = [
  singleTrack,
  {
    album: {
      id: "7EmOzGGWYSu5sH9CfnItkB",
      name: "Si Me Sobrara el Tiempo",
    },
    artists: [
      {
        id: "1bAftSH8umNcGZ0uyV7LMg",
        name: "Duki",
      },
    ],
    id: "2ypbIXW3a7fsLdLtLpZWDZ",
    name: "Si Me Sobrara el Tiempo",
  },
];

export const Mocks = { user, singleTrack, tracks };
