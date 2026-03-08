import Reveal from "../Reveal/Reveal";
import css from "./HeroComponent.module.css";

const HeroComponent = () => {
  return (
    <Reveal>
      <div className={css.hero_container}>
        <div className={css.hero_text}>
          <h1>Юрий и Анна</h1>
          <p className={css.date_p}>5 мая 2026</p>
          <img src="/heart.png" alt="" className={css.heart} />
        </div>
      </div>
    </Reveal>
  );
};

export default HeroComponent;
