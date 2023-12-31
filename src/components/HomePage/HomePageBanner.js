import Image from "next/image";
import Modal from "./VideoPlayModal";
import { useState } from "react";
import VideoPlayModal from "./VideoPlayModal";

const HomePageBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="intro">

        <div className="shell">
          <div className="intro__content">

            <div className="intro__content-inner">


              <div className="intro__head">


                <div className="intro__title">
                  <div className="intro__title-image">
                    <Image
                      width={155} height={150}
                      src="https://www.kasradesign.com/wp-content/themes/kasra-design/images/intro-letter-v.png"
                      alt="Letter V"
                    />
                  </div>
                  {/* <!-- /.intro__title-image --> */}
                  <div className="intro__title-image">
                    <Image
                      width={133} height={150}
                      src="https://www.kasradesign.com/wp-content/themes/kasra-design/images/intro-letter-d.jpg"
                      alt="Letter D"
                    />
                  </div>
                  {/* <!-- /.intro__title-image --> */}
                  <div className="intro__title-image">
                    <Image

                      width={90} height={150}
                      src="https://www.kasradesign.com/wp-content/themes/kasra-design/images/intro-letter-e.jpg"
                      alt="Letter E"
                    />
                  </div>

                  {/* onclick */}
                  {/*! <! -- /.intro__title-image --> */}
                  <div onClick={() => setOpen(!open)} className="intro__title-image">

                    <a
                      // href="//vimeo.com/764581583#s"
                      className="btn-video video-trigger "
                      data-wpel-link="external"
                      rel="nofollow external noopener noreferrer"
                    >
                      <Image
                        width={148} height={150}
                        src="https://www.kasradesign.com/wp-content/themes/kasra-design/images/intro-letter-o.jpg"
                        alt="Letter O"
                      />
                    </a>
                  </div>
                  {/* <!-- /.intro__title-image --> */}
                </div>


                {/* <!-- /.intro__title --> */}
                {/* <!-- hidden-xs --> */}
                <h1 className="intro__subtitle">
                  CUSTOM EXPLAINER VIDEO &amp;<br />
                  3D ANIMATION PRODUCTION
                </h1>
                {/* <!-- /.intro__subtitle --> */}
              </div>


              {/* <!-- /.intro__head --> */}
            </div>
            {/* <!-- /.intro__content-inner --> */}
            <div
              className="intro__body"
              style={{
                backgroundImage:
                  'url(https://www.kasradesign.com/wp-content/themes/kasra-design/images/intro-home-overlay.png)',
              }}
            >
              <Image

                width="401"
                height="590"
                src="https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img.png"
                className="intro__camera skrollable skrollable-between"
                alt="Camera & Space Station Concept"
                data-600-start="transform: translateY(50px);"
                loading="lazy"
                srcSet="https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img.png 401w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-217x320.png 217w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-313x460.png 313w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-95x140.png 95w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-340x500.png 340w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-280x412.png 280w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-260x383.png 260w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-129x190.png 129w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-120x177.png 120w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-221x325.png 221w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-105x155.png 105w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-250x368.png 250w, https://www.kasradesign.com/wp-content/uploads/2017/11/inro-home-main-img-400x589.png 400w"
                sizes="(max-width: 401px) 100vw, 401px"
                style={{ transform: 'translateY(0px)' }}
              />
              <Image

                width="221"
                height="325"
                src="https://www.kasradesign.com/wp-content/uploads/2017/11/intro-home-mic.png"
                className="intro__mic skrollable skrollable-between"
                alt="Microphone & Audio"
                decoding="async"
                data-start="transform: translateY(0px);"
                data-600-start="transform: translateY(-50px);"
                loading="lazy"
                style={{ transform: 'translateY(0px)' }}
              />
            </div>
            {/* <!-- /.intro__body --> */}
            <h3 className="intro__subtitle visible-xs-block"></h3>
            {/* <!-- /.intro__subtitle --> */}
            <Image

              width="73"
              height="65"
              src="https://www.kasradesign.com/wp-content/uploads/2017/11/intro-home-cameraman.png"
              className="intro__cameraman"
              alt="Camera Man"
              decoding="async"
              loading="lazy"
            />
            <Image
              width="73"
              height="137"
              src="https://www.kasradesign.com/wp-content/uploads/2017/11/intro-home-lady.png"
              className="intro__lady"
              alt="Character Walking"
              decoding="async"
              loading="lazy"
            />
            <Image
              width="55"
              height="61"
              src="https://www.kasradesign.com/wp-content/uploads/2017/11/intro-home-gay.png"
              className="intro__guy"
              alt="Guy Watching Video"
              decoding="async"
              loading="lazy"
            />
            <Image
              width="174"
              height="155"
              src="https://www.kasradesign.com/wp-content/uploads/2017/11/intro-home-play.png"
              className="intro__play"
              alt="Showreel Hint Astronaut"
              decoding="async"
              loading="lazy"
              srcSet="https://www.kasradesign.com/wp-content/uploads/2017/11/intro-home-play.png 174w, https://www.kasradesign.com/wp-content/uploads/2017/11/intro-home-play-157x140.png 157w"
              sizes="(max-width: 174px) 100vw, 174px"
            />
          </div>
          {/* <!-- /.intro__content --> */}
        </div>
      </section>
      <VideoPlayModal open={open} setOpen={setOpen} />
    </div>)
}

export default HomePageBanner;
