document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Hiii", "FROM", "WEBDEVELOPER", "AVINASH MAURYA"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

// 

document.addEventListener("DOMContentLoaded", function() {
    // Get the element to reveal
    const revealingText = document.getElementById("revealingText");

    // Function to check if the element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to reveal the text
    function revealText() {
      revealingText.style.opacity = 1;
    }

    // Function to hide the text
    function hideText() {
      revealingText.style.opacity = 0;
    }

    // Function to handle scroll events
    function handleScroll() {
      if (isElementInViewport(revealingText)) {
        setTimeout(revealText, 1000); // Increase the delay by 2 seconds
      } 
    }

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);
  });

//   skill item ke liye

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("skillcol");
    const container = document.querySelector("#skills");

    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;

      // Adjust the threshold value based on when you want the text to start appearing
      const threshold = container.offsetTop - window.innerHeight / 2;

      if (scrollPosition > threshold) {
        textElement.style.left = "0%"; // Adjust the value to position the text as needed
        textElement.classList.remove("hidden");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("skillcor");
    const container = document.querySelector("#skills");

    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;

      // Adjust the threshold value based on when you want the text to start appearing
      const threshold = container.offsetTop - window.innerHeight / 2;

      if (scrollPosition > threshold) {
        textElement.style.right = "0%"; // Adjust the value to position the text as needed
        textElement.classList.remove("hidden");
      }
    });
  });

//   test
 const skilliElements = document.querySelectorAll('.skilli');

  // Add event listeners to each skilli element
  skilliElements.forEach(skilliElement => {
    skilliElement.addEventListener('mouseenter', () => {
      // Scale and reduce opacity on hover
      skilliElement.style.transform = 'rotateY(180deg) scale(1)';
      skilliElement.style.opacity = '1';

      // Apply inverse to siblings
      skilliElements.forEach(sibling => {
        if (sibling !== skilliElement) {
          sibling.style.transform = 'scale(0.7)';
          sibling.style.opacity = '0.7';
        }
      });
    });

    skilliElement.addEventListener('mouseleave', () => {
        // Reset styles on mouse leave for all skilli elements
        skilliElements.forEach(element => {
          element.style.transform = 'rotateY(0deg) scale(1)';
          element.style.opacity = '1';
        });
  });
});


// circle inner text coding

let p1=document.querySelector(".dot1");
let p2=document.querySelector(".dot2");
let p3=document.querySelector(".dot3");
let p4=document.querySelector(".dot4");

let pI=document.querySelector("#inside");

p1.addEventListener("click", () =>{
    pI.innerHTML=" I HAVE COMPLETED MY  HIGH SCHOOLING FROM<BR> <B>ST.MARYS CONVENT SCHOOL<BR></B> IN YEAR 2020 I SECURED TOTAL OF 94% IN BOARD EXAM  "
});
p2.addEventListener("click", () =>{
  pI.innerHTML="I HAVE COMPLETED MY INTERMEDIATE FROM<BR><B>ST.MARYS'S CONVENT SCHOOL<BR></B>IN YEAR 2022 I SECURED TOTAL OF 88% IN BOARD EXAM "
});

p3.addEventListener("click", () =>{
  pI.innerHTML="I HAVE SECURED 95% IN JEE MAINS AND GOT CSE BRANCH IN  <BR> <B>MADAN MOHAN MALVIYA UNIVERISTY OF TECHNOLOGY </B> <BR> IN YEAR 2023 "
});
p4.addEventListener("click", () =>{
  pI.innerHTML="I AM STILL IN THE PHASE OF LEARNING AND STILL GROWING MY SKILLS ,  IT WILL TAKE TIME BUT I AM SURE I WILL REACH THERE............"
});


