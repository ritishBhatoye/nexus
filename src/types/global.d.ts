interface InfoTileType {
  id?: number;
  timeAgo: string;
  profileUrl: string;
  communityName: string;
  company: {
    name: string;
    userName: string;
  };
  title: string;
  subTitle: string;
  poll: {
    participants: number;
  };
  postStats: {
    likeCount: number;
    commentCount: number;
    viewsCount: number;
  };
}
