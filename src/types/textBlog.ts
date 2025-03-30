export interface BlogType {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  body: {
    subtitle: string;
    content: string;
  }[];
}