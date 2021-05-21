/*collection*/

let borderLeft = document.querySelector('#border-left');
let skrollCollection = document.querySelector('#skroll-collection');

borderLeft.addEventListener('click', () => {
  skrollCollection.scrollIntoView({ behavior: 'smooth' });
});


/*degustation*/
let degustation = document.querySelector('#degustation');
let containerDegustation = document.querySelector('#container-degustation');

degustation.addEventListener('click', () => {
  containerDegustation.scrollIntoView({ behavior: 'smooth' });
});

/*contact*/

let contact = document.querySelector('#contact');
let containerFooter = document.querySelector('#container-footer');

contact.addEventListener('click', () => {
  containerFooter.scrollIntoView({ behavior: 'smooth' });
});