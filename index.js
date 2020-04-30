let tweet = document.querySelector('.btn');
let popup = document.querySelector('.poptweet');
let tweetMobile = document.querySelector('.poptweet .btn')

tweet.addEventListener('click',function(){
    popup.classList.toggle('active');
});

tweetMobile.addEventListener('click',function(){
    popup.classList.toggle('active');
});