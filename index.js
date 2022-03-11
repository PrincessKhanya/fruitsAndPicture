
let fruitHolder  = [{ fruitName: "Grapes", icon: "🍇" },{ fruitName: "Melon", icon: "🍈" }, { fruitName: "Watermelon", icon: "🍉" }, { fruitName: "Tangerine", icon: "🍊" },{ fruitName: "Lemon", icon: "🍋" }, { fruitName: "Banana", icon: "🍌" }, {fruitName: "Pineapple", icon: "🍍" },{ fruitName: "Mango", icon: "🥭" }, { fruitName: "Red Apple", icon: "🍎" }];

if (localStorage['fruitHolder']) {
    fruitHolder = JSON.parse(localStorage.getItem('fruitHolder'))
}

function displayFruits(){
    let text = "<ul>";
    for (let i = 0; i < fruitHolder.length; i++) {
        text += "<li>" + fruitHolder[i].fruitName+ " "+ fruitHolder[i].icon + "</li>";
    }
    text += "</ul>";
    return text
}

document.getElementById("demo").innerHTML = displayFruits();

const testBtn=document.querySelector('.testBtn');
const test = document.querySelector('.test');

testBtn.addEventListener("click",()=>{searchFruit();});

function searchFruit(){
    let inputSearch = document.getElementById('inputSearch').value.toUpperCase();
    
    for (let i = 0; i < fruitHolder.length; i++) {
        let x = fruitHolder[i].fruitName.toUpperCase(); 
        if(x===inputSearch){
            test.innerHTML=fruitHolder[i].icon
            test.style.height="150px"
            test.style.width="150px"
            {break;}
        }
        else if(x!=inputSearch){
            test.innerHTML="The word you entered in not in th fruit list, try again"
            test.style.height="150px"
            test.style.width="150px"
        }
        console.log(fruitHolder[i].fruitName)
    }
}

const sortBtn=document.querySelector(".sortBtn");

sortBtn.addEventListener("click",()=>{sortingFruit();});

function sortingFruit(){
    let fruitHolderMap=fruitHolder.map(function (obj) {
        return obj.fruitName + " " + obj.icon
    });
    let sortedfruitNames= fruitHolderMap.sort()
    let text = "<ul>";
    for (let i = 0; i < sortedfruitNames.length; i++) {
        text += "<li>" + sortedfruitNames[i]+ "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text
}











