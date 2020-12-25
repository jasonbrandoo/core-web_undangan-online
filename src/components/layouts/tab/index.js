import React from 'react';
import Link from 'next/link';
import Icon from 'react-eva-icons';

const Tab = () => {
  return (
    <div className="d-md-none d-sm-block position-fixed tab-bar w-100">
      <div className="bg-white border-top d-flex justify-content-between pt-2 pb-2">
        <Link href="/">
          <a className="tab-bar--link">
            <Icon
              name="home"
              fill="#282828"
              size="large" // small, medium, large, xlarge
              animation={{
                type: 'pulse', // zoom, pulse, shake, flip
                hover: true,
                infinite: false,
              }}
            />
            Home
          </a>
        </Link>
        <Link href="/">
          <a className="tab-bar--link">
            <Icon
              name="color-palette-outline"
              fill="#282828"
              size="large" // small, medium, large, xlarge
              animation={{
                type: 'pulse', // zoom, pulse, shake, flip
                hover: true,
                infinite: false,
              }}
            />
            Template
          </a>
        </Link>
        <Link href="/">
          <a className="tab-bar--link">
            <Icon
              name="person-outline"
              fill="#282828"
              size="large" // small, medium, large, xlarge
              animation={{
                type: 'pulse', // zoom, pulse, shake, flip
                hover: true,
                infinite: false,
              }}
            />
            Akun
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Tab;
