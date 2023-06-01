'use strict';
const ads = document.querySelector('.ads');
const items = document.querySelectorAll('.items');
const propsLists = document.querySelectorAll('.props__list');
const propsItemsFour = document.querySelectorAll('.props__item_four');
const item = document.querySelectorAll('.item');
const itemTitle = document.querySelectorAll('.item__title');


ads.remove();

propsLists[3].remove();
itemTitle[3].after(propsLists[3]);
itemTitle[2].after(propsLists[4]);

const elemTitle = document.createElement('h2');
const itemTitleThree = document.createTextNode('This и прототипы объектов');
elemTitle.append(itemTitleThree);
itemTitle[2].replaceWith(elemTitle);

const itemFourBlockFour = document.querySelector('.item_two .content .props__item_four');
propsItemsFour[3].after(itemFourBlockFour);

const itemsABBlockTwo = document.querySelectorAll('.item_six .content .props__item_two');
propsLists[2].append(itemsABBlockTwo[0], itemsABBlockTwo[1]);

itemTitle[1].remove();
propsLists[2].before(itemTitle[3]);
propsLists[3].before(itemTitle[4]);
propsLists[5].before(itemTitle[1]);

console.log('itemTitle', itemTitle);
console.log(propsLists[2]);

items[0].prepend(item[1], item[2], item[3]);




