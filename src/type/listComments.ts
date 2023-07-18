export type listCommentsType = {
  listComments: {
    comments: [
      {
        id: number;
        userName: string;
        description: string;
        date: string;
        reply: [
          {
            userName: string;
            description: string;
            date: string;
          }
        ];
      }
    ];
    pageSize: number;
    hasMore: boolean;
  };
};
export type commentType = {
  comment: {
    id: number;
    userName: string;
    description: string;
    date: string;
    reply: [
      {
        userName: string;
        description: string;
        date: string;
      }
    ];
  };
};
