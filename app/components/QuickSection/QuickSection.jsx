import Content from "./Content";
import ImageSection from "./ImageSection";

export default function QuickSection() {
  return (
    <div className="grid lg:grid-cols-2 mx-4 lg:mx-20 relative my-44 lg:my-44 bg-black rounded-lg">
      <Content />
      <ImageSection />
      <img
        src="upper-circle.svg"
        alt="circle"
        className="absolute top-0 right-0 z-10 hidden lg:block"
      />
      <img
        src="lower-circle.svg"
        alt="circle"
        className="absolute bottom-0 left-0 z-10 hidden lg:block"
      />
      <svg
        width="62"
        height="59"
        viewBox="0 0 62 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-12 left-[60%] top-[10%] hidden lg:block"
      >
        <path
          d="M31 0.708984L32.5047 30.6379L61.4338 22.8204L33.4347 33.5001L49.8091 58.5975L31 35.269L12.1909 58.5975L28.5653 33.5001L0.566191 22.8204L29.4953 30.6379L31 0.708984Z"
          fill="white"
        />
      </svg>
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-10 left-[40%] top-[70%] hidden lg:block"
      >
        <path
          d="M40.9117 4.67955L25.8375 21.3498L45.3253 32.5459L24.8128 23.3608L20.1867 45.3546L22.5835 23.0078L0.236642 25.4045L22.2304 20.7784L13.0454 0.265953L24.2415 19.7537L40.9117 4.67955Z"
          fill="white"
        />
      </svg>
      <img
        src="icons/circle1-icon.svg"
        alt="circle"
        className="absolute top-[-30%] left-[-30%] lg:top-[-40%] lg:left-[-15%] -z-50"
      />
      <img
        src="icons/star1-icon.svg"
        alt="star"
        className="absolute top-[-30%] right-[-3%] w-12"
      />
      <img
        src="icons/star-icon.svg"
        alt="star"
        className="absolute top-[45%] left-[-5%] hidden lg:block"
      />
    </div>
  );
}
