import home from "./home.kathvec1.js";
import schedule from "./schedule.3jrcoiu3.js";
import contact from "./contact.iz60h96g.js";

const routes = {
    "/": { title: "Clash Mini World Cup 2023", render: home },
    "/schedule": { title: "Clash Mini World Cup 2023 schedule", render: schedule },
    "/schedule/": { title: "Clash Mini World Cup 2023 schedule", render: schedule },
    "/contact": { title: "Clash Mini World Cup 2023 Contact Staff", render: contact }, //unsed, contact with the staff
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", " ", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);