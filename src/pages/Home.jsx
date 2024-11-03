import Banner from "../components/Banner"
import Content from "../components/Content";
import DailyInformation from "../components/DailyInformation";
import Jobs from "../components/Jobs";
import PostandFindJob from "../components/PostandFindJob";
import Sliders from "../components/Sliders";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sliders />
      <Content/>
      <Jobs/>
      <DailyInformation/>
      <PostandFindJob/>
    </div>
  );
};

export default Home;
