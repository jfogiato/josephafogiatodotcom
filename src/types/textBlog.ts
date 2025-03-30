export interface TextBlogType {
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
