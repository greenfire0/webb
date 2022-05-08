window.onload = function () {
    document.getElementById("btn").onclick = function () {
        const string1 = document.querySelector('input').value
        if (string1 != '') {
            var intext = document.createElement("p");
            intext.className = "from-me"

            intext.innerHTML = string1;
            document.querySelector('input').value = ''

            var body1 = document.getElementById("container");
            var body2 = (body1.getElementsByClassName("imessage")[0])
            
            
            body2.appendChild(intext);
            if(string1.includes("brain") || string1.includes("lobe") ||string1.includes("cortex")){
                good_response()
            }
            else{
                bad_response()
            }
        }

    }
    var input = document.getElementById("myInput");

    // Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("btn").click();
        }
    })
}

function good_response(){
    var intext = document.createElement("p");
    intext.className = "from-them"
    const items = ['wow thats so cool',"no way","thats super interesting","thanks for telling me about that","I am super interested in this topic","How cool","the brain is amazing, wow"]
    var item = items[Math.floor(Math.random()*items.length)];
    intext.innerHTML = item;

    var body1 = document.getElementById("container");
    var body2 = (body1.getElementsByClassName("imessage")[0])
    body2.appendChild(intext);
}

function bad_response(){
    var intext = document.createElement("p");
    intext.className = "from-them"

    intext.innerHTML = "can you talk about the brain instead {make sure to use the word brain, lobe, or cortex}";

    var body1 = document.getElementById("container");
    var body2 = (body1.getElementsByClassName("imessage")[0])
    body2.appendChild(intext);
}