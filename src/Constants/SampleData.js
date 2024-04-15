export const chats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Abhay",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pranjal",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Abhay",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Pranjal",
    _id: "2",
  },
];
export const sampleNotification = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Abhay",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Pranjal",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "dcvygdsvc",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content:"Hello Bhai Kaisa Hai",
    _id:"djfvbwhjfbvcwfv",
    sender:{
      _id:"user._id1",
      name:"Abhay"
    },
    chat:"chatId",
    createdAt:"2024-02-12T10:41:30.630Z"
  },
  {
    attachments: [
      {
        public_id: "dcvygdsvc",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content:"Hello Bhai Kaisa Hai",
    _id:"djfvbwhjfbvcwfv",
    sender:{
      _id:"user._id",
      name:"Pranjal"
    },
    chat:"chatId",
    createdAt:"2024-02-12T10:41:30.630Z"
  }
];
