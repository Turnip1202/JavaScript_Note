
// 手写AJAX
function createXMLHttp() {
  let xmlhttp = null;
  //code for IE7，Firefox，Chrome，Opera, Safari
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }
  // code for IE6, IE5
  if (window.ActiveXObject) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (err) {
      if (err) console.log(err);
      else try {
        xmlhttp = new ActiveXObject("msxml2.XMLHTTP");
      } catch (error) {
        if (error) console.log(error);
      }

    }
  }
  return xmlhttp;
}
const xhr = createXMLHttp();
xhr.open("post", 'http://127.0.0.1:3000/turnip', true);
xhr.setRequestHeader('Content-type', 'json');
xhr.send([1, 2, 3]);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}


