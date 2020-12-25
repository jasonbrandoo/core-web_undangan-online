import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
          <h4>UNDANGAN.COM</h4>
          <p>
            Situs untuk membuat undangan online dengan beragam design yang
            cantik, menarik, dan moderen.
          </p>
        </div>
        <div className="col col-md-4 ">
          <h4>SOSIAL MEDIA</h4>
          <div className="list-item">
            <Link href="/">
              <a>Instagram</a>
            </Link>
          </div>
          <div className="list-item">
            <Link href="/">
              <a>Facebook</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>© 2020, UNDANGAN.COM</h4>
      </div>
    </div>
  </div>
);

export default Footer;
