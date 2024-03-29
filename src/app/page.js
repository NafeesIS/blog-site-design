import Banner from "@/Banner/Banner";
import AllBlogs from "@/blog/AllBlogs";
import Blog from "@/blog/Blog";
import Overview from "@/components/overview/Overview";
import TwoCard from "@/components/twocard/TwoCard";
import BannerGradient from "@/components/ui/BannerGradient";
import Container from "@/components/ui/Container";

export default function Home() {
    return (
        <main>
            <Container className="relative">
                <Banner />
                <BannerGradient />
                <Blog />
                <Overview />
                <TwoCard /> 
                <AllBlogs />
            </Container>
          
        </main>
    );
}
