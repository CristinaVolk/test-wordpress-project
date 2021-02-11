import React from "react";
import QueueAnim from "rc-queue-anim";
import PropTypes from "prop-types";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import Icon from "antd/lib/icon";
import "./styles.css";

const textData = {
  content:
    "Taiwan called motorcycle, motor bike [1] or a motorcycle," +
    " the motorcycle referred to in the mainland, Hong Kong and Southeast" +
    " Asia known as motorcycles.",
  title: "Motorcycle",
};
let dataArray = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5gjmBzpYGStVtt6FIkua0MwkhfebY6AfMQ&usqp=CAU",
  },
  { image: "http://leusdiv.ru/wp-content/uploads/2012/08/yubti.jpg" },
  { image: "https://data.whicdn.com/images/225888478/original.gif" },
  {
    image: "https://ak.picdn.net/shutterstock/videos/7343305/thumb/6.jpg",
  },
  {
    image:
      "https://st03.kakprosto.ru//images/article/2011/4/6/1_525512a50289b525512a5028d8.jpg",
  },
  {
    image:
      "https://st.depositphotos.com/2590737/2930/i/600/depositphotos_29305907-stock-photo-young-attractive-man-face-looking.jpg",
  },
  {
    image:
      "https://sun-technology.ru/wp-content/uploads/2015/05/pochemu_my1.jpg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbv0pVJ6dFfXQh5HT_ySK5MKu0nwcJNK4dQ&usqp=CAU",
  },
  {
    image:
      "https://image.freepik.com/fotos-gratis/feche-o-homem-olhando-para-cima_13339-159123.jpg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqKE1jlxRRZgnkhEeFSiBEKDEfOrmFJSxqg&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYjiFLRPKuEp1SGlwUsKdP2ifdSTWWCsiBg&usqp=CAU",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%B3-%D0%B0%D0%B7%D0%B0-80907949.jpg",
  },
];
dataArray = dataArray.map((item) => ({ ...item, ...textData }));

export class MotionGallery extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "pic-details-demo",
  };

  constructor(props) {
    super(props);
    this.state = {
      picOpen: {},
    };
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
    const i = e.index + (dataArray.length % 4);
    return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  };

  getLiChildren = () => {
    const imgWidth = 110;
    const imgHeight = 76;
    const imgBoxWidth = 130;
    const imgBoxHeight = 96;
    return dataArray.map((item, i) => {
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
                className={`${this.props.className}-text-wrapper`}
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
      <div className='gallery-container'>
        <QueueAnim type='bottom' className={`${this.props.className}-title`}>
          <h1 key='h1'>We are a passionate team</h1>
          <p key='p'>Explore our cores</p>
        </QueueAnim>
        <QueueAnim
          delay={this.getDelay}
          component='ul'
          className={`${this.props.className}-image-wrapper`}
          interval={0}
          type='bottom'
        >
          {this.getLiChildren()}
        </QueueAnim>
      </div>
    );
  }
}
