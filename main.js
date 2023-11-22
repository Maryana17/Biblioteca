//BURGER

(function() {

    const burgerItem = document.querySelector('.nav_burger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.burger_close');
    const burgerEvent = document.querySelectorAll('.nav-item')
    const profileReg = document.querySelector('.reg_profile')
    
    burgerItem.addEventListener('click', () => {
       menu.classList.add('nav_active');
       profileReg.classList.remove('reg_profile_active')
    });
    
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_active')
    });
    for (let i = 0; i < burgerEvent.length; i++) {
        burgerEvent[i].addEventListener('click', () => {
            menu.classList.remove('nav_active');
        })
    };
    
    }());
    
    
    // CAROUSEL
    
    const btnRight = document.querySelector('.carret_right');
    const btnLeft = document.querySelector('.carret_left');
    const carouselImg = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    
    let position = 0;
    let dotIndex = 0;
    
    btnRight.addEventListener('click', () => {
        if (position < 1900) {
        position += 475;
        dotIndex++
        } else {
            position = 1900
            dotIndex = 4
        }
        carouselImg.style.left = -position + 'px'
        dotsSlide(dotIndex)
    })
    btnLeft.addEventListener('click', () => {
        if (position > 0){
        position -= 475;
        dotIndex--
        } else {
            position = 0
            dotIndex = 0
        }
        carouselImg.style.left = -position +'px'
        dotsSlide(dotIndex)
    })
    
    dots.forEach((dot,index) => {
        dot.addEventListener('click', () => {
            position = 475 * index
            carouselImg.style.left = -position + 'px'
            dotIndex = index
            dotsSlide(dotIndex)
        })
    })
    
    const dotsSlide = (index) => {
        for (let dot of dots) {
            dot.classList.remove ('active')
        }
        dots[index].classList.add('active')
    }
    
    //Favorites
    
    const controlBox = document.querySelector('.favorites_seasons')
    const seasons = document.querySelectorAll('.season')
    const setBooks = document.querySelectorAll('.favorites_books')
    const booksBox = document.querySelector('.books-box')
    
    controlBox.addEventListener('click', (event) => {
        const controlButtonArr = Array.from(seasons);
        const selectedButton = event.target.closest('.season');
        const index = controlButtonArr.indexOf(selectedButton);
        
        let activeTab = document.querySelector('.active_book');
        let selectedTab = setBooks[index]
    
        if (activeTab !== selectedTab & index >= 0) {
            activeTab.classList.add('animated');
            setBooks.forEach((book) => {
                book.classList.remove('selected_book')
            }) ;
            selectedTab.classList.toggle('selected_book');
    
            fadeOutTiming = setTimeout(() => {
                activeTab.classList.remove('animated');
                setBooks.forEach((book) => {
                    book.classList.remove('selected_book')
                });
                selectedTab.classList.add('selected_book','animated');
    
                setBooks.forEach((book) => {
                    book.classList.remove('active_book')
                });
            },500)
    
            fadeInTiming = setTimeout(() => {
                setBooks.forEach((book) => {
                    book.classList.remove('selected_book','animated')
                });
                activeTab = selectedTab;
                activeTab.classList.add('active_book');
            },600)
        };
    })
    
    //Profile
    
    const profileItem = document.querySelector('.profile')
    const profileReg = document.querySelector('.reg_profile')
    const logIn = document.querySelector('.log-in')
    const popUpLog = document.querySelector('.log-in_pop-up')
    const btnClose = document.querySelector('.button_close')
    const regEnter = document.querySelector('.registre')
    const popUpReg = document.querySelector('.reg_pop-up')
    const btnCloseReg = document.querySelector('.button_close_reg')
    const menu = document.querySelector('.nav');
    
    profileItem.addEventListener('click', () => {
        profileReg.classList.add('reg_profile_active');
        menu.classList.remove('nav_active')
    })
    
    profileReg.addEventListener('click', (event) => {
        
    })
    
    logIn.addEventListener('click', () => {
        popUpLog.classList.toggle('hidden'),
        profileReg.classList.remove('reg_profile_active')
    })
     
    btnClose.addEventListener('click', () => {
        popUpLog.classList.add('hidden')
     })
    
     regEnter.addEventListener('click', () => {
        popUpReg.classList.toggle('hidden'),
        profileReg.classList.remove('reg_profile_active')
     })
     
     btnCloseReg.addEventListener('click', () => {
        popUpReg.classList.add('hidden')
     })
    
     popUpLog.addEventListener('click', (event) => {
        if(event.target.classList.contains('log-in_pop-up')) {
            popUpLog.classList.toggle('hidden') 
        }
     })
    
     popUpReg.addEventListener('click', (event) => {
        if(event.target.classList.contains('reg_pop-up')) {
            popUpReg.classList.toggle('hidden')
        }
     })
    
     //Favorites Buy Card
     const libraryCard = document.querySelector('.buy_library_card')
     const btnCloseCard = document.querySelector('.close_btn_card')
     const btnBuy = document.querySelectorAll('.button_buy')
     const popUpCard = document.querySelector('.buy-card_pop-up')
    
     for (let i = 0; i < btnBuy.length; i++) {
        btnBuy[i].addEventListener('click', () => {
            popUpCard.classList.toggle('hidden')
        })
    }
     btnCloseCard.addEventListener('click', () => {
        popUpCard.classList.toggle('hidden')
    
     })
     popUpCard.addEventListener('click', (event) => {
        if (event.target.classList.contains('buy-card_pop-up')){
            popUpCard.classList.toggle('hidden')
        }
     })
     
     //Buttons Sigh Up & Log In 
    const btnSighUp = document.querySelector('.button_block > button:first-child')
    const btnLogIn = document.querySelector('.button_block > button:last-child')
    
    btnSighUp.addEventListener('click', () => {
        popUpReg.classList.toggle('hidden')
    })
    btnLogIn.addEventListener('click', () => {
        popUpLog.classList.toggle('hidden')
    })
    