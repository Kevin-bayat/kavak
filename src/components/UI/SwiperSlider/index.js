import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import classes from "./index.module.scss";
import { ArrowForwardIos } from "@mui/icons-material";
// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import swiper modules
import { FreeMode, Pagination, Navigation, Keyboard, Mousewheel } from "swiper";

export default function SwiperSlider({
  className,
  slidesPerView,
  spaceBetween,
  freeMode,
  mousewheel,
  pagination,
  hasNavigation,
  keyboard,
  children,
  autoPlay,
}) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const onInit = (slider) => {
    if (hasNavigation) {
      slider.params.navigation.prevEl = navigationPrevRef.current;
      slider.params.navigation.nextEl = navigationNextRef.current;
      slider.navigation.init();
      slider.navigation.update();
    }
  };

  return (
    <>
      {hasNavigation && (
        <div className={classes.Navigation_Section}>
          <div ref={navigationPrevRef}>
            <ArrowForwardIos
              className={classes.Navigation_Icon}
              fontSize="medium"
            />
          </div>
          <div ref={navigationNextRef}>
            <ArrowForwardIos />
          </div>
        </div>
      )}
      <Swiper
        navigation={{
          disabledClass: classes.Disabled_Navigation_Icon,
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        freeMode={freeMode}
        onInit={onInit}
        mousewheel={mousewheel}
        pagination={pagination}
        keyboard={keyboard}
        modules={[FreeMode, Pagination, Navigation, Keyboard, Mousewheel]}
        className={className}
        autoplay={autoPlay}
        speed={500}
      >
        {children}
      </Swiper>
    </>
  );
}
