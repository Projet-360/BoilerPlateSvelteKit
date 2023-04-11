<style>
    .scroll-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  
    .scroll-content {
      position: relative;
      transform: translateY(0);
      transition: transform 0.5s ease;
      height: 300vh;
    }
  </style>
  
  <div class="scroll-container">
    <div class="scroll-content">
      <slot/>
    </div>
  </div>
  
  <script>
    const container = document.querySelector('.scroll-container');
    const content = document.querySelector('.scroll-content');
    let scrollPos = 0;
  
    container.addEventListener('scroll', (event) => {
      const newScrollPos = container.scrollTop;
      const delta = newScrollPos - scrollPos;
      content.style.transform = `translateY(${-newScrollPos}px)`;
      scrollPos = newScrollPos;
    });
  </script>
  