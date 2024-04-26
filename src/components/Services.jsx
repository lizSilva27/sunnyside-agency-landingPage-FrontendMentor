import { Image } from "./Image";
import { TextServices } from "./TextServices";
import { ImageTextServices } from "./ImageTextServices";

import eggImgMobile from "../assets/mobile/image-transform.jpg";
import eggImgDesktop from "../assets/desktop/image-transform.jpg";
import glassImgMobile from "../assets/mobile/image-stand-out.jpg";
import glassImgDesktop from "../assets/desktop/image-stand-out.jpg";
import graphicDesingImgMobile from "../assets/mobile/image-graphic-design.jpg";
import graphicDesingImgDesktop from "../assets/desktop/image-graphic-design.jpg";
import photographyImgMobile from "../assets/mobile/image-photography.jpg";
import photographyImgDesktop from "../assets/desktop/image-photography.jpg";

export const Services = () => {
  return (
    <section className="tablet:grid tablet:grid-cols-2">
      <Image
        order="order-2"
        imgMobile={eggImgMobile}
        imgDesktop={eggImgDesktop}
      />

      <TextServices
        order="order-1"
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        colorButton="bg-Yellow"
      />

      <Image
        order="order-3"
        imgMobile={glassImgMobile}
        imgDesktop={glassImgDesktop}
      />

      <TextServices
        order="order-4"
        title="Stand out to the right audience"
        text=" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extnd your brand in digital places."
        colorButton="bg-softRed"
      />

      <ImageTextServices
        order="order-5"
        imgMobile={graphicDesingImgMobile}
        imgDesktop={graphicDesingImgDesktop}
        title="Graphic design"
        text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />

      <ImageTextServices
        order="order-6"
        imgMobile={photographyImgMobile}
        imgDesktop={photographyImgDesktop}
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
};
