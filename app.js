const reviews = [
    {
      id: 1,
      name: "Rusu Marian",
      job: "Senior Developer",
      img: "https://scontent.fsbz3-1.fna.fbcdn.net/v/t1.6435-9/160901983_4187404537984469_9180173081975703602_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AbGpTmLzhagAX9YCSaU&_nc_ht=scontent.fsbz3-1.fna&oh=00_AT__-H_gVsGyH5Ib3GY851gbqRXRcRT7SSPSlA1903I8Sg&oe=62B81E25",
      text:
        "I'm baby meggings twee health goth. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("job");
const job = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})