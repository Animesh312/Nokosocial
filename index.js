// sidebar
const menuItems=document.querySelectorAll('.menu-item');

// messagess
const messagesNotification = document.querySelector('#messages-notification');
const messages= document.querySelector('.messages');
const message=messages.querySelector('.message');
const messageSearch=document.querySelector('#message-search');

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
            document.querySelector('#notifications .notificaton-count').style.display='none';
        }
    })
})

// ==============messages======
// search chat
.messageSearch.addEventListener('keyup',searchMessage){
    const val=messageSearch.ariaValueMax.toLowerCase();
    message.forEach(chat=>{
        console.log(val);
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }
        else{
            chat.style.display='none';
        }
    })
}


// highlight message card 
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow='none';
    }, 2000); 
   
   
})
