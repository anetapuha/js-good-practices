var MenuStyler = (function(){

  function applyCSS(el, styles) {
    for (var prop in styles) {
      if (!styles.hasOwnProperty || styles.hasOwnProperty(prop)) {
        el.style[prop] = styles[prop];
      }
    }
    return el;
  }
  function _init(menuItems) {
      for (let index = 0; index < menuItems.length; index++) {
       applyCSS(menuItems[index], {
         color: 'red',
         backgroundColor: 'blue',
         border: '2px solid #000',
         paddingLeft: '3px',
         marginTop: '3px',
         fontSize: '1.2em',
         fontStyle: 'italic',
       });
      }   
  };

  return {
    init: function() {
      let menuItems = document.getElementsByTagName('li');
      _init(menuItems);
    }
  }

})();

