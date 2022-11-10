function allowDrop(event) {
    event.preventDefault();
  }

function drag(event) {
    console.log("drag event");
    event.dataTransfer.setData("target", event.target.id);
  }

function drop(event) {
    console.log("drop event");
    console.log(event.target);
    event.preventDefault();
    var data = event.dataTransfer.getData("target");
    event.target.appendChild(document.getElementById(data));
  }
