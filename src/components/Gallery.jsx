import { Image } from "./Image";

import imageMilkMobile from "../assets/mobile/image-gallery-milkbottles.jpg";
import imageMilkDesktop from "../assets/desktop/image-gallery-milkbottles.jpg";
import imageOrangeMobile from "../assets/mobile/image-gallery-orange.jpg";
import imageOrangeDesktop from "../assets/desktop/image-gallery-orange.jpg";
import imageConeMobile from "../assets/mobile/image-gallery-cone.jpg";
import imageConeDesktop from "../assets/desktop/image-gallery-cone.jpg";
import imageSugarMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import imageSugarDesktop from "../assets/desktop/image-gallery-sugarcubes.jpg";

export const Gallery = () => {
  return (
    <div className="grid grid-cols-2 sm:flex">
      <Image imgMobile={imageMilkMobile} imgDesktop={imageMilkDesktop} />
      <Image imgMobile={imageOrangeMobile} imgDesktop={imageOrangeDesktop} />
      <Image imgMobile={imageConeMobile} imgDesktop={imageConeDesktop} />
      <Image imgMobile={imageSugarMobile} imgDesktop={imageSugarDesktop} />
    </div>
  );
};
