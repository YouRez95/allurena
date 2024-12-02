export default function PopularCard({
  background,
  backgroundopacity,
  reverse = false,
  text,
  heading,
  productImage,
  productBackImg,
  productType,
  productPrice,
  largeImage,
  translateY = 0,
}) {
  return (
    <div
      className={`h-[70vh] relative flex ${background} flex-col md:flex-row`}
      style={{
        transform: `translateY(${translateY}vh)`,
        transition: "transform 0.5s ease",
      }}
    >
      <div
        className={`w-full md:w-1/2 flex flex-col items-center justify-center gap-3 sm:gap-10 relative z-10 my-auto md:my-0 ${
          reverse ? "order-2" : ""
        }`}
      >
        <div className="leading-7 text-center">
          <p className="uppercase text-[#566362]">{text}</p>
          <h2 className="text-6xl">{heading}</h2>
        </div>

        <div className="max-h-72 relative group">
          <img
            src={productBackImg}
            alt="water"
            className="absolute hidden md:block"
          />
          <div
            className={`${background} w-full h-full absolute transition-all duration-1000 ease-in-out group-hover:w-0 hidden md:block`}
          />
          <img src={productImage} alt="" className="w-full h-full relative " />
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <span className="text-sm w-1/3 text-[#566362] ml-auto text-right pt-[2px] pr-[10px] whitespace-nowrap">
              Product type:
            </span>
            <span className="text-base text-[#242A2E] w-2/3 whitespace-nowrap">
              {productType}
            </span>
          </div>
          <div className="flex">
            <span className="text-sm w-1/3 text-[#566362] text-right pt-[2px] pr-[10px]">
              Price:
            </span>
            <span className="text-base text-[#242A2E] w-2/3">
              {productPrice}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 absolute md:static inset-0">
        <img
          src={largeImage}
          alt="protection image"
          className="object-cover w-full h-full"
        />
        <div
          className={`${backgroundopacity} w-full h-full absolute inset-0 md:hidden`}
        />
      </div>
    </div>
  );
}
