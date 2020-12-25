import Head from "next/head";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { MainLayout } from "../components/layouts/Layout";
import Icon from "react-eva-icons";
import { PeopleReview } from "../components/home/PeopleReview";
import { Banner } from "../components/home/Banner";

export default function Home() {
  return (
    <MainLayout>
      <div className="hero--section">
        <div className="container">
          <div className="row row-grid align-items-center">
            <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5 text-center text-md-left">
              <h4 className="hero--section-title mb-3">
                Sebarkan Undangan Pernikahanmu Secara Online
              </h4>
              <div className="mt-3 ">
                <a href="#" className="btn hero-button">
                  Buat Sekarang
                </a>
              </div>
            </div>
            <div className="d-none d-md-block col-md-5 col-lg-6 order-md-2 text-center">
              <figure className="w-100">
                <img src="/assets/hero-img1.svg" className="img-fluid mw-md-120" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="template-section">
        <div className="container">
          <Row>
            <Col md={6} className="order-md-2">
              <div className="d-flex justify-content-center">
                <img src="/assets/loved.svg" />
              </div>
            </Col>
            <Col md={6} className="order-md-1">
              <h4 className="template-section--title">Template Undangan Yang Menarik</h4>
              <p className="lead">
                Kami menyediakan template undangan yang menarik, cantik, dan moderen. Tentu nya akan
                membuat undangan anda menjadi lebih elegan.{" "}
              </p>
              <a href="#" className="link-more">
                Lihat Lainnya
                <Icon
                  name="arrow-forward-outline"
                  fill="#E96BB4"
                  size="large" // small, medium, large, xlarge
                  animation={{
                    type: "pulse", // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false,
                  }}
                />
              </a>
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <Col xs={6} sm={6} md={6} lg={3}>
              <img src="/assets/sample1.png" className="img-sample" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={3}>
              <img src="/assets/sample2.png" className="img-sample" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={3}>
              <img src="/assets/sample3.png" className="img-sample" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={3}>
              <img src="/assets/sample4.png" className="img-sample" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="testimoni-section">
        <div className="container">
          <Row>
            <Col md={6}>
              <h4 className="template-section--title">Testimoni Dari Para Pengantin</h4>
              <p className="lead">
                Kami telah membantu para pengantin untuk menjadikan undangan pernikahan mereka
                menjadi lebih berkesan dan memudahkan para pengantin mengurus undangan nya.
              </p>
              <a href="#" className="link-more">
                Lihat Lainnya
                <Icon
                  name="arrow-forward-outline"
                  fill="#E96BB4"
                  size="large" // small, medium, large, xlarge
                  animation={{
                    type: "pulse", // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false,
                  }}
                />
              </a>
            </Col>
            <Col md={6} className="order-md-2">
              <PeopleReview />
            </Col>
          </Row>
        </div>
      </div>
      <div className="whyus-section">
        <div className="container text-center">
          <h4 className="template-section--title">Kenapa Memilih Kami?</h4>
          <p className="lead mt-4">
            Kami memberikan solusi untuk pernikahan anda, salah satunya undangan. Dengan menggunakan
            undangan.com kamu dapat menghemat waktu untuk mengurus keperluan pernikahan lainnya.
            Cukup daftar, isi data diri, dan pilih template yang di inginkan, undangan kamu akan
            langsung jadi dalam beberapa menit. Selain praktis kamu juga dapat menghemat pengeluaran
            untuk pembuatan undangan pada umumnya. Dengan design undangan yang cantik dan moderen
            tentunya akan membuat pernikahan anda menjadi lebih terkesan.
          </p>
          <a href="#" className="btn btn-primary mt-3">
            Buat Sekarang
          </a>
          <Banner />
        </div>
      </div>

      <div className="responsive-section">
        <div className="container text-center">
          <div className="row row-grid align-items-center">
            <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5 text-center text-md-left">
              <h4 className="responsive-section--title">
                Responsive design & Bisa di akses dimanapun
              </h4>
              <p>undangan online kamu bisa diakses dimanapun dan kapan pun.</p>
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-2 text-center">
              <figure className="w-100">
                <img src="/assets/responsive.svg" className="img-fluid mw-md-120" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
