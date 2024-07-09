"use client";
import OTPVerify from "@/components/commen/OTP/OTPVerify";
import React, { useState } from "react";
import Login from "./Login";

const LoginIndex = () => {
  const [page, setPage] = useState("login");
  const [userId, setUserId] = useState();
  const [mail, setMail] = useState();

  return (
    <>
      {page === "login" && (
        <Login selectPage={setPage} userMail={setMail} userId={setUserId} />
      )}
      {page === "otp" && (
        <OTPVerify
          selectPage={setPage}
          selectPrePage="login"
          userMail={mail}
          userId={userId}
        />
      )}
    </>
  );
};

export default LoginIndex;
