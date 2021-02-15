// export default function Home() {
//   const [items, setItems] = useState([
//     {
//       title: "hi i am the first carousle",
//       img: "/image/1.jpg",
//       position: "left",
//     },
//     {
//       title: "hi i am the second carousel",
//       img: "/image/2.jpg",
//       position: "left",
//     },
//     {
//       title: "hi i am the third carousle",
//       img: "/image/3.jpg",
//       position: "",
//     },
//     {
//       title: "hi i am the fourth carousle",
//       img: "/image/4.jpg",
//       position: "left",
//     },
//     {
//       title: "hi i am the fifth carousle",
//       img: "/image/5.jpg",
//       position: "",
//     },
//     {
//       title: "hi i am the sixth carousle",
//       img: "/image/6.jpg",
//       position: "",
//     },
//     {
//       title: "hi i am the seventh carousle",
//       img: "/image/7.jpg",
//       position: "left",
//     },
//   ]);

<Slider {...settings}>
  {items.map((item) => (
    <div className="item">
      <div className={`description ${item.position}`}>
        <h3>{item.title}</h3>
      </div>

      <img src={item.img} className="image" />
    </div>
  ))}
</Slider>;
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

import Slider from "react-slick";
import { useState } from "react";
