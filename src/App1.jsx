// import RandomColor from "./Components/RandomColor";
// import Accordian from "./Components/Accordian";
// import StarRating from "./Components/Star-Rating";
// import ImageSlider from "./Components/ImageSlider";
// import LoadMoreData from "./Components/Load-More-Data/Index";
// import TreeView from "./Components/Tree-View/Index";

import TabTest from "./Components/Custom-Tabs/Tab-Test";

import ScrollIndicator from "./Components/Custom-Scroll-Indicator/Index";
//import LightDarkMode from "./Components/Light-Dark-Mode-Theme/Index";

// import QRCodeGenerator from "./Components/QRGenerator/Index";

// import menus from "./Components/Tree-View/Data";
const App1 = () => {
    return (
        <>
            {/* <Accordian />
            <RandomColor />
            <StarRating noOfStars={10} />
            <ImageSlider
                url={"https://picsum.photos/v2/list"}
                limit={"15"}
                page={"10"}
            />
            <LoadMoreData /> */}
            {/* <TreeView menus={menus} /> */}
            {/* <QRCodeGenerator /> */}
            {/* <LightDarkMode /> */}
            <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
            <TabTest />
        </>
    );
};

export default App1;
