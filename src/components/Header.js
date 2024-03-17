import React from "react";
import ImageDesc from "../desc1.jpg";

const Header = () => {
  return (
    <header className="description py-5">
      <div className="container">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-7 fw-bolder text-white translate-middle-y">
                Selamat Datang di e-BKK STMJ SMKN 1 Jenangan
              </h1>
              <p className="lead fw-normal text-white mb-4 pt-4 translate-middle-y ">
                Disini Anda dapat berbagi informasi seputar pelayanan dan
                informasi lowongan kerja, pelaksana pemasaran, penyaluran dan
                penempatan tenaga kerja.
              </p>
              <button className="tracer-study btn rounded-5 w-25 fw-bold text-white">
                Tracer Study
              </button>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-around justify-content-xl-start"></div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-end">
            <img className="img-thumbnail w-100" src={ImageDesc} alt="..." />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
