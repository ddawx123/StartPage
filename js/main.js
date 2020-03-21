var version = "202003.1";
console.info("Version " + version);
var backend = "https://api.dingstudio.cn/api";
var lastModified0 = "";
var currentEditingNote = "";
var currentNotes = "";
var maximumNoteNumber = "";
var currentNoteIsNew = true;
var pinnedNoteNum = "";
var currentTime = "";
var username = "";
var birthday = "";
var thePopUp;
var popUpClosing = false;
var currentEditingNav;
var cusNavIconErrCount = 0;
var cusNavSubmitCount = 0;
var currentDeletingNav;
var currentSearchEngine = localStorage.getItem("searchEngPref");
var bgPreference = localStorage.getItem("bgPreference");
var cusWallpaper = localStorage.getItem("cusWallpaper");
var reduceMotion = localStorage.getItem("reduceMotion") == "on";
var pushClass;
var pushTitle;
var pushContent;
var pushStartTime;
var pushStopTime;
var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
var isAndroid = ua.match(/(Android)\s+([\d.]+)/);
var isMobile = isIphone || isAndroid;
window.oncontextmenu = () => {
	return false;
};
window.onkeydown = e => {
	if ((e.ctrlKey || e.metaKey) && e.keyCode == 83) {
		return false;
	} else if (input0.style.opacity != "0" && cover1.style.display != "block") {
		input0.focus();
	}
};
window.onload = () => {
	loadJs("./js/widget-cc5d550.js");
	if (topNotificationBar.style.top != "0px") {
		processTopNotification();
	}
}
function Input_KeyDown(event) {
	if (event.keyCode == 13) {
		var str = input0.value;
		var finalStr = str.replace("翻译：", "");
		if (/^[a-z]+:\/\/[a-z0-9_\-\/.#?=%]+$/i.test(str)) {
			open(str);
			Input_Blur();
			return false;
		} else if (str.indexOf("翻译：") != -1) {
			form0.action = "https://fanyi.baidu.com/#en/zh/" + finalStr;
			input0.name = "";
		} else {
			switch (currentSearchEngine) {
			case 'baidu':
				form0.action = "https://www.baidu.com/s";
				input0.name = "word";
				break;
			case 'bing':
				form0.action = "https://www.bing.com/search";
				input0.name = "q";
				break;
			case 'google':
				form0.action = "https://www.google.com/search";
				input0.name = "q";
				break;
			}
		}
		setTimeout(() => Input_Blur(), 50);
	}
}
function Input_Focus() {
	quotebox.style.opacity = "1";
	searchOptBox.style.display = "block";
	input0.classList.add("focus");
	setTimeout(() => {
		searchOptBox.style.opacity = "1";
		searchOptBox.style.top = innerWidth > 600 ? "270px": "155px";
	},
	100);
	if (innerWidth <= 600) {
		title.style.top = "30px";
	}
	if (bgPreference == "Live") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "scale(1.1)";
		}
		liveBgBox.style.filter = "blur(10px)";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "scale(1.1)";
		}
		bgbox.style.filter = "blur(10px)";
	}
}
function Input_Blur() {
	input0.value = "";
	quotebox.style.opacity = "0";
	quotebox.style.animation = "none";
	searchOptBox.style.opacity = "0";
	searchOptBox.style.top = "";
	input0.classList.remove("focus");
	setTimeout(() => {
		searchOptBox.style.display = "none";
		searchOptBox.style.top = "";
	},
	250);
	if (innerWidth <= 600) {
		title.style.top = "100px";
		input0.style.top = "";
	}
	if (bgPreference == "Live") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "";
		}
		liveBgBox.style.filter = "";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "";
		}
		bgbox.style.filter = "";
	}
	hideKeyword();
}
function switchSearchEng(searchEng) {
	switch (searchEng) {
	case 'baidu':
		localStorage.setItem("searchEngPref", "baidu");
		currentSearchEngine = "baidu";
		searchOpt1.classList.add("selected");
		searchOpt2.classList.remove("selected");
		searchOpt3.classList.remove("selected");
		break;
	case 'bing':
		localStorage.setItem("searchEngPref", "bing");
		currentSearchEngine = "bing";
		searchOpt2.classList.add("selected");
		searchOpt1.classList.remove("selected");
		searchOpt3.classList.remove("selected");
		break;
	case 'google':
		localStorage.setItem("searchEngPref", "google");
		currentSearchEngine = "google";
		searchOpt3.classList.add("selected");
		searchOpt1.classList.remove("selected");
		searchOpt2.classList.remove("selected");
		break;
	}
	input0.focus();
}
function Keyword_Click() {
	setTimeout(() => Input_Blur(), 50);
}
function hideKeyword() {
	keyword.style.height = "0px";
	keyword.style.opacity = "0";
	setTimeout(() => {
		keyword.style.display = "none";
		keyword.innerHTML = "";
		keyword.style.height = "auto";
		keyword.style.opacity = "1";
	},
	250);
}
function Title_Click(event) {
	if (navbox.style.display != "block") {
		input0.style.opacity = "0";
		Input_Blur();
		quotebox.style.opacity = "0";
		quotebox.style.animation = "none";
		if (bgPreference == "Live") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "scale(1.1)";
			}
			liveBgBox.style.filter = "blur(10px)";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "scale(1.1)";
			}
			bgbox.style.filter = "blur(10px)";
		}
		navbox.style.display = "block";
		btnUser.style.display = "block";
		btnSettings.style.display = "block";
		document.getElementById("tp-weather-widget").style.opacity = "0.5";
		document.getElementById("tp-weather-widget").style.pointerEvents = "auto";
	} else {
		Navbox_Click(event)
	}
}
function titleHover() {
	title.style.transform = "scale(1.15)";
	setTimeout(() => title.style.transform = "scale(1.1)", 250);
}
function titleHover2() {
	title.style.transform = "scale(0.95)";
	setTimeout(() => title.style.transform = "scale(1)", 250);
}
function Navbox_Click(event) {
	var obj = event.srcElement;
	if (obj.classList.contains("shouldNotFade") == false) {
		input0.style.opacity = "1";
		if (bgPreference == "Live") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "";
			}
			liveBgBox.style.filter = "";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "";
			}
			bgbox.style.filter = "";
		}
		navbox.style.opacity = "0";
		btnUser.style.opacity = "0";
		btnSettings.style.opacity = "0";
		setTimeout(() => {
			navbox.style.display = "none";
			btnUser.style.display = "none";
			btnSettings.style.display = "none";
			navbox.style.opacity = "";
			btnUser.style.opacity = "";
			btnSettings.style.opacity = "";
		},
		250);
		document.getElementById("tp-weather-widget").style.opacity = "0";
		document.getElementById("tp-weather-widget").style.pointerEvents = "none";
		if (frmSetCustomNav.style.opacity = "1") {
			closeFrmCusNav();
		}
	}
}
function loadNotes() {
	if (currentNotes != "0") {
		textNote.style.left = "200px";
		textNote.style.width = "460px";
		noteListWrap.style.left = "0px";
		for (var i = 1; i < Number(maximumNoteNumber) + 1; i++) {
			currentNoteTitle = localStorage.getItem("note" + i);
			currentNoteTime = localStorage.getItem("noteTime" + i);
			if (currentNoteTitle != undefined) {
				var newNoteDiv = document.createElement("div");
				newNoteDiv.className = "noteItem";
				newNoteDiv.classList.add("shouldNotFade");
				newNoteDiv.id = "noteItem" + i;
				newNoteDiv.onclick = function() {
					openNote(this);
				}
				var newNoteSpan1 = document.createElement("span");
				newNoteSpan1.className = "noteTitle";
				newNoteSpan1.classList.add("shouldNotFade");
				newNoteSpan1.id = "noteTitle" + i;
				var newNoteSpan2 = document.createElement("span");
				newNoteSpan2.className = "noteTime";
				newNoteSpan2.classList.add("shouldNotFade");
				newNoteSpan2.id = "noteTime" + i;
				newNoteDiv.appendChild(newNoteSpan1);
				newNoteDiv.appendChild(newNoteSpan2);
				noteList.appendChild(newNoteDiv);
				document.getElementById("noteTitle" + i).innerText = localStorage.getItem("note" + i);
				document.getElementById("noteTime" + i).innerText = localStorage.getItem("noteTime" + i);
			}
		}
	}
	textNote.value = "";
	pinnedNoteNum = localStorage.getItem("pinnedNoteNum");
	if (pinnedNoteNum != undefined && pinnedNoteNum != "") {
		pinnedNoteContent.innerText = localStorage.getItem("note" + pinnedNoteNum);
		pinnedNoteTime.innerText = localStorage.getItem("noteTime" + pinnedNoteNum);
		showPinnedNote();
	}
}
function newNote() {
	noteToolBar.style.display = "none";
	if (document.getElementById("noteItem" + currentEditingNote) != undefined) {
		document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
	}
	currentNotes = Number(currentNotes) + 1;
	currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem", "")) + 1;
	currentNoteIsNew = true;
	textNote.value = "";
	textNote.focus();
	currentNotes = Number(currentNotes) - 1;
	currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem", "")) - 1;
}
function openNote(obj) {
	if (document.getElementById("noteItem" + currentEditingNote) != undefined) {
		document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
	}
	currentNoteIsNew = false;
	currentEditingNote = obj.id.replace("noteItem", "");
	textNote.value = localStorage.getItem("note" + currentEditingNote);
	noteToolBar.style.display = "block";
	document.getElementById("noteItem" + currentEditingNote).classList.add("current");
}
function noteChanged() {
	if (textNote.value != "" && noteListWrap.style.left != "0px") {
		textNote.style.left = "200px";
		textNote.style.width = "460px";
		noteListWrap.style.left = "0px";
		noteToolBar.style.display = "block";
	}
	if (textNote.value != "" && currentNoteIsNew == true) {
		currentNotes = Number(currentNotes) + 1;
		currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem", "")) + 1;
		var newNoteDiv = document.createElement("div");
		newNoteDiv.className = "noteItem";
		newNoteDiv.classList.add("shouldNotFade");
		newNoteDiv.classList.add("current");
		newNoteDiv.id = "noteItem" + currentEditingNote;
		newNoteDiv.onclick = function() {
			openNote(this);
		}
		var newNoteSpan1 = document.createElement("span");
		newNoteSpan1.className = "noteTitle";
		newNoteSpan1.classList.add("shouldNotFade");
		newNoteSpan1.id = "noteTitle" + currentEditingNote;
		var newNoteSpan2 = document.createElement("span");
		newNoteSpan2.className = "noteTime";
		newNoteSpan2.classList.add("shouldNotFade");
		newNoteSpan2.id = "noteTime" + currentEditingNote;
		newNoteDiv.appendChild(newNoteSpan1);
		newNoteDiv.appendChild(newNoteSpan2);
		noteList.appendChild(newNoteDiv);
		noteList.scrollTop = noteList.clientHeight;
		localStorage.setItem("currentNotes", currentNotes);
		localStorage.setItem("maximumNoteNumber", currentEditingNote);
		noteToolBar.style.display = "block";
		currentNoteIsNew = false;
	}
	if (textNote.value == "" && currentNotes == "1" && noteListWrap.style.left == "0px") {
		textNote.style.left = "0px";
		textNote.style.width = "660px";
		noteListWrap.style.left = "-200px";
		noteToolBar.style.display = "none";
	}
	if (textNote.value == "") {
		noteList.removeChild(document.getElementById("noteItem" + currentEditingNote));
		currentNotes = Number(currentNotes) - 1;
		currentNoteIsNew = true;
		localStorage.setItem("currentNotes", currentNotes);
		localStorage.setItem("maximumNoteNumber", Number(noteList.lastElementChild.id.replace("noteItem", "")));
		noteToolBar.style.display = "none";
	}
	if (document.getElementById("noteTitle" + currentEditingNote) != undefined) {
		document.getElementById("noteTitle" + currentEditingNote).innerText = textNote.value;
		document.getElementById("noteTime" + currentEditingNote).innerText = currentTime;
	}
	if (currentEditingNote == pinnedNoteNum) {
		pinnedNoteContent.innerText = textNote.value;
		pinnedNoteTime.innerText = currentTime;
	}
	if (currentEditingNote == pinnedNoteNum && textNote.value == "") {
		unpinNote();
	}
}
function saveNote() {
	noteChanged();
	if (textNote.value != "") {
		localStorage.setItem("note" + currentEditingNote, textNote.value);
		localStorage.setItem("noteTime" + currentEditingNote, currentTime);
	} else {
		localStorage.removeItem("note" + currentEditingNote);
		localStorage.removeItem("noteTime" + currentEditingNote);
	}
}
function delNote() {
	if (confirm("删除这条便笺？")) {
		textNote.value = "";
		saveNote();
	}
}
function pinNote() {
	pinnedNoteContent.innerText = textNote.value;
	pinnedNoteTime.innerText = document.getElementById("noteTime" + currentEditingNote).innerText;
	pinnedNoteNum = currentEditingNote;
	localStorage.setItem("pinnedNoteNum", currentEditingNote);
	showPinnedNote();
}
function showPinnedNote() {
	pinnedBox.style.display = "block";
	setTimeout(() => {
		pinnedBox.style.opacity = "1";
		pinnedBox.style.transform = "scale(1.05)";
	},
	100);
	setTimeout(() => pinnedBox.style.transform = "scale(1)", 350);
}
function unpinNote() {
	pinnedNoteNum = "";
	localStorage.setItem("pinnedNoteNum", "");
	pinnedBox.style.transform = "scale(1.05)";
	setTimeout(() => {
		pinnedBox.style.transform = "scale(0.5)";
		pinnedBox.style.opacity = "0";
	},
	250);
	setTimeout(() => pinnedBox.style.display = "none", 500);
}
function pinnedNoteClick() {
	pinnedNoteNum = localStorage.getItem("pinnedNoteNum");
	openNote(document.getElementById("noteItem" + pinnedNoteNum));
	if (navbox.style.display != "block") {
		Title_Click();
	}
	nbSwitch2_Click();
}
function navboxScale0() {
	navbox1.style.transform = "scale(0.9)";
	navbox2.style.transform = "scale(0.9)";
}
function navboxScale1() {
	navbox1.style.transform = "scale(1)";
	navbox2.style.transform = "scale(1)";
}
function nbSwitch1_Click() {
	if (navbox1.style.left != "0px") {
		nbSwitch2_0.classList.remove("current");
		nbSwitch1_0.classList.add("current");
		navboxScale0();
		setTimeout(() => {
			navbox1.style.left = "0px";
			navbox2.style.left = "100%";
		}, 250);
		setTimeout(() => navboxScale1(), 500);
	}
}
function nbSwitch2_Click() {
	if (navbox2.style.left != "0px") {
		nbSwitch1_0.classList.remove("current");
		nbSwitch2_0.classList.add("current");
		navboxScale0();
		setTimeout(() => {
			navbox1.style.left = "-100%";
			navbox2.style.left = "0px";
		}, 250);
		setTimeout(() => navboxScale1(), 500);
	}
}
function showAbout() {
	pVersion.innerText = version;
	showPop(popAbout);
}
function showPop(thePopUp) {
	cover1.style.display = "block";
	thePopUp.style.display = "block";
	if (reduceMotion === false) {
		setTimeout(() => {
			cover1.style.opacity = "1";
			thePopUp.style.opacity = "1";
			thePopUp.classList.add("showPop");
			setTimeout(() => {
				thePopUp.style.transform = "rotate3d(0,0,0,0deg)";
				thePopUp.classList.remove("showPop");
			},
			350);
		},
		100);
	} else {
		cover1.style.opacity = "1";
		thePopUp.style.transition = "all 0s";
		thePopUp.style.transform = "rotate3d(0,0,0,0deg)";
		thePopUp.style.transition = "all 0.25s";
		setTimeout(() => thePopUp.style.opacity = "1", 25);
	}
}
function btnCloseHover(obj) {
	if (reduceMotion === false) {
		thePopUp = obj.parentNode;
		thePopUp.style.transform = "rotate3d(1,1,0,5deg)";
	}
}
function btnCloseHover2() {
	if (reduceMotion === false) {
		if (popUpClosing == false) {
			thePopUp.style.transform = "rotate3d(0,0,0,0deg)";
		}
	}
}
function closePop(obj) {
	popUpClosing = true;
	cover1.style.opacity = "0";
	obj.style.opacity = "0";
	if (reduceMotion === false) {
		obj.style.transform = "rotate3d(1,1,0,20deg)";
	}
	setTimeout(() => {
		cover1.style.display = "none";
		obj.style.display = "none";
		if (reduceMotion === false) {
			obj.style.transform = "rotate3d(1,1,0,90deg)";
		}
		popUpClosing = false;
	},
	350);
}
btnBrowse.onclick = () => {
	inputImg.value = "";
	inputImg.click();
};
inputImg.onchange = e => {
	var reader = new FileReader();
	reader.onload = () => {
		localStorage.setItem("cusWallpaper", reader.result);
		cusWallpaper = reader.result;
		bgPreBoxInCus.classList.remove("unset");
		bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")";
		changeWp(document.getElementById("bgPreBoxCus"));
	}
	reader.readAsDataURL(e.target.files[0]);
};
function changeWp(obj) {
	switch (obj.id) {
	case 'bgPreBoxCus':
		if (cusWallpaper) {
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = cusWallpaper;
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Custom");
			bgPreference = "Custom";
		}
		break;
	case 'bgPreBoxD1':
		liveBgBox.style.display = "none";
		liveBgBox.pause();
		bgbox.src = "./images/BG_A_Default_1.jpg";
		bgbox.style.opacity = "1";
		bgPreBoxInCus.classList.remove("selected");
		bgPreBoxIn1.classList.add("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default");
		bgPreference = "Default";
		break;
	case 'bgPreBoxD2':
		liveBgBox.style.display = "none";
		liveBgBox.pause();
		bgbox.src = "./images/BG_A_Default_2.jpg";
		bgbox.style.opacity = "1";
		bgPreBoxInCus.classList.remove("selected");
		bgPreBoxIn2.classList.add("selected");
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default2");
		bgPreference = "Default2";
		break;
	case 'bgPreBoxD3':
		liveBgBox.style.display = "none";
		liveBgBox.pause();
		bgbox.src = "./images/BG_A_Default_3.jpg";
		bgbox.style.opacity = "1";
		bgPreBoxInCus.classList.remove("selected");
		bgPreBoxIn3.classList.add("selected");
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default3");
		bgPreference = "Default3";
		break;
	case 'bgPreBoxBing':
		liveBgBox.style.display = "none";
		liveBgBox.pause();
		bgbox.src = bingWallpaper.url;
		bgbox.style.opacity = "1";
		bgPreBoxInCus.classList.remove("selected");
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.add("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Bing");
		bgPreference = "Bing";
		break;
	case 'bgPreBoxLive':
		liveBgBox.src = "./videos/Live_Wallpaper_1.mp4";
		liveBgBox.style.display = "block";
		liveBgBox.play();
		setTimeout(() => liveBgBox.style.opacity = "1", 50);
		bgbox.style.opacity = "0";
		bgPreBoxInCus.classList.remove("selected");
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.add("selected");
		localStorage.setItem("bgPreference", "Live");
		bgPreference = "Live";
		break;
	}
}
function getPostData(data) {
	const formData = new FormData();
	for (const key in data) {
		data[key] && formData.append(key, data[key]);
	}
	return {
		body: formData,
		method: "POST"
	};
}
function Time() {
	var date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	hours = date.getHours();
	minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	titleText.innerText = hours + ":" + minutes;
	currentTime = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
}
setInterval(Time, 1000);
function pinnedNoteHover(ev, obj) {
	if (topNotificationBar.style.top != "0px") {
		m_clientX = ev.clientX - obj.offsetLeft;
		m_clientY = ev.clientY - obj.offsetTop;
		pinnedNoteW = window.getComputedStyle(obj).width.replace("px", "");
		pinnedNoteH = window.getComputedStyle(obj).height.replace("px", "");
		if (m_clientX < pinnedNoteW * 0.3 && m_clientY < pinnedNoteH * 0.3) {
			obj.style.transform = "rotateX(10deg) rotateY(-5deg)";
		}
		if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY < pinnedNoteH * 0.3) {
			obj.style.transform = "rotateX(10deg)";
		}
		if (m_clientX > pinnedNoteW * 0.7 && m_clientY < pinnedNoteH * 0.3) {
			obj.style.transform = "rotateX(10deg) rotateY(5deg)";
		}
		if (m_clientX < pinnedNoteW * 0.3 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
			obj.style.transform = "rotateY(-5deg)";
		}
		if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
			obj.style.transform = "rotate3d(0,0,0,0deg)";
		}
		if (m_clientX > pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
			obj.style.transform = "rotateY(5deg)";
		}
		if (m_clientX < pinnedNoteW * 0.3 && m_clientY > pinnedNoteH * 0.7) {
			obj.style.transform = "rotateX(-10deg) rotateY(-5deg)";
		}
		if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.7) {
			obj.style.transform = "rotateX(-10deg)";
		}
		if (m_clientX > pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.7) {
			obj.style.transform = "rotateX(-10deg) rotateY(5deg)";
		}
	}
	btnUnpin.style.opacity = "1";
}
function pinnedNoteHover2(obj) {
	obj.style.transform = "rotate3d(0,0,0,0deg)";
	btnUnpin.style.opacity = "0";
}
function cusNavClick(event, obj) {
	if (currentEditingNav != obj) {
		currentEditingNav = obj;
		frmSetCustomNav.style.left = event.clientX - 150 + "px";
		frmSetCustomNav.style.top = event.clientY - 180 + "px";
		frmSetCustomNav.style.display = "block";
		setTimeout(() => {
			frmSetCustomNav.style.opacity = "1";
			frmSetCustomNav.style.transform = "scale(1.05)";
		},
		50);
		setTimeout(() => frmSetCustomNav.style.transform = "scale(1)", 300);
	} else {
		closeFrmCusNav();
		currentEditingNav = "";
	}
}
function closeFrmCusNav() {
	frmSetCustomNav.style.transform = "scale(1.05)";
	setTimeout(() => frmSetCustomNav.style.opacity = "0", 150);
	setTimeout(() => frmSetCustomNav.style.transform = "scale(0.5)", 200);
	setTimeout(() => frmSetCustomNav.style.display = "none", 400);
}
function iptCusNavKeyDown(event) {
	if (event.keyCode == 13) {
		addCusNav();
	}
}
function addCusNav() {
	if (isLoggedIn()) {
		if (inputCustomUrl.value) {
			window.cusNavIconUrl = inputCustomUrl.value;
			if (!cusNavIconUrl.startsWith("http")) {
				cusNavIconUrl = "https://" + cusNavIconUrl;
			}
			window.cusNavIconUrlParsed = new URL(cusNavIconUrl);
			cusNavIconUrl = cusNavIconUrlParsed.protocol + "//" + cusNavIconUrlParsed.host + "/favicon.ico";
			currentEditingNav.innerHTML = ` < img class = "cusNavIcon shouldNotFade"src = "`+cusNavIconUrl+`"onerror = "addCusNav2(this)"onload = "addCusNav3(this);submitCusNav();" / ><div class = "cusNavTitle shouldNotFade" > ` + inputCustomTitle.value + ` < /div>`;currentEditingNav.classList.add("added");closeFrmCusNav();}}}
function addCusNav2(obj){cusNavIconErrCount=cusNavIconErrCount+1;if(cusNavIconErrCount==1){cusNavIconUrl="https:/ / statics.dnspod.cn / proxy_favicon / _ / favicon ? domain = "+cusNavIconUrlParsed.host;obj.src=cusNavIconUrl;}else{addCusNav3(obj);}}
function addCusNav3(obj){if(obj.naturalWidth<17){cusUrlInitial=cusNavIconUrlParsed.host;if(cusUrlInitial.startsWith("www.")){cusUrlInitial=cusUrlInitial.substring(4);}
cusUrlInitial=cusUrlInitial.substring(0,1).toUpperCase();cusNavIconUrl="https: //iph.href.lu/128x128?bg=333&fg=70BF00&text="+cusUrlInitial;obj.src=cusNavIconUrl;obj.classList.add("round");cusNavIconErrCount=0;}}
			function submitCusNav() {
				cusNavSubmitCount = cusNavSubmitCount + 1;
				if (cusNavSubmitCount == 1) {
					cusNavUrl = inputCustomUrl.value;
					if (!cusNavUrl.startsWith("http")) {
						cusNavUrl = encodeURIComponent("http://" + cusNavUrl);
					} else {
						cusNavUrl = encodeURIComponent(cusNavUrl);
					}
					cusNavUrl = "\"" + cusNavUrl + "\"";
					cusNavTitle = inputCustomTitle.value;
					cusNavIconUrl = encodeURIComponent(cusNavIconUrl);
					fetch(backend + "cusNav", getPostData({
						action: "submitCusNav",
						rthUsername: login.username,
						cusNavUrl: cusNavUrl,
						cusNavTitle: cusNavTitle,
						cusNavIconUrl: cusNavIconUrl
					})).then(response => {
						if (response.ok) {
							return response.text();
						}
					}).then(getCusNav);
				}
				setTimeout(() => cusNavSubmitCount = 0, 2000);
			}
			window.onclick = () => {
				if (menuUser.style.opacity === "1") {
					hideMenu(menuUser);
				}
				if (menuSettings.style.opacity === "1") {
					hideMenu(menuSettings);
				}
				if (menuCusNav.style.opacity === "1") {
					hideMenu(menuCusNav);
				}
				if (menuSearch.style.opacity === "1") {
					hideMenu(menuSearch);
				}
				if (tipBoxCopyPaste.style.opacity === "1") {
					hideMenu(tipBoxCopyPaste);
				}
			}
			function btnUserClick() {
				if (isLoggedIn()) {
					if (menuUser.style.opacity === "1") {
						hideMenu(menuUser);
					} else {
						showMenu(menuUser);
					}
				}
			}
			function btnSettingsClick() {
				if (menuSettings.style.opacity === "1") {
					hideMenu(menuSettings);
				} else {
					showMenu(menuSettings);
				}
			}
			function showMenu(theMenu) {
				theMenu.style.display = "block";
				setTimeout(() => {
					theMenu.style.opacity = "1";
					theMenu.style.transform = "scale(1.05)";
				},
				50);
				setTimeout(() => theMenu.style.transform = "scale(1)", 300);
			}
			function hideMenu(theMenu) {
				theMenu.style.transform = "scale(0.5)";
				theMenu.style.opacity = "0";
				setTimeout(() => theMenu.style.display = "none", 250);
			}
			function isLoggedIn() {
				if (login.username) {
					return true;
				} else {
					if (!window.frmLogin) {
						window.frmLogin = document.createElement("iframe");
						frmLogin.id = "frmLogin";
						frmLogin.src = "https://id.dscitech.com";
						popLogin.appendChild(frmLogin);
					}
					showPop(popLogin);
					return false;
				}
			}
			function loggedIn(newLogin) {
				if (newLogin) {
					closePop(popLogin);
				}
				fetch(backend + "account", getPostData({
					action: "verifyUsername",
					rthUsername: login.username,
					email: login.email
				})).then(response => {
					if (response.ok) {
						return response.text();
					}
				}).then(data => {
					if (data) {
						if (data === "0") {
							showPop(popCompleteReg);
						} else {
							var userInfo = JSON.parse(data);
							username = userInfo[0].username;
							birthday = userInfo[0].birthday;
							if (birthday != "") {
								currentMonth = new Date().getMonth() + 1;
								currentDay = new Date().getDate();
								if (currentMonth < 10) {
									currentMonth = "0" + currentMonth;
								}
								currentDate = currentMonth + "-" + currentDay;
								birthdayDate = birthday.substring(5);
							}
							if (birthdayDate != undefined && birthdayDate === currentDate) {
								showGreeting("", "生日快乐，" + username);
							} else {
								showGreeting(username, "");
							}
							menuTextUsername.innerText = username;
							titlePopAccount.innerText = "欢迎你，" + username;
							accInfoTextEmail.innerText = userInfo[0].email;
							accInfoTextUid.innerText = userInfo[0].uid;
							accInfoTextUsername.innerText = username;
							accInfoTextBirthday.innerText = birthday;
							inputEditUsername.value = username;
							inputEditBirthday.value = birthday;
						}
					}
				});
				getCusNav();
			}
			function getCusNav() {
				fetch(backend + "cusNav", getPostData({
					action: "getCusNav",
					rthUsername: login.username
				})).then(response => {
					if (response.ok) {
						return response.text();
					}
				}).then(data => {
					if (data) {
						
					}
				});
			}
			function loadCusNavSlots() {
				navboxCustom.innerHTML = "<div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div><div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div><div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div><div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div><div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div><div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div><div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div><div class='customNav shouldNotFade' onclick='cusNavClick(event,this)'><i class='iconfont shouldNotFade iconAddNav'>&#xe620;</i></div>";
			}
			function showCusNavMenu(e, obj) {
				menuCusNav.style.left = e.clientX + 3 + "px";
				menuCusNav.style.top = e.clientY + 3 + "px";
				currentDeletingNav = obj.id;
				showMenu(menuCusNav);
			}
			function delCusNav() {
				fetch(backend + "cusNav", getPostData({
					action: "delCusNav",
					rthUsername: login.username,
					delIndex: currentDeletingNav
				})).then(response => {
					if (response.ok) {
						getCusNav();
					}
				});
			}
			function checkUsername() {
				var IllegalString = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
				var index = inputUsername.value.length - 1;
				var s = inputUsername.value.charAt(index);
				if (IllegalString.indexOf(s) >= 0) {
					s = inputUsername.value.substring(0, index);
					inputUsername.value = s;
				}
				if (inputUsername.value.length > 20) {
					loginTipUsername.innerText = "用户名长度不符合限制";
					loginTipUsername.style.color = "red";
				} else {
					loginTipUsername.innerText = "为自己起一个好听的用户名";
					loginTipUsername.style.color = "rgba(0,0,0,0.5)";
				}
			}
			function completeReg() {
				btnCompleteReg.style.pointerEvents = "none";
				if (inputUsername.value.length > 0 && inputUsername.value.length < 21) {
					username = inputUsername.value;
					fetch(backend + "account", getPostData({
						action: "completeReg",
						rthUsername: login.username,
						username: username,
						birthday: inputBirthday.value
					})).then(response => {
						if (response.ok) {
							closePop(popCompleteReg);
							showGreeting(username, "");
						}
					});
				}
			}
			function editBtnClick(editItem) {
				switch (editItem) {
				case 'username':
					btnEditUsername.style.display = "none";
					inputEditUsername.style.display = "inline-block";
					btnUpdateUsername.style.display = "inline-block";
					break;
				case 'birthday':
					btnEditBirthday.style.display = "none";
					inputEditBirthday.style.display = "inline-block";
					btnUpdateBirthday.style.display = "inline-block";
					break;
				}
			}
			function updateUserInfo(editItem) {
				if (inputEditUsername.value.length > 0 && inputEditUsername.value.length < 21) {
					newUsername = inputEditUsername.value;
					newBirthday = inputEditBirthday.value;
					if (newUsername != username || newBirthday != birthday) {
						fetch(backend + "account", getPostData({
							action: "completeReg",
							rthUsername: login.username,
							username: newUsername,
							birthday: newBirthday
						})).then(response => {
							if (response.ok) {
								menuTextUsername.innerText = newUsername;
								titlePopAccount.innerText = "欢迎你，" + newUsername;
								accInfoTextUsername.innerText = newUsername;
								accInfoTextBirthday.innerText = newBirthday;
								username = newUsername;
								birthday = newBirthday;
							}
						});
					}
					btnEditUsername.style.display = "inline-block";
					inputEditUsername.style.display = "none";
					btnUpdateUsername.style.display = "none";
					btnEditBirthday.style.display = "inline-block";
					inputEditBirthday.style.display = "none";
					btnUpdateBirthday.style.display = "none";
				}
			}
			function showGreeting(username, otherText) {
				if (greetingBox.style.display != "block") {
					if (otherText === "") {
						time = new Date().getHours();
						if (time > 21 || time < 4) {
							greeting.innerText = "晚安，" + username;
						}
						if (time >= 4 && time < 9) {
							greeting.innerText = "早安，" + username;
						}
						if (time === 9) {
							greeting.innerText = "早上好，" + username;
						}
						if (time > 9 && time < 12) {
							greeting.innerText = "上午好，" + username;
						}
						if (time === 12) {
							greeting.innerText = "中午好，" + username;
						}
						if (time > 12 && time < 15) {
							greeting.innerText = "午安，" + username;
						}
						if (time >= 15 && time < 18) {
							greeting.innerText = "下午好，" + username;
						}
						if (time === 18) {
							greeting.innerText = "傍晚好，" + username;
						}
						if (time > 18 && time <= 21) {
							greeting.innerText = "晚上好，" + username;
						}
					} else {
						greeting.innerHTML = otherText;
					}
					greetingBox.style.display = "block";
					setTimeout(() => {
						greeting.style.opacity = "1";
						greeting.style.top = "0px";
					},
					50);
					setTimeout(() => {
						greeting.style.opacity = "0";
						greeting.style.top = "-100px";
					},
					3000);
					setTimeout(() => greetingBox.style.display = "none", 3500);
				}
			}
			function navboxScroll(e) {
				if (e.deltaX < 0 || e.deltaY < 0) {
					nbSwitch1_Click();
				} else {
					nbSwitch2_Click();
				}
			}
			function setReduceMotion() {
				if (chkReduceMotion.checked == true) {
					reduceMotion = false;
					localStorage.setItem("reduceMotion", "off");
				} else {
					reduceMotion = true;
					localStorage.setItem("reduceMotion", "on");
				}
			}
			function getTopNotification() {
				processTopNotification();
			}
			function processTopNotification() {
				pushClass = localStorage.getItem("pushClass");
				pushTitle = localStorage.getItem("pushTitle");
				pushContent = localStorage.getItem("pushContent");
				pushStartTime = localStorage.getItem("pushStartTime");
				pushStopTime = localStorage.getItem("pushStopTime");
				if (pushStopTime) {
					nowTime = new Date();
					pushStartTime = new Date(pushStartTime);
					pushStopTime = new Date(pushStopTime);
					if (nowTime.getTime() > pushStartTime.getTime() && nowTime.getTime() < pushStopTime.getTime()) {
						switch (pushClass) {
						case '0':
							topNotificationBar.classList.add("class0");
							break;
						case '1':
							topNotificationBar.classList.add("class1");
							break;
						case '2':
							topNotificationBar.classList.add("class2");
							break;
						}
						marqueeTitle.innerText = pushTitle;
						marqueeText.innerText = pushContent;
						showTopNbar();
					}
				}
			}
			function showTopNbar() {
				topNotificationBar.style.display = "block";
				marqueeBar.start();
				setTimeout(() => {
					topNotificationBar.style.top = "0";
					bodyBox.style.top = "50px";
					bodyBox.style.height = "calc(100% - 50px)";
					navbox.style.top = "50px";
					navbox.style.height = "calc(100% - 50px)";
				},
				50);
			}
			function closetopNBar() {
				topNotificationBar.style.top = "-50px";
				bodyBox.style.top = "0";
				bodyBox.style.height = "100%";
				navbox.style.top = "0";
				navbox.style.height = "100%";
				setTimeout(() => {
					marqueeBar.stop();
					topNotificationBar.style.display = "none";
				},
				250);
			}
			function showSearchMenu(e, obj) {
				menuSearch.style.left = e.clientX + 3 + "px";
				menuSearch.style.top = e.clientY + 3 + "px";
				selectedText = window.getSelection().toString();
				if (selectedText != "") {
					searchMenuCut.classList.remove("disabled");
					searchMenuCopy.classList.remove("disabled");
				} else {
					searchMenuCut.classList.add("disabled");
					searchMenuCopy.classList.add("disabled");
				}
				showMenu(menuSearch);
			}
			function searchCut() {
				window.getSelection().toString();
				document.execCommand("cut");
				input0.focus();
			}
			function searchCopy() {
				window.getSelection().toString();
				document.execCommand("copy");
				input0.focus();
			}
			function searchPaste(e, obj) {
				try {
					navigator.clipboard.readText().then(clipText => input0.value = input0.value + clipText);
				} catch(err) {
					tipBoxCopyPaste.style.left = e.clientX + 3 + "px";
					tipBoxCopyPaste.style.top = e.clientY + 3 + "px";
					showMenu(tipBoxCopyPaste);
				}
				input0.focus();
			}
			function loadJs(src, load, error) {
				const newScript = document.createElement("script");
				newScript.src = src;
				newScript.onload = load;
				newScript.onerror = error;
				document.body.appendChild(newScript);
			}
			loadCusNavSlots();
			if (isMobile) {
				form0.action = "https://m.baidu.com/s";
				bgbox.style.backgroundSize = "auto 100%";
				bgbox.style.backgroundPosition = "center";
			}
			if (!currentSearchEngine) {
				currentSearchEngine = "baidu";
			}
			switchSearchEng(currentSearchEngine);
			if (cusWallpaper) {
				bgPreBoxInCus.classList.remove("unset");
				bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")";
			}
			if (!bgPreference) {
				localStorage.setItem("bgPreference", "Default");
				bgPreference = "Default";
			}
			switch (bgPreference) {
			case 'Custom':
				bgbox.src = cusWallpaper;
				bgPreBoxInCus.classList.add("selected");
				break;
			case 'Default':
				bgbox.src = "./images/BG_A_Default_1.jpg";
				bgPreBoxIn1.classList.add("selected");
				break;
			case 'Default2':
				bgbox.src = "./images/BG_A_Default_2.jpg";
				bgPreBoxIn2.classList.add("selected");
				break;
			case 'Default3':
				bgbox.src = "./images/BG_A_Default_3.jpg";
				bgPreBoxIn3.classList.add("selected");
				break;
			case 'Bing':
				bgPreBoxInBing.classList.add("selected");
				break;
			case 'Live':
				liveBgBox.src = "./videos/Live_Wallpaper_1.mp4";
				liveBgBox.style.display = "block";
				setTimeout(() => liveBgBox.style.opacity = "1", 50);
				bgPreBoxInLive.classList.add("selected");
				break;
			}
			bgbox.onload = () => {
				bgbox.style.display = "block";
				setTimeout(() => bgbox.style.opacity = "1", 50);
			}
			fetch(backend + "?format=json&mod=BingPic").then(response => {
				if (response.ok) {
					return response.json();
				}
			}).then(data => {
				if (data) {
					window.bingWallpaper = data;
					bingWallpaper.url = "https:" + bingWallpaper.data;
					bgPreBoxInBing.style.backgroundImage = "url(" + bingWallpaper.url + ")";
					if (bgPreference == "Bing") {
						bgbox.src = bingWallpaper.url;
					}
				}
			});
			currentNotes = localStorage.getItem("currentNotes");
			maximumNoteNumber = localStorage.getItem("maximumNoteNumber");
			if (currentNotes == undefined) {
				currentNotes = "0";
				maximumNoteNumber = "0";
			}
			loadNotes();
			localVersion = localStorage.getItem("localVersion");
			if (localVersion && localVersion.substring(0, 6) != version.substring(0, 6)) {
				showGreeting("", "欢迎回来~你的起始页刚刚更新到了<span class='links1' onclick='showAbout()'>最新版本</span>。")
			}
			localStorage.setItem("localVersion", version);
			navbox0.addEventListener("wheel", navboxScroll, {
				passive: true
			});
			window["ThinkPageWeatherWidgetObject"] = "tpwidget";
			window["tpwidget"] || (window["tpwidget"] = function() { (window["tpwidget"].q = window["tpwidget"].q || []).push(arguments)
			});
			window["tpwidget"].l = +new Date();
			tpwidget("init", JSON.parse('{"flavor":"slim","location":"WS7GQBRNR6V8","geolocation":"enabled","language":"auto","unit":"c","theme":"chameleon","container":"tp-weather-widget","bubble":"enabled","alarmType":"badge","color":"#FFFFFF","uid":"UE17D4C991","hash":"105bf6a7f61f47495f3bb5693ebe36de"}'));
			tpwidget("show");
			marqueeBar.stop();
			getTopNotification();
			chkReduceMotion.checked = reduceMotion;