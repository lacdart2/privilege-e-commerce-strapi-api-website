

// getting all required elements :

const searchWrapper = document.querySelector(".search-input-box");
const inputBox = searchWrapper.querySelector(".search-input");
const suggestionsBox = searchWrapper.querySelector(".auto-complete");



// if user press any key and release :

inputBox.onkeyup = (e) => {

  let userData = e.target.value;
  console.log(userData);



  let emptyArray = [];

  let suggestions = [
    "White nike",
    "White shoe",
    " Black shoe",
    "Red sneakers",
    "Red Nike",
    "K - Swiss",
    "Nike Air Max",
    " Nike SB",
    "Running",
    "Casual",
  ];
  if (userData) {
    emptyArray = suggestions.filter((data) => {

      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());

    });

    emptyArray = emptyArray.map((data) => {
      return data = "<li>" + data + "</li>";
    });
    console.log(emptyArray);

    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);

    let allList = suggestionsBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      // add onclick event 

      allList[i].setAttribute("onclick", "select(this)");
    }


  } else {
    // hide suggestions 
    searchWrapper.classList.remove("active");
  }

}


function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
  searchWrapper.classList.remove("active");
}



function showSuggestions(list) {
  let listData;

  if (!list.length) {

    let userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";


  } else {

    listData = list.join("")
  }

  suggestionsBox.innerHTML = listData;

}