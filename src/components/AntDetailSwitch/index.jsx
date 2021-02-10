import React from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup } from "rc-tween-one";
import { useComponent } from "./hook";
import Icon from "antd/lib/icon";
import "./styles.css";

const Element = BannerAnim.Element;
const className = "details-switch-demo";

export default function AntDetailSwitch() {
  const {
    dataArray,
    showInt,
    delay,
    imgAnim,
    bannerImg,
    bannerText,
    onChange,
    onRight,
    onLeft,
  } = useComponent();

  const imgChildren = dataArray.map((item, index) => (
    <Element
      key={index}
      style={{
        background: item.color,
        height: "100%",
      }}
      leaveChildHide
    >
      <QueueAnim
        animConfig={imgAnim}
        duration={1000}
        delay={[!index ? delay : 300, 0]}
        ease={["easeOutCubic", "easeInQuad"]}
        key='img-wrapper'
        className={`${className}-img-container`}
      >
        <div className={`${className}-pic pic${index}`} key='pic'>
          <img src={item.pic} alt='mainPic' width='100%' />
        </div>
      </QueueAnim>
    </Element>
  ));

  const textChildren = dataArray.map((item, i) => {
    const { title, content, background } = item;
    return (
      <Element key={i}>
        <QueueAnim
          type='bottom'
          duration={1000}
          delay={[!i ? delay + 500 : 800, 0]}
        >
          <h1 key='h1'>{title}</h1>
          <em key='em' style={{ background }} />
          <p dangerouslySetInnerHTML={{ __html: content }} key='p'></p>
        </QueueAnim>
      </Element>
    );
  });

  return (
    <div
      className={`${className}-wrapper`}
      style={{ background: dataArray[showInt].background }}
    >
      <div className={className}>
        <BannerAnim
          prefixCls={`${className}-img-wrapper`}
          sync
          type='across'
          duration={1000}
          ease='easeInOutExpo'
          arrow={false}
          thumb={false}
          ref={bannerImg}
          onChange={onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${className}-text-wrapper`}
          sync
          type='across'
          duration={1000}
          arrow={false}
          thumb={false}
          ease='easeInOutExpo'
          ref={bannerText}
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
        >
          {showInt < dataArray.length - 1 && (
            <>
              <Icon type='right' key='right' onClick={onRight} />
            </>
          )}

          {showInt && (
            <>
              <Icon type='left' key='left' onClick={onLeft} />
            </>
          )}
        </TweenOneGroup>
      </div>
    </div>
  );
}
