import { getMembersList } from "../_libs/microcms";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Page() {
  const data = await getMembersList({ limit: 100 });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=''
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dt className={styles.position}>{member.position}</dt>
                <dt className={styles.profile}>{member.profile}</dt>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビットちゃん",
      position: "CEO",
      profile: "テストテストテストテストテストテストテストテストテストテストテストテストテスト",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリーちゃん",
      position: "COO",
      profile: "テストテストテストテストテストテストテストテストテストテストテストテストテスト",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョンちゃん",
      position: "CTO",
      profile: "テストテストテストテストテストテストテストテストテストテストテストテストテスト",
    },
  ],
};
