import React from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import Icon from "antd/lib/icon";
import { motionGaleryContent } from "../../utils/motionGalleryContent";
import styles from "./styles.module.css";

export class MotionGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      usersAvatars: [],
      error: null,
      picOpen: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/wp-json/wp/v2/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.json();
        this.setState({
          usersAvatars: data,
          error: !response.ok,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          usersAvatars: null,
          error: true,
          loading: false,
        });
      });
  }

  onImgClick = (e, i) => {
    const { picOpen } = this.state;
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        picOpen[key] = false;
      }
    });
    picOpen[i] = true;
    this.setState({
      picOpen,
    });
  };

  onClose = (e, i) => {
    const { picOpen } = this.state;
    picOpen[i] = false;
    this.setState({
      picOpen,
    });
  };

  onTweenEnd = (i) => {
    const { picOpen } = this.state;
    delete picOpen[i];
    this.setState({
      picOpen,
    });
  };

  getDelay = (e) => {
    const i = e.index + (motionGaleryContent.length % 4);
    return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  };

  getLiChildren = () => {
    const imgWidth = 110;
    const imgHeight = 76;
    const imgBoxWidth = 130;
    const imgBoxHeight = 96;
    //--example of possible fetch request to retrieve the avatars to display --
    if (!this.state.loading && this.state.usersAvatars) {
      const usersContent = this.state.usersAvatars.map((item, index) => {
        return {
          title: item.slug,
          image: item.avatar_urls["96"],
          content: motionGaleryContent[index].content,
        };
      });
    }
    //--------------------------------------------------------------------
    return motionGaleryContent.map((item, i) => {
      const { image, title, content } = item;
      const isEnter = typeof this.state.picOpen[i] === "boolean";
      const isOpen = this.state.picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 4);
      const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
      const isRight = Math.floor((i % 4) / 2);
      const isTop = Math.floor(i / 4);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter
        ? { width: "100%", height: 175, zIndex: 1 }
        : null;
      const liAnimation = isOpen
        ? { boxShadow: "0 2px 8px rgba(140, 140, 140, .35)" }
        : { boxShadow: "0 0px 0px rgba(140, 140, 140, 0)" };
      let aAnimation = isEnter
        ? {
            delay: 400,
            ease: "easeInOutCubic",
            width: imgWidth,
            height: imgHeight,
            onComplete: this.onTweenEnd.bind(this, i),
            left: imgBoxWidth * (i % 4),
            top: isTop ? imgBoxHeight : 0,
          }
        : null;
      aAnimation = isOpen
        ? {
            ease: "easeInOutCubic",
            left: isRight ? imgBoxWidth * 2 - 10 : 0,
            width: "50%",
            height: 175,
            top: 0,
          }
        : aAnimation;

      return (
        <TweenOne
          key={i}
          style={{
            left,
            top,
            ...liStyle,
          }}
          component='li'
          className={isOpen ? "open" : ""}
          animation={liAnimation}
        >
          <TweenOne
            component='a'
            onClick={(e) => this.onImgClick(e, i)}
            style={{
              left: imgLeft,
              top: imgTop,
            }}
            animation={aAnimation}
          >
            <img src={image} alt='imgCLick' width='100%' height='100%' />
          </TweenOne>
          <TweenOneGroup
            enter={[
              {
                opacity: 0,
                duration: 0,
                type: "from",
                delay: 400,
              },
              {
                ease: "easeOutCubic",
                type: "from",
                left: isRight ? "50%" : "0%",
              },
            ]}
            leave={{
              ease: "easeInOutCubic",
              left: isRight ? "50%" : "0%",
            }}
            component=''
          >
            {isOpen && (
              <div
                className={styles.galleryContainerTextWrapper}
                key='text'
                style={{
                  left: isRight ? "0%" : "50%",
                }}
              >
                <h1>{title}</h1>
                <Icon type='close' onClick={(e) => this.onClose(e, i)} />
                <em />
                <p>{content}</p>
              </div>
            )}
          </TweenOneGroup>
        </TweenOne>
      );
    });
  };

  render() {
    return (
      <div className={styles.galleryContainer}>
        <QueueAnim type='bottom' className={styles.galleryContainerTitle}>
          <h1 key='h1'>We are a passionate team</h1>
          <h4 key='h4'>Explore our cores</h4>
          <h6 key='h6'>
            Building Brands, Creating Experiences... Driving Culture
          </h6>
        </QueueAnim>
        <QueueAnim
          delay={this.getDelay}
          component='ul'
          className={styles.galleryContainerImageWrapper}
          interval={0}
          type='bottom'
        >
          {this.getLiChildren()}
        </QueueAnim>
      </div>
    );
  }
}
