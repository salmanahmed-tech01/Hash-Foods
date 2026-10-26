const L=["S","M","L"];
const M=[
{id:"burgers",n:"Burgers",i:[["Mini Zinger Burger",200],["Mini Burger with Cheese",250],["Special Zinger Burger",300],["Special Cheese Burger",350],["Chicken Burger",350],["Jumbo Zinger Burger",400],["Jumbo Cheese Burger",450],["Beef Burger",420],["Chicken Melted Burger",500],["Steak Burger",500],["Beef Melted Burger",550],["Shapater Burger",550],["Molten Lava Burger",600],["Ahaha Zinger Burger",750]]},
{id:"spec",n:"Speciality",note:"Hash Food Speciality, beef and chicken",i:[["Smoke BBQ",420],["Barrel",430],["Chicago Holder",440],["Mushroom Sauce",460],["Cheese Chicky",580],["Hunter Double Layer",640]]},
{id:"pizza",n:"Pizza",note:"S = Small, M = Medium, L = Large. Flavours: Fajita, Afghani, Creamy Delight, Creamy Tikka, BBQ, Tikka, Tandoori Hot",i:[["Regular Pizza",[350,450,700]],["Hash Special Half & Half",[400,650,950]],["Lava Pizza",[600,900,1300]],["Kabab Stuffing Pizza",[450,700,1200]],["Tokyo Beef Special",[500,800,1000]],["Sauce Stuffing Pizza",[500,700,800]],["Calzone",[0,600,800]],["Extra Topping Cheese",[50,80,100]],["Extra Chicken",[100,100,150]]]},
{id:"fries",n:"Fries",i:[["Plain Fries",150],["Masala Fries",200],["Mayo Fries",200],["Cocktail Fries",350],["Pizza Fries Small",350],["Pizza Fries Large",450],["Fries Extra Topping",50]]},
{id:"rolls",n:"Rolls",i:[["Zinger Roll",200],["Chicken Roll",200],["Seekh Kabab Roll",200],["Beef Roll",230],["Malai Boti Roll",230],["Zinger Mayo Roll",250],["Chicken Mayo Roll",250],["Seekh Kabab Mayo / Cheese Roll",250],["Beef Mayo / Cheese Roll",280],["Malai Boti Mayo / Cheese Roll",280],["Jumbo Zinger Roll",430],["Shapater Roll",850]]},
{id:"sand",n:"Sandwiches",i:[["Chicken Sandwich",350],["Club Sandwich",400],["BBQ Club",450],["Beef Boti Club",450],["Malai Boti Club",450],["Zinger Club",450],["Lava Sandwich",550]]},
{id:"pasta",n:"Pasta",note:"S = Small, L = Large",i:[["Tikka Pasta",[300,0,400]],["Malai Boti Pasta",[350,0,450]]]},
{id:"bbq",n:"BBQ Plates",i:[["Leg Tikka",350],["Chest Tikka",430],["Bihari Tikka",470],["Malai Tikka",470],["Malai Boti Plate",480],["Malai Boti Cheese Plate",600],["Chicken Boti Plate",430],["Beef Boti Plate",550],["Seekh Kabab Plate",450],["Reshmi Kabab Plate",430],["Turkish Kabab Plate",450],["Chandan Kabab Plate",500],["Dhaga Kabab Plate",550],["Gola Kabab Plate",550]]},
{id:"half",n:"BBQ Single / Half",i:[["Malai Boti Half",250],["Malai Boti Cheese Half",300],["Chicken Boti Half",250],["Beef Boti Half",300],["Seekh Kabab Half",250],["Reshmi Kabab Half",250],["Turkish Kabab Half",250],["Chandan Kabab Half",250],["Dhaga Kabab Half",300],["Gola Kabab Half",300]]},
{id:"broast",n:"Broast",i:[["Leg Broast",400],["Chest Broast",450],["Lava Broast",600],["4 Pcs Boneless Broast",650]]},
{id:"plat",n:"Platters",i:[["Family Plater",1100,"Leg tikka, seekh kabab single plate, special burger, zinger roll, 3 puri"],["Bacha Party",1200,"4 mini burgers, 2 zinger rolls, mayo fries, drink"],["Phantom",1700,"Zinger burger, chest tikka, beef seekh kabab, club sandwich, 1.5 L drink"],["Desi Chaska",2100,"Chest tikka, leg tikka, malai boti plate, reshmi kabab plate, chicken burger, 1.5 L drink"],["Hash Plater",2200,"Beef boti plate, chicken boti plate, chandan kabab plate, leg tikka, dhaga kabab plate, 1.5 L drink"],["House Full",2300,"2 chest tikka, half malai boti, half chicken boti, half beef boti, half reshmi kabab, half dhaga kabab, 6 puri, 1.5 L drink"],["Club House",2350,"2 zinger burgers, 2 club sandwiches, 2 small pasta, 2 zinger rolls, 1.5 L drink"]]},
{id:"deals",n:"Deals",i:[["Deal 1",700,"Small pizza, 2 zinger rolls"],["Deal 2",550,"Jumbo zinger with fries, 1 zinger roll"],["Deal 3",750,"Jumbo zinger with fries, 2 zinger rolls"],["Deal 4",950,"2 jumbo zingers, mayo fries, zinger roll"],["Deal 5",750,"2 club sandwiches, fries, zinger roll"],["Deal 6",2000,"Shapater burger"],["Deal 7",1400,"Large pizza, 2 zinger burgers, fries"],["Deal 8",750,"2 jumbo zinger burgers, fries"],["Deal 9",600,"Chest broast, zinger roll, fries"],["Deal 10",700,"Small pizza, jumbo zinger burger, fries"],["Deal 11",1200,"2 large pizzas"],["Deal 12",800,"2 leg tikka, 4 puri"],["Deal 13",550,"Small pizza, fries, small pasta"],["Deal 14",1300,"3 jumbo zinger burgers, fries, litre drink"],["Deal 15",1500,"2 jumbo zinger burgers, fries, 4 zinger rolls"],["Deal 16",1150,"Club sandwich, jumbo zinger, fries, 2 zinger rolls"],["Deal 17",1350,"Large, medium and small pizza"],["Deal 18",2700,"2 large pizzas, 2 jumbo zinger burgers, fries, 4 zinger rolls"],["Deal 19",590,"Chest tikka, 2 puri"],["Deal 20",600,"Seekh kabab plate, 2 puri, drink"],["Deal 21",700,"Malai boti cheese plate, 2 puri, drink"],["Deal 22",500,"2 mini zinger burgers, fries, drink"],["Deal 23",650,"Malai tikka, 2 puri, drink"],["Deal 24",650,"Gola kabab plate, 2 puri, drink"],["Deal 25",400,"Leg tikka, 2 puri"],["Deal 26",650,"Bihari tikka, 2 puri, drink"]]}
];
const $=s=>document.querySelector(s);
let svc="Dine-in";
const fmt=p=>Array.isArray(p)?p.map((v,i)=>v?L[i]+" "+v:"").filter(Boolean).join(" · "):"Rs "+p;
$("#tabs").innerHTML=M.map(c=>`<a href="#c-${c.id}" data-id="${c.id}">${c.n}</a>`).join("");
$("#list").innerHTML=M.map(c=>`<section class="cat" id="c-${c.id}"><h3>${c.n}</h3>${c.note?`<p class="note">${c.note}</p>`:""}<div class="grid">`+
  c.i.map(([n,p,d])=>`<button class="item"><span><b>${n}</b>${d?`<small>${d}</small>`:""}</span><em>${fmt(p)}</em></button>`).join("")+`</div></section>`).join("");
const setNH=()=>document.documentElement.style.setProperty("--nh",$(".nav").offsetHeight+"px");
setNH();addEventListener("resize",setNH);
const tabEls=[...document.querySelectorAll("#tabs a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){tabEls.forEach(t=>{const on=t.dataset.id==e.target.id.slice(2);t.classList.toggle("on",on);})}}),{rootMargin:"-30% 0px -65% 0px"});
document.querySelectorAll(".cat").forEach(s=>io.observe(s));
document.querySelectorAll(".svc").forEach(b=>b.onclick=()=>{svc=b.dataset.s;document.querySelectorAll(".svc").forEach(x=>x.classList.toggle("on",x==b))});
$("#list").onclick=e=>{
  const it=e.target.closest(".item"); if(!it)return;
  const [num,name]=$("#branch").value.split("|");
  const msg=`Hi Hash Food (${name} branch), I'd like to order for ${svc}: ${it.querySelector("b").textContent}`;
  window.open("https://wa.me/"+num+"?text="+encodeURIComponent(msg),"_blank");
};
