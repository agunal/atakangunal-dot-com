let loaded = false;

fetch(
    "http://www.7timer.info/bin/api.pl?lon=-118.24&lat=34.05&product=civillight&output=json"
)
    .then((res) => res.json())
    .then((data) => {
        let temp = data.dataseries[0].temp2m.max
            ? data.dataseries[0].temp2m.max
            : "";
        if (loaded) {
            document.querySelector(".city").style.setProperty("--temp", temp);
            document.querySelector(".city").classList.add("loaded");
        }
    });

window.addEventListener("load", () => {
    loaded = true;
});
