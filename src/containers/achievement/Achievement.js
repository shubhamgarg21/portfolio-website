import React, {useContext, useState, useEffect} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!achievementSection.display) {
    return null;
  }

  const displayedCards = isMobile 
    ? [0, 1, 3, 7].map(index => achievementSection.achievementsCards[index]).filter(Boolean)
    : achievementSection.achievementsCards;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div>
          <div className="achievement-header">
            <h1 className={isDark ? "dark-mode heading achievement-heading": "heading achievement-heading"}>
              {achievementSection.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle achievement-subtitle" : "subTitle achievement-subtitle"}>
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-cards-div">
            {displayedCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
