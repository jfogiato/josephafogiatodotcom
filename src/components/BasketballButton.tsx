"use client";

import { useState } from "react";
import Image from "next/image";
import { PiBasketball } from "react-icons/pi";

interface Shot {
  id: number;
  arcHeight: string;
  missX: string;
  duration: string;
}

export default function BasketballButton() {
  const [shots, setShots] = useState<Shot[]>([]);

  const handleShoot = () => {
    const id = Date.now();
    const maxHeight = -400;
    const minHeight = -100;
    const arcHeight = `${Math.floor(Math.random() * (minHeight - maxHeight) + maxHeight)}px`;
    const missX = `${Math.floor(Math.random() * 100 - 50)}px`;
    const duration = `${(Math.random() * 1 + 3).toFixed(2)}s`;

    setShots((prev) => [...prev, { id, arcHeight, missX, duration }]);

    setTimeout(
      () => {
        setShots((prev) => prev.filter((s) => s.id !== id));
      },
      parseFloat(duration) * 1000 + 500,
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <button onClick={handleShoot}>
          <PiBasketball className="text-4xl transition-transform duration-200 hover:scale-110" />
        </button>
      </div>

      {shots.map(({ id, arcHeight, missX, duration }) => (
        <div
          key={id}
          className="fixed left-1/2 transform -translate-x-1/2 pointer-events-none"
          style={
            {
              top: "40vh",
              "--arc-height": arcHeight,
              "--miss-x": missX,
              "--duration": duration,
            } as React.CSSProperties
          }
        >
          <Image
            src="/images/misc/basketball.png"
            alt="Basketball"
            width={90}
            height={90}
            className="animate-basketball-arc"
          />
        </div>
      ))}
    </>
  );
}
