/* Sample usage do not modify */
const input = document.querySelector('#myTodo');
const btn = document.querySelector('#addTodo');
const ul = document.querySelector('#repos-list');
const closeT = document.getElementsByClassName('close');
let li ;
let t;
let newTodo;
let todoList =[];
btn.addEventListener('click',async (e) =>{
    e.preventDefault();

    li= document.createElement('li');
    newTodo = input.value;
    t = document.createTextNode(newTodo);
    li.appendChild(t);
    if (newTodo === '') {
        alert("You must add a new todo!");
      } else {
        ul.appendChild(li);

      }
      input.value = "";
    
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
      // for (const k in closeT){
      //   closeT[k].onclick = () =>{
         
      //     console.log(this.parentElement,'clicking');
      //   };
      // }

         for (i = 0; i < closeT.length; i++) {
           closeT[i].onclick = function() {
            console.log(this.parentElement);
              let div = this.parentElement;
             div.style.display = "none";

           }
        }
});

ul.addEventListener('click',(e) =>{
if (e.target.tagName ==='LI'){
    e.target.classList.toggle('checked');
    console.lo
}

},false)

