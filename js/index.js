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

//nav
let nav = document.querySelectorAll("a");
nav[1].textContent = siteContent.nav["nav-item-1"]
nav[2].textContent = siteContent.nav["nav-item-2"]
nav[3].textContent = siteContent.nav["nav-item-3"]
nav[4].textContent = siteContent.nav["nav-item-4"]
nav[5].textContent = siteContent.nav["nav-item-5"]
nav[6].textContent = siteContent.nav["nav-item-6"]

//cta
// cta
let awesome = document.querySelector("h1");
awesome.textContent = (siteContent.cta["h1"]);

let button = document.querySelector("button");
button.textContent = (siteContent.cta["button"]);

let codeSnip = document.getElementById("cta-img");
codeSnip.src = (siteContent.cta["img-src"]); 

// main content

let ContentHeaders = document.querySelectorAll("h4");
ContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
ContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
ContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
ContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
ContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
// contact h4
ContentHeaders[5].textContent = siteContent.contact["contact-h4"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contentP = document.querySelectorAll("p");
contentP[0].textContent = siteContent["main-content"]["features-content"];
contentP[1].textContent = siteContent["main-content"]["about-content"];
contentP[2].textContent = siteContent["main-content"]["services-content"];
contentP[3].textContent = siteContent["main-content"]["product-content"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];
//contact
contentP[5].textContent = siteContent.contact.address;
contentP[6].textContent = siteContent.contact.phone;
contentP[7].textContent = siteContent.contact.email;
//footer
contentP[8].textContent = siteContent.footer.copyright;