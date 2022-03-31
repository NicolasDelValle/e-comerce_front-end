import React from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function NoMatch() {
  return (
    <>
      <NavigationBar />
      <div className="container">
        <p className="w-100 h-100">
          Lo sentimos, la pagina que nos solicita no existe.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default NoMatch;
