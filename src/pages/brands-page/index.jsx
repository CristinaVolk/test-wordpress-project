import React from "react";
import { Stack } from "../../components/stack-cards";
import "./styles.css";

export default function BrandsPage() {
  const cardsList = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/02/18/19/24/we-2078026_960_720.jpg",
      background: "#52649e",
    },

    {
      image:
        "https://st2.depositphotos.com/6171908/12016/v/950/depositphotos_120167358-stock-illustration-hand-drawn-typography-lettering-word.jpg",

      background: "#f7f295",
    },

    {
      image:
        "https://www.healthyyoungmindsinherts.org.uk/sites/default/files/content/help%20button_large.jpg",

      background: "#ee7074",
    },

    {
      image: "https://pbs.twimg.com/profile_images/1816531408/TO_Logo.png",
      background: "#ee7074",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8XVm2xNKfx0pqGXEPNVxeOs6aFgfJW0kKg&usqp=CAU",
      background: "#52649e",
    },

    {
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/986758262567672818/D2DDCCAA375786E22A1F9C94A61A84ECDBCA62F5/",
      background: "#f7f295",
    },

    {
      image:
        "https://st2.depositphotos.com/3591429/5998/i/950/depositphotos_59985099-stock-photo-group-of-hands-holding-word.jpg",
      background: "#f7f295",
    },

    {
      image:
        "https://i.pinimg.com/originals/b5/77/fc/b577fc7ffd8b965adfae519c4a7ddb35.jpg",
      background: "#ee7074",
    },

    {
      image: "https://thumbs.dreamstime.com/z/ascending-ladder-14286870.jpg",
      background: "#52649e",
    },
  ];
  return (
    <div className='brands-page-wrapper'>
      <div className='brands-page-container'>
        {cardsList.map(({ image, background }) => (
          <Stack key={image} image={image} background={background} />
        ))}
      </div>
    </div>
  );
}
