"use client";
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to('.print', { rotate: 0, duration: 0.5, delay: 10 });
    gsap.to('.inkdrop', { opacity: 1, duration: 2, stagger: 2 });
  }, { scope: container });

  return (
    <div ref={container} className="relative bg-japan-background font-judson flex flex-col flex-1 items-center justify-center text-japan-foreground">
      <div className="flex flex-col sm:flex-row gap-10 items-center bg-japan-background rounded-md p-4 z-10">
        <div className="bg-clip-text text-transparent bg-linear-to-b 
      from-japan-foreground from-80% to-japan-background">
          <span className="text-5xl font-bold">
            Ukiyo-e
          </span>
          <h2 className="text-4xl">
            The Art of Woodblock Prints
          </h2>
        </div>
        <Image src={"/japanese-prints/utagahama.jpg"} className="print rotate-3" height={220} width={220} alt="utagahama print" />
      </div>
      <Image src={"/japanese-prints/inkdrop.svg"} height={120} width={120} alt="inkdrop" className="inkdrop absolute top-20 left-100 opacity-0" />
      <Image src={"/japanese-prints/inkdrop.svg"} height={150} width={150} alt="inkdrop" className="inkdrop absolute top-40 right-32 opacity-0" />
      <Image src={"/japanese-prints/inkdrop.svg"} height={105} width={105} alt="inkdrop" className="inkdrop absolute bottom-32 left-120 opacity-0" />
      <Image src={"/japanese-prints/inkdrop.svg"} height={135} width={135} alt="inkdrop" className="inkdrop absolute bottom-20 right-20 opacity-0" />
      <Image src={"/japanese-prints/inkdrop.svg"} height={165} width={165} alt="inkdrop" className="inkdrop absolute top-1/2 left-10 opacity-0" />
    </div>
  );
}
