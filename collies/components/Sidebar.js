import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {motion} from "framer-motion"
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,

} from "@heroicons/react/outline";
import img from "./assets/hour.png"

import {TiGroupOutline} from "react-icons/ti"
import SidebarLink from "./SidebarLink";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full bg-white">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        
      </div>
      <div className="space-y-7.5 mt-5 mb-4.5 xl:ml-24">

        <SidebarLink text="Home" Icon={HomeIcon} active />
        <Link href="/explore">
         <a><SidebarLink text="Explore" Icon={HashtagIcon} /></a> 
        </Link>

        <Link href="https://ideate-teal.vercel.app/">
          <a><SidebarLink text=" Ideate" Icon={TiGroupOutline} /> </a>
        </Link>

        <Link href="/messages">
          <a><SidebarLink text="Messages" Icon={InboxIcon} /></a>
        </Link>

        <Link href="/clubs">
          <a><SidebarLink text="Clubs" Icon={BookmarkIcon} /> </a>
        </Link>

        <Link href="/activity">
          <a><SidebarLink text="Workshops" Icon={ClipboardListIcon} /> </a>
        </Link>

        <Link href="/profile">
          <a><SidebarLink text="Profile" Icon={UserIcon} /> </a>
        </Link>

        <SidebarLink text="Community" Icon={DotsCircleHorizontalIcon} />
      </div>
      <motion.button 
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      className="hidden xl:inline ml-auto bg-[#6a1edb] text-black rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#6534e0]">
        NETWORK
      </motion.button>
      <div
        className="text-[#121212] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
