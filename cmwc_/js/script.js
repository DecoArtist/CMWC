const web_content = `{
    "1":{
        "web_title":"Clash Mini World Cup",
        "web_description":"The Clash Mini World Cup is a worldwide Clash Mini 'fan tournament' where players represent their country. The tournament contains several rewards for TOP 3.",
        "year":"2023",
        "CM":"Clash Mini",
        "CM_link":"https://supr.cl/clashmini-download",
        "page_1":"home",
        "page_2":"calendar",
        "page_3":"participate",
        "h_page_2":"schedule",
        "social_1":"https://twitter.com/CMWorlds",
        "social_2":"https://www.twitch.tv/zeshieldmaiden",
        "menu_music":"cmwc_/War_Map_Ambience.mp3",

        "prefooter_title":"Latest CM worlds news!",
        "prefooter_description":"Stay informed with all news of Clash Mini World Cup.",
        "WebGame_theme1":"COC_theme",
        "WebGame_theme2":"CR_theme"
    }
}`
const cmwc = JSON.parse(web_content);

const root = document.querySelector(':root');
root.style.setProperty('--header_banner', 'url(../skygradient_regular.jpg)');

window.onload = () => {
    document.head.innerHTML += `
    <style id="sfx">canvas.bubbles-sprite{;width:auto;height:auto;-webkit-mask-image: linear-gradient(transparent, black 120%);mask-image: linear-gradient(transparent, black 120%);}canvas.bubbles-sprite.red{filter:invert(70%) sepia(31%) saturate(6838%) hue-rotate(343deg) brightness(112%) contrast(109%);}canvas.bubbles-sprite.blue{filter:invert(44%) sepia(11%) saturate(3944%) hue-rotate(168deg) brightness(93%) contrast(106%);}canvas.bubbles-sprite.yellow{filter: invert(34%) sepia(33%) saturate(5008%) hue-rotate(355deg) brightness(99%) contrast(103%);}</style>`;
    document.querySelector('header.page-header').innerHTML = header;
    document.querySelector('.footer-dark').innerHTML = footer;
    document.querySelector('#footer-preview.page-credits').classList.add (cmwc[(1)].WebGame_theme1)
    document.querySelector('#footer-preview.page-credits').innerHTML += page_credits_footer;
    setTimeout(() => {
	document.getElementById('window_loader').remove();
    window.scrollTo(0, 0);
	}, 275);
}

let vh = window.innerHeight * 0.01;
document.body.style.setProperty('--vh', `${vh}px`);
let vw = window.innerWidth * 0.01;
document.body.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty('--vh', `${vh}px`);
  });

window.addEventListener('resize', () => {
    let vw = window.innerWidth * 0.01;
    document.body.style.setProperty('--vw', `${vw}px`);
  });


let total_vh = window.innerHeight;
document.body.style.setProperty('--100vh', `${total_vh}px`);
let total_vw = window.innerWidth;
document.body.style.setProperty('--100vw', `${total_vw}px`);

window.addEventListener('resize', () => {
    let total_vh = window.innerHeight;
    document.body.style.setProperty('--100vh', `${total_vh}px`);
  });

window.addEventListener('resize', () => {
    let total_vw = window.innerWidth;
    document.body.style.setProperty('--100vw', `${total_vw}px`);
  });

// Create a match Function
function myFunction(x) {
    if (x.matches) {
        document.querySelector('nav[data-navigator]').innerHTML = `
            <div class="nav_container">
                <div class="container--menu">
                    <div class="page-header__navigation">
                        <ul class="d-flex row navigation_ul">
                            <li><a href="/">${cmwc[(1)].page_1}</a></li>
                            <li><a href="${cmwc[(1)].page_2}">${cmwc[(1)].page_2}</a></li>
                            <li><a href="${cmwc[(1)].page_3}">${cmwc[(1)].page_3}</a></li>
                        </ul>
                    </div>
                </div>
            
                <a href="/">
                    <img src="https://mab55.com/ministats/wp-content/uploads/2022/03/clashminilogo.png" alt="CMWC logo" class="logo">
                </a>
            </div>`,
            document.body.classList.remove('no-scroll');
    } else {
        document.querySelector('nav[data-navigator]').innerHTML = `
        <style>nav[data-navigator]{justify-content:center;padding-top: 22px;}.navigation-menu__mobile .container--menu{justify-content: center;}</style>
        <div class="mobile_container">
            <button class="page-header__toggle">
                <p class="${cmwc[(1)].WebGame_theme1}">≡</p>
            </button>
        </div>
        
        <div class="navigation-menu__mobile ${cmwc[(1)].WebGame_theme1}" style="display: none;">
            <div class="mobile_container" style="left: 1.5vw;">
                <button class="page-header__close">
                    <span>
                        <svg viewBox="0 0 12 12" width="12" height="12" data-v-69af3311=""><path d="M7.41,6l4.3-4.29A1,1,0,1,0,10.29.29L6,4.59,1.71.29A1,1,0,0,0,.29,1.71L4.59,6,.29,10.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L6,7.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                    </span>
                </button>
            </div>
            <div class="container--menu">
                <ul class="mobile navigation_ul_mobile">
                    <li><a href="/" class="--active">${cmwc[(1)].page_1}</a></li>
                    <li><a href="${cmwc[(1)].page_2}">${cmwc[(1)].page_2}</a></li>
                    <li><a href="${cmwc[(1)].page_3}">${cmwc[(1)].page_3}</a></li>
                </ul>
            </div>

            <img src="cmwc_/Monk_Mini.png" alt="mobile-menu render" class="mobile-menu__render">
        </div>`,
        document.querySelector('.page-header__toggle').onclick = () => {
            document.querySelector('.navigation-menu__mobile').style = "",
            document.body.classList.add('no-scroll'),
            setTimeout(() => {
                document.querySelector('.navigation-menu__mobile').classList.add('--active');
            }, 01);
          },
        document.querySelector('.page-header__close').onclick = () => {
            document.querySelector('.navigation-menu__mobile').classList.remove('--active'),
            document.body.classList.remove('no-scroll'),
            setTimeout(() => {
                document.querySelector('.navigation-menu__mobile').style.display = "none";
            }, 370);
          };
    }
  }
  
  // Create a MediaQueryList object
  const mmObj = window.matchMedia("(min-width: 64em)")
  
  // Call the match function at run time:
  myFunction(mmObj);
  
  // Add the match function as a listener for state changes:
  mmObj.addListener(myFunction);


  var musiclogo_active = `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="19" class="fill"></circle><g filter="url(#filter0_d_3549_103319)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3954 26.0878C20.3954 26.457 19.9935 26.6858 19.6766 26.4969C18.0483 25.5267 14.1935 23.2263 13.8495 22.9889C13.7698 22.9339 13.6753 22.9044 13.5784 22.9035C12.9562 22.8988 11.4935 22.9009 10.7346 22.9024C10.4718 22.903 10.2586 22.6899 10.2583 22.4269L10.25 15.5824C10.2497 15.3188 10.4632 15.1052 10.7265 15.1058C11.4864 15.1076 12.9484 15.11 13.5674 15.1046C13.6744 15.1037 13.7782 15.0701 13.8656 15.0082C15.2444 14.0288 18.2995 12.2801 19.6861 11.4976C20.0033 11.3185 20.3954 11.5479 20.3954 11.9124V26.0878ZM21.3421 22.3501V20.575C21.3421 20.5134 21.3874 20.4605 21.4473 20.4554C22.0855 20.4004 22.5884 19.8487 22.5884 19.1782C22.5884 18.5078 22.0855 17.956 21.4473 17.901C21.3874 17.8959 21.3421 17.843 21.3421 17.7814V16.0057C21.3421 15.9375 21.3974 15.8828 21.4634 15.8852C23.174 15.951 24.5459 17.4028 24.5459 19.1779C24.5459 20.953 23.174 22.4048 21.4634 22.4706C21.3971 22.473 21.3421 22.4184 21.3421 22.3501ZM21.3421 23.6327V25.3777V25.3783C21.3421 25.4448 21.3968 25.4978 21.4633 25.4966C23.1298 25.4658 24.6915 24.8024 25.8731 23.6206C27.0831 22.4102 27.7497 20.8009 27.7497 19.089C27.7497 17.3771 27.0834 15.7678 25.8731 14.5574C24.6915 13.3756 23.1295 12.7121 21.4633 12.6814C21.3968 12.6802 21.3421 12.7331 21.3421 12.7997V14.5447C21.3421 14.6085 21.393 14.6609 21.4568 14.6626C23.8452 14.7235 25.7691 16.6858 25.7691 19.0887C25.7691 21.4915 23.8452 23.4539 21.4568 23.5148C21.393 23.5162 21.3421 23.5689 21.3421 23.6327Z" fill="white"></path></g><defs><filter id="filter0_d_3549_103319" x="9" y="9" width="20" height="34.6291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3549_103319"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3549_103319" result="shape"></feBlend></filter></defs></svg>`
  var musiclogo_unactive = `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="19" class="fill"></circle><g filter="url(#filter0_d_3549_103290)"><path d="M20.3954 26.0877C20.3954 26.4569 19.9935 26.6857 19.6766 26.4968C18.0483 25.5266 14.1935 23.2263 13.8495 22.9889C13.7698 22.9338 13.6753 22.9044 13.5784 22.9035C12.9562 22.8987 11.4935 22.9008 10.7346 22.9023C10.4718 22.9029 10.2586 22.6899 10.2583 22.4269L10.25 15.5824C10.2497 15.3188 10.4632 15.1052 10.7265 15.1058C11.4864 15.1076 12.9484 15.1099 13.5674 15.1046C13.6744 15.1037 13.7782 15.0701 13.8656 15.0082C15.2444 14.0288 18.2995 12.28 19.6861 11.4976C20.0033 11.3185 20.3954 11.5479 20.3954 11.9123V26.0877V26.0877Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0129 15.9215C27.7135 15.6221 27.2282 15.6221 26.9289 15.9215L25.2418 17.6088L23.5544 15.9218C23.2551 15.6224 22.7698 15.6224 22.4705 15.9218L21.7548 16.6375C21.4554 16.9368 21.4554 17.4221 21.7548 17.7214L23.4419 19.4088L21.7548 21.0961C21.4554 21.3955 21.4554 21.8808 21.7548 22.1801L22.4708 22.8961C22.7701 23.1955 23.2554 23.1955 23.5548 22.8961L25.2421 21.2087L26.9294 22.8961C27.2288 23.1955 27.7141 23.1955 28.0134 22.8961L28.7294 22.1801C29.0288 21.8808 29.0288 21.3955 28.7294 21.0961L27.042 19.4088L28.7288 17.7214C29.0282 17.4221 29.0282 16.9368 28.7288 16.6375L28.0129 15.9215Z" fill="white"></path></g><defs><filter id="filter0_d_3549_103290" x="9" y="9" width="20" height="34.6291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3549_103290"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3549_103290" result="shape"></feBlend></filter></defs></svg>`
  
    document.querySelector('.music_navigation label').innerHTML = `
        <input type="checkbox" id="music__checkbox">
        <button></button>`

    document.querySelector('.music_navigation button').innerHTML = musiclogo_unactive;
    document.getElementById('menu_music').src = cmwc[(1)].menu_music;
    document.getElementById('menu_music').volume = 0


        document.querySelector('.music_navigation label').onclick = () => {
            if (document.getElementById("music__checkbox").checked == true) {
                document.getElementById('menu_music').play();
                document.getElementById('menu_music').volume = 1;
                document.querySelector('.music_navigation button').innerHTML = `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="19" class="fill"></circle><g filter="url(#filter0_d_3549_103319)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3954 26.0878C20.3954 26.457 19.9935 26.6858 19.6766 26.4969C18.0483 25.5267 14.1935 23.2263 13.8495 22.9889C13.7698 22.9339 13.6753 22.9044 13.5784 22.9035C12.9562 22.8988 11.4935 22.9009 10.7346 22.9024C10.4718 22.903 10.2586 22.6899 10.2583 22.4269L10.25 15.5824C10.2497 15.3188 10.4632 15.1052 10.7265 15.1058C11.4864 15.1076 12.9484 15.11 13.5674 15.1046C13.6744 15.1037 13.7782 15.0701 13.8656 15.0082C15.2444 14.0288 18.2995 12.2801 19.6861 11.4976C20.0033 11.3185 20.3954 11.5479 20.3954 11.9124V26.0878ZM21.3421 22.3501V20.575C21.3421 20.5134 21.3874 20.4605 21.4473 20.4554C22.0855 20.4004 22.5884 19.8487 22.5884 19.1782C22.5884 18.5078 22.0855 17.956 21.4473 17.901C21.3874 17.8959 21.3421 17.843 21.3421 17.7814V16.0057C21.3421 15.9375 21.3974 15.8828 21.4634 15.8852C23.174 15.951 24.5459 17.4028 24.5459 19.1779C24.5459 20.953 23.174 22.4048 21.4634 22.4706C21.3971 22.473 21.3421 22.4184 21.3421 22.3501ZM21.3421 23.6327V25.3777V25.3783C21.3421 25.4448 21.3968 25.4978 21.4633 25.4966C23.1298 25.4658 24.6915 24.8024 25.8731 23.6206C27.0831 22.4102 27.7497 20.8009 27.7497 19.089C27.7497 17.3771 27.0834 15.7678 25.8731 14.5574C24.6915 13.3756 23.1295 12.7121 21.4633 12.6814C21.3968 12.6802 21.3421 12.7331 21.3421 12.7997V14.5447C21.3421 14.6085 21.393 14.6609 21.4568 14.6626C23.8452 14.7235 25.7691 16.6858 25.7691 19.0887C25.7691 21.4915 23.8452 23.4539 21.4568 23.5148C21.393 23.5162 21.3421 23.5689 21.3421 23.6327Z" fill="white"></path></g><defs><filter id="filter0_d_3549_103319" x="9" y="9" width="20" height="34.6291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3549_103319"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3549_103319" result="shape"></feBlend></filter></defs></svg>`;
            }
            else {
                document.getElementById('menu_music').pause();
                document.getElementById('menu_music').volume = 0;
                document.querySelector('.music_navigation button').innerHTML =`<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="19" class="fill"></circle><g filter="url(#filter0_d_3549_103290)"><path d="M20.3954 26.0877C20.3954 26.4569 19.9935 26.6857 19.6766 26.4968C18.0483 25.5266 14.1935 23.2263 13.8495 22.9889C13.7698 22.9338 13.6753 22.9044 13.5784 22.9035C12.9562 22.8987 11.4935 22.9008 10.7346 22.9023C10.4718 22.9029 10.2586 22.6899 10.2583 22.4269L10.25 15.5824C10.2497 15.3188 10.4632 15.1052 10.7265 15.1058C11.4864 15.1076 12.9484 15.1099 13.5674 15.1046C13.6744 15.1037 13.7782 15.0701 13.8656 15.0082C15.2444 14.0288 18.2995 12.28 19.6861 11.4976C20.0033 11.3185 20.3954 11.5479 20.3954 11.9123V26.0877V26.0877Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0129 15.9215C27.7135 15.6221 27.2282 15.6221 26.9289 15.9215L25.2418 17.6088L23.5544 15.9218C23.2551 15.6224 22.7698 15.6224 22.4705 15.9218L21.7548 16.6375C21.4554 16.9368 21.4554 17.4221 21.7548 17.7214L23.4419 19.4088L21.7548 21.0961C21.4554 21.3955 21.4554 21.8808 21.7548 22.1801L22.4708 22.8961C22.7701 23.1955 23.2554 23.1955 23.5548 22.8961L25.2421 21.2087L26.9294 22.8961C27.2288 23.1955 27.7141 23.1955 28.0134 22.8961L28.7294 22.1801C29.0288 21.8808 29.0288 21.3955 28.7294 21.0961L27.042 19.4088L28.7288 17.7214C29.0282 17.4221 29.0282 16.9368 28.7288 16.6375L28.0129 15.9215Z" fill="white"></path></g><defs><filter id="filter0_d_3549_103290" x="9" y="9" width="20" height="34.6291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3549_103290"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3549_103290" result="shape"></feBlend></filter></defs></svg>`;
            }
        };

var NavigationGenerator = [
    {'theme':'clashmini','title':'Clash Mini World Cup','description':'watch, cheer and interact!',
    'logo':'https://event.clashofclans.com/assets/events/images/38aaltYgnLPXdsp4KqVbzR.png'},

    {'theme':'clashofclans','title':'CM Worlds Schedule','description':'check out the full schedule',
    'logo':'https://event.clashofclans.com/assets/events/images/38aaltYgnLPXdsp4KqVbzR.png'},
]

NavigationArea(NavigationGenerator)
function NavigationArea(NavData){
var NavigationTableCreator = `<div class="main-navigation container" id="navigation_home"></div>`
var NavigationLinksCreator = `<div class="main-navigation container" id="navigation_links"><a href="/" id="navigatorlink1" data-link></a><a href="/schedule/" id="navigatorlink2" data-link></a></div>`
document.getElementById('navigation_container-all').innerHTML += NavigationTableCreator
document.getElementById('navigation_container-all').innerHTML += NavigationLinksCreator
var NavigationTable = document.getElementById('navigation_home')

for(var i = 0; i < NavData.length; i++){
var navigator__navigation_button = `        
<div class="navigation-button" id="${NavData[i].theme}">
    <div class="container ${NavData[i].theme}" data-navigation>
        <div class="background"></div>
        <div class="background-overlay"></div>
        <div class="background-container-content">
            <div class="content-wrapper" id="IframeChangerTo-${NavData[i].theme}">
                <div class="logo" id="${NavData[i].theme}_logo">
                    <img src="${NavData[i].logo}" alt="home-pages logo">
                </div>
                <div class="content">
                    <h2 class="heading-m">
                        <div class="mask-split-line">${NavData[i].title}</div>
                    </h2>
                    <p class="subheading-m">${NavData[i].description}</p>
                </div>
            </div>
        </div>
    </div>
</div>`
NavigationTable.innerHTML += navigator__navigation_button}};

const n1 = document.getElementById('clashmini');
const nlog1 = document.getElementById('clashmini_logo');
const nl1 = document.getElementById('navigatorlink1');

const n2 = document.getElementById('clashofclans');
const nlog2 = document.getElementById('clashofclans_logo');
const nl2 = document.getElementById('navigatorlink2');

//navigator 1
nl1.addEventListener('mouseleave', () => n1.style.animation = "navigation__button_out-animation forwards .275s")
nl1.addEventListener('mouseover', () => n1.style.animation = "navigation__button_enter-animation forwards .55s")
nl1.addEventListener('mouseleave', () => nlog1.style.animation = "navigation__logo_out-animation forwards .275s")
nl1.addEventListener('mouseover', () => nlog1.style.animation = "navigation__logo_enter-animation forwards .55s")
//edits himself
nl1.addEventListener('mouseleave', () => nl1.style.animation = "navigation__button_out-animation forwards .275s")
nl1.addEventListener('mouseover', () => nl1.style.animation = "navigation__button_enter-animation forwards .55s")

//navigator 2
nl2.addEventListener('mouseleave', () => n2.style.animation = "navigation__button_out-animation forwards .275s")
nl2.addEventListener('mouseover', () => n2.style.animation = "navigation__button_enter-animation forwards .55s")
nl2.addEventListener('mouseleave', () => nlog2.style.animation = "navigation__logo_out-animation forwards .275s")
nl2.addEventListener('mouseover', () => nlog2.style.animation = "navigation__logo_enter-animation forwards .55s")
//edits himself
nl2.addEventListener('mouseleave', () => nl2.style.animation = "navigation__button_out-animation forwards .275s")
nl2.addEventListener('mouseover', () => nl2.style.animation = "navigation__button_enter-animation forwards .55s")

const header = `
<div class="page-header__top">
    <div class="page-header__championship-banner"></div>
</div>`

const footer = `
<footer>
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="item">
                    <h3>Pages</h3>
                    <ul class="navigation_ul_footer">
                        <li><a href="/">${cmwc[(1)].page_1}</a></li>
                        <li><a href="${cmwc[(1)].page_2}">${cmwc[(1)].page_2}</a></li>
                        <li><a href="${cmwc[(1)].page_3}">${cmwc[(1)].page_3}</a></li>
                    </ul>
                </div>
                <div class="item">
                    <h3>Download</h3>
                    <ul>
                        <li><a href="#">CMWC Presskit</a></li>
                        <li><a href="${cmwc[(1)].CM_link}">${cmwc[(1)].CM}</a></li>
                    </ul>
                </div>
                <div class="col-md-6 item text">
                    <h3>${cmwc[(1)].web_title}</h3>
                    <p>${cmwc[(1)].web_description}</p>
                </div>
            </div>
            <div class="col item social">
                <a href="${cmwc[(1)].social_1}" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="${cmwc[(1)].social_2}" target="_blank"><i class="fa-brands fa-twitch"></i></a>
            </div>
        </div>

        <div class="copyright_container">
            <p class="copyright">${cmwc[(1)].web_title} © ${cmwc[(1)].year}</p>
            <p class="copyright">The Clash Royale, Clash of Clans and Clash Mini names and marks and all Supercell related game marks are protected by trademarks and/or copyrights of Supercell.<br>This material is unofficial and is not endorsed by Supercell. For more information see Supercell's Fan Content Policy: <a href="https://supercell.com/en/fan-content-policy/" target="_blank">www.supercell.com/fan-content-policy.</a></p>
        </div>

        <div class="col item row web_credits">
            <a href="https://deco-website.netlify.app/" target="_blank">
                <div class="deco_logo-credits">
                    <img src="https://decow-services.netlify.app/images/logodeco.png">
                </div>
            </a>
        </div>
    </div>
</footer>`

const page_credits_footer = `
<div class="page-credits__medias">
    <h2>${cmwc[(1)].prefooter_title}</h2>
    <p>${cmwc[(1)].prefooter_description}</p>
    <div class="row justify-content-center d-flex page-credits__social-medias">
        <a href="${cmwc[(1)].social_1}" target="_blank" class="page-credits__social-medias-redirects">
            <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="${cmwc[(1)].social_2}" target="_blank" class="page-credits__social-medias-redirects">
            <i class="fa-brands fa-twitch"></i>
        </a>
    </div>
</div>

<div class="container p-absolute page-credits__Minis">
    <img src="cmwc_/ArcherQueen_Mini.png">
    <img src="cmwc_/Barbarian_King_Mini.png">
</div>`