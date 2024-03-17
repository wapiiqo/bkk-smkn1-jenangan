import React from "react";
import News1 from "../berita1.jpg";
import News2 from "../berita2.jpeg";
import News3 from "../berita3.jpeg";
import News4 from "../berita4.jpg";
import News5 from "../berita5.jpeg";
import News6 from "../berita6.jpg";

const News = () => {
  return (
    <div className="news py-5 text-white">
      <div className="container">
        <h1 className="text-center text-white">Berita Terkini Seputar BKK</h1>
        <div className="row text-center pt-4">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="news-item">
              <a href="#" data-bs-toggle="modal">
                <img src={News1} className="mb-3"></img>
              </a>
              <div className="news-caption px-2">
                <h4 className="text-white text-start">
                  Uji Kompetensi Keahlian (UKK) 2024
                </h4>
                <p className="text-white text-start">19 Feb 2024 | Berita</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="news-item">
              <a href="#" data-bs-toggle="modal">
                <img src={News2} className="mb-3"></img>
              </a>
              <div className="news-caption px-2">
                <h4 className="text-white text-start">
                  Lomba Kompetensi Siswa Tingkat Kabupaten Ponorogo Tahun 2024
                </h4>
                <p className="text-white text-start">20 Dec 2023 | Berita</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="news-item">
              <a href="#" data-bs-toggle="modal">
                <img src={News3} className="mb-3"></img>
              </a>
              <div className="news-caption px-2">
                <h4 className="text-white text-start">
                  Penilaian Kinerja Kepala Sekolah (PKKS) Tahun Pelajaran
                  2023/2024
                </h4>
                <p className="text-white text-start">25 Jan 2024 | Berita</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="news-item">
              <a href="#" data-bs-toggle="modal">
                <img src={News4} className="mb-3"></img>
              </a>
              <div className="news-caption px-2">
                <h4 className="text-white text-start">
                  Lomba Kompetensi Siswa Tingkat Kabupaten Ponorogo Tahun 2024
                </h4>
                <p className="text-white text-start">25 Jan 2024 | Berita</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="news-item">
              <a href="#" data-bs-toggle="modal">
                <img src={News5} className="mb-3"></img>
              </a>
              <div className="news-caption px-2">
                <h4 className="text-white text-start">
                  Lomba Kompetensi Siswa Tingkat Kabupaten Ponorogo Tahun 2024
                </h4>
                <p className="text-white text-start">25 Jan 2024 | Berita</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="news-item">
              <a href="#" data-bs-toggle="modal">
                <img src={News6} className="mb-3"></img>
              </a>
              <div className="news-caption px-2">
                <h4 className="text-white text-start">
                  Lomba Kompetensi Siswa Tingkat Kabupaten Ponorogo Tahun 2024
                </h4>
                <p className="text-white text-start">25 Jan 2024 | Berita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
