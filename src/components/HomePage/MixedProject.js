import { useState } from "react";
import { MixedProjectTitleAndBgImge } from "../constant/constant";
import VideoPlayModal from "./VideoPlayModal";


const MixedProject = () => {
  const [open,setOpen,] = useState(false)
  return (
    <section className="section-grid">
      <div className="section__body">
        <div className="grid">

          {
            MixedProjectTitleAndBgImge.map((p, i) => (
              <div key={i} className="grid-outer">
                <div className="grid-item">
                  <div className="grid-item__content">
                    <h2 >{p.title}</h2>
                    <p>
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="grid-item__image" style={{ backgroundImage: `url(${p.bgImage})` }}>


                   <a
                    onClick={()=>setOpen(!open)}
                    className="video-trigger" data-wpel-link="external" rel="nofollow external noopener noreferrer"></a> 


                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <VideoPlayModal open={open} setOpen={setOpen } />
    </section>
  );
};

export default MixedProject;
