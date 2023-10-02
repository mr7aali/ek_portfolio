import Link from "next/link";
import { ProjectBgImageAndVideoLink } from "../constant/constant";



const Project = ({ bgImage, projectLink }) => {
  return (
    <div class="grid-item">
      <div class="grid-item__image" style={{ backgroundImage: `url(${bgImage})` }}>
        <Link href={projectLink} class="video-trigger" data-wpel-link="external" rel="nofollow external noopener noreferrer"></Link>
      </div>
    </div>
  )
}

const MoreVideoAdded = () => {
  return (
    <section class="section-grid">
      <header class="section__head">
        <div class="shell">
          <div class="section__title">
            <h4 class="h2">More videos from our portfolio</h4>

            <p>There is plenty to see in our portfolio. Take a look <br />
              at some of our favourite videos!</p>
          </div>

          <div class="section__image" style={{ backgroundImage: "url(https://www.kasradesign.com/wp-content/uploads/2017/11/title-with-image1.jpg)" }}>

          </div>
        </div>
      </header>

      <div class="section__body">
        <div class="grid grid--small">
          {
            ProjectBgImageAndVideoLink.map((p, index) => <Project key={index} bgImage={p.bgImage} projectLink={p.projectLink} />)
          }

        </div>
      </div>



      <div class="section__actions">
        <a href="https://www.kasradesign.com/portfolio/" class="btn btn--red" data-wpel-link="internal">Check  our entire portfolio</a>
      </div>
    </section>
  );
};

export default MoreVideoAdded;