function openNav() {
	document.getElementById('mainsidebar').style.width = "250px";
}

function closeNav() {
	document.getElementById('mainsidebar').style.width = "0";
}

function search_crystal() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('crystals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function testResults (form) {
    var inputValue = form.inputbox.value;
    alert ("Your favorite crystal is: " + inputValue);
}

var i = 0; /* this is the start point */
      var images = []; /* empty array */
      var time = 3000; /* 3s interval */

      /*image list*/

      images[0] = 'jadegemstone.jpg';
      images[1] = 'opalimg.jpg';
      images[2] = 'malachite.jpg';
      images[3] = 'amethyst3.jpg';
      images[4] = 'tourmaline.jpg';

      /*change the image*/

      function changeImg() {
        document.slide.src = images[i];

        if(i < images.length - 1)
        {
          i++
        } else {
          i = 0;
        }

        setTimeout("changeImg()", time)
      }

      window.onload = changeImg;

      function changeFont() {
  document.getElementById("change-the-font").style.fontFamily = "Impact,Charcoal,sans-serif";
}

function increaseFont() {
  document.getElementById("fontsize").style.fontSize = "x-large";
}

function setBgColor() {
  document.body.style.backgroundColor = "pink";
}

function feedback() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("number").value;

  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Not Valid, please enter a number";
  } else {
    text = "Thank you :)";
  }
  document.getElementById("feedbackp").innerHTML = text;
}
/* isnan means is not a number, if statement : if x (input) is not a num, less than one or more than 10, it will be recognised as invalid*/

function enterFeedback() {
  var x = document.getElementById("textfeedback").value;
  document.getElementById("feedbackEnter").innerHTML = x;
}
