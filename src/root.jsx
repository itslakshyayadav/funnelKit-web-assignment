import { Outlet } from "react-router-dom";
import BaseNavbar from "./components/BaseNavbar";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify.css";

function Root() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BaseNavbar></BaseNavbar>
      <div className="container mx-auto px-6 md:p-12">
        <Outlet />
      </div>
    </div>
  );
}
export default Root;
