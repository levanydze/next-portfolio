import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Photography() {
  return (
    <main className="text-3xl text-gray-100 text-center my-10">
      <h3 className="headText">Photography</h3>
      <p className="text-xl pt-10">
        While the web page build is in process, you can visit my separate
        photography web page
      </p>
      <Link className="text-2xl underline" href="https://artoflevanidze.com">
        www.ArtofLevanidze.com
        <Image
          className="p-10"
          src={
            "https://github.com/levanydze/portfoliosupport/blob/main/gomismta.jpeg?raw=true"
          }
          width={2000}
          height={2000}
          priority
          alt="www.ArtofLevanidze.com"
        ></Image>
      </Link>
    </main>
  );
}
