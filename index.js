var slides=[
    {image:'images/slider1.PNG',heading:'Lets visit the nature..'},
        {image:'images/slider2.PNG',heading:'Allah is the best Creater.'},
        {image:'images/slider3.PNG', heading: 'Allah has made everything beautiful.'},
        {image:'images/slider4.PNG',heading:'There is no fault in the invention of GOD.'},
        {image:'images/slider5.PNG',heading:'Nothing is more beautiful than  nature.'},
        
    
];
function update(index){
    var slide = slides[index];
    document.getElementById("sliderimg").src = slide.image;
    document.getElementById("slides").textContent = slide.heading;
}


 var slidesIndex= 0;
 

function nextslide(){
    slidesIndex++;
    if(slidesIndex >= slides.length){
        slidesIndex = 0;
    }
    update(slidesIndex);
}
update(slidesIndex);

setInterval(nextslide,3000);