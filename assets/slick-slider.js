//initialize logo list slider 

$('.logoListSlider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  centerMode: false,
  variableWidth: false,
  adaptiveHeight: true,
  lazyLoad: 'ondemand',
    prevArrow: '<button class="slide-arrow prev-arrow"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.883px" height="122.882px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path d="M61.441,0C44.475,0,29.115,6.877,17.996,17.996C6.877,29.115,0,44.475,0,61.441c0,16.966,6.877,32.326,17.996,43.445 c11.119,11.118,26.479,17.995,43.445,17.995c16.967,0,32.327-6.877,43.446-17.995c11.119-11.119,17.996-26.479,17.996-43.445 c0-16.967-6.877-32.327-17.996-43.445C93.768,6.877,78.408,0,61.441,0L61.441,0z M51.505,42.166 c-1.735-1.784-1.696-4.637,0.088-6.372c1.784-1.735,4.637-1.696,6.373,0.088l21.839,22.521l-3.23,3.142l3.244-3.146 c1.738,1.792,1.693,4.652-0.098,6.39c-0.053,0.05-0.105,0.099-0.158,0.146L57.966,87.017c-1.735,1.784-4.588,1.823-6.373,0.088 c-1.784-1.734-1.823-4.588-0.088-6.372l18.78-19.201L51.505,42.166L51.505,42.166z M24.386,24.386 C33.869,14.903,46.97,9.038,61.441,9.038c14.471,0,27.573,5.865,37.055,15.348c9.484,9.483,15.35,22.584,15.35,37.056 c0,14.471-5.865,27.572-15.35,37.055c-9.482,9.483-22.584,15.349-37.055,15.349c-14.471,0-27.572-5.865-37.055-15.349 C14.903,89.014,9.038,75.912,9.038,61.441C9.038,46.97,14.903,33.869,24.386,24.386L24.386,24.386z"/></g></svg></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.883px" height="122.882px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path d="M61.441,0C44.475,0,29.115,6.877,17.996,17.996C6.877,29.115,0,44.475,0,61.441c0,16.966,6.877,32.326,17.996,43.445 c11.119,11.118,26.479,17.995,43.445,17.995c16.967,0,32.327-6.877,43.446-17.995c11.119-11.119,17.996-26.479,17.996-43.445 c0-16.967-6.877-32.327-17.996-43.445C93.768,6.877,78.408,0,61.441,0L61.441,0z M51.505,42.166 c-1.735-1.784-1.696-4.637,0.088-6.372c1.784-1.735,4.637-1.696,6.373,0.088l21.839,22.521l-3.23,3.142l3.244-3.146 c1.738,1.792,1.693,4.652-0.098,6.39c-0.053,0.05-0.105,0.099-0.158,0.146L57.966,87.017c-1.735,1.784-4.588,1.823-6.373,0.088 c-1.784-1.734-1.823-4.588-0.088-6.372l18.78-19.201L51.505,42.166L51.505,42.166z M24.386,24.386 C33.869,14.903,46.97,9.038,61.441,9.038c14.471,0,27.573,5.865,37.055,15.348c9.484,9.483,15.35,22.584,15.35,37.056 c0,14.471-5.865,27.572-15.35,37.055c-9.482,9.483-22.584,15.349-37.055,15.349c-14.471,0-27.572-5.865-37.055-15.349 C14.903,89.014,9.038,75.912,9.038,61.441C9.038,46.97,14.903,33.869,24.386,24.386L24.386,24.386z"/></g></svg></button>',
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        arrows: true
      }
    }
  ]
});


const texts = ['Search for something…','Search for other…','One more search'];
const input = document.querySelector('#searchbox');
const animationWorker = function (input, texts) {
  this.input = input;
  this.defaultPlaceholder = this.input.getAttribute('placeholder');
  this.texts = texts;
  this.curTextNum = 0;
  this.curPlaceholder = '';
  this.blinkCounter = 0;
  this.animationFrameId = 0;
  this.animationActive = false;
  this.input.setAttribute('placeholder',this.curPlaceholder);

  this.switch = (timeout) => {
    this.input.classList.add('imitatefocus');
    setTimeout(
      () => { 
        this.input.classList.remove('imitatefocus');
        if (this.curTextNum == 0) 
          this.input.setAttribute('placeholder',this.defaultPlaceholder);
        else
          this.input.setAttribute('placeholder',this.curPlaceholder);

        setTimeout(
          () => { 
            this.input.setAttribute('placeholder',this.curPlaceholder);
            if(this.animationActive) 
              this.animationFrameId = window.requestAnimationFrame(this.animate)}, 
          timeout);
      }, 
      timeout);
  }

  this.animate = () => {
    if(!this.animationActive) return;
    let curPlaceholderFullText = this.texts[this.curTextNum];
    let timeout = 100;
    if (this.curPlaceholder == curPlaceholderFullText+'|' && this.blinkCounter==3) {
      this.blinkCounter = 0;
      this.curTextNum = (this.curTextNum >= this.texts.length-1)? 0 : this.curTextNum+1;
      this.curPlaceholder = '|';
      this.switch(1000);
      return;
    }
    else if (this.curPlaceholder == curPlaceholderFullText+'|' && this.blinkCounter<3) {
      this.curPlaceholder = curPlaceholderFullText;
      this.blinkCounter++;
    }
    else if (this.curPlaceholder == curPlaceholderFullText && this.blinkCounter<3) {
      this.curPlaceholder = this.curPlaceholder+'|';
    }
    else {
      this.curPlaceholder = curPlaceholderFullText
        .split('')
        .slice(0,this.curPlaceholder.length+1)
        .join('') + '|';
      timeout = 100;
    }
    this.input.setAttribute('placeholder',this.curPlaceholder);
    setTimeout(
      () => { if(this.animationActive) this.animationFrameId = window.requestAnimationFrame(this.animate)}, 
      timeout);
  }

  this.stop = () => {
    this.animationActive = false;
    window.cancelAnimationFrame(this.animationFrameId);
  }

  this.start = () => {
    this.animationActive = true;
    this.animationFrameId = window.requestAnimationFrame(this.animate);
    return this;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let aw = new animationWorker(input, texts).start();
  input.addEventListener("focus", (e) => aw.stop());
  input.addEventListener("blur", (e) => {
    aw = new animationWorker(input, texts);
    if(e.target.value == '') setTimeout( aw.start, 500);
  });
});


//remove-spacing in home page in instagram app

$( ".shopify-app-block" ).parent().css( "margin", "0px" );

/* ---- Brands A to Z ---- */

		$(function (){
			$('.brand-list a').on('click', function(e){
				e.preventDefault();
				$('.brand-list a').removeClass('active');
				$(this).addClass('active');
				var attrval = $(this.getAttribute('href'));
				$('html,body').stop().animate({
					scrollTop: attrval.offset().top-80
				}, 300)
			});
		});
