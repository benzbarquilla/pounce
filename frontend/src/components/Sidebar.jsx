import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { title: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { title: "Applications", to: "/applications", icon: Briefcase },
];

const AppSidebar = () => {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo className="" isCollapsed="group-data-[collapsible=icon]:hidden" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu
              className={"group-data-[collapsible=icon]:items-center "}
            >
              {navItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.to}
                    tooltip={item.title}
                  >
                    <Link to={item.to} className="flex gap-2 items-center">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* PLACEHOLDER: another group, or the mascot card */}
      </SidebarContent>

      <SidebarFooter>
        {/* PLACEHOLDER: user avatar / dropdown menu */}
        <p className="px-2 text-sm font-medium bg-red-300 group-data-[collapsible=icon]:hidden">
          {user?.name}
        </p>
        <SidebarMenu className={"group-data-[collapsible=icon]:items-center "}>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={logout} tooltip="Log out">
              <LogOut />
              <span>Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
