import { Card } from "@/components/card";
import { Content } from "@/components/content";

export default function Home() {
  return (
    <>
      <div className="flex place-items-center min-h-[100svh] touch-none m-0 p-2 justify-center">
        <Card />
      </div>
      <div className=" h-screen-1.5 flex items-center justify-center">
        <div className="w-4/5">
          <Content />
        </div>
      </div>
    </>
  );
}
