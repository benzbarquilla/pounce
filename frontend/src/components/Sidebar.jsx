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
import UserAvatar from "./UserAvatar";
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
        <div className="dropdown dropdown-right dropdown-end hover:bg-brand-light">
          <div tabIndex={0} role="button" className="flex gap-2 cursor-pointer">
            <UserAvatar name={user?.name} className="w-10" />
            <div className="group-data-[collapsible=icon]:hidden">
              <h1 className="text-base font-semibold">{user?.name}</h1>
              <p className="text-sm">{user?.email}</p>
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm "
          >
            <div className="flex gap-2">
              <UserAvatar name={user?.name} className="w-7" />
              <div>
                <h1 className="text-sm font-semibold">{user?.name}</h1>
                <p className="text-xs">{user?.email}</p>
              </div>
            </div>
            <div
              role="button"
              onClick={logout}
              className="flex p-1 items-center gap-2 text-sm cursor-pointer hover:bg-brand-light"
            >
              <LogOut width={18} />
              Log out
            </div>
          </ul>
        </div>

        <SidebarMenu className={"group-data-[collapsible=icon]:items-center "}>
          <SidebarMenuItem></SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
