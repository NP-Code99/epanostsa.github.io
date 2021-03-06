function goToSection(id) {
    if (location.pathname.indexOf("index") != -1 || location.pathname == "/") {
        hidePanel()
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    } else if (location.pathname.indexOf("newsletter") != -1) {
        if (location.pathname.indexOf("github") == -1) location.href = location.pathname + `/../../#${id}`;
        else location.href = location.pathname + `/../../index.html#${id}`;
    } else {
        if (location.pathname.indexOf("github") == -1) location.href = location.pathname + `/../../#${id}`;
        else location.href = location.pathname + `/../index.html#${id}`;
    }
}

function hidePanel() {
    var rollUp = setInterval(() => {
        if (document.getElementById("tabs").clientHeight > 0) {
            document.getElementById("tabs").style.height = document.getElementById("tabs").clientHeight - 20 + 'px';
        } else {
            document.getElementById("tabs").style.display = "none";
            clearInterval(rollUp)
        }
    }, 5);
}

function showPanel() {
    if (document.getElementById("tabs").style.display == "none" || document.getElementById("tabs").style.display == "") {
        document.getElementById("tabs").style.display = "inline";
        var rollDown = setInterval(() => {
            if (document.getElementById("tabs").clientHeight < screen.height) {
                document.getElementById("tabs").style.height = document.getElementById("tabs").clientHeight + 20 + 'px';
            } else {
                clearInterval(rollDown);
            }
        }, 5);
    } else {
        hidePanel();
    }
};

document.addEventListener('click', (event) => {
    if (event.y > 300 && document.getElementById("tabs").style.display == "inline") {
        hidePanel();
    }
})

setInterval(() => {
    if (document.body.clientWidth > 1025) {
        document.getElementById("tabs").style.display = "none";
    }
}, 100)