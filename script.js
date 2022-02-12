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

//TODO - refactor
document.querySelector(".nav-resume").addEventListener("click", (e) => {
    e.preventDefault();
    const screen = window
        .getComputedStyle(document.body)
        .getPropertyValue("--screen-size");

    let mainHeightOffset = "",
        panelHeightOffset = "",
        navTop = "",
        scrollAmount = 0;

    switch (screen) {
        case " big":
            mainHeightOffset = "130px";
            panelHeightOffset = "130px";
            navTop = "130px";
            scrollAmount = 130;
            break;
        case " mid":
            mainHeightOffset = "210px";
            panelHeightOffset = "210px";
            navTop = "0px";
            scrollAmount = 210;
            break;
        case " small":
            mainHeightOffset = "187px";
            panelHeightOffset = "187px";
            navTop = "0px";
            scrollAmount = 210;
            break;

        default:
            break;
    }

    const resumeDisp = document.querySelector(".resume").style.display;
    if (resumeDisp === "" || resumeDisp === "none") {
        document.querySelector("nav").style.top = navTop;
        document
            .querySelector("main")
            .style.setProperty("--main-bg-opacity", 0.9);
        document
            .querySelector("main")
            .style.setProperty("--main-height-offset", mainHeightOffset);
        document
            .querySelector("main")
            .style.setProperty("--panel-height-offset", panelHeightOffset);
        window.scroll({
            top: scrollAmount,
            behavior: "smooth",
        });
        document.querySelector(".resume").style.animation = "fade-in 1s";
        document.querySelector(".resume").style.display = "block";
    } else {
        document
            .querySelector("main")
            .style.setProperty("--main-bg-opacity", 1);
        window.scroll({
            top: -scrollAmount,
            behavior: "smooth",
        });
        document.querySelector(".resume").style.animation = "fade-out 1s";
        setTimeout(() => {
            document.querySelector(".resume").style.display = "none";
            document
                .querySelector("main")
                .style.setProperty("--main-height-offset", "0px");
            document
                .querySelector("main")
                .style.setProperty("--panel-height-offset", "0px");
        }, 900);
    }
});
