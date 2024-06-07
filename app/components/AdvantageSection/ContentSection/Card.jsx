export default function Card() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <img src={`icons/bell-icon.svg`} alt="icon" className="w-8" />
        <h6 className="text-black text-lg font-medium md:text-xl lg:text-2xl">
          Clever Notifications
        </h6>
      </div>
      <p className="text-black text-base md:text-lg lg:text-lg">
        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam.
      </p>
    </div>
  );
}
