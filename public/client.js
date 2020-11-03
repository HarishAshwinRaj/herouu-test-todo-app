    var d = document.getElementById("in");
    var b = document.getElementById("btn");
    var fetbtn = document.getElementById("fet");
    var show = document.getElementById("show");

    b.addEventListener("click", () => {
        fetch("/api/todos", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    todo: d.value
                })
            })
            .then((data) => data.json())
            .then((data) => console.log(data));
    });
    fetbtn.addEventListener("click", (e) => {

        fetch("/api/todos")
            .then((data) => data.json())
            .then((data) => {
                const f = document.createElement('ul');
                data.map(d => {
                    const g = document.createElement('li');
                    g.innerText = d.todo

                    g.id = d._id.toString()
                    console.log(g.id, "gid")

                    g.onclick = handledelete
                    f.appendChild(g);
                })
                show.firstChild && show.removeChild(show.firstChild);
                show.appendChild(f);

                console.log("fetch btn", data);
            });
    });

    function handledelete(e) {
        console.log("loging ", e.target.id)

        fetch("/api/todos/" + e.target.id, {
            method: 'DELETE'

        })
    }
