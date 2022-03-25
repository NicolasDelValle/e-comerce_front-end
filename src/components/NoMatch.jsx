import React from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function NoMatch() {
  return (
    <>
      <NavigationBar />
      <div className="container">
        <p>Lo sentimos, la pagina que nos solicita no existe.</p>
      </div>
      <Footer className="mb-0" />
    </>
  );
}

export default NoMatch;