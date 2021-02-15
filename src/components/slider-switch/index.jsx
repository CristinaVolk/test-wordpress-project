import React from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup } from "rc-tween-one";
import { useComponent } from "./hook";
import { useParticleEffect } from "../custom-particle-effect/hook";
import { CourseItem } from "../CourseItem";
import Icon from "antd/lib/icon";
import { CustomParticleEffect } from "../custom-particle-effect";
import "./styles.css";

const Element = BannerAnim.Element;
const className = "switch-slider";

export function SwitchSlider() {
  const {
    error,
    loading,
    response,
    postImageContent,
    showInt,
    delay,
    imgAnim,
    bannerImg,
    bannerText,
    onChange,
    onRight,
    onLeft,
  } = useComponent();

  const { animating } = useParticleEffect();

  const particleOptions = {
    direction: "left",
  };

  const imgChildren = postImageContent.map((item, index) => (
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

  const textChildren = postImageContent.map((item, i) => {
    return (
      <Element key={i}>
        <QueueAnim
          className='content-item'
          type='bottom'
          duration={1000}
          delay={[!i ? delay + 500 : 800, 0]}
        >
          <CourseItem item={item} />
        </QueueAnim>
      </Element>
    );
  });

  if (error) {
    return <div>Error occurred during loading data...</div>;
  }

  return (
    <div
      className={`${className}-wrapper`}
      style={{ background: postImageContent[showInt].background }}
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
        <div className={"content-wrapper "}>
          <div className={"particle-container"}>
            <CustomParticleEffect
              hidden={!loading}
              particleOptions={particleOptions}
              content={<h4>Loading...</h4>}
            />
          </div>

          {response && !animating && (
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
          )}
        </div>

        <TweenOneGroup
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
        >
          {showInt < postImageContent.length - 1 && (
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
