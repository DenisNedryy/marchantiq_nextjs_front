"use client";

import flyer_decoupe_1 from "../../../../public/assets/pictures/photos/flyer_decoupe_1.png";
import flyer_decoupe_2 from "../../../../public/assets/pictures/photos/flyer_decoupe_2.png";
import flyer_decoupe_3 from "../../../../public/assets/pictures/photos/flyer_decoupe_3.png";
import flyer_decoupe_4 from "../../../../public/assets/pictures/photos/flyer_decoupe_4.png";
import Image from "next/image";
import { useRef } from "react";

export function ContactFlyer() {
  const fly1Ref = useRef(null);
  const fly2Ref = useRef(null);
  const fly3Ref = useRef(null);
  const fly4Ref = useRef(null);

  function handleHover() {
    if (fly1Ref.current) fly1Ref.current.style.transform = "translateX(-50px)";
    if (fly2Ref.current) fly2Ref.current.style.transform = "translateX(50px)";
    if (fly3Ref.current) fly3Ref.current.style.transform = "translateX(-50px)";
    if (fly4Ref.current) fly4Ref.current.style.transform = "translateX(50px)";

    setTimeout(() => {
      if (!fly4Ref.current) return;
      fly4Ref.current.style.transform =
        "translateX(0px) translateY(-200px) scale(2)";
    }, 300);
  }

  function handleHoverBack() {
    setTimeout(() => {
      if (fly1Ref.current) fly1Ref.current.style.transform = "translateX(0px)";
      if (fly2Ref.current) fly2Ref.current.style.transform = "translateX(0px)";
      if (fly3Ref.current) fly3Ref.current.style.transform = "translateX(0px)";
      if (fly4Ref.current) fly4Ref.current.style.transform = "translateX(0px)";
    }, 300);

    if (fly4Ref.current) {
      fly4Ref.current.style.transform =
        "translateX(50px) translateY(0px) scale(1)";
    }
  }

  return (
    <div
      className="contact__coordonées__flyer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverBack}
    >
      <Image src={flyer_decoupe_1} ref={fly1Ref} alt="part 1 flyer" />
      <Image src={flyer_decoupe_2} ref={fly2Ref} alt="part 2 flyer" />
      <Image src={flyer_decoupe_3} ref={fly3Ref} alt="part 3 flyer" />
      <Image src={flyer_decoupe_4} ref={fly4Ref} alt="part 4 flyer" />
    </div>
  );
}
