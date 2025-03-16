"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, ExternalLink, FileText, GraduationCapIcon as Graduation, Home, type LucideIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Submit a Request",
    href: "/task-intake",
    icon: ExternalLink,
  },
  {
    title: "Knowledge Hub",
    href: "/articles",
    icon: BookOpen,
  },
  {
    title: "Data Resources",
    href: "/data-resources",
    icon: FileText,
  },
  {
    title: "Free Learning Resources",
    href: "/free-resources",
    icon: Graduation,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border/40 pb-2">
        <div className="flex items-center gap-2 px-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-tim-red"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
            <path
              d="M12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6Z"
              fill="currentColor"
            />
            <path d="M12 11C9.79 11 8 12.79 8 15V16H16V15C16 12.79 14.21 11 12 11Z" fill="currentColor" />
          </svg>
          <div className="font-semibold text-lg text-tim-cream">Tim Hortons AA</div>
        </div>
        <div className="flex items-center justify-between px-2 pt-2">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={isActive(item.href)}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border/40 pt-2">
        <div className="px-3 py-2 text-center text-xs text-tim-cream/70">Tim Hortons Advanced Analytics Team Hub</div>
      </SidebarFooter>
    </Sidebar>
  )
}

