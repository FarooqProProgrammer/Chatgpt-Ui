"use client"
import { Calendar, DeleteIcon, Home, Inbox, LogOutIcon, MessageCircle, MessagesSquareIcon, PlusIcon, Search, Settings, Trash2Icon, User2Icon } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import Link from "next/link"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent className="bg-white">
                <SidebarGroup>
                    <SidebarGroupContent >
                        <div className="border-b-2  min-h-[55vh] h-full overflow-y-auto">

                            <Button className="w-full">
                                <PlusIcon />  New Chat
                            </Button>
                            <Link href="#!" className="flex mt-3 justify-start items-center gap-3">
                                <MessagesSquareIcon />
                                <h3 className="text-sm">AI Chat Tool Ethics</h3>
                            </Link>
                            <Link href="#!" className="flex mt-3 justify-start items-center gap-3">
                                <MessagesSquareIcon />
                                <h3 className="text-sm">AI Chat Tool Impact Writing</h3>
                            </Link>
                            <Link href="!#" className="flex mt-3 justify-start items-center gap-3">
                                <MessagesSquareIcon />
                                <h3>New Chat</h3>
                            </Link>
                        </div>

                        <div className=" space-y-4">
                            <div className="flex mt-3 justify-start items-center gap-3">
                                <Trash2Icon />
                                <h5>Clear Conversation</h5>
                            </div>
                            <div className="flex mt-3 justify-start items-center gap-3">
                                <User2Icon />
                                <h5>My Account</h5>
                            </div>
                            <div className="flex mt-3 justify-start items-center gap-3">
                                <LogOutIcon />
                                <h5>Logout</h5>
                            </div>


                        </div>


                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}