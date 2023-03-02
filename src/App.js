import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="border  border-sky-500 w-3/4 m-auto px-3">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
