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


const firstA = document.querySelector('nav a')
firstA.textContent = 'Services'
const secondA = firstA.nextElementSibling
secondA.textContent = 'Product'
const thirdA = secondA.nextElementSibling
thirdA.textContent = 'Vision'
const forthA = thirdA.nextElementSibling
forthA.textContent = 'Features'
const fifthA = forthA.nextElementSibling
fifthA.textContent = 'About'
const sixthA = fifthA.nextElementSibling
sixthA.textContent = 'Contact'

const cta = document.getElementById('cta-img')
cta.setAttribute('src', 'img/header-img.png')

const titleTag = document.querySelector('h1')
titleTag.innerHTML = 'dom <br>is<br> awesome'

const button = document.querySelector('button')
button.innerText = 'Get Started'

const topLeft = document.querySelector('.top-content .text-content')
const h4 = topLeft.querySelector('h4')
h4.innerText = 'Features'
const firstP = h4.nextElementSibling
firstP.innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const topRight = topLeft.nextElementSibling
const secondH = topRight.querySelector('h4')
secondH.innerText = 'About'
const secondP = secondH.nextElementSibling
secondP.innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const midImg = document.getElementById('middle-img')
midImg.setAttribute('src', 'img/mid-page-accent.jpg')

const bottomLeft = document.querySelector('.bottom-content .text-content')
const thirdH = bottomLeft.querySelector('h4')
thirdH.innerText = 'Services'
const thirdP = thirdH.nextElementSibling
thirdP.innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const bottomCenter = bottomLeft.nextElementSibling
const forthH = bottomCenter.querySelector('h4')
forthH.innerText = 'Product'
const forthP = forthH.nextElementSibling
forthP.innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const bottomRight = bottomCenter.nextElementSibling
const fifthH = bottomRight.querySelector('h4')
fifthH.innerText = 'Vision'
const fifthP = fifthH.nextElementSibling
fifthP.innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'





const address = document.querySelector('.contact')
const contactHeader = address.querySelector('h4')
contactHeader.textContent = 'Contact'

const street = contactHeader.nextElementSibling
street.innerHTML = '123 Way 456 Street<br>Somewhere, USA'

const tele = street.nextElementSibling
tele.innerText = '1(888) 888-8888'

const email = tele.nextElementSibling
email.innerText = 'sales@greatidea.io'







const footer = document.querySelector('footer p')
footer.textContent = 'Copyright Great Idea! 2018'