jQuery( function($) {
  var doc = $( document ),
      lastXPos = 0,
      wheel = $( '.wheel' ),
      wheelInner = $( '.wheel_inner div' ),
      lelek = document.getElementById( 'lelek' ),
      notPressed = true;
  
  function movingMouse( e ) {
    if ( notPressed ) {
      return;
    }
    
    var movement = (e.pageX + e.pageY) / 2;
    
    wheel.css({ 
      transform : 'rotate(' + movement  + 'deg)',
      webkitTransform: 'rotate(' + movement + 'deg)'
    });
    
    wheelInner.css({
      transform : 'rotate(-' + movement*2 + 'deg)',
      webkitTransform: 'rotate(-' + movement*2 + 'deg)'
    });
    
    lelek.play();
  }
  
  doc.on( 'mousemove', '.wheel', movingMouse ); 
  doc.on( 'mousedown', '.wheel', function() {
    notPressed = false;
    
    doc.one( 'mouseup', function() {
      notPressed = true;
      lelek.pause();
    });
  });
  
});
