export default function ContentSection() {
  return (
    <div className="flex flex-col gap-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:self-center">
      <div className="flex gap-2 items-center">
        <img src={`icons/star2-icon.svg`} alt="icon" className="w-8" />
        <h6 className="text-black text-lg font-medium md:text-xl lg:text-2xl">
          Fully Customizable
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
