import NavSections1 from "../components/NavSections1";
import ButtomSection from "../components/ButtomSection";
import "./Profille1.css";

const Profille1 = () => {
  return (
    <div className="profille">
      <div className="navigation-bar">
        <div className="logo-parent">
          <div className="logo">
            <img
              className="vital-signs-icon"
              loading="lazy"
              alt=""
              src="/vital-signs.svg"
            />
            <h1 className="active">Active</h1>
          </div>
          <NavSections1 />
        </div>
      </div>
      <main className="profille-inner">
        <section className="frame-parent">
          <div className="top-section-wrapper">
            <div className="top-section">
              <h1 className="hello-john">Hello John</h1>
              <h1 className="today-is-a">Today is a great day to be fit</h1>
              <img
                className="character-icon"
                loading="lazy"
                alt=""
                src="/character.svg"
              />
            </div>
          </div>
          <div className="frame-group">
            <div className="fitness-tips-parent">
              <h1 className="fitness-tips">Fitness tips</h1>
              <div className="tip">
                <h3 className="stay-consistent">Stay consistent</h3>
                <h3 className="consistency-is-key">
                  Consistency is key to seeing results. make exercise a regular
                  part of your routine, aiming for at least 150 minutes of
                  moderate-intensity physical activities per week.
                </h3>
              </div>
            </div>
            <div className="text-parent">
              <div className="text">
                <h1 className="motivational-quote">Motivational Quote</h1>
              </div>
              <div className="quote">
                <h3 className="fitness-is-not">
                  Fitness is not about being better than someone else. it is
                  about being better than you used to be.
                </h3>
                <div className="khloe-kardashian-wrapper">
                  <div className="khloe-kardashian">Khloe Kardashian</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="slides-parent">
              <div className="slides">
                <div className="slides-child" />
                <div className="slides-item" />
                <div className="slides-inner" />
                <div className="ellipse-div" />
                <div className="slides-child1" />
                <div className="slides-child2" />
                <div className="slides-child3" />
              </div>
              <div className="slides1">
                <div className="slides-child4" />
                <div className="slides-child5" />
                <div className="slides-child6" />
                <div className="slides-child7" />
                <div className="slides-child8" />
                <div className="slides-child9" />
                <div className="slides-child10" />
              </div>
            </div>
          </div>
          <ButtomSection />
        </section>
      </main>
    </div>
  );
};

export default Profille1;
