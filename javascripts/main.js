function getUserOSLink ()
{
    var platform = navigator.platform.toLowerCase();

    if ( platform.indexOf( 'win' ) !== -1 ) return appsJson.Windows.v2rayN.autoImport;
    else if ( platform.indexOf( 'iphone' ) !== -1 || platform.indexOf( 'ipad' ) !== -1 || platform.indexOf( 'ipod' ) !== -1 || platform.indexOf( 'mac' ) !== -1 ) return appsJson.IOS.V2Box;
    else if ( platform.indexOf( 'android' ) !== -1 || platform.indexOf( 'linux arm' ) !== -1 ) return appsJson.Android.v2rayNG.autoImport;
    else return '';
}
function showTab(event, active) {
    var articles = document.getElementsByTagName('article');
    
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    var btns = document.querySelectorAll('.tabs > span');
    for (var i = 0; i < btns.length; i++) {
        btns[i].id = '';
    }

    document.getElementById(active).style.display = 'block';
    // event.currentTarget.classList.add('active');
    event.currentTarget.id = 'active';
}

document.getElementById('act_01').style.display = 'block';

function centerModal(modal) {
    const modalContent = modal.querySelector('.modal-content');
    const windowHeight = window.innerHeight;
    const modalHeight = modalContent.offsetHeight;
    
    if (modalHeight < windowHeight) {
        modalContent.style.top = '50%';
        modalContent.style.transform = 'translateY(-50%)';
    } else {
        modalContent.style.top = '0';
        modalContent.style.transform = 'none';
        modal.scrollTop = 0;
    }
}

const btns = document.querySelectorAll('.openPopup');

btns.forEach(btn => {
    btn.onclick = function(event) {
        event.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
        centerModal(modal);
    }
});

const closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(btn => {
    btn.onclick = function() {
        this.closest('.modal').style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

window.onresize = function() {
    const openPopup = document.querySelector('.modal[style="display: block;"]');
    if (openPopup) {
        centerModal(openPopup);
    }
}