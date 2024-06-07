import Image from "next/image";

export default function CTA() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:w-[50%]">
      <button className="bg-black flex gap-2 px-2 py-3 rounded-md justify-center items-center">
        <p className="text-white">Get Started</p>
        <Image
          src="icons/right-arrow-icon.svg"
          alt="go"
          width={0}
          height={0}
          className="w-6"
        />
      </button>
      <button className="bg-transparent flex gap-2 px-2 py-3 rounded-md justify-center items-center">
        <Image
          src="icons/video-icon.svg"
          alt="video"
          width={0}
          height={0}
          className="w-6"
        />
        <p className="text-black">Watch Video</p>
      </button>
    </div>
  );
}
