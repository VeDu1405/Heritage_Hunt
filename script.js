
  document.querySelectorAll('.scroll-container').forEach((container) => {
    let isDown = false;
    let startX, scrollLeft;
  
    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('active');
    });
  
    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('active');
    });
  
    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; 
      container.scrollLeft = scrollLeft - walk;
    });
  });
  document.querySelectorAll('area').forEach((area) => {
    area.addEventListener('click', (event) => {
      const stateName = event.target.alt;
      alert(`You clicked on ${stateName}!`);
    });
  });
  