import { Card } from "@/components/card";
import { Content } from "@/components/content";
import dynamic from "next/dynamic";
// import { Cesium } from "@/components/cesium";

const Cesium = dynamic(() => import("../components/cesium.tsx"), { ssr: false });

export default function Home() {
  return (
    <>
      <Cesium />

      {/* <div className="flex place-items-center min-h-[100svh] touch-none m-0 p-2 justify-center opacity-35 mt-6 overflow-hidden">
        <Card />
      </div> */}
      {/* <div className=" h-screen-1.5 flex items-center justify-center">
        <div className="w-4/5">
          <Content />
        </div>
      </div> */}
    </>
  );
}
