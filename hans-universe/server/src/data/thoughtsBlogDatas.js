const thoughtsBlogDatas = [
  {
    id: 1,
    title: "What makes Me",
    content: "Hello World",
    wroteDate: "2020-05-08",
    modifiedDate: "2021-06-07",
    commentsNumber: "5",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        userId: 1,
        date: "2021-10-18",
        content: "LoremIpsum10LoremIpsum10LoremIpsum10",
        thumbsUp: 4,
        thumbsDown: 6,
        replyNumber: 2,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 0,
            thumbsDown: 0,
          },
        ]
      },{
        userId:3,
        date: "2021-10-18",
        content: "KOKOWA NEKI DAE ARI",
        thumbsUp: 1,
        thumbsDown: 1,
        replyNumber: 0,
        replies: []
      }
    ]
  },
  {
    id: 2,
    title: "Thoughts about me",
    content: "Hello World",
    wroteDate: "2021-04-03",
    modifiedDate: "2021-06-07",
    commentsNumber: "10",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Haitta Chubasa ga Tomae nai yo ni",
    content: "Hello World",
    wroteDate: "2020-12-12",
    modifiedDate: "2021-06-07",
    commentsNumber: "2",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Orae wa kono michi o Aruki Stuzukaeru",
    content: "Hello World",
    wroteDate: "2024-12-14",
    modifiedDate: "2021-06-07",
    commentsNumber: "8",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Wagahai wa Neki dae ari",
    content: "Hello World",
    wroteDate: "2012-01-01",
    modifiedDate: "2021-06-07",
    commentsNumber: "9",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Naemurase Nainda",
    content: "Hello World",
    wroteDate: "2020-05-08",
    modifiedDate: "2021-06-07",
    commentsNumber: "5",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Kazae Mo nai Kudari Sona Yoruni",
    content: "Hello World",
    wroteDate: "2021-04-03",
    modifiedDate: "2021-06-07",
    commentsNumber: "10",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Kimmino Koae ga Mimidae Tokuae",
    content: "Hello World",
    wroteDate: "2020-12-12",
    modifiedDate: "2021-06-07",
    commentsNumber: "2",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Yuraei da gan shou",
    content: "Hello World",
    wroteDate: "2024-12-14",
    modifiedDate: "2021-06-07",
    commentsNumber: "8",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Hitta tae baka nanimo kawaranai",
    content: "Hello World",
    wroteDate: "2012-01-01",
    modifiedDate: "2021-06-07",
    commentsNumber: "9",
    reaction: {
      like: 4,
      hmm: 1,
      disagree: 2
    },
    commentTree: [
      {
        commentId: 1,
        name: "John Doe",
        date: "2021-10-18",
        thumbsUp: 4,
        thumbsDown: 6,
        replies: [
          {
            userId: 2,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
          {
            userId: 3,
            date: "2021-10-19",
            content: "What do you mean Lorem Ipsum?",
            thumbsUp: 2,
            thumbsDown: 0,
          },
        ]
      }
    ]
  },
]

export default thoughtsBlogDatas