import { Stack } from "@chakra-ui/react";
import AboutUs from "./components/about";
import Footer from "./components/footer";
import HowItWorks from "./components/how-it-works";
import Interested from "./components/interested";
import Navbar from "./components/navbar";
import OwnerShip from "./components/ownership";
import WhyMerge2Own from "./components/why-merge-own";

function Home() {
  return (
    <Stack spacing={0}>
      <Navbar />
      <OwnerShip />
      <AboutUs />
      {/* <Partnership /> */}
      <HowItWorks />
      <WhyMerge2Own />
      <Interested />
      <Footer />
    </Stack>
  );
}

export default Home;
