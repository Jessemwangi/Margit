'use strict';
/* Sample usage do not modify */

const input = document.querySelector('#myTodo');
const btn = document.querySelector('#addTodo');
const ul = document.querySelector('#repos-list');
const closeT = document.getElementsByClassName('close');
let li;
let i;
let t;
let newTodo;
let todoList = [];

const renderdata = () => {
  ul.innerHTML = "";
  todoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : new ['empty']();
  todoList.forEach(elem => {
    li = document.createElement('li');
    t = document.createTextNode(elem.key);

    if (elem.value == true) {
      li.classList.add('checked');
    }

    li.appendChild(t);
    ul.appendChild(li); //span start

    let span = document.createElement("SPAN");
    span.className = "close";
    li.appendChild(span); //span ends
    //delete todos

    for (i = 0; i < closeT.length; i++) {
      closeT[i].onclick = function (e) {
        console.log('clicked');
        let div = this.parentElement;
        let deltodo = div.textContent;
        console.log(todoList); // console.log(todoList.findIndex(item =>item.key ==deltodo));

        todoList.splice(todoList.findIndex(item => item.key == deltodo), 1);
        localStorage.setItem('todos', JSON.stringify(todoList));
        div.style.display = "none";
        renderdata();
      };
    }
  });
};

btn.addEventListener('click', e => {
  e.preventDefault();
  newTodo = input.value;

  if (newTodo === '') {
    alert("You must add a new todo!");
  } else {
    todoList.push({
      key: newTodo,
      value: false
    });
    localStorage.setItem('todos', JSON.stringify(todoList));
  }

  input.value = "";
  renderdata();
}); // update array on every click and also update localstorage

ul.addEventListener('click', (e, index) => {
  if (e.target.tagName === 'LI') {
    let li = e.target.tagName;
    e.target.classList.toggle('checked'); // console.log(li,e.target.textContent);

    let checkeditem = todoList.findIndex(item => item.key == e.target.textContent);

    if (todoList[checkeditem].value == false) {
      todoList[checkeditem] = { ...todoList[checkeditem],
        value: true
      };
    } else {
      todoList[checkeditem] = { ...todoList[checkeditem],
        value: false
      };
    }

    localStorage.setItem('todos', JSON.stringify(todoList));
  }
}, false);
renderdata();