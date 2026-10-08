import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestaurantHeader = () => {
  return (
    <>
      <div className="header-wrapper ">
        <div className="logo">
          <Image
            width={100}
            height={100}
            src="/images/logo.webp"
            alt="logo image"
          />
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/">Login/SignUp</Link>
          </li>

          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RestaurantHeader;
