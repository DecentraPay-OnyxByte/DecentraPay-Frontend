import Image from "next/image";
import Sidebar from "./components/SideBar"
import Header from "./components/NavBar"
import MediaCard from "./components/Card";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="flex flex-row">
      <Sidebar/>
      <MediaCard/>
      </div>
      <h1>hello</h1>
    </div>
  );
}
