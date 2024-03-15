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
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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


