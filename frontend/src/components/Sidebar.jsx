import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  LogOut,
  Settings,
} from "lucide-react";
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
  { title: "Applications", to: "/applications", icon: BriefcaseBusiness },
];

const AppSidebar = () => {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo labelClassName="group-data-[collapsible=icon]:hidden" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className={"pl-0 pr-0"}>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={"gap-0"}>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.to}
                    tooltip={item.title}
                    className="relative text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent/10 data-active:text-sidebar-foreground before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-sidebar-accent before:opacity-0 before:transition-opacity data-active:before:opacity-100 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-11! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0"
                  >
                    <Link to={item.to} className="flex gap-2 items-center">
                      <item.icon strokeWidth={1} />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* PLACEHOLDER: another group, or the mascot card */}
      </SidebarContent>

      <SidebarFooter className={"p-0"}>
        <div className="dropdown dropdown-right dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex gap-2 group-data-[collapsible=icon]:justify-center relative cursor-pointer hover:bg-sidebar-accent/10 p-2 group-data-[collapsible=icon]:px-0 text-heading hover:text-sidebar-foreground before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-sidebar-accent before:opacity-0 before:transition-opacity hover:before:opacity-100 group-data-[collapsible=icon]:w-full"
          >
            <UserAvatar name={user?.name} className="w-10" />
            <div className="group-data-[collapsible=icon]:hidden ">
              <h1 className="text-base font-semibold">{user?.name}</h1>
              <p className="text-xs">{user?.email}</p>
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm gap-2 text-heading"
          >
            <div className="flex gap-2">
              <UserAvatar name={user?.name} className="w-8" />
              <div>
                <h1 className="text-sm font-semibold">{user?.name}</h1>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div
              role="button"
              className=" relative flex p-2 items-center gap-2 text-sm cursor-pointer hover:bg-sidebar-accent/10 text-sidebar-muted hover:text-sidebar-foreground data-active:text-sidebar-foreground  before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-sidebar-accent before:opacity-0 before:transition-opacity hover:before:opacity-100 data-active:before:opacity-100"
            >
              <Settings width={18} />
              Settings
            </div>
            <div
              role="button"
              onClick={logout}
              className=" relative flex p-2 items-center gap-2 text-sm cursor-pointer hover:bg-sidebar-accent/10 text-sidebar-muted hover:text-sidebar-foreground data-active:text-sidebar-foreground  before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-sidebar-accent before:opacity-0 before:transition-opacity hover:before:opacity-100 data-active:before:opacity-100"
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
