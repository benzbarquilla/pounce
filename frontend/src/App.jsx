import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import DashboardLayout from "./components/DashboardLayout";
import Applications from "./pages/Applications";

function App() {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" replace />}></Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/applications" element={<Applications />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
