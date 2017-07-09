function solve() {
 return function (element) { 
     
     var 
       elementId,
       elements,
       len,
       i,
       targetButton,
       next,
       content;


     if (typeof (element) !== 'string' && !(element instanceof HTMLElement)) {
          throw new Error();
        }
        
     elementId=document.getElementById(element);

   if (elementId===null) {
       throw new Error();
   }

   elements=elementId.childNodes;
   len=elements.length;

   for (i = 0; i < len; i++) {
      
      if(elements[i].className==="button"){
          elements[i].innerHTML = "hide";
      } 
   }

    elementId.addEventListener('click', function (ev) {
       
        targetButton = ev.target;
        next = targetButton.nextElementSibling;
       
       if (targetButton.className !== 'button') {
                return;
            }
            if (next.className === 'content') {
                content = next;
            }
      
         while (next) {
                    if (next.className === 'button') {

                        if (content.style.display === 'none') {
                            content.style.display = '';
                            targetButton.innerHTML = 'hide';
                        }
                        else {
                            content.style.display = 'none';
                            targetButton.innerHTML = 'show';
                        }
                        break;
                    }
                    next = next.nextElementSibling;
                }

    }, false);
 };
}


