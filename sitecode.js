/*
    SPACER STUFF
*/
const createVerticalSpacer = function() {
    let new_vertical_spacer = document.createElement("div");
    new_vertical_spacer.setAttribute("class", "generic_vertical_spacer");
    return new_vertical_spacer;
}



/*
    HEADER STUFF
*/
const changeHeaderToSecret = function() {
    const headerElement = document.getElementsByClassName("right")[0];
    console.log("Say hi to debug Alm 🥺");
    headerElement.id = "header_right_secret";
    headerElement.title = "Art credit: Hidari";
}

const determineHeaderSeed = function() {
    let the_date = new Date();
    let seconds_since_epoch = Math.round(the_date.getTime() / 1000);
    let header_seed = Math.floor(seconds_since_epoch / 3600) % 9;
    console.log("The header seed is " + header_seed + ".");
    return header_seed;
}

const createHeaderRight = function() {
    let header_element_right = document.createElement("div");
    header_element_right.setAttribute("class", "right");
    let header_number = determineHeaderSeed();
    
    switch (header_number) {
        case 0:
            header_element_right.setAttribute("id", "header_right_00");
            header_element_right.setAttribute("title", "Art credit: MAJYKKS");
            break;
        case 1:
            header_element_right.setAttribute("id", "header_right_01");
            header_element_right.setAttribute("title", "Photo credit: GuardianGlimmer");
            break;
        case 2:
            header_element_right.setAttribute("id", "header_right_02");
            header_element_right.setAttribute("title", "Art credit: Meronpan");
            break;
        case 3:
            header_element_right.setAttribute("id", "header_right_03");
            header_element_right.setAttribute("title", "Art credit: f0nk (emirulz)");
            break;
        case 4:
            header_element_right.setAttribute("id", "header_right_04");
            header_element_right.setAttribute("title", "Art credit: Lambchopper");
            break;
        case 5:
            header_element_right.setAttribute("id", "header_right_05");
            header_element_right.setAttribute("title", "Art credit: Crank");
            break;
        case 6:
            header_element_right.setAttribute("id", "header_right_06");
            header_element_right.setAttribute("title", "Art credit: Prince Annihilation");
            break;
        case 7:
            header_element_right.setAttribute("id", "header_right_07");
            header_element_right.setAttribute("title", "Photo credit: Mark Glickman. Art credit: Hidari");
            break;
        case 8:
            header_element_right.setAttribute("id", "header_right_08");
            header_element_right.setAttribute("title", "Art credit: Crank");
            break;

    }

    header_element_right.setAttribute("onclick", "changeHeaderToSecret()");

    return header_element_right;
}

const createHeader = function() {
    let header_element = document.getElementById("the_header");
    // Create Zugerujk.net left area
    let zugerujknet_title_text = "Zugerujk.net 😎"
    let header_element_left = document.createElement("div");
    header_element_left.setAttribute("class", "left");
    header_element_left.setAttribute("id", "zugerujknet_title");

    let header_element_left_text = document.createTextNode(zugerujknet_title_text);
    header_element_left.appendChild(header_element_left_text);
    header_element_right = createHeaderRight();

    header_element.before(createVerticalSpacer());
    header_element.append(header_element_left);
    header_element.append(header_element_right);
}



/*
    NAVBAR STUFF
*/
const createNavbarElement = function(text = "blank", link = "") {
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

const createNavbarSpacer = function() {
    let navbar_spacer = document.createElement("div");
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

    // Find the navbar div
    let navbar_master_element = document.getElementById("the_navbar"); // Like the master emerald

    // Append city amirite
    navbar_master_element.append(home_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(blog_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(projects_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(gallery_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(bio_navbar_element);

    // Add Fuster
    fuster_element = createFusterElement();
    navbar_master_element.append(fuster_element);
    
};



/*
    FOOTER STUFF
*/
const createFooter = function() {
    let generic_footer_text = "All rights reserved, Me, 2024. v0.6.3";
    
    // Find the navbar div
    let footer_element = document.getElementById("the_footer");
    
    let footer_element_text = document.createTextNode(generic_footer_text);
    footer_element.after(createVerticalSpacer());
    footer_element.after(createVerticalSpacer());
    footer_element.appendChild(footer_element_text);

};



/*
    THE FULL LOAD
*/
const createElements = function(navbar_blocked_space_arg="") {
    createHeader();
    createNavbar(blocked_space_arg=navbar_blocked_space_arg);
    createFooter();
}



/*
    FUSTER STUFF
*/

const createFusterElement = function() {
    let fuster_element;
    fuster_element = document.createElement("div");
    fuster_element.setAttribute("class", "settings_icon");
    fuster_element.setAttribute("id", "fuster_closed");
    fuster_element.setAttribute("onclick", "fusterOpen()");
    return fuster_element;
}

const fusterOpen = function() {
    let fuster_element = document.getElementsByClassName("settings_icon")[0];
    console.log("Opening Fuster");

    // Change fuster's div ID to appear vastly different
    fuster_element.setAttribute("id", "fuster_open");
    fuster_element.setAttribute("onclick", "fusterClose()");

    // Create an image of fuster within the div
    let fuster_image = document.createElement("div");
    fuster_image.id = "fuster_image";
    fuster_element.append(fuster_image);

    // Add dialogue for fuster, found within the head of the document.
    fuster_dialogue_div = document.createElement("p"); 
    fuster_dialogue_div.setAttribute("id", "fuster_dialogue");
    let fuster_dialogue = "\"Hi!\"";
    try {
        head_text = document.querySelector('meta[name="fuster-dialogue"]').content;
        console.log(head_text);
        fuster_dialogue = "\"" + head_text + "\""
    }
    catch {
        console.log("Issue finding Fuster dialogue - may be null.")
    }
    fuster_dialogue_div.appendChild(document.createTextNode(fuster_dialogue));
    fuster_element.append(fuster_dialogue_div);
}

const fusterClose = function() {
    let fuster_element = document.getElementsByClassName("settings_icon")[0];
    console.log("Resetting Fuster");

    // Inelegant, but hey! Completely wipes fuster, and manually resets him.
    fuster_element.innerHTML = '';
    fuster_element.setAttribute("class", "settings_icon");
    fuster_element.setAttribute("id", "fuster_closed");
    fuster_element.setAttribute("onclick", "fusterOpen()");
}