document.addEventListener('DOMContentLoaded', function() {
  const figures = document.querySelectorAll('.zoomable-figure');
  console.log('Found', figures.length, 'zoomable figures');
  
  figures.forEach(figure => {
    figure.addEventListener('click', function() {
      console.log('Figure clicked');
      const overlay = document.createElement('div');
      overlay.className = 'figure-overlay';
      
      const container = document.createElement('div');
      container.className = 'zoomed-figure-container';
      
      const clone = this.cloneNode(true);
      clone.classList.add('zoomed');
      
      container.appendChild(clone);
      overlay.appendChild(container);
      
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
          document.body.classList.remove('has-expanded-figure');
        }
      });
      
      document.body.appendChild(overlay);
      document.body.classList.add('has-expanded-figure');
    });
  });
}); 