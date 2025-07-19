interface PostCardDataType {
  id?: number;
  user_id: string;
  category_id: number;
  title: string;
  content: string;
  summary?: string;
  pseudonym?: string;
  image_url?: string;
  video_url?: string;
  media_type?: "image" | "video" | "none";
  created_at: string;
  // Computed fields
  vote_count?: number;
  user_vote?: "up" | "down" | null;
  comment_count?: number;
  view_count?: number;
}

interface IconType {
  name: string;
  color: string;
}
interface TabLabelType {
  icon?: IconType;
  label?: string;
}
