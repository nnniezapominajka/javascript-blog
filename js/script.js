'use strict';








function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked', event);
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

    const titleClickHandler = function(event){
        console.log('Link was clicked!');

    /* remove class 'active' from all article links  */

    /* add class 'active' to the clicked link */

    /* remove class 'active' from all articles */

    /* get 'href' attribute from the clicked link */

    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article */

    }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }








