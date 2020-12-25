import { Nav } from "react-bootstrap";
import Icon from "react-eva-icons";
import Link from "next/link";

export const Notification = () => (
  <div className="notification">
    <label>"👋 &nbsp; Buat undangan online mu sekarang juga"</label>
  </div>
);

export const Navbar = () => {
  return (
    <nav className="bg-white navbar navbar-expand p-3 border-bottom">
      <div className="container ">
        <a className="navbar-brand">UNDANGAN.COM</a>
        <div className="d-none d-md-flex align-items-center ">
          <a href="#" className="nav-link">
            Design
          </a>
          <a href="#" className="nav-link">
            Harga
          </a>
          <a href="#" className="nav-link">
            Testimoni
          </a>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <Link href="/login">
            <a className="nav-link">Login</a>
          </Link>
          <Link href="/register">
            <a className="ml-4 btn btn-register btn-md">
              Daftar
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="btn--icon">
                <g data-name="Layer 2">
                  <g data-name="arrow-forward">
                    <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
                    <path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const TabBar = () => (
  <div className="d-md-none d-sm-block position-fixed tab-bar w-100">
    <div className="bg-white border-top d-flex justify-content-between pt-2 pb-2">
      <a href="" className="tab-bar--link">
        <Icon
          name="home"
          fill="#282828"
          size="large" // small, medium, large, xlarge
          animation={{
            type: "pulse", // zoom, pulse, shake, flip
            hover: true,
            infinite: false,
          }}
        />
        Home
      </a>
      <a href="" className="tab-bar--link">
        <Icon
          name="color-palette-outline"
          fill="#282828"
          size="large" // small, medium, large, xlarge
          animation={{
            type: "pulse", // zoom, pulse, shake, flip
            hover: true,
            infinite: false,
          }}
        />
        Template
      </a>

      <a href="" className="tab-bar--link">
        <Icon
          name="person-outline"
          fill="#282828"
          size="large" // small, medium, large, xlarge
          animation={{
            type: "pulse", // zoom, pulse, shake, flip
            hover: true,
            infinite: false,
          }}
        />
        Akun
      </a>
    </div>
  </div>
);

export const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
          <h4>UNDANGAN.COM</h4>
          <p>
            Situs untuk membuat undangan online dengan beragam design yang cantik, menarik, dan
            moderen.
          </p>
        </div>
        <div className="col col-md-4 ">
          <h4>SOSIAL MEDIA</h4>
          <p class="list-item">
            <a href="#">Instagram</a>
          </p>
          <p class="list-item">
            <a class="" href="#">
              Facebook
            </a>
          </p>
        </div>
      </div>
      <div className="copyright">
        <h4>© 2020, UNDANGAN.COM</h4>
      </div>
    </div>
  </div>
);

export const MainLayout = ({ children }) => {
  return (
    <>
      <Notification />
      <Navbar />
      <TabBar />
      {children}
      <Footer />
    </>
  );
};
