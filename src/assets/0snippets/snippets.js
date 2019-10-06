"use strict";


//===================================================
//==================== ANIMATION ====================
//===================================================

var staggerDuration = 0.125;
var staggerDelay = 0.0375;

var animDuration00 = 0.125;
var animDuration01 = 0.5;
var animDuration02 = 1;
var animDuration03 = 1.5;
var animDuration04 = 2;
var animDuration05 = 2.5;
var animDuration06 = 3;
var animDuration07 = 3.5;
var animDuration08 = 4;
var animDuration09 = 4.5;
var animDuration10 = 5;



//=================================================
//==================== OBJECTS ====================
//=================================================

var stage = sym.$("Stage");
var border = sym.$("border");
var logo = sym.$("logo");
var cta = sym.$("cta");
var cta_arrow = sym.$("cta_arrow");

var bg = sym.$("bg");
var bg_lt = sym.$("bg_lt");
var bg_dk = sym.$("bg_dk");

var image = sym.$("image");
var image01 = sym.$("image01");
var image02 = sym.$("image02");
var image03 = sym.$("image03");

var bottle = sym.$("bottle");
var bottle_lt = sym.$("bottle_lt");

var LOGO_RED_ea_w = sym.$("LOGO_RED_ea_w");
var LOGO_RED_red_r = sym.$("LOGO_RED_red_r");
var LOGO_RED_always_r = sym.$("LOGO_RED_always_r");

var logo_red_r = sym.$("logo_red_r");
var logo_red_ds_k = sym.$("logo_red_ds_k");
var logo_red_ds_w = sym.$("logo_red_ds_w");
var logo_red_ds_r = sym.$("logo_red_ds_r");

var copy01 = sym.$("copy01");
var copy02 = sym.$("copy02");

var container01 = sym.$("container01");
var container02 = sym.$("container02");



//===================================================
//==================== FUNCTIONS ====================
//===================================================

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
//	alert(message);
	console.log(message);
}


//-------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------

function nextPos(thisObj, thisX, thisY, thisScale, thisAlpha) {
	console.log("PING!!! FUNCTION: nextPos triggered!");
	console.log("thisObj: " + thisObj + ", thisX: " + thisX + ", thisY: " + thisY + ", thisScale: " + thisScale + ", thisAlpha: " + thisAlpha);

	TweenLite.set(thisObj, {x:thisX, y:thisY, scale:thisScale, alpha:thisAlpha});
}


//-------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

function randRange(min, max) {
	var thisIndex = min + Math.round(Math.random()*(max-min));
//	console.log("thisIndex = " + thisIndex);
	return thisIndex;
}


//-------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

function randRange2(min, max) {
	var thisIndex = min + Math.random()*(max-min);
//	console.log("thisIndex = " + thisIndex);
	return thisIndex;
}


//-------------------- FUNCTION: randMinMax(thisMin, thisMax, thisRound) - (ref: https://gist.github.com/timohausmann/4997906) --------------------

function randMinMax(thisMin, thisMax, thisRound) {
	"use strict";

	var thisRandNum = thisMin + Math.random() * (thisMax - thisMin);
	return thisRound && (thisRandNum = Math.round(thisRandNum)), thisRandNum;
}



//-------------------- FUNCTION: randomStagger(thisObj) --------------------

function randomStagger(thisObj) {
	console.log("PING!!! FUNCTION: randomStagger triggered!");

	var listItems = thisObj.children();
	var listItemsArray = listItems.toArray();

	listItemsArray.sort(function() {return 0.5-Math.random()});

	console.log("thisObj = " + thisObj + "   listItems = " + listItems + "   listItemsArray = " + listItemsArray);

//	TweenMax.staggerFromTo(listItemsArray, staggerDuration, {scale:.25, alpha:0, ease:Power3.easeOut}, {scale:1, alpha:1, ease:Power3.easeOut}, staggerDelay, "frame01 +=0")
	TweenMax.staggerFromTo(listItemsArray, staggerDuration, {scale:2, ease:Power3.easeOut}, {scale:1, ease:Power3.easeOut}, staggerDelay, 0)
	TweenMax.staggerFromTo(listItemsArray, staggerDuration*0.5, {alpha:0, ease:Power3.easeOut, repeat:1, yoyo:true}, {alpha:1, ease:Power3.easeOut, repeat:1, yoyo:true}, staggerDelay, 0)
}


//-------------------- FUNCTION: shuffleArray(thisArray) - (ref: https://solidfoundationwebdev.com/blog/posts/how-to-shuffle-an-array-in-javascript) --------------------

function shuffleArray(thisArray){
	for(var j, x, i = thisArray.length; i; j = Math.floor(Math.random() * i), x = thisArray[--i], thisArray[i] = thisArray[j], thisArray[j] = x);
	return thisArray;
}


//-------------------- FUNCTION: shuffle(thisContainer) - shuffle objects (rects) in container (#mask_maskA) --------------------

function shuffle(thisContainer){
	thisContainer.each(function(){
		"use strict";

		var rects = $(this).find('rect');

//		console.log('rects = ' + rects);

//		for(var i = 0; i < rects.length; i++) {
//			console.log('rects[i].id = ' + rects[i].id);
//		}

		for(var i = 0; i < rects.length; i++) $(rects[i]).remove();            

		//the fisher yates algorithm, from https://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
		var i = rects.length;
		if ( i == 0 ) return false;

		while ( --i ) {
			var j = Math.floor( Math.random() * ( i + 1 ) );
			var tempi = rects[i];
			var tempj = rects[j];
			rects[i] = tempj;
			rects[j] = tempi;
		}

//		for(var i = 0; i < rects.length; i++) {
//			console.log('rects[i].id = ' + rects[i].id);
//		}

		for(var i = 0; i < rects.length; i++) $(rects[i]).appendTo(this);
	});                    
}

shuffle($("#mask_maskH"));
shuffle($("#mask_maskV"));


//-------------------- FUNCTIONS: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

var numParticle = 50;

var container01W = container01.width();
var container01H = container01.height();

var container02W = container02.width();
var container02H = container02.height();

console.log("container01W x container01H = " + container01W + " x " + container01H);
console.log("container02W x container02H = " + container02W + " x " + container02H);

TweenMax.set("img", {xPercent:"-50%", yPercent:"-50%"})


function addParticle(thisContainer){   
	for (var i = 0; i < numParticle; i++){ 
		thisContainer.append('<div class="particle"><img src="images/flash01.jpg"></div>');
	}

	positionParticle(thisContainer);
}


function positionParticle(thisContainer){
	thisContainer.children().each(function(){
//		console.log("PING!!! found this " + this + " in " + thisContainer);

		var thisX = randRange(-thisContainer.width()*1, thisContainer.width()*1);
		var thisY = randRange(-thisContainer.height()*1, thisContainer.height()*1);
		var thisScale = randRange(25, 75) / 100;

//		console.log("thisX, thisY, thisScale = " + thisX + ", " + thisY + ", " + thisScale);

		TweenLite.set(this, {x:thisX, y:thisY, alpha:0, scale:thisScale});

		particleAnim(this);
	});
}


function particleAnim(thisParticle){ 
//	TweenMax.to(thisParticle, animDuration04, {x:randRange(-100, 100), rotationY:0, alpha:1, repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
//	TweenMax.to(thisParticle, animDuration01, {x:0, alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
	TweenMax.to(thisParticle, animDuration01, {alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(0, 1.5)});
};


//==================== FUNCTION: getDims(thisElem) ====================

function getDims(thisElem) {

	// console.log('');
	// console.log('PING! getDims triggered! thisElem = ' + thisElem);

	var thisX = document.getElementById(thisElem).getBoundingClientRect().x;
	var thisY = document.getElementById(thisElem).getBoundingClientRect().y;
	var thisW = document.getElementById(thisElem).getBoundingClientRect().width;
	var thisH = document.getElementById(thisElem).getBoundingClientRect().height;

	// console.log('*PRE* tween');
	// console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisW = ' + thisW + '     thisH = ' + thisH);

	return [thisX, thisY, thisW, thisH];
}



//==============================================
//==================== TEXT ====================
//==============================================

//-------------------- OBJECTS - text shadows --------------------

TweenMax.to([copy01_ds, copy02_01_ds, copy02_02_ds, copy05_01_ds, copy05_02_ds, copy05_03_ds, copy05_04_ds, copy05_ds02.find("div")], 0, {
//	color:"none",
	textShadow:"0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1)"
});


//-------------------- CUSTOM HTML TEXT TREATMENT --------------------

//$(copy02_01).html("Meet the</br>first-of-its-kind"); // custom line break
$(copy01).html("&nbsp;&nbsp;YOUR GIFT<font size=2><sup>*</sup></font>"); // superscript


//-------------------- STAGGER PREP --------------------

//-------------------- Split the text into characters and wrap every character into span element, then convert the whitespaces to whitespace characters. --------------------

$('p').contents().unwrap();

//Split the text into *** CHARACTERS *** and wrap every character into span element, then convert the whitespaces to whitespace characters.
copy01_02.html(copy01_02.html().replace(/./g, "<div>$&</div>").replace(/\s/g, " "))

//Split the text into *** WORDS *** and wrap every character into span element, then convert the whitespaces to whitespace characters.
copy01_01.html(copy01_01.html().replace(/\w+/g, "<div>$&</div>").replace(/\s/g, " "))
copy01_03.html(copy01_03.html().replace(/\w+\W+/g, "<div>$&</div>").replace(/\s/g, " "))

copy02_01.html(copy02_01.html().replace(/\w+|\W+\w+/g, "<div>$&</div>").replace(/\s/g, " "))

copy03.html(copy03.html().replace(/\[lb]/g, "<div>$&</div>").replace(/\s/g, " "))
copy03.html(copy03.html().replace(/[^lb]\w+/g, "<div>$&</div>").replace(/\s/g, " "))


//-------------------- GSAP SplitText Plugin --------------------

var copy02_01_split = new SplitText([copy02_01], {type:"chars", position:"absolute"});
var copy02_02_split = new SplitText([copy02_02], {type:"words", position:"absolute"});



//==================== EXTERNAL TIMELINE(S) ====================

var tlArrows = new TimelineMax({repeat:25, repeatDelay:.25})
	.staggerTo(cta_arrow.find("div"), staggerDuration, {alpha:1, ease:Power3.easeIn}, staggerDelay)
	.staggerTo(cta_arrow.find("div"), staggerDuration, {alpha:0.25, ease:Power3.easeOut}, staggerDelay)
;



//=============================================
//==================== SVG ====================
//=============================================

//-------------------- append SVG --------------------
$("#Stage_gwp_img").append("<svg version='1.1' baseProfile='full' id='gwp_img_svg' width='180' height='180' xml:space='preserve' overflow='visible'><defs><pattern id='pattern_gwp_img' patternUnits='userSpaceOnUse' x='0' y='0' width='180' height='180'><image xlink:href='images/gwp.jpg' width='180' height='180' /></pattern><pattern id='pattern_gwp_mask' patternUnits='userSpaceOnUse' x='0' y='0' width='180' height='180'><image xlink:href='images/gwp_ko.png' width='180' height='180' /></pattern><mask id='gwp_mask'><rect class='class_gwp_mask' fill='url(#pattern_gwp_mask)' x='0' y='0' width='180' height='180' /></mask></defs><g id='gwp_img_svg' mask='url(#gwp_mask)'><rect id='gwp_img' width='180' height='180' fill='url(#pattern_gwp_img)' /></g></svg>");


//-------------------- IMAGE MASKS --------------------

<svg version='1.1' baseProfile='full' id='gwp_img_svg' width='180' height='180' xml:space='preserve' overflow='visible'>

	<defs>

		<pattern id='pattern_gwp_img' patternUnits='userSpaceOnUse' x='0' y='0' width='180' height='180'>
			<image xlink:href='images/gwp.jpg' width='180' height='180' />
		</pattern>

		<pattern id='pattern_gwp_mask' patternUnits='userSpaceOnUse' x='0' y='0' width='180' height='180'>
			<image xlink:href='images/gwp_ko.png' width='180' height='180' />
		</pattern>

		<mask id='gwp_mask'>
			<rect class='class_gwp_mask' fill='url(#pattern_gwp_mask)' x='0' y='0' width='180' height='180' />
		</mask>

	</defs>

	<g id='gwp_img_svg' mask='url(#gwp_mask)'>
		<rect id='gwp_img' width='180' height='180' fill='url(#pattern_gwp_img)' />
	</g>

</svg>


//-------------------- GRADIENT MASKS (REF: https://codepen.io/shigimcp/pen/qNgwxy) --------------------

<svg version='1.1' baseProfile='full' id='bg_svg' width='300' height='250' xml:space='preserve'>

	<defs>

		<pattern id='pattern_bg' patternUnits='userSpaceOnUse' x='0' y='0' width='300' height='250'>
			<image xlink:href='images/bg.jpg' width='300' height='250' />
		</pattern>

		<pattern id='pattern_crosshatch' patternUnits='userSpaceOnUse' x='0' y='0' width='80' height='19'>
			<image xlink:href='images/crosshatch03.svg' width='80' height='19' />
		</pattern>

		<filter xmlns='https://www.w3.org/2000/svg' id='dropshadow01' x='-75%' y='-75%' width='250%' height='250%'>
			<feGaussianBlur in='SourceGraphic' stdDeviation='3' result='blur01'/> 
			<feOffset dx='0' dy='0' result='blurOffset01'/>
			<feComponentTransfer>
				<feFuncA type='linear' slope='1.5'/>
			</feComponentTransfer>
		</filter>

		<lineargradient id='maskV' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='250'>
			<stop offset='0' style='stop-color:#000000'/>
			<stop offset='0.125' style='stop-color:#FFFFFF'/>
			<stop offset='0.875' style='stop-color:#FFFFFF'/>
			<stop offset='1' style='stop-color:#000000'/>
		</lineargradient>

		<lineargradient id='maskH' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='300' y2='0'>
			<stop offset='0' style='stop-color:#000000'/>
			<stop offset='0.125' style='stop-color:#FFFFFF'/>
			<stop offset='0.875' style='stop-color:#FFFFFF'/>
			<stop offset='1' style='stop-color:#000000'/>
		</lineargradient>

		<mask id='mask_maskV'>
			<rect class='class_maskV' fill='url(#maskV)' x='-20' y='0' width='40' height='250' filter='url(#dropshadow01)' />
			<rect class='class_maskV' fill='url(#maskV)' x='20' y='0' width='40' height='250' filter='url(#dropshadow01)' />
			<rect class='class_maskV' fill='url(#maskV)' x='60' y='0' width='40' height='250' filter='url(#dropshadow01)' />
			<rect class='class_maskV' fill='url(#maskV)' x='100' y='0' width='40' height='250' filter='url(#dropshadow01)' />
			<rect class='class_maskV' fill='url(#maskV)' x='140' y='0' width='40' height='250' filter='url(#dropshadow01)' />
		</mask>

		<mask id='mask_maskH'>
			<rect class='class_maskH' fill='url(#maskH)' x='0' y='0' width='300' height='20' filter='url(#dropshadow01)' />
			<rect class='class_maskH' fill='url(#maskH)' x='0' y='18' width='300' height='20' filter='url(#dropshadow01)' />
			<rect class='class_maskH' fill='url(#maskH)' x='0' y='36' width='300' height='20' filter='url(#dropshadow01)' />
			<rect class='class_maskH' fill='url(#maskH)' x='0' y='54' width='300' height='20' filter='url(#dropshadow01)' />
			<rect class='class_maskH' fill='url(#maskH)' x='0' y='72' width='300' height='20' filter='url(#dropshadow01)' />
		</mask>

	</defs>

	<g mask='url(#mask_maskV)'>
		<rect id='bg_img' width='300' height='250' fill='url(#pattern_bg)' />
		<rect id='crosshatch_bg' width='300' height='250' fill='url(#pattern_crosshatch)' />
	</g>

	<g mask='url(#mask_maskH)'>
		<rect id='bg_img' width='300' height='250' fill='url(#pattern_bg)' />
		<rect id='crosshatch_bg' width='300' height='250' fill='url(#pattern_crosshatch)' />
	</g>

</svg>


//-------------------- SVG BLURS (REFs: https://codepen.io/shigimcp/pen/yVLrNG, https://codepen.io/shigimcp/pen/dOyLeW?editors=1100) --------------------

//-------------------- DROPSHADOW --------------------

<svg version='1.1' baseProfile='full' id='gwp_ds_svg' width='180' height='180' xml:space='preserve' overflow='visible'>

	<defs>

		<pattern id='pattern_gwp_ds' patternUnits='userSpaceOnUse' x='0' y='0' width='180' height='180'>
			<image xlink:href='images/gwp_ko.png' width='180' height='180' />
		</pattern>

		<filter xmlns='https://www.w3.org/2000/svg' id='dropshadow01' x='-75%' y='-75%' width='250%' height='250%'>
			<feGaussianBlur in='SourceGraphic' stdDeviation='50' result='blur_gwp'/> 
			<feOffset dx='0' dy='0' result='blurOffset01'/>
			<feComponentTransfer>
				<feFuncA type='linear' slope='1.5'/>
			</feComponentTransfer>
		</filter>

	</defs>

	<g id='gwp_ds_svg' filter='url(#dropshadow01)'>
		<rect id='gwp_ds' width='180' height='180' fill='url(#pattern_gwp_ds)' />
	</g>

</svg>



//=======================================================
//==================== MAIN TIMELINE ====================
//=======================================================

////var maskA = $('#mask_maskA');
//var maskH = $('#mask_maskH');
//var maskV = $('#mask_maskV');
//
//////console.log('maskA = ' + maskA);
////console.log('maskH = ' + maskH);
////console.log('maskV = ' + maskV);


//var tl = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//var tl = new TimelineLite({delay:.25});
//var tl = new TimelineLite({delay:0.25});
var tl = new TimelineMax({delay:0.25});

tl


//==================== FRAME 01 ====================

	.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

	.to([logo], 0, {x:68.25, y:50, scale:0.65, autoAlpha:0}, "frame01")

	.fromTo([image, bg], animDuration02, {x:20, autoAlpha:0}, {x:0, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0")
	.fromTo([bottle], animDuration02, {x:-20, autoAlpha:0}, {x:0, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0")

	.fromTo([logo], animDuration02, {y:30, autoAlpha:0}, {y:50, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.5")

	.fromTo([cta], animDuration02, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.75")

	.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=0.75")


//==================== FRAME 02 ====================

	.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

	.to([bottle], animDuration02, {x:-20, autoAlpha:0, ease:Power3.easeOut}, "frame02 +=1.25")

	.to([image, bg], animDuration03, {x:-210, ease:Power3.easeOut}, "frame02 +=1.25")
	.fromTo([gwp], animDuration02, {x:20, autoAlpha:0}, {x:0, autoAlpha:1, ease:Power3.easeOut}, "frame02 +=1.25")
	.to([logo], animDuration02, {x:0, y:0, scale:1, ease:Power3.easeOut}, "frame02 +=1.25")
	.to([cta], animDuration02, {x:15, y:70, ease:Power3.easeOut}, "frame02 +=1.25")

	.staggerFromTo(copy.find("div"), animDuration02, {y:-20, autoAlpha:0, ease:Power3.easeOut}, {y:0, autoAlpha:1, ease:Power3.easeOut}, animDuration00, "frame02 +=1.75")

	.fromTo([legal], animDuration02, {y:-20, autoAlpha:0}, {y:0, autoAlpha:0.5, ease:Power3.easeOut}, "frame02 +=2")

	.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=2")
;





//tl.duration(1.5);

console.log("timing = " + tl.duration() + " secs");