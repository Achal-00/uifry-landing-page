export default function Card(props) {
  return (
    <div
      className={`${props.background} px-4 py-6 lg:px-8 lg:py-10 rounded-lg ${props.font} flex flex-col gap-2`}
    >
      <h1 className="text-xl font-medium lg:text-2xl">{props.heading}</h1>
      <p className="lg:text-lg">{props.content}</p>
    </div>
  );
}
