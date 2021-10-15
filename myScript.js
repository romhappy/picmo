let pictoBoire = "media/boire.png";
let pictoManger = "media/manger.png";
let count = 0;

function createimg(key,sizeA,sizeB) {
var theimage = document.createElement("img");
theimage.setAttribute('src', key);
theimage.setAttribute('alt', 'image');
theimage.height = sizeA;
theimage.width = sizeB;
if (count<5) {
    document.getElementById('sentence_container').appendChild(theimage); 
   } else {
       alert("effacez les pictos")
   }
count = count + 1;
}
