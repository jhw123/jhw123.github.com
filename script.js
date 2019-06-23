"use strict";

let curLang='en';
if(localStorage.getItem("jhwlang"))
	curLang = localStorage.getItem("jhwlang");

function translate(lang, speed=1000){
	if(speed === 0){
		for(let elem of document.querySelectorAll("[transto]")){
			const trans_str = elem.getAttribute("transto");
			let temp_str = elem.textContent;
			elem.setAttribute("transto", temp_str);
			elem.innerHTML = trans_str;
		}
	}else if(curLang !== lang){
		for(let elem of document.querySelectorAll("[transto]"))
			translateElement(elem, speed);
	}
	curLang = lang;
	localStorage.setItem('jhwlang', lang);
}

function translateElement(elem, speed){
	const trans_str = elem.getAttribute("transto");
	let temp_str = elem.textContent;

	elem.setAttribute("transto", temp_str);

	let candidates = [...Array(Math.min(temp_str.length, trans_str.length)).keys()];
	shuffle(candidates);

	let cnt = Math.max(trans_str.length, Math.abs(temp_str.length - trans_str.length));
	const timeInt = speed/cnt;

	const loop = setInterval(()=>{
		if(cnt >= 0){
			if(candidates.length > 0){
				const idx= candidates.pop();
				temp_str = temp_str.replaceAt(idx, trans_str[idx]);
			}
			if(temp_str.length > trans_str.length)
				temp_str = temp_str.slice(0, -1);
			else if(temp_str.length < trans_str.length)
				temp_str = temp_str+trans_str[temp_str.length];
			elem.innerHTML = temp_str;
			cnt--;
		}else{
			clearInterval(loop);
		}
	}, timeInt);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

if(curLang == "ko")
	translate("ko", 0);
document.getElementById('en-btn').onclick = ()=>{translate("en")};
document.getElementById('ko-btn').onclick = ()=>{translate("ko")};