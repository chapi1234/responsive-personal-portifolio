let menu =  document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}

menu.onscroll = () => {
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
})

// javascript typing part


document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Full-Stack Web Developer","web designer", "graphic designer", "Video Editor", "computative programmer"];
    let roleIndex = 0;
    const roleElement = document.querySelector('.skills-list');
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000;

    function typeRole() {
        if (roleIndex < roles.length) {
            const currentRole = roles[roleIndex];
            roleElement.textContent = '';
            let charIndex = 0;

            function typeChar() {
                if (charIndex < currentRole.length) {
                    roleElement.textContent += currentRole.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, typingSpeed);
                } else {
                    setTimeout(eraseRole, newTextDelay);
                }
            }

            typeChar();
        }
    }

    function eraseRole() {
        if (roleIndex < roles.length) {
            const currentRole = roles[roleIndex];
            let charIndex = currentRole.length;

            function eraseChar() {
                if (charIndex > 0) {
                    roleElement.textContent = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(eraseChar, erasingSpeed);
                } else {
                    roleIndex = (roleIndex + 1) % roles.length;
                    typeRole();
                }
            }

            eraseChar();
        }
    }

    typeRole();
});
