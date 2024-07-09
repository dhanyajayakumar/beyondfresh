"use client";
import { useAppSelector } from "@/utils/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();

  // const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  // const token = useAppSelector((state) => state.auth.userDetails?.token);

  // useEffect(() => {
  //   if (!isAuthenticated && !token) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated, router, token]);

  const router = useRouter();

  const userDetails = useAppSelector((state) => state.auth.userDetails);
  const loader = useAppSelector((state) => state.auth.loader);
  useEffect(() => {
    if (loader) {
      return; // If loader is true, user details are still loading
    }

    if (!userDetails) {
      // If user is not authenticated, redirect to login
      router.push("/login");
    }
  }, [userDetails, loader, router]);



  return <>{children}</>;
}
