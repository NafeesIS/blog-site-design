import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import rectangleOne from "@/images/banner/Rectangle-1.png";
import rectangleTwo from "@/images/banner/Rectangle-2.png";
import banner from "@/images/banner/banner.png";
import ArrowLeft from "@/images/logo/icon_arrow-left.png";
import ArrowRight from "@/images/logo/icon_arrow-right.png";
import Image from "next/image";

const Banner = () => {
    return (
        <Container className="relative">
            <div className="grid grid-cols-12 gap-[30px]">
                <div className="col-span-2 row-span-2 relative">
                    <Image className="h-[400px] opacity-40" src={rectangleOne} alt="raet" />
                    <div className="w-10 h-10 p-2.5 rotate-180 bg-indigo-900 justify-center items-center gap-2.5 inline-flex absolute top-1/4 right-0">
                        <div className="w-5 h-5 justify-center items-center flex">
                            <Image className="w-5 h-5 relative" src={ArrowRight} alt="ArrowRight" />
                        </div>
                    </div>
                </div>
                <div className="col-span-8 row-span-2 col-start-3">
                    <div className="justify-start items-start gap-[30px] h-[652px] inline-flex">
                        <div className="max-w-[850px] flex-col justify-start items-start inline-flex">
                            <Image className="h-[400px]" src={banner} alt="banner" />
                            <div className="self-stretch h-[39px] px-[30px] pt-[15px] bg-white flex-col justify-start items-start flex">
                                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-indigo-950 text-sm font-medium font-['DM Sans'] uppercase leading-normal">Design & Creative</div>
                                    <div className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['DM Sans'] leading-normal">10 June 2023</div>
                                </div>
                            </div>
                            <div className="self-stretch px-[30px] pt-[15px] pb-[30px] bg-white flex-col justify-start items-start gap-5 flex">
                                <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                                    <div className="self-stretch text-indigo-950 text-[32px] font-medium font-['Lora'] leading-[42px]">Lorem ipsum dolor sit amet consectetur</div>
                                    <div className="self-stretch text-zinc-500 text-lg font-normal font-['DM Sans'] leading-7">
                                        Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing
                                        etiam lobortis volutpat est...
                                    </div>
                                </div>
                                <Button variant="outline" className="rounded-none">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-11 relative">
                    <Image className="h-[400px] opacity-40" src={rectangleTwo} alt="raet" />
                    <div className="w-10 h-10 p-2.5 rotate-180 bg-indigo-900 justify-center items-center gap-2.5 inline-flex absolute top-1/4">
                        <div className="w-5 h-5 justify-center items-center flex">
                            <Image className="w-5 h-5 relative" src={ArrowLeft} alt="ArrowLeft" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
