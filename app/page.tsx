import Image from "next/image";
import MainTitle from "@/components/MainTitle";
import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-0">
        <MainTitle />
        <div className="absolute top-[calc(20%)] w-full">
          <MainMenu />
        </div>
    </div>
  );
}
