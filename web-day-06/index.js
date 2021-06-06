/*
const rootEl = document.getElementById("root");

const ul = document.createElement("ul");

data.map((item) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");

  img.src = item.imgUrl;
  h3.innerHTML = item.name;

  li.appendChild(h3);
  li.appendChild(img);

  ul.appendChild(li);
});

rootEl.appendChild(ul);
*/

// https://jsonplaceholder.typicode.com/todos
// Declare necessary variables and functions
const rootEl = document.getElementById("root");
const inputEl = document.querySelector("#inputVal");
const searchBtn = document.querySelector("#searchBtn");
const getDataBtn = document.querySelector("#getDataBtn");
const ulEl = document.createElement("ul");
let data = null;

const renderData = (items) => {
  ulEl.innerHTML = "";
  if (!Array.isArray(items) || items.length === 0) return;

  if (data === null) {
    data = [...items];
  }

  items.map((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.title;
    ulEl.appendChild(li);
  });

  rootEl.append(ulEl);
};

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    renderData(data);
  } catch (error) {
    console.log(error);
  }
};
fetchData();

const searchTerm = (term) => {
  if (!term || term.length === 0) {
    renderData(data);
    return;
  }
  const filterData = data.filter((item) => {
    return item.title.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  });
  renderData(filterData);
};

const handleSearch = () => {
  const term = inputEl.value.trim();
  if (term === "") return;

  // Implement search
  searchTerm(term);

  // Reset
  inputEl.value = "";
};

const debounce = () => {
  let timeId;

  return (term) => {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      console.log(term);
      searchTerm(term);
    }, 200);
  };
};

const debounceFn = debounce();

const handleChange = (e) => {
  const term = e.target.value;
  debounceFn(term);
};

// Add event listener
getDataBtn.addEventListener("click", fetchData);
searchBtn.addEventListener("click", handleSearch);

inputEl.addEventListener("input", handleChange);

// High-order function
let fn = function (x) {
  return function (y) {
    return x + y;
  };
};

const fn1 = fn(5);
// console.log(fn1(2));
