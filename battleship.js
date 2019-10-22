var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementsById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        call.setAttribute("class","hit")
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class","miss")
    }
};