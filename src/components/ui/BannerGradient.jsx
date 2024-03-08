import img from "@/images/banner/gradient.png";
import Image from "next/image";

const BannerGradient = () => {
    return <Image className="absolute -z-10 object-cover top-0 opacity-80" src={img} alt="BannerGradient" />;
};

export default BannerGradient;
