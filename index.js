//Part One: Getting Started

//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector('main');
console.log(mainEl);

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

//Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

//Add a class of flex-ctr to mainEl.
mainEl.classList = 'flex-ctr';

//Part Two: Creating a Menu Bar

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.querySelector('#top-menu');
console.log(topMenuEl);

//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.
topMenuEl.classList = 'flex-around';

//Part Three: Adding Menu Buttons
// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

//updated menu data structure from DomLab Part Two
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  //Iterate over the entire menuLinks array and for each "link" object
  menuLinks.forEach(menuLinks => {
    console.log(menuLinks);
     // Create an <a> element.
    const aElem = document.createElement('a');
    //On the new element, add an href attribute with its value set to the href property of the "link" object.
    aElem.setAttribute('href', menuLinks.href);
    //On the new element, add an href attribute with its value set to the href property of the "link" object.
    aElem.append(menuLinks.text);
    //Append the new element to the topMenuEl element.
    document.getElementById('top-menu').appendChild(aElem);
  })

  //Dom Manipulation Lab Part Two

//Parts One and Two:
  //copied code over from previous lab
  //added new elements to index.html and style.css

//Part Three: Adding the Submenu

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.querySelector('#sub-menu');

  //Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';
//   console.log(subMenuEl);

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// console.log(subMenuEl);

//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList = 'flex-around';

//Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

//Part Four: Adding Menu Interaction

  //Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);

//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function (evt){
    //The first line of code of the event listener function should call the event object's preventDefault() method.
evt.preventDefault();
//The second line of code of the function should immediately return if the element clicked was not an <a> element.
if (evt.target === topMenuEl){
    console.log('not a link');

} else {
    console.log(evt.target);
}
})