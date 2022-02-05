import { useState } from "react";
import styles from "./styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const dataCarousel = [
    {
        image: "food1.jpg",
        desc: "noodles  with chicken curry soup",
    },
    {
        image: "food2.jpg",
        desc: "beef satai with peanut butter sauce",
    },
    {
        image: "food1.jpg",
        desc: "noodles with chicken curry soup",
    },
    {
        image: "food2.jpg",
        desc: "beef satai with peanut butter sauce",
    },
    {
        image: "food1.jpg",
        desc: "noodles with chicken curry soup",
    },
    {
        image: "food2.jpg",
        desc: "beef satai with peanut butter sauce",
    },
    {
        image: "food1.jpg",
        desc: "noodles with chicken curry soup",
    },
    {
        image: "food2.jpg",
        desc: "beef satai with peanut butter sauce",
    },
    {
        image: "food1.jpg",
        desc: "noodles with chicken curry soup",
    },
    {
        image: "food2.jpg",
        desc: "beef satai with peanut butter sauce",
    },
];

export default () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className={styles.container}>
            <div className={styles.bgTransition} />
            <Carousel
                emulateTouch
                infiniteLoop
                renderIndicator={() => {}}
                renderThumbs={() => {}}
                renderArrowPrev={() => {}}
                renderArrowNext={() => {}}
                showStatus={false}
                className={styles.carouselParent}
                // centerMode
                onClickItem={(index) => setSelectedIndex(index)}
                onChange={(index) => setSelectedIndex(index)}
                selectedItem={selectedIndex}
                renderItem={(item, { isSelected }) => (
                    <div
                        className={
                            isSelected
                                ? styles.carouselItemSelected
                                : styles.carouselItemNotSelected
                        }
                    >
                        {item}
                    </div>
                )}
            >
                {dataCarousel.map((val, index) => (
                    <div>
                        <img
                            alt=""
                            src={val.image}
                            className={styles.imageCarousel}
                        />
                        {index === selectedIndex && (
                            <div className={styles.textDescCarousel}>
                                {val.desc}
                            </div>
                        )}
                    </div>
                ))}
            </Carousel>
            <div className={styles.textIndexCarousel}>
                {selectedIndex + 1} of {dataCarousel.length}
            </div>
        </div>
    );
};
