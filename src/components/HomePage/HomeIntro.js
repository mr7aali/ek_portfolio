import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeIntro = () => {

  const porfolioListTitle = ["Explainer Videos", "Healthcare Videos", "Motion graphics", "Corporate Videos", "3D Animation"]
  return (
    <section className="section-module">
      <div className="section-module__row">
        <div className="section__content-left" style={{ backgroundColor: '#498cf3', color: '#ffffff' }}>
          <div className="section__content-inner">
            <h2 id="video-made-to-fit">Video made to fit!</h2>
            <p>
              Everything is tailor-made here. Whether you’re looking to create{' '}
              <strong>an explainer video</strong> to showcase your product or services, a{' '}
              <strong>motion graphics</strong> spot to present your organization, or even a{' '}
              <strong>top-shelf 3D animation</strong> to run a YouTube campaign, we will carefully craft a high-quality visual story suited to your needs.
            </p>
            <p>
              We deeply value enduring business relationships. Should you choose to initiate your video production project with us, our{' '}
              <a href="https://www.kasradesign.com/awards-nominations-featured/" data-wpel-link="internal">award-winning team</a> of artists and animators will collaborate with you every step of the way to meet and exceed your expectation.
            </p>
            <p>&nbsp;</p>
          </div>       
        </div>
        <div className="section__content-right" style={{ backgroundImage: 'url(https://www.kasradesign.com/wp-content/uploads/2017/11/space-bg.jpg)' }}>
          <div className="section__content-inner">
            <div className="section__floating">
              <Image
                width="280"
                height="567"
                src="https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-280x567.png"
                className="attachment-crb-column-floating size-crb-column-floating"
                alt="Monkey Astronaut - Mascot"
                decoding="async"
                loading="lazy"
                srcSet="https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big.png 280w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-158x320.png 158w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-227x460.png 227w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-69x140.png 69w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-257x520.png 257w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-94x190.png 94w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-87x177.png 87w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-160x325.png 160w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-77x155.png 77w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-big-250x506.png 250w"
                sizes="(max-width: 280px) 100vw, 280px"
              />
              <div className="list-portfolio">
                <ul>
                  {
                    porfolioListTitle.map(title => (
                      <li key={title}>
                        <Link href="" data-wpel-link="internal">
                          {title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
