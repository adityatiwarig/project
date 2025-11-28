"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Home,
  Bell,
  Calendar,
  BookOpen,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
} from "lucide-react"

interface DashboardSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard/student" },
    { id: "announcements", label: "Announcements", icon: Bell, href: "#" },
    { id: "calendar", label: "Calendar", icon: Calendar, href: "#" },
    { id: "book-resource", label: "Book Resource", icon: BookOpen, href: "#" },
    { id: "my-bookings", label: "My Bookings", icon: LayoutGrid, href: "#" },
    { id: "groups", label: "Groups & Forums", icon: Users, href: "#" },
    { id: "messages", label: "Messages", icon: MessageSquare, href: "#" },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 transition-all duration-300 ${
          open ? "w-64" : "w-20"
        }`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
          {open && <span className="font-bold gradient-text text-lg">CC</span>}
          <button
            onClick={() => onOpenChange(!open)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />
                {open && <span className="font-medium">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-slate-800 p-3 space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Settings size={20} />
            {open && <span className="font-medium">Settings</span>}
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-slate-800 transition-colors"
          >
            <LogOut size={20} />
            {open && <span className="font-medium">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar - Sheet Style */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)}></div>
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-900 shadow-xl flex flex-col z-50">
            <div className="p-4 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
              <span className="font-bold gradient-text text-lg">Campus Connect</span>
              <button
                onClick={() => onOpenChange(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.id)
                      onOpenChange(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="border-t border-gray-200 dark:border-slate-800 p-3 space-y-2">
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Settings size={20} />
                <span className="font-medium">Settings</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-slate-800 transition-colors"
              >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
