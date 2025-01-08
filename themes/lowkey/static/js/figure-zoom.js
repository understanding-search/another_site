console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function() {
  
  function initializeZoomable() {
    const figures = document.querySelectorAll('.zoomable-figure');
    
    figures.forEach((figure, index) => {
      // Remove any existing listeners
      figure.removeEventListener('click', handleZoom);
      // Add new click listener
      figure.addEventListener('click', handleZoom);
    });
  }

  function handleZoom(event) {
    // Prevent zooming if we're already in a zoomed state
    if (document.body.classList.contains('has-expanded-figure')) {
      return;
    }
    
    event.preventDefault();
    event.stopPropagation();

    const figure = event.currentTarget;
    
    const overlay = document.createElement('div');
    overlay.className = 'figure-overlay';
    
    const container = document.createElement('div');
    container.className = 'zoomed-figure-container';
    
    const clone = figure.cloneNode(true);
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
  }

  // Initial setup
  initializeZoomable();

  // Re-initialize if content changes (for dynamic content)
  const observer = new MutationObserver((mutations) => {
    initializeZoomable();
  });
  
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
}); 