//Delete Row when Delete button is clicked
//It works when button is clicked twice

let d = document.getElementsByClassName("delete");

        for(let i = 0; i < d.length; i++) {
            d[i].addEventListener("click", () => {
               let list = document.getElementById("table-body");
               list.removeChild(list.childNodes[i]);
            });
        }
        