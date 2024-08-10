"use client";

import Image from "next/image";
import { useTimer } from "react-timer-hook";

export default function Home() {
  const { seconds, minutes, hours, days, isRunning } = useTimer({ expiryTimestamp: new Date("2024-10-26 18:00") });

  return (
    <main className="h-screen flex items-center justify-center bg-no-repeat bg-cover">
      <Image src="/images/bg.jpg" alt="wedding card" fill className="object-cover" />
      <div className="absolute top-0 left-0 size-full bg-black bg-opacity-10 flex items-center justify-center px-4">
        <div className="relative h-[600px] w-[600px] min-w-[355px] bg-white bg-opacity-50 p-5 pb-10 pt-5 text-center flex flex-col align-center justify-between">
          <div className="flex justify-center gap-3">
            <Image src="/icons/rings.svg" alt="wedding card" width={48} height={48} />
            <p className="text-3xl my-5 montserrat-400 grey-qo-regular">Taklifnoma</p>
          </div>
          <div>
            <p className="text-3xl">Hurmatli mehmon</p>
            <p className="text-xl my-5 montserrat-400 px-10 max-sm:px-0">
              Sizni{" "}
              <span className="whitespace-nowrap">
                <span className="grey-qo-regular text-2xl text-[#5db787]">Xolmurod</span> va{" "}
                <span className="grey-qo-regular text-2xl text-[#5db787]">Marjonaxon</span>
              </span>{" "}
              larning nikoh to'yining faxriy mehmoni bo'lishga taklif qilamiz
            </p>
          </div>
          <div>
            <div>
              <span className="font-medium">Boshlanish vaqti: </span>
              <span className="text-gray-600 whitespace-nowrap">26-oktyabr, 2024-yil 18:00</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Manzil: </span>
              <span className="text-gray-600">Buxoro viloyati, Qorako'l tumani, O'zbegim to'yxonasi</span>
            </div>
            <a
              href="https://maps.app.goo.gl/XBWCj59HXWhKpa5s6"
              target="_blank"
              className="underline mt-2 flex text-center justify-center"
            >
              <Image src="/icons/location.svg" alt="wedding card" width={24} height={24} />
              Manzilni xaritada ko'rish
            </a>
          </div>
          {isRunning ? (
            <div className="text-center">
              <p className="mb-2 font-medium">Marosim boshlanishiga qoldi:</p>
              <div className="flex justify-center w-[260px] mx-auto">
                <div className="flex flex-col grow w-fit text-gray-600">
                  <span className="text-xl">{days}</span>
                  <span>kun</span>
                </div>
                <div className="flex flex-col grow w-fit text-gray-600">
                  <span className="text-xl">{hours}</span>
                  <span>soat</span>
                </div>
                <div className="flex flex-col grow w-fit text-gray-600">
                  <span className="text-xl">{minutes}</span>
                  <span>daqiqa</span>
                </div>
                <div className="flex flex-col grow w-fit text-gray-600">
                  <span className="text-xl">{seconds}</span>
                  <span>soniya</span>
                </div>
              </div>
            </div>
          ) : (
            <p>Marosim boshlandi!</p>
          )}
        </div>
      </div>
    </main>
  );
}
