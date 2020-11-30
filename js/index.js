const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//grab elements
const nav = document.querySelector('nav');
const a1 = nav.querySelector('a');
a1.textContent = siteContent.nav["nav-item-1"];
const a2 = a1.nextElementSibling;
a2.textContent = siteContent.nav["nav-item-2"];
const a3 = a2.nextElementSibling;
a3.textContent = siteContent.nav["nav-item-3"];
const a4 = a3.nextElementSibling;
a4.textContent = siteContent.nav["nav-item-4"];
const a5 = a4.nextElementSibling;
a5.textContent = siteContent.nav["nav-item-5"];
const a6 = a5.nextElementSibling;
a6.textContent = siteContent.nav["nav-item-6"];
//section1
const CTAtext = document.querySelector('.cta-text');
const CTAh1 = CTAtext.querySelector('h1');
CTAh1.textContent = siteContent.cta.h1;

const split = CTAh1.textContent.split(' ');
console.log(split);
rejoined = split.join('<br>');
console.log(rejoined);
CTAh1.innerHTML = rejoined;

const CTAbtn = CTAtext.querySelector('button');
CTAbtn.textContent = siteContent.cta.button;

const CTAimg = document.querySelector('#cta-img');
CTAimg.setAttribute('src', siteContent.cta["img-src"])




//content
const topContent = document.querySelector('.top-content');

const topContent1 = topContent.querySelector('.text-content');
const topContent1h4 = topContent1.querySelector('h4')
topContent1h4.textContent = siteContent["main-content"]['features-h4'];
const topContent1p = topContent1.querySelector('p')
topContent1p.textContent = siteContent["main-content"]['features-content'];
const topContent2 = topContent1.nextElementSibling;
const topContent2h4 = topContent2.querySelector('h4')
topContent2h4.textContent = siteContent["main-content"]['about-h4']
const topContent2p = topContent2.querySelector('p')
topContent2p.textContent = siteContent["main-content"]['about-content']

const middleContent = document.querySelector('.middle-img');
middleContent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelector('.bottom-content');
const bottomContent1 = bottomContent.querySelector('.text-content');
const bottomContent1h4 = bottomContent1.querySelector('h4')
bottomContent1h4.textContent = siteContent["main-content"]['services-h4']
const bottomContent1p = bottomContent1.querySelector('p')
bottomContent1p.textContent = siteContent["main-content"]['services-content']
const bottomContent2 = bottomContent1.nextElementSibling;
const bottomContent2h4 = bottomContent2.querySelector('h4')
bottomContent2h4.textContent = siteContent["main-content"]['product-h4']
const bottomContent2p = bottomContent2.querySelector('p')
bottomContent2p.textContent = siteContent["main-content"]['product-content']
const bottomContent3 = bottomContent2.nextElementSibling;
const bottomContent3h4 = bottomContent3.querySelector('h4')
bottomContent3h4.textContent = siteContent["main-content"]['vision-h4']
const bottomContent3p = bottomContent3.querySelector('p')
bottomContent3p.textContent = siteContent["main-content"]['vision-content']

//contact
const contact = document.querySelector('.contact');
const contacth4 = contact.querySelector('h4');
contacth4.textContent = siteContent['contact']['contact-h4'];
const contactp1 = contact.querySelector('p');
contactp1.textContent = siteContent['contact']['address'];
const contactp2 = contactp1.nextElementSibling;
contactp2.textContent = siteContent['contact']['phone'];
const contactp3 = contactp2.nextElementSibling;
contactp3.textContent = siteContent['contact']['email'];

// console.log(contactp1.textContent);
const contactp1Split = contactp1.textContent.split('Street');
// console.log(contactp1Split);
contactp1Split.splice(1, 0, 'Street<br>')
// console.log(contactp1Split);
const joined = contactp1Split.join('');
// console.log(joined);
contactp1.innerHTML = joined;

//footer
const footer = document.querySelector('footer');
const footerP = footer.querySelector('p');
footerP.textContent = siteContent['footer']['copyright'];
