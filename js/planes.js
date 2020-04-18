// available paper plane models
let planeColors = ["blue", "yellow", "red", "white"];

/**
*   We use this function for generating a single paper plane animated component
*   @color is used to specify what svg model is going to be used.
*   @size is the width value for the paper plane component.
*   @speed if the number of secons that the plane is going to take for crossing from left to right.
*   @position if the y-axis start value of the plane.
*/
function addSvg(color, size, speed, position) {
    let id = Date.now();
    $(".plane-container").append('<div class="single-plane" id="' + id + '" style="width:' + size + 'px; top: ' + position + 'px" ><img src="img/' + color + '-plane.svg" class="svg-plane"/></div>');
    $("#" + id).animate({
            right: -200,
        },
        speed * 1000,
        "linear",
        function() {
            this.remove();
        }
    );
}

/**
*   This functions starts the paper planes animation, adds a new plane every 2.5 seconds
*/
function generatePlaneasAnimation() {
    let colorIndex = Math.floor(Math.random() * 3);
    let widthSize = Math.floor(Math.random() * (75 - 40 + 1) + 40);
    let speed = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let minPosition = 50;
    let maxPosition = $(".plane-container").height() - 100;
    let position = Math.floor(Math.random() * (maxPosition - minPosition + 1) + minPosition);
    addSvg(planeColors[colorIndex], widthSize, speed, position);
    setTimeout(generatePlaneasAnimation, 2500);
}

//Calling the animation function.
generatePlaneasAnimation();


/**
* 
*
*
*
*/
