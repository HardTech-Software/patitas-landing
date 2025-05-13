import React, { ReactNode, useEffect, useState } from "react";
import Header from "../header";
import { ContentContainer } from "./styles";
import Footer from "../footer";
import Typography from "../typography";

const Layout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <>
          <Header />
          <ContentContainer>{children}</ContentContainer>
          <Footer id="footer-section" />
        </>
      )}
    </>
  );
};

export default Layout;
