import { Outlet } from "react-router-dom";
import BaseNavbar from "./components/BaseNavbar";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify.css";

function Root() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BaseNavbar></BaseNavbar>
      <div className="container mx-auto mt-20 px-6">
        <Outlet />
      </div>
    </div>
  );
}
export default Root;
