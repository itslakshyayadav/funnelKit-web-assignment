Home;
import { Outlet } from "react-router-dom";
import Home from "./home";

function Root() {
  return (
    <div>
      <Home></Home>
      <div className="container mx-auto px-6 md:p-12">
        <Outlet />
      </div>
    </div>
  );
}
export default Root;
