import React from "react";

// Data arrays for social media, services, company, countries, and contacts
const socialMediaLinks = [
  { href: "https://vimeo.com/kasra", icon: "fa-vimeo", label: "Vimeo" },
  {
    href: "https://facebook.com/kasradesignstudio",
    icon: "fa-facebook",
    label: "Facebook",
  },
  {
    href: "https://www.behance.net/kasra-design",
    icon: "fa-behance",
    label: "Behance",
  },
  {
    href: "https://twitter.com/kasradesign",
    icon: "fa-twitter",
    label: "Twitter",
  },
  {
    href: "https://www.youtube.com/kasradesign",
    icon: "fa-youtube",
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/kasradesign",
    icon: "fa-instagram",
    label: "Instagram",
  },
  {
    href: "https://dribbble.com/kasradesign",
    icon: "fa-dribbble",
    label: "Dribbble",
  },
  {
    href: "https://www.linkedin.com/company/kasra-design",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.pinterest.com/kasradesign",
    icon: "fa-pinterest",
    label: "Pinterest",
  },
];

const servicesLinks = [
  {
    id: "menu-item-378",
    href: "https://www.kasradesign.com/explainer-video-production/",
    label: "Explainer Video",
  },
  {
    id: "menu-item-1040",
    href: "https://www.kasradesign.com/corporate-video-production/",
    label: "Corporate Video",
  },
  {
    id: "menu-item-1096",
    href: "https://www.kasradesign.com/business-video-production/",
    label: "Business Video",
  },
  {
    id: "menu-item-1097",
    href: "https://www.kasradesign.com/start-up-video-production/",
    label: "Start-Up Video",
  },
  {
    id: "menu-item-1167",
    href: "https://www.kasradesign.com/motion-graphics-production/",
    label: "Motion Graphics",
  },
  {
    id: "menu-item-1169",
    href: "https://www.kasradesign.com/tv-commercial-production/",
    label: "TV Commercial",
  },
  {
    id: "menu-item-1168",
    href: "https://www.kasradesign.com/non-profit-video-production/",
    label: "Non-Profit Video",
  },
  {
    id: "menu-item-1422",
    href: "https://www.kasradesign.com/video-production/",
    label: "Video Production",
  },
  {
    id: "menu-item-1188",
    href: "https://www.kasradesign.com/healthcare-video-production/",
    label: "Healthcare Video Production",
  },
  {
    id: "menu-item-1187",
    href: "https://www.kasradesign.com/event-video/",
    label: "Event Video",
  },
  {
    id: "menu-item-1102",
    href: "https://www.kasradesign.com/animated-video-production/",
    label: "Animated Video",
  },
];

const companyLinks = [
  {
    id: "menu-item-1268",
    href: "https://www.kasradesign.com/awards-nominations-featured/",
    label: "Awards & Nominations",
  },
  {
    id: "menu-item-62",
    href: "https://www.kasradesign.com/about/",
    label: "About Our Team",
  },
  {
    id: "menu-item-64",
    href: "https://www.kasradesign.com/clients/",
    label: "Meet Our Clients",
  },
  {
    id: "menu-item-66",
    href: "https://www.kasradesign.com/case-studies/",
    label: "Case Studies",
  },
  {
    id: "menu-item-67",
    href: "https://www.kasradesign.com/jobs/",
    label: "Join Our Team",
  },
  {
    id: "menu-item-2613",
    href: "https://www.kasradesign.com/guest-post-submission/",
    label: "Guest Post Submission",
  },
  {
    id: "menu-item-2614",
    href: "https://www.kasradesign.com/animated-video-production-process/",
    label: "Process",
  },
  {
    id: "menu-item-70",
    href: "https://www.kasradesign.com/terms-of-use/",
    label: "Terms of Use",
  },
  {
    id: "menu-item-71",
    href: "https://www.kasradesign.com/privacy-policy/",
    label: "Privacy Policy",
    rel: "privacy-policy",
  },
  {
    id: "menu-item-355",
    href: "https://www.kasradesign.com/contact/",
    label: "Contact",
  },
];

const countriesLinks = [
  {
    id: "menu-item-2799",
    href: "https://www.kasradesign.com/animated-explainer-video-in-singapore/",
    label: "Singapore",
  },
  {
    id: "menu-item-2629",
    href: "https://www.kasradesign.com/animated-explainer-video-in-canada/",
    label: "Canada",
  },
  {
    id: "menu-item-2612",
    href: "https://www.kasradesign.com/animated-explainer-video-in-united-kingdom-uk/",
    label: "United Kingdom",
  },
  {
    id: "menu-item-2611",
    href: "https://www.kasradesign.com/animated-explainer-video-in-united-states/",
    label: "United States",
  },
  {
    id: "menu-item-2610",
    href: "https://www.kasradesign.com/animated-explainer-video-in-australia/",
    label: "Australia",
  },
  {
    id: "menu-item-2609",
    href: "https://www.kasradesign.com/animated-explainer-video-in-united-arab-emirates/",
    label: "UAE",
  },
];

const contactInfo = [
  {
    type: "address",
    items: [
      {
        href: "http://maps.google.com/?q=0,0",
        label: "20 COLLYER QUAY, #09-01, 049319 Singapore",
      },
      {
        href: "http://maps.google.com/?q=33.8278904033,-117.908011046",
        label:
          "201 E Center St Ste 112 PMB 277 Anaheim, CA 92805 United States",
      },
      {
        href: "http://maps.google.com/?q=3.14975958632,101.576124079",
        label:
          "33-01, 33rd Floor, Menara Keck Seng, Bukit Bintang, 55100 KL, Malaysia",
      },
    ],
  },
  {
    type: "email",
    items: [
      { href: "mailto:hello@kasradesign.com", label: "hello@kasradesign.com" },
    ],
  },
  {
    type: "phone",
    items: [
      { href: "tel:659690XX1", label: "Singapore: +xx 969xx361" },
      { href: "tel:60XX3409451", label: "Malaysia: +60 1234x9451" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="shell">
        <aside className="footer__aside">
          <h6 className="pb-6 text-3xl font-extrabold h5 text-[#464646]">
            Get Monthly Goodies
          </h6>
          <div className="subscribe"></div>

          <div className="socials">
            <ul>
              {socialMediaLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    data-wpel-link="external"
                    rel="nofollow external noopener noreferrer"
                  >
                    <i className={`fa ${social.icon}`} aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="list-icons">
            <ul>
              <li className="list-item-custom">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="2"
                  data-height="45"
                  data-clutchcompany-id="25973"
                >
                  <iframe
                    id="iframe-0.559118178156258"
                    width="100%"
                    src="https://widget.clutch.co/widgets/get/2?ref_domain=www.kasradesign.com&uid=25973&ref_path=/"
                    height="45px"
                    style={{ border: "none", display: "block" }}
                    title="Kasra Design Clutch Review Widget 2"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div className="footer__content">
          <div className="cols">
            <div className="col col-size1">
              <h6 className="pb-6 text-3xl font-extrabold h5 text-[#464646]">
                Our Services
              </h6>
              <nav className="nav-base">
                <ul id="menu-our-services" className="menu">
                  {servicesLinks.map((service) => (
                    <li
                      key={service.id}
                      className={`menu-item menu-item-type-post_type menu-item-object-page ${service.id}`}
                    >
                      <a
                        href={service.href}
                        className="text-xl"
                        data-wpel-link="internal"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col col-size1">
              <h6 className="pb-6 text-3xl font-extrabold h5 text-[#464646]">
                Company
              </h6>
              <nav className="nav-base">
                <ul id="menu-company" className="menu">
                  {companyLinks.map((company) => (
                    <li
                      key={company.id}
                      className={`menu-item menu-item-type-post_type menu-item-object-page ${company.id}`}
                    >
                      <a
                        href={company.href}
                        data-wpel-link="internal"
                        {...(company.rel && { rel: company.rel })}
                        className="text-xl"
                      >
                        {company.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col col-size2">
              <h6 className="pb-6 text-3xl font-extrabold h5 text-[#464646]">
                Countries
              </h6>
              <nav className="nav-base">
                <ul id="menu-countries" className="menu">
                  {countriesLinks.map((country) => (
                    <li
                      key={country.id}
                      className={`menu-item menu-item-type-post_type menu-item-object-page ${country.id}`}
                    >
                      <a
                        href={country.href}
                        data-wpel-link="internal"
                        className="text-xl"
                      >
                        {country.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col col-size3">
              <h6 className="pb-6 text-3xl font-extrabold h5 text-[#464646]">
                Contact
              </h6>
              <div className="list-contacts">
                <ul>
                  {contactInfo.map((contact, index) => (
                    <li key={index}>
                      {contact.items.map((item, idx) => (
                        <p key={idx}>
                          <a
                            href={item.href}
                            {...(contact.type === "address" && {
                              target: "_blank",
                              "data-wpel-link": "external",
                              rel: "nofollow external noopener noreferrer",
                            })}
                            {...(contact.type === "email" && {
                              "data-wpel-link": "internal",
                            })}
                            {...(contact.type === "phone" && {
                              "data-wpel-link": "internal",
                            })}
                            className="text-xl"
                          >
                            {item.label}
                          </a>
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>
              Kasra Design<b>©</b> is an animation company fully owned and
              managed by <strong>Explainer Videoly Pte. Ltd</strong> &{" "}
              <strong>Explainer Videoly Sdn Bhd</strong>. Registration Number in
              Singapore: UEN 202120082M. Registration Number in Malaysia:
              1123896-U. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    </footer>
  );
};

export default Footer;
