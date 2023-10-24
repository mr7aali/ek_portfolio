import Modal from "@mui/material/Modal";

const VideoPlayModal = ({
  open,
  book,
  setOpen,
}) => {
  
  return (
    <div  >
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  >
          <div>


            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabIndex="-1" >{/* //style={{ top: '0px', position: 'absolute', height: '656px' }}*/}
              <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                <div className="mfp-content">
                  <div className="mfp-iframe-scaler">
                   
                    <button title="Close (Esc)" onClick={() => setOpen(!open)} type="button" className="mfp-close flex justify-center items-start">
                      <span className="flex justify-center items-center transition duration-300  hover:text-[#e40000] text-[35px] text-[#d16464]">X</span>
                    </button>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WtgW0-4cX_U?si=t6GmaTO2DCkxxBTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayModal;