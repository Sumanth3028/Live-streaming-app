import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Dummy from "../../Assets/Dummy.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2, itemsToScroll: 2 },
  { width: 200, itemsToShow: 1 },
  { width: 1200, itemsToShow: 4 },
];

const Item = ({ children }) => {
  return <div className="item">{children}</div>;
};

const CarouselMain = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl: Dummy,
    },
    {
      id: 2,
      imageUrl: Dummy,
    },
    {
      id: 3,
      imageUrl: Dummy,
    },

    {
      id: 3,
      imageUrl: Dummy,
    },
    // Add more items as needed
  ]);

  return (
    <div className=" py-5  w-[90%]  ml-[140px] mb-[70px] rounded-md">
      <div>
        <Carousel className="items-center ">
          {items.map((item) => (
            <Item key={item.id}>
              <img
                src={item.imageUrl}
                alt={`Item ${item.id}`}
                onClick={() => console.log(`Clicked on item ${item.id}`)}
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselMain;
