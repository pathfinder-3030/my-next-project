import NewsList from "../_components/newsList";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const { contents: news } = await getNewsList();

  return <NewsList news={news} />;
}
