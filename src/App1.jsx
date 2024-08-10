// import RandomColor from "./Components/RandomColor";
// import Accordian from "./Components/Accordian";
//import StarRating from "./Components/Star-Rating";
import ImageSlider from "./Components/ImageSlider";
const App1 = () => {
    return (
        <>
            {/* <Accordian /> */}
            {/* <RandomColor /> */}
            {/* <StarRating noOfStars={10} /> */}
            <ImageSlider
                url={"https://picsum.photos/v2/list"}
                limit={"15"}
                page={"10"}
            />
        </>
    );
};

export default App1;
