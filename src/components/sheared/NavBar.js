import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {

    const [applyStyle, setApplyStyle] = useState(false);

    useEffect(() => {
        if (applyStyle) {

            document.body.classList.add("has-menu-opened")
            document.getElementById("menu-item-1497").style.display = "none";
            document.getElementById("menu-item-1524").style.display = ""
        }
        else {
            document.body.classList.remove("has-menu-opened")
            document.getElementById("menu-item-1524").style.display = "none"
            document.getElementById("menu-item-1497").style.display = "";
        }


    }, [applyStyle]);
    return (
        // page-template page-template-templates page-template-inner-page page-template-templatesinner-page-php page page-id-1510 page-loaded has-menu-opened
        <div >
            <header className="header">
                <div className="shell">
                    <Link href="https://www.kasradesign.com/" className="logo " alt="Kasra Design">
                        <Image width={130} height={47} src="https://www.kasradesign.com/wp-content/themes/kasra-design/images/kesradesign-logo.svg" title="Kasra Design: Animated Explainer Video Company" alt="Kasra Design" />
                        <Image width={130} height={47} src="https://www.kasradesign.com/wp-content/themes/kasra-design/images/kesradesign-logo-white.svg" title="Kasra Design: Animated Explainer Video Company" alt="Kasra Design" />
                    </Link>

                    <div className="header__content">
                        <nav className="nav">
                            <ul id="menu-main-menu" className="menu">
                                <li id="menu-item-1524" className="menu-item menu-item-type-post_type  menu-item-object-page menu-item-1524">
                                    <a href="#" data-wpel-link="internal">
                                        Services
                                    </a></li>

                                <li id="menu-item-1497" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1497">
                                    <a href="#" data-wpel-link="internal">
                                        Services
                                    </a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1498" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1498"><a href="#" data-wpel-link="internal">Explainer Video</a></li>
                                        <li id="menu-item-2289" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2289"><a href="#" data-wpel-link="internal">Animated Video</a></li>
                                        <li id="menu-item-2409" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2409"><a href="#" data-wpel-link="internal">Motion Graphics</a></li>
                                        <li id="menu-item-1499" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1499"><a href="#" data-wpel-link="internal">Corporate Video</a></li>
                                        <li id="menu-item-2290" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2290"><a href="#" data-wpel-link="internal">Business Video</a></li>
                                        <li id="menu-item-1500" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1500"><a href="#" data-wpel-link="internal">Video Production</a></li>
                                        <li id="menu-item-2423" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2423"><a href="#" data-wpel-link="internal">Whiteboard Animation</a></li>
                                    </ul>
                                </li>

                                <li id="menu-item-1511" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1511"><a href="#" data-wpel-link="internal">Portfolio</a></li>
                                <li id="menu-item-48" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"><a href="#" data-wpel-link="internal">About</a></li>
                                <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a href="#" data-wpel-link="internal">Case Studies</a></li>
                                <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a href="#" data-wpel-link="internal">Clients</a></li>
                                <li id="menu-item-52" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"><a href="#" data-wpel-link="internal">Blog</a></li>
                            </ul>
                        </nav>
                        <a href="#" className="btn-quote" data-wpel-link="internal">
                            Get a Quote
                        </a>
                    </div>

                    <a href="#" className="nav-trigger" onClick={() => setApplyStyle(!applyStyle)}>
                        <span></span>

                        <span></span>

                        <span></span>
                    </a>
                </div>
            </header>
        </div>

    );
};

export default NavBar;