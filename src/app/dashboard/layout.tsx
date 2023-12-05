"use client";

import NavBar from "../components/user/dashboard/navbar";
import { auth } from "@/firebase/clientApp";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { User } from "firebase/auth";
import { useState, useEffect, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  // TODO: What the hell is this?
  // const auth = getAuth(app);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState<string>("");

  const [user, setUser] = useState<User>(null!);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoading(false);
      setUser(user);

      user.getIdTokenResult().then((idTokenResult) => {
        setAccessToken(idTokenResult.token);
      });
    } else {
      setIsLoading(false);
    }
  });

  const [sidebar, setSidebar] = useState("active");

  const updateSidebar = () => {
    if (window.innerWidth < 1024) {
      setSidebar("not-active");
    } else {
      setSidebar("active");
    }
  };

  useEffect(() => {
    updateSidebar();
    window.addEventListener("resize", updateSidebar);

    return () => {
      window.removeEventListener("resize", updateSidebar);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebar(sidebar === "active" ? "not-active" : "active");
  };

  if (isLoading) {
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </>
    );
  }

  if (!user || !accessToken) {
    return window.location.replace("/");
  }

  return (
    <>
      <NavBar
        sidebar={sidebar}
        toggleSidebar={toggleSidebar}
        email={user.email!}
        photo={user.photoURL!}
      ></NavBar>
      <div className={`bg-[#f8fff8] ${sidebar === "active" ? "lg:pl-64" : ""}`}>
        <div className="min-h-screen p-8 pt-24">
          {/* Proof that user is logged in. */}
          {/* <h1 className="mb-4 font-semibold text-black">{user.uid}</h1>
          <h1 className="mb-4 font-semibold text-black">{accessToken}</h1>
          <h1 className="mb-4 font-semibold text-black">{user.displayName}</h1>
          <h1 className="mb-4 font-semibold text-black">{user.phoneNumber}</h1>
          <h1 className="mb-4 font-semibold text-black">{user.email}</h1> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
