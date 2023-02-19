const app = document.getElementById('typewriter')
;

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('Gruta Virgen de Lourdes')
    .pauseFor(200)
    .start();