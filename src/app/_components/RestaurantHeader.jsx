"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState(null);

  const router = useRouter();
  const pathName = usePathname();

  

useEffect(() => {
  const data = localStorage.getItem("restaurantUser");

  if (!data && pathName === "/restaurant/dashboard") {
    router.push("/restaurant");
  } else if (data && pathName === "/restaurant") {
    router.push("/restaurant/dashboard");
  }
}, [pathName, router]);

useEffect(() => {
  const data = localStorage.getItem("restaurantUser");

  if (data) {
    queueMicrotask(() => setDetails(JSON.parse(data)));
  }
}, []);



  const logout = () => {
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  };

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

          {details && details.name ? (
            <>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              <li>
                <Link href="/">Profile</Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/">Login/SignUp</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default RestaurantHeader;
