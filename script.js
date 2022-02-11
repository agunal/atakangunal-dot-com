"use strict";

const emailDiv = document.querySelector(".liam");

const t = "ENCODED_DATA_1";

const aContent = `<a
    href="#"
    data-e="ENCODED_DATA_2"
    onfocus="this.href = 'mailto:' + atob(atob(this.dataset.e))"
>
<span style="unicode-bidi:bidi-override;">${atob(atob(t))}</span>
</a>`;

emailDiv.addEventListener("click", (e) => {
    emailDiv.innerHTML = aContent;
    emailDiv.querySelector("span").style.direction = "rtl";
    emailDiv.setAttribute("tabIndex", 0);
    emailDiv.focus();
});

fetch(
    "http://www.7timer.info/bin/api.pl?lon=-118.24&lat=34.05&product=civillight&output=json"
)
    .then((res) => res.json())
    .then((data) =>
        data.dataseries[0].temp2m.max
            ? document
                  .querySelector(".city")
                  .style.setProperty("--temp", data.dataseries[0].temp2m.max)
            : document.querySelector(".city").style.setProperty("--temp", "")
    );

document.querySelectorAll(".commentary-item").forEach((ci) => {
    ci.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        const a = e.target;
        const bgColor = a.style.backgroundColor;
        a.style.backgroundColor =
            !bgColor || bgColor === "transparent" ? "#3b28cc40" : "transparent";
        const cDisplay = ci.nextElementSibling.style.display;
        ci.nextElementSibling.style.display =
            !cDisplay || cDisplay === "none" ? "block" : "none";
    });
});

document.querySelectorAll(".headline").forEach((h) => {
    h.addEventListener("focusin", (e) => {
        h.firstElementChild.style.color = "#3b28cc55";
    });
    h.addEventListener("focusout", (e) => {
        h.firstElementChild.style.color = "transparent";
    });
    h.addEventListener("mouseenter", (e) => {
        h.firstElementChild.style.color = "#3b28cc55";
    });
    h.addEventListener("mouseleave", (e) => {
        h.firstElementChild.style.color = "transparent";
    });
});

// TODO - change opacity when resume is displayed
// document.querySelector(".resume").addEventListener("mouseenter", (e) => {
//     document.querySelector("main").style.setProperty("--main-bg-opacity", 0.9);
// });
// document.querySelector(".resume").addEventListener("mouseleave", (e) => {
//     document.querySelector("main").style.setProperty("--main-bg-opacity", 1);
// });

//TODO - refactor
document.querySelector(".nav-resume").addEventListener("click", (e) => {
    e.preventDefault();

    const resumeDisp = document.querySelector(".resume").style.display;
    if (resumeDisp === "" || resumeDisp === "none") {
        document
            .querySelector("main")
            .style.setProperty("--main-bg-opacity", 0.9);
        document
            .querySelector("main")
            .style.setProperty("--height-offset", "130px");
        window.scroll({
            top: 130,
            behavior: "smooth",
        });
        document.querySelector(".resume").style.animation = "fade-in 1s";
        document.querySelector(".resume").style.display = "block";
    } else {
        document
            .querySelector("main")
            .style.setProperty("--main-bg-opacity", 1);
        window.scroll({
            top: -130,
            behavior: "smooth",
        });
        document.querySelector(".resume").style.animation = "fade-out 1s";
        setTimeout(() => {
            document.querySelector(".resume").style.display = "none";
            document
                .querySelector("main")
                .style.setProperty("--height-offset", "0px");
        }, 900);
    }
});
