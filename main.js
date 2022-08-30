canvas = document.getElementById("myCanvas")
ctx = canvas.getContext('2d');
mouseEvent = ""
color = "green"
width_of_line = 2
current_position_of_mouse_x = 0
current_position_of_mouse_y = 0
last_position_x = 0
last_position_y = 0

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e){
    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }
        last_position_x = current_position_of_mouse_x;
        last_position_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e)
{
    last_position_x = current_position_of_mouse_x;
    last_position_y = current_position_of_mouse_y;
}
    canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();

        last_position_x = current_position_of_mouse_x;
        last_position_y = current_position_of_mouse_y;
        
    }



