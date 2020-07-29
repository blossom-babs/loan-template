// alert('this should work')

// function openNav() {
//     document.getElementById("mySideNav").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("mySideNav").style.width = "0";
// }

const openNav = document.getElementById('openSideNav')
openNav.addEventListener('click', ()=>{
    const sideNav = document.getElementById('mySideNav')
    sideNav.style.display = 'block';
    console.log('but this ought to work nau')
})

const closeNav = document.getElementById('closeSideNav')
closeNav.addEventListener('click', ()=>{
    const sideNav = document.getElementById('mySideNav')
    sideNav.style.display = 'none';
})