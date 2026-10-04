import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import all application components
import Login from "./components/login";
import Inventory from "./components/Inventory";
import Members from "./components/Members";
import AddUser from "./components/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Main Application Views */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/members" element={<Members />} />

        {/* Admin Views */}
        <Route path="/admin/add-user" element={<AddUser />} />

        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
