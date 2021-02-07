<template>
        <div id="mob-nav">
            <div id="open-nav" @click="openNavbar()">
               <img src="../assets/open-menu.svg" alt="">
            </div>
            <h1 class="mob-logo-text">Hilltop Bakuriani</h1>
        </div>    
  <header>
      <nav>
          <div class="logo-wrapper">
            <h1 class="logo-text">Hilltop Bakuriani</h1>
            <div id="close-nav" @click="closeNavBar()">
                <img  src="../assets/material-close.svg" alt="">
            </div>
          </div>
          <div id="nav-wrapper">
          <ul class="nav-links">
              <li><a href="#">HOME</a></li>
              <li><a href="#">ROOME TYPES</a></li>
              <li><a href="#">RESTAURANT</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONFERENCE ROOM</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">CONTANC</a></li>
          </ul>
          <div id="option">
              <div id="number">
                  <img style="width:20px; height: 20px;" src="../assets/feather-phone.svg" alt="">
                  +995 555 555 555
              </div>
              <div>
                  <div>
                      <img v-if="!fixed && !mobile" src="../assets/ionic-logo-facebook.svg" alt="">
                      <img v-if="fixed || mobile" src="../assets/ionic-facebook-dark.svg" alt="">
                  </div>
                  <div id="lang">
                      <p>ENG</p>
                  </div>
              </div>
          </div>
        </div>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            fixed: false,
            mobile: false,
            header: ''
        }
    },
    methods: {
        openNavbar() {
            this.header.classList.add('active');
            this.mobile = true
        },
        closeNavBar() {
            this.header.classList.remove('active');
        },
        handleScroll() {
            const mobHeader = document.getElementById('mob-nav')
             if(window.pageYOffset > 10) {
                this.header.classList.add('fixed');
                mobHeader.classList.add('fixed')
                this.fixed = true
            } else {
                this.header.classList.remove('fixed');
                mobHeader.classList.remove('fixed');
                this.fixed = false
            }
        }
    },
    mounted() {
        this.header = document.querySelector('header')
    },
   created () {
       window.addEventListener('scroll', this.handleScroll)
   },
   unmounted() {
       window.removeEventListener('scroll', this.handleScroll)
   }
}
</script>

<style lang="scss">


header {
    position: absolute;
    @include flex(row,center,flex-start);
    min-height: 6rem;
    width: 100%;
    top: 0;
    background: transparent;
    z-index: 50;
    transition: left 0.5s ease-in-out;
}

header.fixed {
    /* z-index: 1; */
    position: fixed;
    background-color: #fff
}
nav {
    @include flex(row,center,space-between);
    width: 100%;
    position: relative;
    margin: 0 3rem 0 5rem;
}

.logo-text {
    /* font-family: Big Calson; */
    font-size: 3.5rem;
    font-weight: 400;
    color: #fff;
    text-shadow: 0px 3px 6px #0000004D;
}
header.fixed .logo-text {
    color: #464646;
}

#close-nav {
    display: none;
    width: 12px;
    height: 12px;
    cursor: pointer;
    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}
#nav-wrapper {
    font-size: 2.2rem;
    @include flex(row,center,flex-start);
}


.nav-links {
    @include flex(row,center,flex-start);
    margin-right: 3rem;
    list-style: none;
    column-gap: 2.5rem;
    font-family: Larsseit;
}


.nav-links a {
    display: inline-block;
    position: relative;
    top: 2px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-decoration: none;
    opacity: 1;
}

.nav-links a::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: width 0.5s ease-in-out;
    background-color: #56D9D4;
}

.nav-links a:hover::before {
    width: 100%;
}

.fixed .nav-links li a {
    color: #4A4A4A 
}

#option {
    @include flex(row,center,flex-start);
    color: #fff;
}

header.fixed #option {
    color: #4A4A4A
}

#option > div {
    display: flex;
}

#number {
   @include flex(row,center,flex-start);
   margin-right: 1.5rem;
}

#lang {
    margin-left: 2rem;
}

#mob-nav {
    display: none;
    z-index: 2;
}

#mob-nav.fixed {
    position: fixed;
    background-color: #fff
}

@media (max-width: 1700px) {
    .logo-text {
        font-size: 3.3rem;
    }
    #nav-wrapper {
        font-size: 1.9rem;   
    }
}

@media (max-width: 1550px) {
    .logo-text {
        font-size: 2.5rem;
    }
    #nav-wrapper {
        font-size: 1.6rem;   
    }
}

@media (max-width: 1250px) {
    .logo-text {
        font-size: 2.2rem;
    }
    #nav-wrapper {
        width: 100%;
        font-size: 1.3rem;   
    }
}

@media (max-width: 1150px) {

    #mob-nav {
        position: fixed;
        width: 100%;
        top: 0;
        display: flex;
        z-index: 100;
    }

    #mob-nav h1 {
        text-align: center;
        flex-grow: 1;
    }
    
     header {
        position: fixed;
        left: -100%;
        width: 260px;
        height: 100vh;
        padding: 1rem 2rem;
        align-items: flex-start;
        background-color: #fff;
        z-index: 200;
    }

    header.active {
        left: 0;
        z-index: 20;
    }

    .logo-wrapper {
        width: 100%;
        @include flex(flex,center,space-between);
    }

    .logo-text {
        display: inline-block;
        margin-left: -10px;
        font-size: 2rem;
        font-weight: 500;
        color: #464646;
        text-shadow: none;
    }

    nav {
        margin: 0;
        flex-direction: column;
        align-items: flex-start;
    }

    #number {
        display: none !important;
    } 

    #close-nav {
        display: inline-block;
    }

     #nav-wrapper {
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: flex-start;
        height: 100vh; 
    }

    .nav-links {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-links {
        row-gap: 10px;
    }

    .nav-links li a {
        font-size: 1.6rem;
        color: #4A4A4A;
    }

    #option {
        width: 100%;
        font-size: 16px;
        margin: 3rem 0;
    }

    #option > div {
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-between;
    }

    #lang {
        margin: 0;
        color: #4A4A4A;
    }
} 


</style>