(window.webpackJsonp=window.webpackJsonp||[]).push([[78,30],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(22),l=a(195),s=a(191),r=a(147),c=a.n(r),m=a(194),p=a.n(m),g=[{content:"Use multiple frameworks in a single-page application, allowing you to split code by functionality and have Angular, React, Vue.js, etc. apps all living in harmony.",imageUrl:"img/icons/148705-essential-collection/svg/paper-plane.svg",title:"Framework freedom"},{content:"Stand up new apps next to the old one. You write the applications, single-spa makes them work together and won't load them until they're needed.",imageUrl:"img/icons/148705-essential-collection/svg/download.svg",title:"Lazy load applications"},{content:"Combine many small apps, empowering teams to choose their technology. Stay nimble as your team, product, and tech stack grows and changes over time.",imageUrl:"img/icons/148705-essential-collection/svg/settings-1.svg",title:"Front-end microservices"}],u=function(){return o.a.createElement("section",{className:c.a.features},o.a.createElement("div",{className:"container text--center"},o.a.createElement("div",{className:"row"},g.map((function(e,t){var a=e.title,n=e.content,i=e.imageUrl;return o.a.createElement("div",{key:t,className:p()("col col--4",c.a.feature)},i&&o.a.createElement("div",{className:"margin-bottom--lg"},o.a.createElement("img",{className:c.a.featureImage,src:Object(s.a)(i),alt:a})),o.a.createElement("h2",null,a),o.a.createElement("p",null,n))})))))},d=a(148),h=a.n(d),f=a(190),E=function(){var e=Object(i.default)().siteConfig,t=void 0===e?{}:e;return o.a.createElement("header",{className:p()("hero hero--light",h.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:h.a.heroProjectTitle},t.title),o.a.createElement("p",{className:h.a.heroProjectTagline},t.tagline),o.a.createElement("div",{className:h.a.heroButtons},o.a.createElement(f.a,{className:"button",to:Object(s.a)("docs/getting-started-overview")},"Get Started"),o.a.createElement(f.a,{className:"button",to:"https://single-spa-workshop.com"},"Official Courses"),o.a.createElement(f.a,{className:"button",to:"https://join.slack.com/t/single-spa/shared_invite/zt-mafdeybq-0v1aIm3KKaqyVCT2xeny3Q"},"Join Slack Chat"))))},v=a(149),b=a.n(v),w=function(){return o.a.createElement("section",{className:b.a.video},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("iframe",{width:"100%",style:{height:"500px"},src:"https://www.youtube-nocookie.com/embed/L4jqow7NTVg?rel=0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",allowFullScreen:!0}))))},y=a(218),k=a(217);t.default=function(){var e=Object(i.default)().siteConfig,t=void 0===e?{}:e;return o.a.createElement(l.a,{permalink:"/",title:t.title,description:t.tagline},o.a.createElement(E,null),o.a.createElement("main",null,o.a.createElement(w,null),o.a.createElement(u,null),o.a.createElement(k.a,null),o.a.createElement(y.a,null)))}},196:function(e,t,a){"use strict";var n=a(3),o=a(0),i=a.n(o),l=a(194),s=a.n(l),r=a(190),c=a(22),m=a(191);t.a=function(){var e=Object(c.default)().siteConfig,t=void 0===e?{}:e,a=t.themeConfig,l=(void 0===a?{}:a).footer,p=Object(o.useState)((function(){return"undefined"!=typeof localStorage&&"true"!==localStorage.getItem("hide-workshop-banner")})),g=p[0],u=p[1];if(!l)return null;Object(o.useEffect)((function(){g||localStorage.setItem("hide-workshop-banner",!0)}),[g]);var d=l.copyright,h=l.links,f=void 0===h?[]:h,E=l.logo;return i.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===l.style})},i.a.createElement("div",{className:"container"},f&&f.length>0&&i.a.createElement("div",{className:"row footer__links"},f.map((function(e,a){return i.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,l,s){return i.a.createElement(o.Fragment,{key:l},i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&i.a.createElement(r.a,Object(n.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(m.a)(e.to)}),e.label),e.html&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),s.length-1===l&&2===a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},i.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+t.organizationName+"&repo="+t.projectName+"&type=star&count=true&size=small"})),i.a.createElement("li",{key:"license",className:"footer__item"},i.a.createElement("a",{href:Object(m.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),i.a.createElement("div",{className:"text--center"},E&&E.src&&i.a.createElement("img",{className:"footer__logo margin-bottom--sm",alt:E.alt,src:Object(m.a)(E.src)}),i.a.createElement("div",null,"Originally developed at ",i.a.createElement("a",{href:"https://getcanopy.com"},"Canopy")),d&&d,g&&i.a.createElement("div",{className:"footer__banner"},i.a.createElement("div",null,"Learn microfrontends from the single-spa core team at single-spa-workshop.com!"),i.a.createElement("div",{class:"footer__banner--actions"},i.a.createElement("div",{role:"button",tabIndex:0,onClick:function(){return u(!1)}},"Dismiss"),i.a.createElement("a",{href:"https://single-spa-workshop.com",target:"_blank",rel:"noopener"},"View Courses"))))))}},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),o=a.n(n),i=a(1),l=a.n(i),s=a(194),r=a.n(s),c=a(22),m=a(191),p=[{caption:"Data Camp",image:"img/data_camp_logo.png",infoLink:"https://www.datacamp.com/",pinned:!0},{caption:"Toast",image:"img/Toast-Logo.png",infoLink:"https://pos.toasttab.com/",pinned:!0}],g=a(62),u=a.n(g),d=function(e){var t,a=e.showAll,n=Object(c.default)().siteConfig,i=void 0===n?{}:n,l=(a?p:p.filter((function(e){return e.pinned}))).map((function(e,t){return o.a.createElement("a",{key:t,className:u.a.sponsorLogo,href:e.infoLink},o.a.createElement("img",{src:Object(m.a)(e.image),title:e.caption}))}));return o.a.createElement("section",{className:r()("text--center margin-top--xl",u.a.sponsor)},o.a.createElement("h2",{className:r()("sponsorHeading",(t={},t[u.a.sponsorHeadingColored]=!a,t))},"Sponsors"),o.a.createElement("p",null,"This project is sponsored by these organizations and people"),o.a.createElement("div",{className:u.a.sponsorLogos},l),a?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Are you sponsoring this project?"),o.a.createElement("a",{href:i.customFields.repoUrl+"/edit/master/website/src/data/sponsors.js",className:"button"},"Add your company")):o.a.createElement("div",{className:"more-users"},o.a.createElement("a",{className:"button",target:"_blank",rel:"noopener",href:"https://opencollective.com/single-spa"},"Sponsor single-spa")))};d.propTypes={showAll:l.a.bool},d.defaultProps={showAll:!1}},218:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),o=a.n(n),i=a(1),l=a.n(i),s=a(194),r=a.n(s),c=a(22),m=a(191),p=[{caption:"CanopyTax",image:"img/canopy-logo-icon.svg",infoLink:"https://www.getcanopy.com/",pinned:!0},{caption:"Namecheap",image:"img/namecheap-logo.svg",infoLink:"https://www.namecheap.com/",pinned:!0},{caption:"UmiJS",image:"img/logo-umijs.png",infoLink:"https://umijs.org/",pinned:!0},{caption:"DealerSocket",image:"img/dealersocket.png",infoLink:"https://dealersocket.com/",pinned:!1},{caption:"Beamery",image:"img/beamery.svg",infoLink:"https://beamery.com/",pinned:!0},{caption:"Innovaccer",image:"img/innovaccer-logo-black.svg",infoLink:"https://innovaccer.com",pinned:!0},{caption:"Dstillery",image:"img/dstillery.png",infoLink:"https://dstillery.com",pinned:!1},{caption:"Scania",image:"img/scania-logo.png",infoLink:"https://scania.com",pinned:!0},{caption:"Wavecell",image:"img/wavecell.svg",infoLink:"https://wavecell.com",pinned:!1},{caption:"OpenMRS",image:"img/openmrs.jpg",infoLink:"https://openmrs.org",pinned:!0},{caption:"Siigo",image:"img/siigo-nube-logo.png",infoLink:"https://siigonube.siigo.com",pinned:!1},{caption:"CatalystOne",image:"img/catalystone-logo.svg",infoLink:"https://www.catalystone.com/",pinned:!1},{caption:"Canonical",image:"img/canonical-logo.svg",infoLink:"https://www.canonical.com/",pinned:!0},{caption:"Unbabel",image:"img/unbabel-logo.svg",infoLink:"https://www.unbabel.com/",pinned:!1},{caption:"Australia Post Global eCommerce Solutions",image:"img/apg-ecommerce-solutions-logo.png",infoLink:"https://www.apgecommerce.com/",pinned:!0},{caption:"Zup I.T.",image:"img/zup-logo.png",infoLink:"https://www.zup.com.br/en/",pinned:!0},{caption:"Sinbad ",image:"https://sinbad.co.id/images/sinbad.svg",infoLink:"https://sinbad.co.id/",pinned:!1},{caption:"Metigy ",image:"//d12ug919f4lfza.cloudfront.net/metigy-logo-square-orange.svg",infoLink:"https://metigy.com/",pinned:!1}],g=a(63),u=a.n(g),d=function(e){var t,a=e.showAll,n=Object(c.default)().siteConfig,i=void 0===n?{}:n,l=(a?p:p.filter((function(e){return e.pinned}))).map((function(e,t){return o.a.createElement("a",{key:t,className:u.a.showcaseLogo,href:e.infoLink},o.a.createElement("img",{src:Object(m.a)(e.image),title:e.caption}))}));return o.a.createElement("section",{className:r()("text--center margin-top--xl",u.a.showcase)},o.a.createElement("h2",{className:r()("showcaseHeading",(t={},t[u.a.showcaseHeadingColored]=!a,t))},"Who's Using This?"),o.a.createElement("p",null,"This project is used by all these organizations"),o.a.createElement("div",{className:u.a.showcaseLogos},l),a?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Are you using this project?"),o.a.createElement("a",{href:i.customFields.repoUrl+"/edit/master/website/src/data/users.js",className:"button"},"Add your company")):o.a.createElement("div",{className:"more-users"},o.a.createElement("a",{className:"button",href:Object(m.a)("users")},"More ",i.title," Users")))};d.propTypes={showAll:l.a.bool},d.defaultProps={showAll:!1}}}]);