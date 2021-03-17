import React from "react";
import "./Footer.css";
function Footer() {
  return (
    // <div className="footer">
    //   <div className="footer">
    //     <div className="footer__container">
    //       <div className="footer__left">
    //         <div className="footer__leftContainer">
    //           <h1>Nom de l'application </h1>
    //           <p>
    //             Trouve des partenaires sportifs et découvre de nouveaux sports{" "}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="footer__rigth">
    //         <div className="footer__rigthContainer">
    //           <dl>
    //             <dd> A propos</dd>
    //             <dd> Nous contacter</dd>
    //           </dl>
    //         </div>
    //       </div>
    //     </div>
    //     <p>2021 nom app all rights reserved </p>
    //   </div>
    // </div>
    <footer class="bg-light text-center text-lg-start">
      <div
        class="text-center p-3"
        // style="background-color: rgba(0, 0, 0, 0.2);"
      >
        ©2021 “nom app- All rights Reserved
        <a class="text-dark">MDBootstrap.com</a>
      </div>
    </footer>
  );
}

export default Footer;
