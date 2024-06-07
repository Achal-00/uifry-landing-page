export default function Card(props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <img
          src={`icons/features/${props.image}.svg`}
          alt="icon"
          className="w-4"
        />
        <h6 className="text-black text-base font-medium md:text-lg lg:text-xl">
          {props.heading}
        </h6>
      </div>
      <p className="text-black text-sm md:text-base lg:text-lg">
        {props.content}
      </p>
    </div>
  );
}
