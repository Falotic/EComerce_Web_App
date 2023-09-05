import Banner from "../components/Banner/Banner";
import BannerReverse from "../components/Banner/BannerReverse";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Header/Hero";
import Newsletter from "../components/News/Newsletter";
import ProudProducts from "../components/Proud/ProudProducts";
import TrendingSlider from "../components/Trending/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
