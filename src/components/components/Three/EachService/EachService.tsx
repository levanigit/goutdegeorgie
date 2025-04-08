import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type EachServiceProps = {
  icon: StaticImageData;
  url: string;
  title: string;
};

export default function EachService({ icon, url, title }: EachServiceProps) {
  return (
    <div>
      <Image src={icon} width={100} height={100} alt={title}></Image>
      <h2 className="caption ">{title}</h2>
      <Link className="caption-mini font1" href={url}>
        Learn more
      </Link>
    </div>
  );
}
