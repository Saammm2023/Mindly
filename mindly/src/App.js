import React, { useState } from "react";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("login");

  const switchPage = (newPage) => setPage(newPage);

  return (
    <>
      {page === "login" && <Login switchPage={switchPage} />}
      {page === "register" && <Register switchPage={switchPage} />}
      {page === "dashboard" && <Dashboard switchPage={switchPage} />}
    </>
  );
}

export default App;
