"use client";
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation'

gsap.registerPlugin(useGSAP);

export default function Home() {
  const router = useRouter()
  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useGSAP((_, contextSafe) => {
    gsap.to('.print', { rotate: 0, duration: 1, delay: 5, ease: "elastic.out" });
    gsap.to('.inkdrop', { opacity: 0.6, duration: 1, stagger: 1, ease: "expo.in" });
    gsap.to('.appear-button', { delay: 6, opacity: 1, duration: 2 });

    const onHover = contextSafe!(() => {
      gsap.to(".enter-text", { x: 110 });
    });

    const offHover = contextSafe!(() => {
      gsap.to(".enter-text", { x: 0 });
    });

    const handleClick = contextSafe!(() => {
      setTimeout(() => {
        router.push("/japanese-woodblock-prints/start");
      }, 5000);
      gsap.to(".scene", { opacity: 0, duration: 4, ease: "power1.out" });
      gsap.to(".gate", { opacity: 1, duration: 4, ease: "steps(1)" });
      gsap.to(".gate", { scale: 20, duration: 4, ease: "power1.out" });
    });

    buttonRef.current?.addEventListener("pointerover", onHover);
    buttonRef.current?.addEventListener("pointerleave", offHover);
    buttonRef.current?.addEventListener("click", handleClick);

    return () => {
      buttonRef.current?.removeEventListener("pointerover", onHover);
      buttonRef.current?.removeEventListener("pointerleave", offHover);
      buttonRef.current?.removeEventListener("click", handleClick);
    }
  }, { scope: container });

  return (
    <div ref={container} className="bg-japan-background font-judson text-japan-foreground relative flex-1 flex flex-col items-center justify-center">
      <div className="scene opacity-100">
        <div className="flex flex-col sm:flex-row gap-10 items-center bg-japan-background rounded-md p-4">
          <div className=" flex flex-col gap-2">
            <div className="bg-clip-text text-transparent bg-linear-to-b from-japan-foreground from-70% to-japan-background">
              <h1 className="text-5xl font-bold">
                Ukiyo-e
              </h1>
              <h2 className="text-4xl">
                The Art of Woodblock Prints
              </h2>
            </div>
            <button className="w-1/2 hover:bg-linear-to-b from-japan-background from-70% to-white hover:cursor-pointer border-b border-japan-foreground flex flex-row gap-2 items-end appear-button opacity-0" ref={buttonRef}>
              <div className="text-xl font-semibold enter-text">
                Enter
              </div>
              <Image src={"/japanese-prints/icons/shinto.svg"} className="border gate" height={50} width={50} alt="utagahama print" />
            </button>
          </div>
          <Image src={"/japanese-prints/artworks/utagahama.jpg"} className="print rotate-3" height={220} width={220} alt="utagahama print" />
        </div>
        <Image src={"/japanese-prints/icons/inkdrop.svg"} height={120} width={120} alt="inkdrop" className="inkdrop absolute top-20 left-100 opacity-0" />
        <Image src={"/japanese-prints/icons/inkdrop.svg"} height={150} width={150} alt="inkdrop" className="inkdrop absolute top-40 right-32 opacity-0" />
        <Image src={"/japanese-prints/icons/inkdrop.svg"} height={105} width={105} alt="inkdrop" className="inkdrop absolute bottom-32 left-120 opacity-0" />
        <Image src={"/japanese-prints/icons/inkdrop.svg"} height={135} width={135} alt="inkdrop" className="inkdrop absolute bottom-20 right-20 opacity-0" />
        <Image src={"/japanese-prints/icons/inkdrop.svg"} height={165} width={165} alt="inkdrop" className="inkdrop absolute top-1/2 left-10 opacity-0" />
      </div>
    </div>
  );
}
