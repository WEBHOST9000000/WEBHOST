//Declare variables
const animals =[
  "metadata", {
    "title": "Srilankan leopard",
    "viewport": "width=device-width, initial-scale=1.0",
    "charset": "utf-8",
    "favicon": {
      "apple_touch_icon": "/apple-touch-icon.png",
      "favicon_32x32": "/favicon-32x32.png",
      "favicon_16x16": "/favicon-16x16.png",
      "manifest": "/site.webmanifest",
      "mask_icon": "/safari-pinned-tab.svg",
      "msapplication_tile_color": "#da532c",
      "theme_color": "#ffffff"
    }
  },
    "main_content", {
        "animals": [
          {
            "name": "Sri Lankan Jungle Fowl",
            "image": "./images/Junglefowl.jpeg",
            "description": "The male Sri Lankan junglefowl is larger with vivid plumage, orange-red body, and exaggerated wattle and comb. The female has dull brown plumage for camouflage. They are primarily terrestrial, foraging for food and roosting in trees at night."
          },
          {
            "name": "Srilankan elephant",
            "image": "./images/sri-lanka-elephants.jpg",
            "description": "The Sri Lankan elephant is one of three recognized subspecies of the Asian elephant. They are highly social animals, living in herds led by matriarchs. These elephants have significant cultural and religious importance in Sri Lanka."
          },
          {
            "name": "Srilanka blue Magpie",
            "image": "./images/Blue magpie.jpeg",
            "description": "The Sri Lanka blue magpie is known for its bright blue plumage, reddish-brown head, and vibrant red bill, legs, and eye ring. Despite avoiding human-disturbed habitats, it tolerates human presence and is attracted to it. They are omnivorous, eating fruit, nectar, and insects."
          },
          {
            "name": "Leopard",
            "image": "./images/leopard2.jpg",
            "description": "The Sri Lankan leopard is a large and powerful cat, known for its distinctive golden-yellow coat covered in dark rosettes. It has a robust build and is slightly smaller than some other leopard subspecies."
          },
          {
            "name": "Srilankan Hill myna",
            "image": "./images/Hill myna.jpeg",
            "description": "The Hill Myna is endemic to Sri Lanka, meaning it is found only in this region and nowhere else in the wild. They are typically found in various habitats, including forests and cultivated areas."
          }
        ],
        "national_parks": [
          {
            "name": "Yala National Park",
            "url": "Yala national park.html"
          },
          {
            "name": "Wilpattu National Park",
            "url": "Wilpattu national park.html"
          }
        ]
      },
      "footer_links", [
        { "text": "Privacy policy", "url": "#" },
        { "text": "Terms of use", "url": "#" }
      ],
      "social_icons", [
        { "icon_class": "fa fa-twitter", "url": "#" },
        { "icon_class": "fa fa-linkedin", "url": "#" },
        { "icon_class": "fa fa-twitch", "url": "#" },
        { "icon_class": "fa fa-github", "url": "#" },
        { "icon_class": "fa fa-youtube", "url": "#" }
      ],
      "copyright", "&copy;2021 Iresh tourism industry."
]

// Convert the JSON data to a string
const jsonDataString = JSON.stringify(animals);

// Store the JSON data in localStorage
localStorage.setItem('animals', jsonDataString);

// Check if the data is stored correctly
const storedData = localStorage.getItem('animals');
if (storedData) {
  console.log('Data stored in localStorage successfully.');
} else {
  console.error('Error storing data in localStorage.');
}  