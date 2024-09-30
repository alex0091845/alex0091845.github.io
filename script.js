const contentContainer = document.querySelector("#content-container");

const loadPost = (event, url) => {
    document.title = event.target.innerHTML;
    const ul = event.target.parentNode;

    for (const li of ul.children) {
        if (li === event.target) {
            li.style.color = "lightblue";
            li.style.listStyleType = ">";
        } else {
            li.style.color = "white";
            li.style.listStyleType = "";
        }
    }

    fetch(url)
    .then((res) => {
        if (res.ok) return res.text();
    })
    .then((postHtml) => {
        contentContainer.innerHTML = postHtml;
    })
};

const func = () => {
    document.getElementById("chapter-1").parentNode.children[1].children[0].click();
}

window.onload = func();