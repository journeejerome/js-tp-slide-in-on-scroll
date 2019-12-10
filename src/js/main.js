(function () {
    const SlideOnScroll = {
        init(){
            document.documentElement.className = "js-enabled";
            window.addEventListener("scroll", this.debounce(this.slide));
        },
        slide(event){
           // console.log(window.innerHeight);
            this.images = document.querySelectorAll(".slide-in");
            for(const element of this.images){
                if(window.scrollY >= ((element.offsetTop-window.innerHeight)-(element.clientHeight/4))) {
                    //console.log(element.offsetTop);
                    element.classList.add("active");
                }else{
                    element.classList.remove("active");
                }
            }
        },
        debounce(func, wait = 3, immediate = true){
            let timeout;
            return () => {
                const context = this;
                // eslint-disable-next-line prefer-rest-params
                const args = arguments;
                const later = () => {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
    };
    SlideOnScroll.init();
})();