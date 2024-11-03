
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

// import Brooklyn from "/PosterBrooklyn.png";
// import Macao from "/PosterMacao.png";
// import Navada from "/PosterNavada.png";

// Define the style for the images in the carousel
const imageStyle = {
  width: "150px",
  height: "100px",
  borderRadius: "20px",
  border: "1px solid #FFFFFF33",
  opacity:"0.5",
  cursor:"pointer"
};

function Sliders() {
  return (
    <div className="relative flex h-full bg-black text-center slider-content">
      <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
              pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
              rewind: true, // Rewind to start when the end is reached
              speed: 1, // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: "445px", // Fixed width for each slide
            gap: "10px", // Gap between slides
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          <SplideSlide>
            <img
              src="https://www.techzim.co.zw/wp-content/uploads/2015/06/econet-logo-big.png"
              alt="Poster Brooklyn"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94hwr2qAVuUnXaaCaxe9BDD-R1uvOxTj8LQ&s"
              alt="Poster Macao"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhlyfP7CfiF-UypDapKSOzJjykS79d_3M8Q&s"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQHG1gXEvjq5HQ/company-logo_200_200/company-logo_200_200/0/1705508147365/uncommon_org_logo?e=2147483647&v=beta&t=PHJ38DIwUfO0FUFmotOsrFRqaNzREUxCZFezFRPkSC0"
              alt="Poster Macao"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.fwmuseum.org/wp-content/uploads/2023/10/GirlsInSTEM-LogoTransparent.png"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.zimplaza.co.zw/wp-content/uploads/1536911145_web-entangled.jpg"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://cdn-bgjnl.nitrocdn.com/RGuTRDWIwkNrgpsemwlGcDfBqLWARetK/assets/images/optimized/rev-334a4de/www.webentangled.com/wp-content/uploads/2022/04/farmec.png"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQGUT9b_HIrurQ/company-logo_200_200/company-logo_200_200/0/1672823489867/youpro_contact_logo?e=2147483647&v=beta&t=bJV3H9sorFuxLynZY-KeCYzNWlRGqeMunQLBOXCXEQ4"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEYD7T8DviMQkVI7THnX34ugw7X_xERfFjg&s"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://deodentalgroup.com/wp-content/uploads/2021/04/Support-DDS-1.png"
              style={imageStyle}
            />
          </SplideSlide>
        </Splide>
      </div>
      <h2>
        Browse from over <span className="span-content">2000+</span> jobs
      </h2>
      <p>
        The automated process starts as soon as your clothes go into the
        machine. The outcome is gleaming clothes. Placeholder text commonly
        used.
      </p>
    </div>
  );
}

export default Sliders;
