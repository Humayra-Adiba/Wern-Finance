import DebitCard from "./Components/DebitCard";
import FAQs from "./Components/FAQs";
import Feedbacks from "./Components/Feedbacks";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Offers from "./Components/Offer";
import PerfectCard from "./Components/PerfectCard";
import Vision from "./Components/Vision";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
        <div className="space-y-[128px]">
          <Hero />
          <Vision />
          <Offers />
          <DebitCard />
          <PerfectCard />
          <Feedbacks />
          <FAQs />
        </div>
      </div>
      <Footer />
    </main>
    
  );
};

export default App;
