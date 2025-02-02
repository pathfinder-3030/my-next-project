import Hero from "../_components/hero";
import Sheet from "../_components/sheet";

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title='News' sub='ニュース' />
      <Sheet>{children}</Sheet>
    </>
  );
}
