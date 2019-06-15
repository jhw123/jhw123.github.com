let curLang='en';
if(localStorage.getItem("jhwlang"))
	curLang = localStorage.getItem("jhwlang");

function translate(lang='ko', speed=1000){
	if(speed === 0){
		for(let elem of document.querySelectorAll(`[${lang}]`))
			elem.innerHTML = elem.getAttribute(`${lang}`);
	}else if(curLang != lang){
		for(let elem of document.querySelectorAll(`[${lang}]`))
			translateElement(lang, elem, speed);
	}
	curLang = lang;
	localStorage.setItem('jhwlang', lang);
}

function translateElement(transto, elem = document.getElementById("target"), speed){
	const kor = elem.getAttribute(transto);
	let temp_str = elem.textContent.trim();

	let candidates = [...Array(Math.min(temp_str.length, kor.length)).keys()];
	shuffle(candidates);

	let cnt = Math.max(kor.length, Math.abs(temp_str.length - kor.length));
	const timeInt = speed/cnt;

	const loop = setInterval(()=>{
		if(cnt >= 0){
			if(candidates.length > 0){
				idx= candidates.pop();
				temp_str = temp_str.replaceAt(idx, kor[idx]);
			}
			if(temp_str.length > kor.length)
				temp_str = temp_str.slice(0, -1);
			else if(temp_str.length < kor.length)
				temp_str = temp_str+kor[temp_str.length];
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

translate(curLang, 0);
document.getElementById('en-btn').onclick = ()=>{translate('en')};
document.getElementById('ko-btn').onclick = ()=>{translate('ko')};