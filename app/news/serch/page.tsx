import NewsList from "@/app/_components/newsList";
import SearchField from "@/app/_components/serchField";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: 2,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}
