import Image from "next/image";
import ArrowLeftIcon from "../public/icons/leftIcon";

const services = [
  {
    label: "Industry Experts",
    bgColor: "bg-[#B22222]",
    textColor: "text-white",
  },
  { label: "Dedicated Team", bgColor: "bg-slate-300", textColor: "text-black" },
  {
    label: "Outcome focused",
    bgColor: "bg-slate-300",
    textColor: "text-black",
  },
  {
    label: "High Quality Service",
    bgColor: "bg-slate-300",
    textColor: "text-black",
  },
  {
    label: "Cyber Security Expert",
    bgColor: "bg-slate-300",
    textColor: "text-black",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-black justify-center items-center text-center p-6 min-h-screen">
      <div className="text-gray-600 text-lg p-2">WHY CHOOSE US</div>
      <div className="text-black text-4xl font-bold p-2">
        We Are Different From Others
      </div>
      <div className="text-gray-600 p-2 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate
        accusantium recusandae soluta explicabo hic!
      </div>
      <div className="flex flex-col lg:flex-row justify-between pl-6 pr-6 p-2">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
          <div className="bg-[#CD5C5C] rounded-full text-white h-96 w-96 flex flex-col justify-center items-center text-center space-y-4 z-20 opacity-80">
            <div className="text-xl font-bold">XYZ Industry Experts</div>
            <div className="text-lg text-gray-100 px-6">
              Made by Sushil Gupta. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa cupiditate accusantium recusandae soluta
              explicabo hic!
            </div>
          </div>

          <div className="rounded-full text-white h-96 w-96 absolute top-0 lg:left-[16rem]">
            <Image
              className="rounded-full"
              src="/images/Laptop.png"
              layout="fill"
              objectFit="cover"
              priority
              alt="Picture of the author"
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </div>

        <div className="flex justify-between lg:pr-16 p-2 pt-12 lg:pt-24">
          <ul>
            {services.map((service, index) => (
              <li
                key={index}
                className={`text-lg font-bold ${service.bgColor} ${service.textColor} w-full lg:w-96 rounded-l-full m-2`}
              >
                <button
                  type="button"
                  className="flex justify-between p-2 w-full"
                >
                  <ArrowLeftIcon
                    className={`fill-current ${service.textColor}`}
                  />
                  {service.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
