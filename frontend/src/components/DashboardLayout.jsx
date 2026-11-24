import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar from "../components/Sidebar";
import { Toaster } from "../components/ui/sonner";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/applications": "Applications",
};

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "";

  return (
    <SidebarProvider style={{ "--sidebar-width-icon": "4rem" }}>
      <Sidebar />
      <main className="flex min-h-svh min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <div className="h-5 w-px bg-border" />
          <h1 className="text-base font-semibold text-heading">{title}</h1>
          {/* Later: theme toggle goes here, pushed right with ml-auto */}
        </header>

        {/* Page content: Dashboard, Applications, etc. render here */}
        <div className="flex-1 p-6">
          <Toaster
            position="bottom-right"
            style={{ "--width": "200px" }}
          ></Toaster>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
