"use client";
import React, { useState } from "react";
import Register from "./Register";
import OTPVerify from "@/components/commen/OTP/OTPVerify";

const RegisterIndex = () => {
  const [page, setPage] = useState("register");
  const [mail, setMail] = useState();
  const [userId, setUserId] = useState();

  return (
    <>
      {page === "register" && (
        <Register selectPage={setPage} userMail={setMail} userId={setUserId} />
      )}
      {page === "otp" && (
        <OTPVerify
          selectPage={setPage}
          selectPrePage="register"
          userMail={mail}
          userId={userId}
        />
      )}
    </>
  );
};

export default RegisterIndex;
