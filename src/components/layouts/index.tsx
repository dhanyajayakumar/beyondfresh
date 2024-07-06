"use client";
import React, { useEffect } from "react";
import MicroHeader from "../commen/MicroHeader";
import Header from "../commen/Header";
import Footer from "../commen/Footer";
import { useDispatch } from "react-redux";
import { getToken } from "@/utils/token";
import { loginUser } from "@/utils/redux/auth";

type LayoutProps = {
  children: React.ReactNode;
};

const AppLayouts = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getToken();
    if (data) {
      dispatch(loginUser(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MicroHeader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayouts;
