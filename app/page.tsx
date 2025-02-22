import Image from "next/image";
import { HOME_TITLE, HOME_SUBTITLE } from "@/utils/constants";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>{HOME_TITLE}</h1>
        <h1>{HOME_SUBTITLE}</h1>
    </div>
  );
}
