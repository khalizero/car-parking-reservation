"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type PrivateLayoutProps = {
  children: ReactNode;
};

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const { isAuthenticated, loaded } = useAuth();
  const router = useRouter();

  if (!loaded) {
    return "...Loading";
  }

  if (!isAuthenticated) {
    return router.push("/login");
  }

  return children;
};

export default PrivateLayout;
