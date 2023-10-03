// import Link from "next/link";
import { ProjectBgImageAndVideoLink } from "../constant/constant";




const Project = ({ bgImage, projectLink }) => {
  return (
    <div className="grid-item">
      <div className="grid-item__image" style={{ backgroundImage: `url(${bgImage})` }}>
        <a href={projectLink} className="video-trigger" data-wpel-link="external" rel="nofollow external noopener noreferrer"></a>
      </div>
    </div>
  )
}

const MoreVideoAdded = () => {
  return (
    <section className="section-grid">
      <header className="section__head">
        <div className="shell">
          <div className="section__title">
            <h4 className="h2">More videos from our portfolio</h4>

            <p>There is plenty to see in our portfolio. Take a look <br />
              at some of our favourite videos!</p>
          </div>

          <div className="section__image" style={{ backgroundImage: "url(https://www.kasradesign.com/wp-content/uploads/2017/11/title-with-image1.jpg)" }}>

          </div>
        </div>
      </header>

      <div className="section__body">
        <div className="grid grid--small">
          {
            ProjectBgImageAndVideoLink.map((p, index) => <Project key={index} bgImage={p.bgImage} projectLink={p.projectLink} />)
          }

        </div>
      </div>



      <div className="section__actions">
        <a href="https://www.kasradesign.com/portfolio/" className="btn btn--red" data-wpel-link="internal">Check  our entire portfolio</a>
      </div>
    </section>
  );
};

export default MoreVideoAdded;