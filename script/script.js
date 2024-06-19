gsap.registerPlugin(ScrollTrigger) 
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-shadow');
    } else {
        navbar.classList.remove('navbar-shadow');
    }
});

const blobItems = document.querySelector('.blob-items');
const contentData = [
    ["What could be best way to get feedback from customers?", "Is our inventory tracking system accurate?"],
    ["How can we make ordering easier for customers?", "Is our inventory tracking system accurate?"],
    ["How can we reduce errors between front house & kitchen staff?", "What should we do retain loyal customers?"],
    ["How we can manage menu and food items in real-time?", "How to get sales data to identify trends?"]
];

contentData.forEach((rowContent, rowIndex) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = `blob-item-row d-flex justify-content-${rowIndex === 0 ? 'center' : rowIndex === 1 || rowIndex === 2 ? 'around' : 'evenly'}`;
    rowDiv.id = `blob-item-row-${rowIndex + 1}`;
    
    rowContent.forEach((content, colIndex) => {
        const p = document.createElement('p');
        p.className = 'position-relative d-flex justify-content-center align-items-center';
        p.id = `blob-content-row-${rowIndex + 1}_${colIndex + 1}`;
        p.textContent = content;
        rowDiv.appendChild(p);
    });

    blobItems.appendChild(rowDiv);
});


const carouselItems = [
    {
        active: true,
        title: "Digital Experience",
        color: "#069C47",
        description: "Our application is designed to elevate the customer experience by providing a highly interactive interface.",
        features: [
            "Highly interactive interface",
            "Reducing manual interaction",
            "Real-time updates and notifications"
        ],
        imageSrc: "digital-experience",
        imageAlt: "digital-experience",
    },
    {
        active: false,
        title: "Order Management",
        color: "#BB4986",
        description: "From quick order taking to seamless integration with kitchen display systems, we track everything in real-time.",
        features: [
            "Quick and accurate order taking",
            "Integration with kitchen display systems",
            "Real-time order tracking"
        ],
        imageSrc: "order-management",
        imageAlt: "order-management",
    },
    {
        active: false,
        title: "Food Management",
        color: "#FA4B4B",
        description: "Optimize your food inventory, real time menu modification and control every recipe with our advanced food management features.",
        features: [
            "Manage Inventory",
            "Real time menu modification",
            "Manage Recipe Composition"
        ],
        imageSrc: "food-management",
        imageAlt: "food-management",
    },
    {
        active: false,
        title: "Staff Management",
        color: "#31AADE",
        description: "Manage your staff more efficiently with our comprehensive staff management tools, track time, and integrate wages seamlessly.",
        features: [
            "Easy attendance tracking",
            "KYC and Staff Documents",
            "Wages Calculation"
        ],
        imageSrc: "staff-management",
        imageAlt: "staff-management",
    },
    {
        active: false,
        title: "Data Analytics",
        color: "#DF943D",
        description: "Unlock valuable insights with our powerful data analysis capabilities to make data-driven decisions that enhance your business outcome.",
        features: [
            "Comprehensive sales reports",
            "Customers Data",
            "Performance and trend tracking"
        ],
        imageSrc: "data-analytics",
        imageAlt: "data-analytics",
    }
];

let carouselItem = '';
carouselItems.forEach(item => {
    carouselItem += `
        <div class="carousel-item h-100 position-relative ${item.active ? 'active' : ''}" id="${item.imageSrc}">
            <div class="container-xl position-relative z-1 h-100 d-flex align-items-center justify-content-around">
                <div class="px-sm-4 p-4 col-lg-6 col-12 text-content">
                    <h3 style="color: ${item.color};">${item.title}</h3>
                    <p class="my-sm-5 my-4">${item.description}</p>
                    <ul>
                        ${item.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="carousel-img-wrapper object-fit-contain h-100 px-4 pt-5 col-6 d-lg-flex d-none align-items-end align-items-xxl-center justify-content-center">
                    <img src="assets/images/${item.imageSrc}.png" class="h-100 w-auto" alt="${item.imageAlt}">
                </div>
            </div>
        </div>
    `;
});
document.querySelector('.carousel-inner').innerHTML = carouselItem;



const features = [
                { img: 'food-status.png', title: 'Food Status Tracking' },
                { img: 'orders.png', title: 'Digital Ordering' },
                { img: 'order-tracking.png', title: 'Order Tracking' },
                { img: 'bill.png', title: 'Automated Billing' },
                { img: 'staff.png', title: 'Staff Automation' },
                { img: 'kitchen.png', title: 'Kitchen Display System' },
                { img: 'food.png', title: 'Real-Time Food Monitoring' },
                { img: 'menu.png', title: 'Menu Modifications' },
                { img: 'management.png', title: 'Inventory Management' },
                { img: 'feedback.png', title: 'Customer Feedback' },
                { img: 'loyalty.png', title: 'Loyalty Programs' },
                { img: 'sales.png', title: 'Sales Analytics' }
            ];
let htmlFeatures = "";
features.forEach(feature => {
    htmlFeatures += `
        <div class="card feature-card col-3">
            <div class="card-body feature-card-body">
                <img src="assets/images/${feature.img}" alt="${feature.title}">
                <div class="feature-title">
                    <p class="pt-2">${feature.title}</p>
                </div>
            </div>
        </div>
    `;
})
document.querySelector(".features").innerHTML = htmlFeatures;


const benefits = [
    { title: 'More Productivity', subtitle: 'Overall Productivity', img: 'yellow.svg' },
    { title: 'Increased Growth', subtitle: 'Growth Increased', img: 'green.svg' },
    { title: 'Less Manual Errors', subtitle: 'Reduced in Errors', img: 'red.svg' }
];
let htmlBenefits = "";
benefits.forEach(benefit => {
    htmlBenefits += `<div class="mb-3 benefit-card col-4 col-md-3">
                        <div class="card h-100 justify-content-center d-flex align-items-center">
                            <div class="card-body">
                                <h5>${benefit.title}</h5>
                                <p class="card-text"> ${benefit.subtitle} </p>
                                </div>
                                <img class="my-2 my-sm-4" src="assets/images/${benefit.img}" alt="${benefit.title}">
                        </div>
                    </div>`;
});
document.querySelector(".benefits").innerHTML = htmlBenefits;

const paragraphs = document.querySelectorAll('.blob-items p');
if(window.innerWidth > 767.98) {
    gsap.set(paragraphs, { opacity: 0 });
    let p_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.traditional-section',
            start: "20% 84%",
            end:"20% 10%",
            scrub: 1,
        }
    });
    paragraphs.forEach((p, index) => {
        p_tl.to(p, {
            opacity: 1,
            ease: "none",
            duration: 1.5,
            stagger: 1,
        });
    })
}
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('submitButton', document.contactForm);    
});

function userEmailChecker() {
    var userEmail = document.contactForm.email; 

    var regex = /^[a-zA-Z]([a-zA-Z0-9-_])*(.[a-zA-Z0-9-_])*@[a-zA-Z](([a-zA-Z0-9-_.])*)+.[a-zA-Z]{2,4}$/;

    if (regex.test(userEmail.value)) {
        document.getElementById("email-error").innerHTML = "";
    } else {
        // document.getElementById("email-error").innerHTML = "Entered valid email!";
    }

}