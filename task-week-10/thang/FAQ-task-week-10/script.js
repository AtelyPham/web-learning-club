const button = document.querySelectorAll('.collapseBtn');
const content2 = document.querySelectorAll('.content');




for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click',function(){
        var content = this.nextElementSibling;
        for (let i = 0; i < content2.length; i++) {
            if(content2[i] !== content)
              content2[i].style.display = 'none';
        }
        if(content.style.display === "none") {
            content.style.display = "block";
        }
        else { content.style.display = "none";}
    })
}




