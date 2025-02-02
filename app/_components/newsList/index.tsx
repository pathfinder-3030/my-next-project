import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=''
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                src='/no-image.png'
                alt='No Image'
                className={styles.image}
                width={1200}
                height={630}
              />
            )}

            <dl className={styles.content}>
              <dt className={styles.newsItemTitle}>{article.title}</dt>
              <dd className={styles.meta}>
                <span className={styles.tag}>{article.category.name}</span>
                <span className={styles.date}>
                  <Image src='/clock.svg' alt='' width={16} height={16} />
                  {article.publishedAt}
                </span>
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
