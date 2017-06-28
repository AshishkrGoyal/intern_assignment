/**
 * Created by Shivam on 23-06-2017.
 */
var todoList=[];



window.onload = function(){
    var inputValue = document.getElementById('getValue');  //input
    var addTodo = document.getElementById('done');   //button
    var outputValue = document.getElementById('output');
    // var todoList = [];
    addTodo.onclick = function () {
        var value = inputValue.value;
        outputValue.innerHTML='';
        todoList.push({
            "task": value,
            "done": false
        })

        for(var i=0;i<todoList.length;i++){

            outputValue.innerHTML += '<li  onclick="strikeThrough(this)"' + 'id='+ i + '>' + todoList[i].task + '</li>';
        }

    }
};

    function strikeThrough(el) {
        console.log(el.id);

       el.style.textDecoration = 'line-through';

    }