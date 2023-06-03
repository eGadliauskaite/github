const images = document.getElementsByTagName("img")





for(let i = 0; i < images.length; i++){

    images[i].addEventListener("click", function(){
        
    // Nuiima toggle klasę
    for(let image of images){
        image.classList.remove("toggle")
    }
    // Prideda toggle klasę
        this.classList.add("toggle")
    })
}