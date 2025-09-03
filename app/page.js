import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href="/shader" className="text-4xl sm:text-6xl font-bold hover:underline">
        Test routing(shader)
      </Link>
    </div>
  );
}
