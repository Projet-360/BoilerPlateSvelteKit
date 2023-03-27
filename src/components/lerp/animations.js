export let lerp;
export let box;
export let rotation = 0;
export let scale = 1;
export let path
export let color

export function Animatelerp({ clientX, clientY }) {
    const { offsetWidth, offsetHeight } = lerp;
    const x = clientX - offsetWidth / 2;
    const y = clientY - offsetHeight / 2;
    lerp.style.setProperty(
      'transform', `translate(${x}px, ${y}px) Rotate(${rotation}deg) scale(${scale})`
    );
    lerp.style.setProperty(
      'transform', `translate(${x}px, ${y}px) Rotate(${rotation}deg) scale(${scale})`
    );

    lerp.style.setProperty(
      'transition', `transform .04s linear`
      );
    }


export function Rotate(deg) {
    rotation = deg;
  }
  
  export function Size(size) {
    scale = size;
  }
  
  export function Parallelogram(lerp) {
    lerp.style.setProperty(
      'clip-path', `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`
    );
  }
  
  export function Message(lerp) {
    lerp.style.setProperty(
      'clip-path', `polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)`
    );
  }
  
  export function Trapezoid(lerp) {
    lerp.style.setProperty(
      'clip-path', `polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)`
    );
  }
  
  export function Normal(lerp) {
    rotation = 0;
    scale = 1;
    lerp.style.setProperty(
      'clip-path', `circle(50% at 50% 50%)`
    );
  }
  