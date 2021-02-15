import { useState, useRef } from "react";
import { useFetch } from "../../common/hooks/useFetch";

export function useComponent() {
  let postContent = [];
  let postImageContent = [
    {
      pic: "https://i.ytimg.com/vi/bfd8RyAJh6c/maxresdefault.jpg",
      color: "#2D2B2D",
      background: "rgb(76, 61, 76, 0.6)",
    },
    {
      pic: "https://miro.medium.com/max/500/1*2XBsmzV4cb6ot5W0cwI9Rw.jpeg",
      color: "#204846",
      background: "rgb(80, 121, 118, 0.6)",
    },
    {
      pic:
        "https://www.tedxmilehigh.com/wp-content/uploads/2019/10/how-expand-imagination-tedxmilehigh-1024x647.jpg",
      color: "rgb(107, 170, 255)",
      background: "rgb(107, 170, 255, 0.4)",
    },
  ];

  const { response, error, loading } = useFetch(
    "http://localhost:8000/wp-json/wp/v2/posts",
    {
      query: {},
    },
  );

  if (response) {
    postContent = response.slice(0, 3).map(({ id, excerpt, title }) => ({
      course_id: id,
      excerpt: excerpt.rendered,
      title: title.rendered,
    }));

    postImageContent = postImageContent.map((item, index) => ({
      ...item,
      ...postContent[index],
    }));
  }

  let oneEnter = false;
  const initialImgAnim = [
    { translateX: [0, 300], opacity: [1, 0] },
    { translateX: [0, -300], opacity: [1, 0] },
  ];

  const [showInt, setShowInt] = useState(0);
  const [delay, setDelay] = useState(0);
  const [imgAnim, setImgAnim] = useState(initialImgAnim);

  const bannerImg = useRef();
  const bannerText = useRef();

  const onChange = () => {
    if (!oneEnter) {
      setDelay(300);
      oneEnter = true;
    }
  };

  const onLeft = () => {
    let leftShowInt = showInt;
    leftShowInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (leftShowInt <= 0) {
      leftShowInt = 0;
    }
    setShowInt(leftShowInt);
    setImgAnim(imgAnim);
    bannerImg.current.prev();
    bannerText.current.prev();
  };

  const onRight = () => {
    let rightShowInt = showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    rightShowInt += 1;
    if (rightShowInt > postImageContent.length - 1) {
      rightShowInt = postImageContent.length - 1;
    }
    setShowInt(rightShowInt);
    setImgAnim(imgAnim);
    bannerImg.current.next();
    bannerText.current.next();
  };

  return {
    response,
    error,
    loading,
    postImageContent,
    showInt,
    delay,
    imgAnim,
    bannerImg,
    bannerText,
    onChange,
    onRight,
    onLeft,
  };
}
