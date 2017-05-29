var array = new Array;

    function add() {
        var task = document.getElementById('task').value;
        if (task != "") {
            array.push(task);
            console.log(array);
            document.getElementById('task').value = "";
            show();
        } else {
            alert("Please add a ToDo")
        }
    }

    function remove(id) {
        array.splice(id, 1);
        show();
    }

    function show() {
        document.getElementById("todos").innerHTML = "";
        var todolistContainer = document.getElementById("todos");
        var count = 1;
        var list = '<ul>';
        for (var i = 0; i < array.length; i++) {
            list += '<li>' + count + "-" + array[i] + '<a class="remove" title="Delete" id="' + i + '"">[&#10006]</a></li>';
            count += 1;
        };

        list += '</ul>';
        todolistContainer.insertAdjacentHTML('afterbegin', list);
        console.log(list);
        deleteEvent();
    }

    function deleteEvent() { 
        $(".remove").click(function() {
            remove($(this).attr('id'));
        });
    }