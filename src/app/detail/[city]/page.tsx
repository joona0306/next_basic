import Link from "next/link";
import React from "react";

type Props = {
  params: {
    city: string;
  };
};

const page = ({ params }: Props) => {
  const cityName = params.city === "daegu" ? "대구" : params.city;
  return (
    <>
      <div>상세 페이지 : {cityName}</div>
      <Link href="/">이전 페이지</Link>
    </>
  );
};

export default page;
