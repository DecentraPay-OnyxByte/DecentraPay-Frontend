import { BiHomeCircle } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
// import { TbMessages } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
// import Logo from "../assets/sidebar/download-removebg-preview.png"
// import Image from "next/image";
// import {FaTwitter} from 'react-icons/fa';
import Link from "next/link";

const Navigation_Items = [
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Services",
    icon: HiOutlineHashtag,
  },
  {
    title: "Sales Report",
    icon: IoMdNotifications,
  },
  //   {
  //     title: "Messages",
  //     icon: TbMessages,
  //   },
  {
    title: "Profile",
    icon: FiUser,
  },
  {
    title: "Settings",
    icon: FiSettings,
  },
];

const Sidebar = () => {
  return (
    <section className="w-[20%] sticky top-0 flex flex-col items-stretch h-screen px-4">
      <div className="w-full flex flex-col items-stretch h-screen space-y-4 my-4 border-r-2 border-slate-800">
        {/* <Image className="w-2/3" src={Logo} alt="Logo" /> */}
        <button className="flex items-center justify-center rounded-full m-4 bg-[#1976D2] p-2 text-xl hover:opacity-70 transition duration-100 w-[155px] md:w-[175px]">
          <MdOutlineDashboardCustomize className="mr-2" />
          DashBoard
        </button>
        {Navigation_Items.map((items) => (
          <>
            <Link
              className="hover:bg-white/20 transition duration-200 text-xl flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6 "
              href={`/${items.title.toLowerCase()}`}
              key={items.title}
            >
              <div>
                <items.icon />
              </div>
              {items.title !== "Decentra Pay" && <div>{items.title}</div>}
            </Link>
          </>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
