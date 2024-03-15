const bar = document.getElementById('bar');
const closs = document.getElementById('closs');
const nav = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(closs)
{
    closs.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}