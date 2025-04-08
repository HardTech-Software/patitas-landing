import React, { ReactNode } from "react";
import Header from "../header";
import { ContentContainer } from "./styles";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};

export default Layout;
