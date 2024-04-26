export const ImageTextServices = ({
  order,
  imgMobile,
  imgDesktop,
  title,
  text,
}) => {
  return (
    <div className={` ${order} relative pt-[398px] sm:pt-[350px] tablet:pt-[150px] lg:pt-[250px] desktop:pt-[398px]`}>
      <picture className="absolute top-0  z-[-1]">
        <source media="(max-width: 639px)" srcSet={imgMobile} />
        <source media="(min-width: 640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Imagen Sevicio" />
      </picture>
      <h2 className="text-center font-fontFraunces text-[28px] dark-desaturated-cyan-text mb-7 font-extrabold mt-[30px]"> {title} </h2>
      <p className="text-center font-fontBarlow dark-desaturated-cyan-text mx-3 mb-[60px] tablet:text-sm] lg:w-[300px] lg:mx-auto"> {text} </p>
    </div>
  );
};
