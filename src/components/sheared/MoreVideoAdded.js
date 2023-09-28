import React from 'react';

const MoreVideoAdded = () => {
    return (
        <section className="section-grid">
        <header className="section__head">
          <div className="shell">
            <div className="section__title">
              <h4 className="h2">More videos from our portfolio</h4>
              <p>There is plenty to see in our portfolio. Take a look<br />at some of our favorite videos!</p>
            </div>
            {/* /.section__title */}
            <div className="section__image" style={{ backgroundImage: 'url(https://www.kasradesign.com/wp-content/uploads/2017/11/title-with-image1.jpg)' }}>
            </div>
            {/* /.section__image */}
          </div>
          {/* /.shell */}
        </header>
        {/* /.section__head */}
        <div className="section__body">
          <div className="grid grid--small">
            <div className="grid-item">
              <div className="grid-item__image" style={{ backgroundImage: 'url(https://www.kasradesign.com/wp-content/uploads/2022/02/thumbnail-beautiful-3d-simulation.jpg)' }}>
                <a href="//vimeo.com/668065461#s" className="video-trigger" data-wpel-link="external" rel="nofollow external noopener noreferrer"></a>
              </div>
              {/* /.grid-item__image */}
            </div>
            {/* /.grid-item */}
            {/* Repeat the above grid-item structure for the other items */}
          </div>
          {/* /.grid */}
        </div>
        {/* /.section__body */}
        <div className="section__actions">
          <a href="https://www.kasradesign.com/portfolio/" className="btn btn--red" data-wpel-link="internal">Check our entire portfolio</a>
        </div>
        {/* /.section__actions */}
      </section>
    );
};

export default MoreVideoAdded;