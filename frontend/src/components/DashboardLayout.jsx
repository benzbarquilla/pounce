import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar from "../components/Sidebar";
const DashboardLayout = () => (
  <SidebarProvider style={{ "--sidebar-width-icon": "4rem" }}>
    <Sidebar />
    <main className="flex min-h-svh flex-1 flex-col">
      <header className="flex h-14 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        {/* PLACEHOLDER: page title, search, notifications */}
      </header>

      {/* Page content: Dashboard, Applications, etc. render here */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </main>
  </SidebarProvider>
);

export default DashboardLayout;
