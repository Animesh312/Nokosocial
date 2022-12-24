// sidebar
const menuItems=document.querySelectorAll('.menu-item');

const changeActiveItem =()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');

        if(item.id!='notification'){
            document.querySelector('.notifications-popup').
            style.display='none';
        }
        else{
            document.querySelector('.notifications-popup').
            style.display='block';
        }
    })
})
