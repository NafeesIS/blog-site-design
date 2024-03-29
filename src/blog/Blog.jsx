import { WatchVideo } from "@/components/shared/WatchVideo";
import Container from "@/components/ui/Container";
import imgOne from "@/images/blog/Rectangle-5.png";
import search from "@/images/logo/search.svg";
import Image from "next/image";

const Blog = () => {
    return (
        <Container className="md:mx-[75px] mx-4 h-full">
            <div className="flex mx-auto max-w-[300px] md:max-w-full md:flex-row flex-col items-start md:items-center justify-between pt-[84px] pb-10">
                <div className="flex flex-row justify-start items-center  gap-[15px]">
                    <div className="text-indigo text-2xl md:text-[40px] font-bold leading-[50px] pr-2 md:pr-8">Blog</div>
                    <div className="flex flex-row items-center gap-2 md:gap-[15px]">
                    <div className="h-10 px-5 py-[7px] bg-gray-500 bg-opacity-10 rounded-[40px] justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-950 text-sm md:text-base font-normal leading-relaxed">Sports</div>
                    </div>
                    <div className="h-10 px-5 py-[7px] bg-gray-500 bg-opacity-10 rounded-[40px] justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-950 text-sm md:text-base font-normal leading-relaxed">Car</div>
                    </div>
                    <div className="h-10 px-5 py-[7px] bg-gray-500 bg-opacity-10 rounded-[40px] justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-950 text-sm md:text-base font-normal leading-relaxed">Bike</div>
                    </div>
                    </div>
                </div>
                <div className="w-[300px] mt-4 md:mt-0 h-10 px-0 md:px-5 py-[7px] bg-white bg-opacity-50 rounded-[40px] border border-white backdrop-blur-2xl justify-center md:justify-start items-center gap-2.5 inline-flex">
                    <Image src={search} className="w-5 h-5 relative" alt="search" />
                    <div className="text-black text-opacity-50 text-base font-normal leading-relaxed">Search</div>
                </div>
            </div>

            <div className="grid grid-cols-12 h-full grid-rows-1 gap-4">
                <div className="col-span-12 h-full md:col-span-6">
                    <Image className="md:w-[630px] w-full h-[300px]" src={imgOne} alt="blog-1" />
                    <div className="p-5 bg-violet-50 flex-col md:h-[300px] lg:h-[230px] justify-start items-start gap-5 inline-flex">
                        <div className="self-stretch flex-col justify-start items-start gap-[15px] flex">
                            <div className="space-x-3">
                                <span className="text-indigo text-sm font-medium uppercase leading-normal">Design & Creative</span>
                                <span>10 June 2023</span>
                            </div>
                            <div className="self-stretch text-indigo-950 text-2xl font-medium font-['Lora'] leading-[34px]">Lorem ipsum dolor sit amet consectetur</div>
                            <div className="self-stretch text-zinc-500 text-base font-normal leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.
                            </div>
                        </div>
                        <div className="self-stretch">
                            <span className="text-zinc-500 text-base font-normal leading-relaxed">by </span>
                            <span className="text-zinc-500 text-base font-medium leading-relaxed">Jon Doe</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 h-full md:col-span-6 md:col-start-7">
                    <Image className="md:w-[630px] w-full h-[300px]" src={imgOne} alt="blog-1" />
                    <div className="p-5 bg-violet-50 md:h-[300px] lg:h-[230px] flex-col justify-start items-start gap-5 inline-flex">
                        <div className="self-stretch  flex-col justify-start items-start gap-[15px] flex">
                            <div className="space-x-3">
                                <span className="text-indigo text-sm font-medium uppercase leading-normal">Corporate</span>
                                <span>10 June 2023</span>
                            </div>
                            <div className="self-stretch text-indigo-950 text-2xl font-medium font-['Lora'] leading-[34px]">
                                Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor enim massa
                            </div>
                        </div>
                        <div className=" border border-violet-800 justify-start items-start gap-2.5 inline-flex">
                        <WatchVideo className=''>
          <iframe
            src='https://www.youtube.com/embed/tgbNymZ7vqY'
            width='100%'
            height='400'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </WatchVideo>
                           
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blog;
