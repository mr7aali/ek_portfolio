import React from 'react';

const TestPage = () => {
    return (
        <div>
            <div className="" style={{background:"red"}}>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabIndex="-1" style={{ top: '0px', position: 'absolute', height: '656px' }}>
                    <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                        <div className="mfp-content">
                            <div className="mfp-iframe-scaler">
                                <button title="Close (Esc)" type="button" className="mfp-close"></button>
                                <iframe  width={"900px"} height={"500px"} className="mfp-iframe" frameBorder="0" allowFullScreen src="//player.vimeo.com/video/764581583#s?autoplay=1" __idm_id__="344079"></iframe>
                            </div>
                        </div>
                 
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default TestPage;