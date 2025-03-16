"use client"
import Link from "next/link"
import Image from "next/image"
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
          <div className="relative h-6 w-20">
            <Image
              src="/image/Tim_Hortons_Logo.png"
              alt="Tim Hortons Logo"
              fill
              className="object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className="font-semibold text-lg text-tim-cream">Advanced Analytics</div>
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

