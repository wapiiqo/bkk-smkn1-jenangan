import React from "react";
import Image from "../kepala-sekolah.jpg";

const KepalaSekolah = () => {
  return (
    <div className="headschool py-5">
      <div className="container">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-center">
              <img className="img-thumbnail w-50" src={Image} alt="..." />
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-around justify-content-xl-start"></div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-start">
            <p className="custom-caption lead fw-normal text-white mb-auto">
              "Suatu bentuk media yang digunakan untuk pelacakan jejak alumni
              sehingga bisa dimanfaatkan untuk database alumni dan membangun
              jaringan dengan para alumni, serta bahan evaluasi atas kompetensi
              lulusan, kurikulum, tenaga pendidik, dan pengembangan sekolah.
              Kemanfaatan lainnya dapat digunakan untuk saling shilaturohmi,
              berbagi informasi lowongan kerja antar alumni, BKK dan Mitra
              Industri. Selain dapat menjadi nilai tambah akreditasi bagi satuan
              pendidikan dan acuan pembuatan pelatihan, hasil penelitian juga
              menjadi alat monitoring instansi terkait serta memudahkan industri
              mendapatkan informasi lulusan yang kompeten. Untuk itu mohon
              kerjasamanya sehingga kemnfaatan dapat dirasakan semuanya."
            </p>
            <p className="custom-caption lead fw-normal text-white mb-auto pt-4">
              Renaldy Permana Sundawirr M.Pd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KepalaSekolah;
