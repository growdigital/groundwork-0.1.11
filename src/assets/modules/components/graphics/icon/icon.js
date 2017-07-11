/* ==========================================================================
   Icon
   ========================================================================== */

/**
 * Cacheable Ajax SVG icons for the win win win
 * Big thanks to Florens Verschelde:
 * https://fvsch.com/code/svg-icons/how-to/#section-sprite
 * Check for SVG support. If it exists, Ajax in svg file into js-svg ID div
 * and add 'svg' class to body and 'icons' class to footer id
 */

var supportsSvg =  document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

if (supportsSvg) {
  // Add svg class to body
  document.body.classList.add("svg");
  var url = "/assets/images/icon.svg"
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200) {
      document.getElementById('js-svg').innerHTML = xhr.responseText;
      // Add icons class to footer
      document.getElementById('footer').classList.add("icons");
    }
  };
  xhr.open('GET', url, true);
  xhr.send(null);
} else {
  document.body.classList.add("no-svg");
}


/**
 * TODO:
 * Apply classes to html rather than body
 * That way, don't have to use id on footer element
 */
