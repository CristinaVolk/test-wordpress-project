import React from "react";
import { Stack } from "../../components/stack-cards";
import styles from "./styles.module.css";

export default function BrandsPage() {
  const cardsList = [
    {
      image:
        "https://acontecendoaqui.com.br/sites/default/files/santander_icone.jpg",
      background: "#000000",
    },

    {
      image:
        "https://imf-d8-prod.s3.us-west-1.wasabisys.com/imgix/blog/BBC_logo.png",
      background: "#000000",
    },

    {
      image:
        "https://filecache.mediaroom.com/mr5mr_expediabrand/177421/EXP_US_Basic_lrg_KO_RGB.jpg",
      background: "#000000",
    },

    {
      image:
        "https://learning.qinetiq.com/pluginfile.php/1/theme_nebula/loginlogo/1610663033/QinetiQ%20Logo.jpg",
      background: "#000000",
    },

    {
      image:
        "https://canalwalk.co.za/storage/app/uploads/public/5b1/156/5d9/thumb_1425_0_0_0_0_auto.png",
      background: "#000000",
    },

    {
      image:
        "https://therockbury.com/wp-content/uploads/2014/03/river-island-logo.jpg",
      background: "#000000",
    },

    {
      image: "https://mapp.media/wp-content/uploads/2018/02/Loreal-Logo.jpeg",
      background: "#000000",
    },

    {
      image:
        "https://t3.ftcdn.net/jpg/03/78/82/10/360_F_378821098_0ymQysYoFyYPfO5Q7J5biA1RJPh5ZGsP.jpg",
      background: "#000000",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdI5b4uJvwLdKn_T6FPfsNMY3z8OUq0K-Iw&usqp=CAU",
      background: "#030303",
    },
  ];
  return (
    <div className={styles.brandsPageWrapper}>
      <div className={styles.brandsPageContainer}>
        {cardsList.map(({ image, background }) => (
          <Stack key={image} image={image} background={background} />
        ))}
      </div>
    </div>
  );
}
