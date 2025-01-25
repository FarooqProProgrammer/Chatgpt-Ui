import InitialView from "@/components/InitialView";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-full scrollbar-0">
      {/* <SidebarTrigger /> */}
      <InitialView />
    </div>
  );
}
