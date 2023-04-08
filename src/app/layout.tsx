import { Inter } from "next/font/google";
import Image from "next/image";
import SearchInput from "@/components/SearchInput";
import Separator from "@/components/Separator";
import { ShoppingCart } from "react-feather";
import Icon from "@/components/Icon";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Parallel Route/Intercept Route",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
};

interface NotesPageProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default async function Layout({ children, modal }: NotesPageProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        {modal}
        <header className="h-14 border-b border-b-slate-200 flex justify-between items-center px-8">
          <Link href="/">
            <Image
              src="/next.svg"
              alt="Next Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
          <div className="flex gap-4 items-center">
            <SearchInput />
            <Separator />
            <button className="transition-colors relative inline-flex justify-center cursor-pointer items-center p-2 border border-slate-100 whitespace-nowrap text-sm font-medium text-bluegray-400 hover:bg-gray-50 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-100  rounded-l-md rounded-r-md">
              <Icon icon={ShoppingCart} />
            </button>
          </div>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
