import ButtomSection from "../components/ButtomSection";
import "./Profille1.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";


const Profille1 = () => {
  const {user} = useContext(UserContext);

  return (
    user?
    <div className="profille">
      <main className="profille-inner">
        <section className="frame-parent">
          <div className="top-section-wrapper">
            <div className="top-section">
              <h1 className="hello-john">Hello, {user.username}</h1>
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
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                loop={true}
                pagination={{ el:'',clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper-size"
              >
                <SwiperSlide>              
                  <div className="tip">
                    <h3 className="stay-consistent">Listen to Your Body</h3>
                    <h3 className="consistency-is-key">
                    Pay attention to how your body feels. 
                    Rest when needed and do not push through pain to avoid injuries
                    </h3>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="tip">
                    <h3 className="stay-consistent">Set Realistic Goals</h3>
                    <h3 className="consistency-is-key">
                    set achievable fitness goals that are specific, measurable, 
                    and time-bound to stay motivated and track progress.
                    </h3>
                  </div>
                </SwiperSlide>
              <SwiperSlide>              
                <div className="tip">
                    <h3 className="stay-consistent">Stay Hydrated and Fuel Your Body</h3>
                    <h3 className="consistency-is-key">
                    Drink plenty of water before, during, and after workouts, 
                    and eat a balanced diet to fuel your body for optimal performance.
                    </h3>
                  </div>
                </SwiperSlide>
              <SwiperSlide>              
                <div className="tip">
                    <h3 className="stay-consistent">Prioritize Recovery</h3>
                    <h3 className="consistency-is-key">
                    Allow your body time to rest and recover between 
                    workouts to prevent burnout and reduce the risk of injury.
                    </h3>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>              
                  <div className="tip">
                    <h3 className="stay-consistent">Focus on Form</h3>
                    <h3 className="consistency-is-key">
                    Prioritize proper form and technique to maximize 
                    effectiveness and reduce the risk of injury.
                    </h3>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>              
                  <div className="tip">
                    <h3 className="stay-consistent">Celebrate Progress</h3>
                    <h3 className="consistency-is-key">
                    Celebrate small victories and milestones along your 
                    fitness journey to stay motivated and inspired.
                    </h3>
                  </div>
                  </SwiperSlide>
              </Swiper>
            </div>
            <div className="fitness-tips-parent">
              <h1 className="fitness-tips">Motivational Quotes</h1>
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                loop={true}
                pagination={{ el:'',clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper-size"
              >
                <SwiperSlide>              
                  <div className="tip">
                    <h3 className="consistency-is-key">
                    The body achieves what the mind believes
                    </h3>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="tip">
                    <h3 className="consistency-is-key">
                    The pain you feel today will be the strength you feel tomorrow
                    </h3>
                  </div>
                </SwiperSlide>
              <SwiperSlide>              
                <div className="tip">
                    <h3 className="consistency-is-key">
                    The only bad workout is the one that didn't happen
                    </h3>
                  </div>
                </SwiperSlide>
              <SwiperSlide>              
                <div className="tip">
                    <h3 className="consistency-is-key">
                    Your body can stand almost anything. It is your mind that you have to convince
                    </h3>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>              
                  <div className="tip">
                    <h3 className="consistency-is-key">
                    Don't stop when you're tired. Stop when you're done
                    </h3>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>              
                  <div className="tip">
                    <h3 className="consistency-is-key">
                    Strive for progress, not perfection
                    </h3>
                  </div>
                  </SwiperSlide>
              </Swiper>
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
    </div>:<Navigate to={'/'}/>
  );
};

export default Profille1;
