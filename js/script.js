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
    }
});