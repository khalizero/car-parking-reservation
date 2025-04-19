import Header from "@/components/Header";
import React from "react";

interface Props {
  children: any;
}

const PublicLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default PublicLayout;
