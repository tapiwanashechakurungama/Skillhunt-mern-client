import { FaSearchLocation } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <h2>Find your dream job</h2>
      <div className="contain1">
        <p className="">
          Unlock your potential and find your dream job with our comprehensive
          platform designed to connect you with opportunities that truly match
          your skills and aspirations. 
        </p>
      </div>
      <div className="contain">
        <form className="items">
          <input type="text" placeholder="Job Name eg Software Developer " className="first-input" required={true} />
          <input type="text" placeholder="Job type eg Remote" required={true} />
          <input type="text" placeholder="Job location eg Harare" required={true}/>
          <button className="search-btn" type="submit">
            <FaSearchLocation />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
