import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Content from "@/components/Content";

import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center h-screen  bg-white">
      {/* <div className="flex justify-center border items-center border-black bg-blue-300 w-[240px] h-[100px] text-black">
        Header
      </div> */}
      <Header></Header>
      {/* <div className="flex justify-center border items-center border-black bg-green-200 w-[240px] text-black h-[70px]">
        Navigation menu{" "}
      </div> */}
      <Navigation></Navigation>
      {/* <div class="flex justify-between  gap-2 w-[240px]">
        <div className=" flex justify-center border items-center border border-black bg-yellow-200 text-black w-[75px] h-[100px]">
          Content
        </div>
        <div className=" flex justify-center text-center items-center border  border border-black bg-yellow-200 text-black w-[75px] h-[100px] ">
          Main Content
        </div>
        <div className=" flex justify-center border items-center border border-black bg-yellow-200 text-black w-[75px] h-[100px]">
          Content
        </div>
      </div> */}
      <Content></Content>
      {/* <div className="flex justify-center items-center border border-black bg-blue-300 w-[240px] text-black">
        Footer
      </div> */}
      <Footer></Footer>
    </div>
  );
}
