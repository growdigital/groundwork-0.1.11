var supportsSvg =  document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

if (supportsSvg) {
  var url = "assets/modules/components/graphics/icon/icon.svg"
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200) {
      document.getElementById('js-svg').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', url, true);
  xhr.send(null);
}
