console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  
  function initializeZoomable() {
    const figures = document.querySelectorAll('.zoomable-figure');
    console.log('Searching for figures...');
    console.log('Found', figures.length, 'zoomable figures:', figures);
    
    figures.forEach((figure, index) => {
      console.log(`Setting up figure ${index}:`, figure);
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
    
    console.log('Zoom handler called');
    console.log('Event:', event);
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
    
    event.preventDefault();
    event.stopPropagation();

    const figure = event.currentTarget;
    console.log('Creating overlay for figure:', figure);
    
    const overlay = document.createElement('div');
    overlay.className = 'figure-overlay';
    
    const container = document.createElement('div');
    container.className = 'zoomed-figure-container';
    
    const clone = figure.cloneNode(true);
    clone.classList.add('zoomed');
    
    container.appendChild(clone);
    overlay.appendChild(container);
    
    overlay.addEventListener('click', function(e) {
      console.log('Overlay clicked');
      if (e.target === overlay) {
        console.log('Removing overlay');
        document.body.removeChild(overlay);
        document.body.classList.remove('has-expanded-figure');
      }
    });
    
    console.log('Appending overlay to body');
    document.body.appendChild(overlay);
    document.body.classList.add('has-expanded-figure');
  }

  // Initial setup
  console.log('Running initial setup');
  initializeZoomable();

  // Re-initialize if content changes (for dynamic content)
  console.log('Setting up MutationObserver');
  const observer = new MutationObserver((mutations) => {
    console.log('Mutation observed:', mutations);
    initializeZoomable();
  });
  
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
  console.log('Setup complete');
}); 