import React from "react";
import "./Articles.scss";
import {
  monocrystallineData,
  polycrystallineData,
  solarArt,
  solarCaseStudyData,
  solarFilmData,
  solarFlexibleData,
  solarProcess,
  solarSystem,
  solarSystemWork,
} from "../../constants/images";
import useTranslate from "../../hooks/useTranslate";
import i18next from "i18next";

const Articles = () => {
  const { translate } = useTranslate();
  return (
    <div className="article section__padding">
      <img className="leed-image" src={solarSystem.leeds} alt="solar-system" />
      <div className="article-title">{translate("title1.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc1.article")}
      </p>
      <img
        src={solarSystem.leedsCategory}
        className="leed-category-image"
        alt="solar-system"
      />
      <img
        src={solarSystem.leedsLogo}
        className="leed-logo-image"
        alt="solar-system"
      />
      <div className="article-title">{translate("title2.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc2.article")}
      </p>
      {solarArt?.map((item) => (
        <img src={item} alt="solar-system-art" className="solar-info-image" />
      ))}
      <div className="article-title">{translate("title3.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc3.article")}
      </p>
      {solarSystemWork?.map((item) => (
        <img src={item} alt="solar-system-work" className="solar-info-image" />
      ))}
      <div className="article-title">{translate("title4.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc4.article")}
      </p>
      {solarProcess?.map((item) => (
        <img
          src={item}
          alt="solar-system-process"
          className="solar-info-image"
        />
      ))}
      <div className="article-title">{translate("title5.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc5.article")}
      </p>
      <div className="article-title">{translate("title6.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc6.article")}
      </p>
      <div className="article-title">{translate("title7.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc7.article")}
      </p>
      <img
        className="leed-category-image"
        src={solarSystem.monocrystalline}
        alt="solar-system-monocrystalline"
      />
      <div className="article-title">{translate("title8.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc8.article")}
      </p>
      {monocrystallineData?.map((item) => (
        <img
          src={item}
          alt="solar-system-monocrystalline-data"
          className="solar-info-image"
        />
      ))}
      <div className="article-title">{translate("title9.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc9.article")}
      </p>
      {polycrystallineData?.map((item) => (
        <img
          src={item}
          alt="solar-system-polycrystalline-data"
          className="solar-info-image"
        />
      ))}
      <div className="article-title">{translate("title10.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc10.article")}
      </p>
      {solarFilmData?.map((item) => (
        <img
          src={item}
          alt="solar-system-solar-film-data"
          className="solar-info-image"
        />
      ))}
      <div className="article-title">{translate("title11.article")}</div>
      <img
        className="solar-info-image"
        src={solarSystem.solarType}
        alt="solar-type"
      />
      <div className="article-title">{translate("title12.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc12.article")}
      </p>
      {solarFlexibleData.map((item) => (
        <img
          src={item}
          alt="solar-system-solar-film-data"
          className="solar-info-image"
        />
      ))}
      <div className="article-title">{translate("title13.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc13.article")}
      </p>
      <div className="article-title">{translate("title14.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc14.article")}
      </p>
      <div className="article-title">{translate("title15.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc15.article")}
      </p>
      <div className="article-title">{translate("title16.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc16.article")}
      </p>
      <div className="article-title">{translate("title17.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc17.article")}
      </p>
      <img
        className="leed-logo-image"
        src={solarSystem.energyFlower}
        alt="solar-type"
      />
      <div className="article-title">{translate("title18.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc18.article")}
      </p>
      {solarCaseStudyData.map((item) => (
        <img
          src={item}
          alt="solar-system-solar-film-data"
          className="solar-info-image"
        />
      ))}
      <div className="article-title">{translate("title19.article")}</div>
      <img
        src={solarSystem.ringdalskogenHouse}
        alt="solar-system-solar-film-data"
        className="solar-info-image"
      />
      <div className="article-title">{translate("title20.article")}</div>
      <div className="article-title">{translate("title21.article")}</div>
      <img
        src={solarSystem.solarBuilding}
        alt="solar-system-solar-film-data"
        className="solar-info-image"
      />
      <p className={`article-description ${i18next.language}`}>
        {translate("desc22.article")}
      </p>
      <div className="article-title">{translate("title22.article")}</div>
      <p className={`article-description ${i18next.language}`}>
        {translate("desc23.article")}
      </p>
    </div>
  );
};

export default Articles;
