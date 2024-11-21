const progressBar=document.querySelectorAll('.slide span'),
proceedBtn=document.querySelector('.proceedBtn');

proceedBtn.onclick=(e)=>{
    e.preventDefault();
    // validate input 

    document.querySelector('.content-1').classList.add('hide');
    document.querySelector(`.${e.target.dataset.next}`).classList.remove('hide');
    progressBar[1].classList.add('progress');

}