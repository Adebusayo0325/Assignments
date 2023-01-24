const taskContainer = document.querySelector(".container");
        let task = document.getElementById("tasks");
        const adder = document.getElementById("add-task");
        adder.addEventListener("click", function() {
            let New = document.createElement("div");
            New.classList.add("new");


            let li = document.createElement("li");
            li.innerText = `${task.value
            }`;

            New.appendChild(li);

            let CheckButton = document.createElement("button");
            CheckButton.innerHtml  = '<i class = "fa-solid  fa-check></i>';
            CheckButton.classList.add("checkTask");

            New.appendChild(CheckButton);

            let deleteButton = document.createElement("button");
            deleteButton.innerHtml = '<i class = "fa-solid  fa-trash-can></i>';
            deleteButton.classList.add("deleteTask");

            New.appendChild(deleteButton);
      

            if (task.value === "") {
                alert("Please enter a Task");
            } else {
                taskContainer.appendChild(New);
                task === "";
            }
                

      

            CheckButton.addEventListener("click", function() {
                CheckButton.parentElement.style.textDecoration = "line-through";

            });

            deleteButton.addEventListener("click", function(e) {
                let target = e.target;

                target.parentElement.remove();
            });

        });