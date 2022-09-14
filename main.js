x = 150;
y = 150;
clock = document.getElementById("canvas");
ctx = clock.getContext("2d");

function loop() {
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    ctx.beginPath();
    ctx.fillStyle = "#e0fbfc ";
    ctx.arc(x, y, 140, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.strokeStyle = "#293241";
    ctx.lineWidth = 10;
    ctx.stroke();
    brojevi();


    kazaljke(360 * (h / 12) + (m / 60) * 30 - 90, 80, "#293241", 5);
    kazaljke(360 * (m / 60) + (s / 60) * 6 - 90, 120, "#293241", 5);
    kazaljke(360 * (s / 60) + x - 90, 120, "red", 2);
}

function brojevi() {
    for (n = 0; n < 12; n++) {
        d = -60;
        num = new Number(n + 1);
        str = num.toString();
        dd = Math.PI / 180 * (d + n * 30);
        tx = Math.cos(dd) * 120 + 140;
        ty = Math.sin(dd) * 120 + 160;
        ctx.font = "26px Ariel";
        ctx.fillStyle = "black";
        ctx.fillText(str, tx, ty);
    }
}

function kazaljke(deg, len, color, w) {
    rad = (Math.PI / 180 * deg);
    x1 = x + Math.cos(rad) * len;
    y1 = y + Math.sin(rad) * len;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = w;
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}


setInterval(loop, 500);