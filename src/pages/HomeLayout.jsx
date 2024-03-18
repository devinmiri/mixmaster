import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading m-auto" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      {/* <ToastContainer position="top-center" autoClose={2000}/> */}
    </>
  );
};
export default HomeLayout;
