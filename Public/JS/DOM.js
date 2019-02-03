const imglink = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
const querySelectors = (selectorsName, typeofQuerySelector) => {
    if (selectorsName.length !== typeofQuerySelector.length) return "Error";
    let elements = {};
    typeofQuerySelector.map(
        (e, i) => (elements[selectorsName[i]] = document.querySelector(e))
    );
    return elements;
}
selectorsName = [
    "conatnt",
    "searchButton",
    "contant",
    "searchInput",
    "popularButton",
    "topRatedButton",
    "homePage"
];
classesName = [
    ".contant",
    ".header--navbar--search",
    ".contant",
    ".header--navbar--input",
    ".header--navbar--popular",
    ".header--navbar--topRated",
    ".header--navbar--homePage"
]
const {
    conatnt,
    searchButton,
    contant,
    searchInput,
    popularButton,
    topRatedButton,
    homePage,
} = querySelectors(selectorsName, classesName)
homePage.addEventListener("click", function () {
    conatnt.innerHTML = "";
});
function eventListener(button, callback, object, head) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        conatnt.innerHTML = "";
        const headTitle = document.createElement("h1")
        headTitle.classList.add("headTitle")
        headTitle.innerText = head;
        conatnt.appendChild(headTitle);
        callback(object, render)
    })
}
const objPop = { pop: "POP" };
const objTop = { top: "TOP" };
eventListener(popularButton, call, objPop, "Popular");
eventListener(topRatedButton, call, objTop, "Top Rated");
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    conatnt.innerHTML = "";
    const value = searchInput.value;
    const obj = {};
    obj[name] = value;
    call(obj, render);
})
function makeNodes(nodesName, nodesType) {
    if (nodesName.length !== nodesType.length) return 'Error';
    const nodes = {}
    nodesName.forEach((name, index) => nodes[name] = document.createElement(nodesType[index]));
    return nodes;
}
function render(result) {
    result.forEach((contant) => {
        const { cardsDiv } = makeNodes(["cardsDiv"], ["div"])
        cardsDiv.classList.add("cards")
        cardsDiv.addEventListener("click", (e) => {
            e.preventDefault();
            conatnt.innerHTML = "";
            const { cardsDiv2 } = makeNodes(["cardsDiv2"], ["div"])
            cardsDiv2.classList.add("cards")
            nodeName = ["vote", "img", "title", "date", "descrption"];
            nodeType = ["div", "img", "p", "h3", "p"];
            const nodeArray = Object.values(makeNodes(nodeName, nodeType));
            nodeArray.forEach((element, index) => {
                cardsDiv2.appendChild(element);
                if (element.nodeName === "IMG") {
                    element.src = imglink + contant[nodeName[index]];
                } else {
                    element.innerText = contant[nodeName[index]];
                }
            })
            conatnt.appendChild(cardsDiv2);
        })
        nodesName = ["vote", "img", "title", "date"];
        nodesType = ["div", "img", "p", "h3"];
        const nodes = makeNodes(nodesName, nodesType);
        const nodesArray = Object.values(nodes);
        nodesArray.forEach((element, index) => {
            if (element.nodeName === "IMG") {
                element.src = imglink + contant[nodesName[index]];
            } else {
                element.innerText = contant[nodesName[index]];
            }
        })
        for (let i = 0; i < nodesArray.length; i++) {
            cardsDiv.appendChild(nodesArray[i]);
            conatnt.appendChild(cardsDiv);
        }
    })
}
