window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Variables
    let painting = false;

    function StartPosition(e) {
        painting = true;
        Draw(e);
    }

    function FinishPosition() {
        painting = false;
        ctx.beginPath();
    }

    function Draw(e) {
        if (!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "red";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //EventListeners
    canvas.addEventListener('mousedown', StartPosition)
    canvas.addEventListener('mouseup', FinishPosition)
    canvas.addEventListener('mousemove', Draw)
});