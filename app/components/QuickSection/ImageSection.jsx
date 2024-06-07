export default function ImageSection() {
  return (
    <div className="justify-self-end relative">
      <img src="phone.png" alt="phone" className="rounded-lg relative z-30" />
      <img
        src="icons/circle3-icon.svg"
        alt="circle"
        className="absolute top-[15%] left-[10%] z-10"
      />
    </div>
  );
}
