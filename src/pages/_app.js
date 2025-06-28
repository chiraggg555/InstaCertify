import BackToTop from "@/components/Layout/backtotop";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
// import "@/styles/globals.css";
import "../../public/assets/styles/app.min.css"; 
import "../../public/assets/styles/tailwind.min.css"; 

export default function App({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden w-screen relative home-page">
      <div class="full-with address hidden">
        <div class="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
          <p class="text-base hidden font-bold md:block">66 avenue des Champs, 75008, Paris, France</p>
          <div class="flex items-center gap-5 contact ml-auto gap-[10px] md:gap-5 md:flex-row"> <span>(+01) - 456 789</span>
            <div class="border border-dashed border-white self-stretch"></div><span>contact@agon.com</span>
          </div>
        </div>
      </div>
      <div class="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]"><a name="top"> </a>
        <Header />
        <main className="flex-grow mt-[your-header-height]">
          <Component {...pageProps} />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

