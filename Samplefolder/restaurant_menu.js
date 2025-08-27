const breakfastMenu = ['Poha-12','Thepla-20','Tea-10'];
const maincourseMenu = ['Gujrati thali-100','Punjabi thali-200','dal-50','roti-15'];
const dessertMenu = ['Ice cream','gulab jamun','cake','Fruit Salad'];

const breakfastMenuItemsHTml = breakfastMenu.map((item,i)=>
    `<p>Item ${i+1}:${item}<p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuItemsHTml;


//Item 1:poha
//Item 2:thepla
let maincourse=" ";
    maincourseMenu.forEach((item,i)=>{
    maincourse+=`<p>Item ${i+1}:${item}<p>`;});
    document.getElementById('maincourseMenuItems').innerHTML=maincourse;

let dessert=" ";
    for(let i=0;i<dessertMenu.length;i++){
        dessert+=`<p>Item ${i+1}:${dessertMenu[i]}</p>`;
    }
    document.getElementById('dessertMenuItems').innerHTML=dessert;
    