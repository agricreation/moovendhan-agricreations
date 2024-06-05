import Image from "next/image";
import {
  ModeToggle
} from "@/components/dark-mode"
import Homes from "@/pages/index"


export default function Home() {
  return (
    <>
     <main>
      <Homes />
      <ModeToggle />
    </main>
    </>
   
  );
}
