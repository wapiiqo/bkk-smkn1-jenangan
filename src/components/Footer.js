import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 py-5 mb-lg-0">
            <h3 className="text-dark">
              Bursa Kerja Khusus SMKN 1 Jenangan Ponorogo
            </h3>
          </div>
          <div className="col-lg-4 mb-5 py-5 mb-lg-0 ms-auto">
            <h3 className="text-dark">HUBUNGI KAMI</h3>
            <p className="text-dark">
              Jl. Niken Gandini No.98, Setono, Kec.Ponorogo, Kabupaten Ponorogo,
              Jawa Timur (63492)
            </p>
            <a className="" href="#">
              <FaFacebook size="20px" />
            </a>
            <a className="mx-2" href="#">
              <FaInstagram size="20px" />
            </a>
          </div>
        </div>
      </div>
      <h5 className="copyright text-white text-center py-3">
        Designed by Kelompok 4
      </h5>
    </footer>
  );
};

export default Footer;
