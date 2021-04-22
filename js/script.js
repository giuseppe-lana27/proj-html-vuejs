var app = new Vue({
    el: '#app',
    data:{
        navLinks:{
            home: {
                name: "Home",
            },
            pages: {
                name: "Pages",
            },
            courses: {
                name: "Courses",
            },
            features: {
                name: "Features",
            },
            blog: {
                name: "Blog",
            },
            shop: {
                name: "Shop",
            },
        },
        language:{
            de:{
                name: "Deutsch",
                image: "img/de.png",
            },
            fr:{
                name: "Francais",
                image: "img/fr.png",
            }
        },
        exploreSection:{
            firstCard:{
                img: "img/home-business-service-slide-01-480x298.jpg",
                title: "Consultative Training",
                paragraph: "With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.",
            },
            secondCard: {
                img: "img/home-business-service-slide-02-480x298.jpg",
                title: "Real Deal Coaching",
                paragraph: "Brings an exceptionally powerful opportunity. Being able to accept to work with that opportunity.",
            },
            thirdCard: {
                img: "img/home-business-service-slide-03-480x298.jpg",
                title: "Advisor Training Program",
                paragraph: "Getting high quality, entrepreneur mindset driven online business coaching, is what is needed."

            }          
        },
        exploreLinks:{
            start: {
                name: "Start Here",
            },
            blog:{
                name: "Blog",
            },
            about:{
                name: "About Us",
            },
            success:{
                name: "Success Story",
            },
            courses:{
                name: "Courses",
            },
            contact:{
                name: "Contact Us",
            }
        },
        informationList:{
            members:{
                name: "Membership",
            },
            purchase:{
                name: "Purchase Guide",
            },
            privacy:{
                name: "Privacy Policy",
            },
            terms:{
                name: "Terms of service"
            },            
        },
    },
});