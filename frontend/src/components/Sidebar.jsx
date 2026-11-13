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
        <Logo isCollapsed="group-data-[collapsible=icon]:hidden" />
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
                    className="text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent/50 data-[active=true]:bg-sidebar-accent! data-[active=true]:text-sidebar-foreground"
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
        <div className="dropdown dropdown-right dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="flex gap-2 cursor-pointer hover:bg-sidebar-accent p-2 group-data-[collapsible=icon]:p-1 group-data-[collapsible=icon]:hover:bg-transparent rounded-lg text-heading hover:text-sidebar-foreground"
          >
            <UserAvatar name={user?.name} className="w-10 " />
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
              onClick={logout}
              className="flex p-1 items-center gap-2 text-sm cursor-pointer hover:bg-sidebar-accent rounded-lg text-sidebar-muted hover:text-sidebar-foreground"
            >
              <LogOut width={18} />
              Log out
            </div>
            <div
              role="button"
              className="flex p-1 items-center gap-2 text-sm cursor-pointer hover:bg-sidebar-accent rounded-lg text-sidebar-muted hover:text-sidebar-foreground data-[active=true]:text-sidebar-foreground"
            >
              <Settings width={18} />
              Settings
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
