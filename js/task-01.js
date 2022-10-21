let mainList = document.querySelector("#categories");
let listItem = mainList.children;
console.log(`Number of categories: ${listItem.length}`);


let items = document.querySelectorAll(".item");
items.forEach(item => {
    console.log("Category: ", item.querySelector("h2").textContent)
    console.log("Elements" , item.querySelectorAll("li").length)
}
)
let h2 = document.querySelectorAll("h2")




