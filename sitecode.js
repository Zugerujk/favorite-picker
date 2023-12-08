/*
    SPACER STUFF
*/
let createVerticalSpacer = function() {
    const new_vertical_spacer = document.createElement("div");
    new_vertical_spacer.setAttribute("class", "generic_vertical_spacer");
    return new_vertical_spacer;
}



/*
    HEADER STUFF
*/
let changeHeaderToSecret = function() {
    const headerElement = document.getElementsByClassName("right")[0];
    console.log("Say hi to debug Alm 🥺");
    headerElement.id = "header_right_secret";
}

let determineHeaderSeed = function() {
    let the_date = new Date();
    let seconds_since_epoch = Math.round(the_date.getTime() / 1000);
    let header_seed = Math.floor(seconds_since_epoch / 3600) % 8;
    console.log("The header seed is " + header_seed + ".");
    return header_seed;
}

let createHeaderRight = function() {
    const header_element_right = document.createElement("div");
    header_element_right.setAttribute("class", "right");
    let header_number = determineHeaderSeed();
    
    switch (header_number) {
        case 0:
            header_element_right.setAttribute("id", "header_right_00");
            break;
        case 1:
            header_element_right.setAttribute("id", "header_right_01");
            break;
        case 2:
            header_element_right.setAttribute("id", "header_right_02");
            break;
        case 3:
            header_element_right.setAttribute("id", "header_right_03");
            break;
        case 4:
            header_element_right.setAttribute("id", "header_right_04");
            break;
        case 5:
            header_element_right.setAttribute("id", "header_right_05");
            break;
        case 6:
            header_element_right.setAttribute("id", "header_right_06");
            break;
        case 7:
            header_element_right.setAttribute("id", "header_right_07");
            break;

    }

    header_element_right.setAttribute("onclick", "changeHeaderToSecret()");

    return header_element_right;
}

let createHeader = function() {
    const headerElement = document.getElementById("the_header");
    // Create Zugerujk.net left area
    let zugerujknet_title_text = "Zugerujk.net 😎"
    const header_element_left = document.createElement("div");
    header_element_left.setAttribute("class", "left");
    header_element_left.setAttribute("id", "zugerujknet_title");

    const header_element_left_text = document.createTextNode(zugerujknet_title_text);
    header_element_left.appendChild(header_element_left_text);
    header_element_right = createHeaderRight();

    headerElement.before(createVerticalSpacer());
    headerElement.append(header_element_left);
    headerElement.append(header_element_right);
}



/*
    NAVBAR STUFF
*/
let createNavbarElement = function(text = "blank", link = "") {
    let navbar_element;
    if (link == "") {  // A blocked navbar element
        navbar_element = document.createElement("div");
        navbar_element.setAttribute("class", "selected_upper_navbar_element");
    }
    else {  // A normal navbar element
        navbar_element = document.createElement("a");
        navbar_element.setAttribute("class", "upper_navbar_element");
        navbar_element.setAttribute("href", link)
    };

    const navbar_element_text = document.createTextNode(text);
    navbar_element.appendChild(navbar_element_text);

    return navbar_element;
};

let createNavbarSpacer = function() {
    const navbar_spacer = document.createElement("div");
    navbar_spacer.setAttribute("class", "upper_navbar_spacer");

    return navbar_spacer;
};

// To create a navbar (so cool, so easy!)
const createNavbar = function(blocked_space_arg = "") {
    // Establish the hyperlinks
    let home_link = "https://zugerujk.net/index.html";
    let blog_link = "https://zugerujk.net/blog.html";
    let projects_link = "https://zugerujk.net/projects.html";
    let gallery_link = "https://zugerujk.net/gallery.html";
    let bio_link = "https://zugerujk.net/bio.html";

    switch(blocked_space_arg) {
        case "home":
            home_link = "";
            break;
        case "blog":
            blog_link = "";
            break;
        case "projects":
            projects_link = "";
            break;
        case "gallery":
            gallery_link = "";
            break;
        case "bio":
            bio_link = "";
            break;
    }

    // Create "home"
    home_navbar_element = createNavbarElement("Home", home_link);
    blog_navbar_element = createNavbarElement("Blog", blog_link);
    projects_navbar_element = createNavbarElement("Projects", projects_link);
    gallery_navbar_element = createNavbarElement("Gallery", gallery_link);
    bio_navbar_element = createNavbarElement("About", bio_link);

    // Create the spacer
    spacer1 = createNavbarSpacer();
    spacer2 = createNavbarSpacer();
    spacer3 = createNavbarSpacer();
    spacer4 = createNavbarSpacer();

    // Find the navbar div
    const navbarMasterElement = document.getElementById("the_navbar"); // Like the master emerald

    // Append city amirite
    navbarMasterElement.append(home_navbar_element);
    navbarMasterElement.append(spacer1);
    navbarMasterElement.append(blog_navbar_element);
    navbarMasterElement.append(spacer2);
    navbarMasterElement.append(projects_navbar_element);
    navbarMasterElement.append(spacer3);
    navbarMasterElement.append(gallery_navbar_element);
    navbarMasterElement.append(spacer4);
    navbarMasterElement.append(bio_navbar_element);
};



/*
    FOOTER STUFF
*/
const createFooter = function() {
    let generic_footer_text = "v1.0";
    
    // Find the navbar div
    const footerElement = document.getElementById("the_footer");
    
    const navbar_element_text = document.createTextNode(generic_footer_text);
    footerElement.after(createVerticalSpacer());
    footerElement.after(createVerticalSpacer());
    footerElement.appendChild(navbar_element_text);
    
};



/*
    THE FULL LOAD
*/
const createElements = function(navbar_blocked_space_arg="") {
    createHeader();
    createNavbar(blocked_space_arg=navbar_blocked_space_arg);
    createFooter();
}


