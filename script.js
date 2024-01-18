gsap.set(".box", {
    opacity:0,
    background:"brown",
});
gsap.to(".box",{
    opacity:1,
    background:"green",
    duration: 3,
    y:250,
    x: - 320,
    repeat:-1,
    yoyo:true,
});