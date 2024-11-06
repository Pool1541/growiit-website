import { Hero } from "../hero";

export default function Slide(article: BlogArticleInterface) {
  return (
   <Hero {...article} initialOpacity />
  );
}