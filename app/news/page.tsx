import NewsList from "../_components/newsList";
import SearchField from "../_components/serchField";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const { contents: news } = await getNewsList();

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}
