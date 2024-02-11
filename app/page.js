import About from "@/components/HomeComps/About";
import Book from "@/components/HomeComps/Book";
import Earn from "@/components/HomeComps/Earn";
import Focus from "@/components/HomeComps/Focus";
import Get from "@/components/HomeComps/Get";
import Rapyd from "@/components/HomeComps/Rapyd";

export default function Home() {
  return (
    <>
      <Book />
      <Earn />
      <Rapyd />
      <Get />
      <Focus />
      <About />
    </>
  );
}
