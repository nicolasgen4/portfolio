window.onscroll = () => {
    if (scrollY >= 200 && window.matchMedia("(min-width: 1000px)").matches) {
        document.getElementById("page-up").style.display = "block";
    } else {
        document.getElementById("page-up").style.display = "none";
    }
};

const themeElt = document.getElementById("theme");
let iconeElt = document.getElementById("icone-theme");
let linksElt = document.querySelectorAll("a.link");
let svgsElt = document.querySelectorAll("svg.svg");
let cardsElt = document.querySelectorAll("section.card");
let tagsElt = document.querySelectorAll("strong.tag");
let hrsElt = document.querySelectorAll("hr.hr");

if (document.cookie !== "") {
    actualTheme();
} else {
    createCookieTheme("theme", "dark", 3, "Lax");
}

function createCookieTheme(name, value, hours, sameSite) {
    let expires = "";
    if (hours) {
        let date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    let cookieString = name + "=" + value + expires + "; path=/";
    if (sameSite) {
        cookieString += "; SameSite=" + sameSite;
    }
    document.cookie = cookieString;
}

function switchTheme() {
    if (document.cookie !== "theme=light") {
        lightTheme();
        createCookieTheme("theme", "light", 3, "Lax");
    } else if (document.cookie !== "theme=dark") {
        darkTheme();
        createCookieTheme("theme", "dark", 3, "Lax");
    }
}

function actualTheme() {
    if (document.cookie !== "theme=light") {
        darkTheme();
    } else if (document.cookie !== "theme=dark") {
        lightTheme();
    }
}

function darkTheme() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    iconeElt.src = "public/images/sun.svg";
    linksElt.forEach(linkElt => {
        linkElt.classList.remove("light-link");
        linkElt.classList.add("dark-link");
    });
    svgsElt.forEach(svgElt => {
        svgElt.classList.remove("light-svg");
        svgElt.classList.add("dark-svg");
    });
    cardsElt.forEach(cardElt => {
        cardElt.classList.remove("light-card");
        cardElt.classList.add("dark-card");
    });
    tagsElt.forEach(tagElt => {
        tagElt.classList.remove("light-tag");
        tagElt.classList.add("dark-tag");
    });
    hrsElt.forEach(hrElt => {
        hrElt.classList.remove("light-hr");
        hrElt.classList.add("dark-hr");
    });
}

function lightTheme() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    iconeElt.src = "public/images/moon.svg";
    linksElt.forEach(linkElt => {
        linkElt.classList.remove("dark-link");
        linkElt.classList.add("light-link");
    });
    svgsElt.forEach(svgElt => {
        svgElt.classList.remove("dark-svg");
        svgElt.classList.add("light-svg");
    });
    cardsElt.forEach(cardElt => {
        cardElt.classList.remove("dark-card");
        cardElt.classList.add("light-card");
    });
    tagsElt.forEach(tagElt => {
        tagElt.classList.remove("dark-tag");
        tagElt.classList.add("light-tag");
    });
    hrsElt.forEach(hrElt => {
        hrElt.classList.remove("dark-hr");
        hrElt.classList.add("light-hr");
    });
}

themeElt.addEventListener('click', () => {
    switchTheme();
});
