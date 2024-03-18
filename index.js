// let bagItem = [];
// displayItemOnHomePage();

// function addToBag(item){
//     bagItem.push(item);
// }

// function displayItemOnHomePage() {
//     let itemsContainerElement = document.querySelector('.items-container');

//     let innerHtml = '';
//     item.forEach(item => {
    
//         innerHtml += `<div class="item-container">
//         <img class="item-image" src="${item.item_image}" alt="item image" style="height: ;">
//         <div class="rating">
//             4.5 | ${item.rating.noOfReviews}
//         </div>
//         <div class="company-name">${item.company_name}</div>
//         <div class="item-name">${item.company_name}</div>
//         <div class="price">
//             <span class="current-price">Rs ${item.current_Price}</span>
//             <span class="original-price">Rs ${item.origin_Price}</span>
//             <span class="discount">(${item.discount_percentage}% OFF)</span>
//         </div>
//         <button class="btn-add-bag" onclick="addToBag(${item})">ADD to Bag</button>
//         </div>`
//     });
//     itemsContainerElement.innerHTML = innerHtml;
// }

// function addItemToCart() {
//     var bagIcon = document.getElementById("BagIcon");
    
//     // Check if the count has already been added
//     var countElement = 1;//bagIcon.querySelector(".count");
//     if (countElement) {
//         // If the count element exists, you don't need to do anything
//         // or you can update it to 1 if necessary
//         countElement.textContent = "1";
//     } else {
//         // If the count element doesn't exist, create it and set the count to 1
//         var countElement = document.createElement("span");
//         countElement.className = "count";
//         countElement.textContent = "1";
//         bagIcon.appendChild(countElement);
//     }
// }

function addItemToCart(button) {
    var itemCount = document.getElementById("ItemCount");

    // Check if the count has already been added
    if (itemCount==0){
        let count=1;
        itemCount.textContent = count.toString();
        button.textContent = "Added Item";
        var showCount = document.getElementById("ItemCount");
        showCount.style.display = "block";
    }else{
    if (itemCount) {
        // If the count element exists, you can update it
        var currentCount = parseInt(itemCount.textContent, 10);
        itemCount.textContent = (currentCount + 1).toString();
        button.textContent = "Added Item";   
    }
}
}






