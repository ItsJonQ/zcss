var a = rxs('.rx-height');
var b = rxs('.rx-follow');
var c = rxs('.rx-color');

document.addEventListener('mousemove', function(e) {
  var s = e.screenX / window.innerWidth * 100;
  var l = e.screenY / window.innerHeight * 100;

  a.set({
    background: `hsl(155, ${s}%, ${l}%)`,
  });
  b.set({
    transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)`,
  });
}, false);

bam = function() {
  var s = Math.ceil(window.innerWidth + (window.innerHeight / 2));

  a.set({
    height: `${window.innerHeight}px`,
  });
  c.set({
    background: `hsl(${s}, 50%, 50%)`,
  });
};

window.addEventListener('resize', bam, false);
