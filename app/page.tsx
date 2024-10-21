import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="app w-full">
      <Header/>
      <Main/>
    </div>
  );
}
