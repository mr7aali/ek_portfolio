import Image from 'next/image';
import React from 'react';

const ClintSection = () => {
    return (
        <section className="section-clients">
            <div className="shell">
                <header className="section__head">
                    <h5 className="h2">Clients</h5>
                </header>
                {/* <!-- /.section__head --> */}

                <div className="section__body">
                    <div className="section__image">
                        <div className="section__floating">
                            <Image width="260" height="519" src="https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro.png" className="attachment-large size-large" alt="Monkey Mascot" decoding="async" loading="lazy" srcSet="https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro.png 260w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-160x320.png 160w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-230x460.png 230w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-70x140.png 70w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-95x190.png 95w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-89x177.png 89w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-163x325.png 163w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-78x155.png 78w, https://www.kasradesign.com/wp-content/uploads/2017/11/monkey-astro-250x499.png 250w" sizes="(max-width: 260px) 100vw, 260px" />					</div>
                        {/* <!-- /.section__floating --> */}
                        <Image width="1076" height="437" src="https://www.kasradesign.com/wp-content/uploads/2017/11/clients.png" className="attachment-crb-section-image-big size-crb-section-image-big" alt="All Corporate Clients" decoding="async" loading="lazy" srcSet="https://www.kasradesign.com/wp-content/uploads/2017/11/clients.png 1076w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-625x254.png 625w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-320x130.png 320w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-768x312.png 768w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-345x140.png 345w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-340x138.png 340w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-280x114.png 280w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-260x106.png 260w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-545x221.png 545w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-235x95.png 235w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-284x115.png 284w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-401x163.png 401w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-221x90.png 221w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-174x71.png 174w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-250x102.png 250w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-400x162.png 400w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-720x292.png 720w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-784x318.png 784w, https://www.kasradesign.com/wp-content/uploads/2017/11/clients-465x189.png 465w" sizes="(max-width: 1076px) 100vw, 1076px" />			</div>
                    {/* <!-- /.section__image --> */}
                </div>
                {/* <!-- /.section__body --> */}
            </div>
            {/* <!-- /.shell --> */}
        </section>
    );
};

export default ClintSection;