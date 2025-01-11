import Hero from "../_components/hero";
import Sheet from "../_components/sheet";
import styles from "./page.module.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title='Members' sub='メンバー' />
      <Sheet>{children}</Sheet>
    </>
  );
}
