'use strict';








function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked !', event);
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);
    const activeArticles = document.querySelectorAll('.active');
    for (let activeArticle of activeArticles) {
       activeArticle.classList.remove('active');
    }
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector', articleSelector);
    const targetArticle = document.querySelector(articleSelector);
    targetArticle.classList.add('active');
    console.log('targetArticle', targetArticle);
    }

  /*
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  */

   








