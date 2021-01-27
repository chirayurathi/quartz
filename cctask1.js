$("a[href^='#']").click(function(e) {
	e.preventDefault();
	$("body, html").animate({
		scrollTop: $($(this).attr("href")).offset().top-50
	},750 );
});
window.onload = ()=>{
    
}

const navspy = () => {
    var navs = $('nav ul li a');
    var sec = $('.sec');
    var navh = $('nav').height();
    var docel = $(document);
    docel.on('scroll', function () {
        var scrollpos = docel.scrollTop();
        sec.each(function () {
            var self = $(this);
            if (self.offset().top < (scrollpos + navh) && (scrollpos + navh) < (self.offset().top + self.outerHeight())) {
                var currClass = '.' + self.attr('id') + '-mark';
                navs.removeClass('active');
                $(currClass).addClass('active');
            }
        });
    });
};
const navSlide = () => {
    const burger = $('.burger');
    const nav = $('nav ul');
    const navLink = document.querySelectorAll('nav ul li');
    burger.click(() => {
        nav.toggleClass('nav-active');
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
    for(var i=0;i<navLink.length;i++){
        navLink[i].addEventListener("click",function(){
            nav.toggleClass('nav-active');
            navLink.forEach((link)=>{link.style.animation = '';});
        });
    }
};
navspy();
navSlide();

var years = $('.yeartag');
var prodList= [
    "<div class='flip-container'><div class='flip-card' style='background: url(./products/calcutta/1.JPG); background-size: cover;'><p>CALACUTTA VAGIL</p></div>  </div><div class='flip-container'><div class='flip-card' style='background: url(./products/calcutta/2.JPG); background-size: cover;'><p>CALACUTTA BELGIA</p></div>  </div>",
    " <div class='flip-container'><div class='flip-card' style='background: url(./products/staturio/1.JPG); background-size: cover;'><p>STATURIO VENATINO</p></div>  </div> <div class='flip-container'><div class='flip-card' style='background: url(./products/staturio/2.JPG); background-size: cover;'><p>STATURIO CLASSIC</p></div>  </div> <div class='flip-container'><div class='flip-card' style='background: url(./products/staturio/3.JPG); background-size: cover;'><p>GOLDEN VIPER</p></div>  </div> <div class='flip-container'><div class='flip-card' style='background: url(./products/staturio/4.JPG); background-size: cover;'><p>SILVER VIPER</p></div>  </div> ",
    " <div class='flip-container'> <div class='flip-card' style='background: url(./products/carrara/1.JPG); background-size: cover;'> <p>CARRARA CLASSIC</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/carrara/2.JPG); background-size: cover;'> <p>CARRARA PLASMA</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/carrara/3.JPG); background-size: cover;'> <p>CARRARA MASSA</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/carrara/4.JPG); background-size: cover;'> <p>CARRARA FLORENCE</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/carrara/5.JPG); background-size: cover;'> <p>BIANCO CRYSTAL</p> </div> </div> ",
    " <div class='flip-container'> <div class='flip-card' style='background: url(./products/acqua/1.JPG); background-size: cover;'> <p>ICE FLORENCE</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/acqua/2.JPG); background-size: cover;'> <p>BLACK FLORENCE</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/acqua/3.JPG); background-size: cover;'> <p>BEIGIE FLORENCE</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/acqua/4.JPG); background-size: cover;'> <p>CREME FLORENCE</p> </div> </div> ",
    " <div class='flip-container'> <div class='flip-card' style='background: url(./products/plain/1.JPG); background-size: cover;'> <p>MOCCA CREMA</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/plain/2.JPG); background-size: cover;'> <p>SNOW BEIGE</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/plain/3.JPG); background-size: cover;'> <p>LIGHT GREY</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/plain/4.JPG); background-size: cover;'> <p>SANDY BEIGE</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/plain/5.JPG); background-size: cover;'> <p>CONCRETE</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/plain/6.JPG); background-size: cover;'> <p>BIANCO WOOL</p> </div> </div> ",
    " <div class='flip-container'> <div class='flip-card' style='background: url(./products/galaxy/1.JPG); background-size: cover;'> <p>BIANCO GALAXY</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/galaxy/2.JPG); background-size: cover;'> <p>BEIGE GALAXY</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/galaxy/3.JPG); background-size: cover;'> <p>LIGHT GREY GALAXY</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/galaxy/4.JPG); background-size: cover;'> <p>GIRGIO GALAXY</p> </div> </div> <div class='flip-container'> <div class='flip-card' style='background: url(./products/galaxy/5.JPG); background-size: cover;'> <p>BLACK GALAXY</p> </div> "
]
years.click(function () {
    years.removeClass('yeartag-active');
    $(this).addClass('yeartag-active');
    $('.tencontainer').empty();
    yearActList = prodList[years.index(this)]; 
    $('.tencontainer').append(yearActList);
});
document.getElementById('submit').onclick= (e)=>{
    e.preventDefault()
    let name = document.getElementById('name').value
    let number = document.getElementById('number').value
    let mail = document.getElementById('mail').value
    let message = document.getElementById('message').value
    if(name!="" && number!="" && mail!="" && message!=""){
        emailjs.send("service_ebmb9tb","template_4zdsflw",{
            from_name: name,
            from_email: mail,
            from_number: number,
            message: message,
            })
            .then(function(){
                document.getElementById('popup').innerHTML = "We have recieved your Inquiry. We will reach out to you as soon as possible."
                document.getElementById('popup').classList.remove('error')
                document.getElementById('popup').classList.remove('success')
                setTimeout(()=>{document.getElementById('popup').classList.add('success')}, 10)
            }),
            function(error){
                document.getElementById('popup').innerHTML = "There was an error while submitting the form. Please try again."
                document.getElementById('popup').classList.remove('success')
                document.getElementById('popup').classList.remove('error')
                setTimeout(()=>{document.getElementById('popup').classList.add('error')}, 10)
                
            }
    
    }
    else{
        document.getElementById('popup').innerHTML = "All fields are required."
        document.getElementById('popup').classList.remove('success')
        document.getElementById('popup').classList.remove('error')
        setTimeout(()=>{document.getElementById('popup').classList.add('error')}, 10)
        
    }

}