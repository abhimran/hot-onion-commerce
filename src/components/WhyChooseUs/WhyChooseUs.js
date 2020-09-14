import React from 'react';
import card1 from '../../images/Image/card1.png'
import card2 from '../../images/Image/card2.png'
import card3 from '../../images/Image/card3.png'
import ChooseUsCard from './ChooseUsCard';
import "./WhyChooseUs.css";

const cardData = [
  {
    id: 1,
    title: "Fast Delivary",
    img: card1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos quae nesciunt ab ea, consequuntur perferendis ut dicta! Eligendi, earum",
  },
  {
    id: 2,
    title: "A Good Auto Responder",
    img: card2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos quae nesciunt ab ea, consequuntur perferendis ut dicta! Eligendi, earum",
  },
  {
    id: 3,
    title: "Home Delivary",
    img: card3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos quae nesciunt ab ea, consequuntur perferendis ut dicta! Eligendi, earum",
  },
];

const WhyChooseUs = () => {
    return (
      <div className="chooseUs">
        <div className="chooseUs__container">
          <div className="chooseUs__title">
            <h3>Why You Choose Us</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              sit, minus enim vel quo nam.
            </p>
          </div>
          <div className="chooseUs__card">
            {cardData.map((item) => (
              <ChooseUsCard post={item} key={item.id}></ChooseUsCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;