"use strict";

//============================================================
//==================== FUNCTIONS: Generic ====================
//============================================================

//-------------------- FUNCTION: testing123() --------------------

function testing123() {
	console.log('-------------------- custom.js - testing123() --------------------');
	console.log("PING!!! function: testing123 has been triggered!");
}

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
	// alert(message);
	console.log(message);
}


//-------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

function randRange(min, max) {
	var thisIndex = min + Math.round(Math.random() * (max - min));
	// console.log("thisIndex = " + thisIndex);
	return thisIndex;
}


//-------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

function randRange2(min, max) {
	var thisIndex = min + Math.random() * (max - min);
	// console.log("thisIndex = " + thisIndex);
	return thisIndex;
}


//-------------------- FUNCTION: randMinMax(thisMin, thisMax, thisRound) - (ref: https://gist.github.com/timohausmann/4997906) --------------------

function randMinMax(thisMin, thisMax, thisRound) {
	// "use strict";

	var thisRandNum = thisMin + Math.random() * (thisMax - thisMin);
	return thisRound && (thisRandNum = Math.round(thisRandNum)), thisRandNum;
}


//-------------------- FUNCTION: showMe(thisID, thisVisibility) --------------------
//-------------------- NOTE: initially used to hide <app-shigeru> becuase it is location-dependent (vs display-/device-dependent which will use style sheets for visibility) --------------------

// function showMe(thisVisibility) {
function showMe(thisID, thisVisibility) {

	// console.log('');
	// console.log('-------------------- custom.js - showMe(thisVisibility) --------------------');
	// console.log('PING! hideDefs(thisVisibility) triggered! thisVisibility = ' + thisVisibility);

	// console.log('this = ' + this);
    // console.log('document.getElementById(shigeru).id = ' + document.getElementById('shigeru').id);

    // document.getElementById('shigeru').style.visibility = thisVisibility;
    document.getElementById(thisID).style.visibility = thisVisibility;
}


//-------------------- FUNCTION: getDims(thisElem) --------------------

function getDims(thisElem) {

	// console.log('');
	// console.log('-------------------- custom.js - getDims(thisElem) --------------------');
	// console.log('PING! getDims(thisElem) triggered! thisElem = ' + thisElem);

	var thisX = document.getElementById(thisElem).getBoundingClientRect().x;
	var thisY = document.getElementById(thisElem).getBoundingClientRect().y;
	var thisW = document.getElementById(thisElem).getBoundingClientRect().width;
	var thisH = document.getElementById(thisElem).getBoundingClientRect().height;

	// console.log('*PRE* tween');
	// console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisW = ' + thisW + '     thisH = ' + thisH);

	return [thisX, thisY, thisW, thisH];
}


//-------------------- FUNCTION: getModalDims(contentWidth, contentHeight) --------------------

function getModalDims(contentWidth, contentHeight) {

	// console.log('');
	// console.log('-------------------- custom.js - getModalDims(contentWidth, contentHeight) --------------------');
	// console.log('contentWidth = ' + contentWidth + '     contentHeight = ' + contentHeight);
    // console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
    // console.log('16/9 = ' + 16/9 + '     window.innerWidth/window.innerHeight = ' + window.innerWidth/window.innerHeight);

    var mWidth;
    var mHeight;
    var mScale;

    switch (true) {

        case contentWidth/contentHeight <= 1 && contentHeight <= 0.9 * window.innerHeight: {
            // console.log('');
            // console.log('----- orientation: treat as small portrait -----');

            mWidth = contentWidth;
            mHeight = contentHeight;

            break;
        }

        case contentWidth/contentHeight <= 1: {
            // console.log('');
            // console.log('----- orientation: treat as portrait -----');

            // mWidth = contentWidth;
            mHeight = 0.9 * window.innerHeight;
            mWidth = (contentWidth / contentHeight) * mHeight;

            break;
        }

        case contentWidth/contentHeight <= 1 && contentHeight >= window.innerHeight: {
            // console.log('');
            // console.log('----- orientation: treat as large portrait -----');

            // mWidth = contentWidth;
            // mHeight = contentHeight;

            break;
        }

        case contentWidth/contentHeight > 1: {
            // console.log('');
            // console.log('----- orientation: treat as landscape -----');

            mWidth = 0.9 * window.innerWidth;
            // mHeight = mWidth * 9 / 16;
            mHeight = (contentHeight / contentWidth) * mWidth;

            break;
        }

        default: {
            // console.log('');
            // console.log('----- default: need a conditional -----');

            mWidth = contentWidth;
            mHeight = contentHeight;

            break;
        }
    }

    mScale = mHeight/contentHeight;

    // console.log('mWidth = ' + mWidth + '     mHeight = ' + mHeight + '     mScale = ' + mScale);

    // return [mWidth, mHeight];
    return [mWidth, mHeight, mScale];
}


//==============================================================
//==================== NAME / PRONUNCIATION ====================
//==============================================================

function showDefsJS(thisElem) {

	// console.log('');
	// console.log('-------------------- custom.js - showDefs(thisElem) --------------------');
	// console.log('PING! showDefs(thisElem) triggered! thisElem = ' + thisElem);
	// // console.log('PING! showDefs(thisElem) triggered! thisElem.id = ' + thisElem.id);

	switch(thisElem) {
		case ('syllablesId'):
			// console.log('DING! thisElem = ' + thisElem);

			TweenMax.to([pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;

		case ('syllable01'):
			// console.log('DING! thisElem = ' + thisElem);

			TweenMax.to([pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});
			TweenMax.to([def01], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;

		case ('syllable02'):
			// console.log('DING! thisElem = ' + thisElem);

			TweenMax.to([pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});
			TweenMax.to([def02], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;

		case ('syllable03'):
			// console.log('DING! thisElem = ' + thisElem);

			TweenMax.to([pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});
			TweenMax.to([def03], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;
	}
}

function hideDefsJS(thisElem) {

	// console.log('');
	// console.log('-------------------- custom.js - hideDefs(thisElem) --------------------');
	// console.log('PING! hideDefs(thisElem) triggered! thisElem = ' + thisElem);
	// // console.log('PING! hideDefs(thisElem) triggered! thisElem.id = ' + thisElem.id);

	switch(thisElem) {
		// case ('syllablesId'):
		// 	// console.log('DING! thisElem = ' + thisElem);

		// 	TweenMax.to([pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

		// 	break;

		case ('syllable01'):
			// console.log('DING! thisElem = ' + thisElem);

			TweenMax.to([def01], 0.375, {autoAlpha:0, ease:Power3.easeOut});
			TweenMax.to([pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

			break;

		case ('syllable02'):
			// console.log('DING! thisElem = ' + thisElem);

			TweenMax.to([def02], 0.375, {autoAlpha:0, ease:Power3.easeOut});
			TweenMax.to([pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

			break;

		case ('syllable03'):
			// console.log('DING! thisElem = ' + thisElem);

			TweenMax.to([def03], 0.375, {autoAlpha:0, ease:Power3.easeOut});
			TweenMax.to([pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

			break;
	}
}











// //-------------------- FUNCTION: numChildren(thisElem) --------------------

// function numChildren(thisElem) {

// 	console.log('');
// 	console.log('------------------- custom.js - numChildren(thisElem) -------------------');
// 	console.log('PING! numChildren(thisElem) triggered!   thisElem = ' + thisElem);
// 	// console.log('PING! numChildren(thisElem) triggered!     thisElem.childNodes = ' + thisElem.childNodes);
// 	console.log('$(#thoughtContainerId) = ' + $('#thoughtContainerId').children().length);
// }















// //-------------------- FUNCTION: addCurls(thisElem) --------------------

// var theta = 0;
// // var thetaMax = 180;
// var thetaMax = 190;
// // var rFactor = 1;
// var rFactor = 0.9;

// // function addCurls(numThoughts, afroDims, curlDims, thisElem) {
// function addCurls(thoughtIndex, numThoughts, afroDims, curlDims, thisElem) {

// 	// console.log('');
// 	// console.log('-------------------- custom.js - addCurls(thoughtIndex, numThoughts, afroDims, curlDims, thisElem) --------------------');
	
// 	// console.log('thoughtIndex = ' + thoughtIndex);
// 	// console.log('numThoughts = ' + numThoughts);
// 	// // console.log('boingDims = ' + boingDims);
// 	// // console.log('afroDims = ' + afroDims);
// 	// // console.log('curlDims = ' + curlDims);
// 	// console.log('thisElem = ' + thisElem);
// 	// console.log('thisElem.id = ' + thisElem.id);
// 	// console.log('thisElem.children = ' + thisElem.children);
// 	// console.log('thisElem.children.length = ' + thisElem.children.length);

// 	// // console.log('');
// 	// for (i = 0; i < thisElem.children.length; i++) {
// 	// 	console.log('');
// 	// 	console.log('thisElem.children[' + i + '].id = ' + thisElem.children[i].id);
// 	// 	console.log('thisElem.children[' + i + '].children = ' + thisElem.children[i].children);
// 	// 	console.log('thisElem.children[' + i + '].children.length = ' + thisElem.children[i].children.length);
// 	// 	console.log('');

// 	// 	for (c = 0; c < thisElem.children[i].children.length; c++) {
// 	// 		console.log('thisElem.children[' + i + '].children.[' + c + '] = ' + thisElem.children[i].children[c].id);
// 	// 	}
// 	// }


// 	// -------------------- place curls --------------------

// 	var deltaTheta = -(thetaMax / numThoughts) / 180 * Math.PI;

// 	// console.log('deltaTheta = ' + deltaTheta);


// 	// var rX = (afroDims[2] / 2) * rFactor;
// 	// var rY = (afroDims[3] / 2) * rFactor;
// 	// var rX = randRange((afroDims[2] / 4.5), (afroDims[2] / 2)) * rFactor;
// 	// var rY = randRange((afroDims[3] / 4.5), (afroDims[3] / 2)) * rFactor;
// 	var rX = randRange((afroDims[2] / 4), (afroDims[2] / 2)) * rFactor;
// 	var rY = randRange((afroDims[3] / 4), (afroDims[3] / 2)) * rFactor;

// 	// console.log('rX = ' + rX + '     rY = ' + rY);


// 	// var thisX = Math.round(rX * (Math.cos(theta)));
// 	// var thisY = Math.round(rY * (Math.sin(theta)));
// 	var thisX = Math.round(rX * (Math.cos(theta))) - (curlDims[2] / 2);
// 	var thisY = Math.round(rY * (Math.sin(theta))) - (curlDims[3] / 4);

// 	// console.log('thisX = ' + thisX + '     thisY = ' + thisY);


// 	// TweenMax.to([thisElem], 1, {x: thisX, y: thisY, scale: 0.125, transformOrigin:"50% 50%", ease:Power3.easeOut, delay: 0.5});
// 	// TweenMax.to([thisElem], 1, {x: thisX, y: thisY, transformOrigin:"50% 50%", ease:Power3.easeOut, delay: 0.5});
// 	// TweenMax.set([thisElem], {x: thisX, y: thisY, scale:0.125, transformOrigin:"50% 50%"});
// 	TweenMax.set([thisElem], { x: thisX, y: thisY, transformOrigin: "50% 50%" });


// 	// // -------------------- path animation --------------------

// 	// var thisBoing = thisElem.children[0].children[0];
// 	// var thisCurl = thisElem.children[0].children[1];
// 	// var thisCurlRO = thisElem.children[0].children[2];

// 	// var animPath = MorphSVGPlugin.pathDataToBezier( thisBoing, {align: thisCurl });
// 	// var rotation = Math.atan2(animPath[1].y - animPath[0].y, animPath[1].x - animPath[0].x) + "_rad";


// 	// // var thisBoingX = 25;
// 	// // var thisBoingY = -200;

// 	// // TweenMax.set([thisBoing], {x: thisBoingX, y: thisBoingY });

// 	// // console.log('rotation = ' + rotation);


// 	// var thisCurlX = animPath[0].x;
// 	// var thisCurlY = animPath[0].y;
// 	// // var thisCurlX = animPath[0].x - (curlDims[2] / 2);
// 	// // var thisCurlY = animPath[0].y - (curlDims[3] / 2);

// 	// // TweenMax.set([thisCurl, thisCurlRO], {x: -25, y: 200 });
// 	// // TweenMax.set([thisCurl], {xPercent: -50, yPercent: -50 });
// 	// // TweenMax.set([thisCurl, thisCurlRO], {x: thisCurlX, y: thisCurlY });
// 	// // TweenMax.set([thisCurl, thisCurlRO], {x: thisCurlX, y: thisCurlY, rotation });

// 	// // TweenMax.set([thisCurl, thisCurlRO], {x: -25, y: 200, transformOrigin: "50% 50%" });
// 	// // TweenMax.set([thisCurl], {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });
// 	// // TweenMax.set([thisCurl, thisCurlRO], {x: thisCurlX, y: thisCurlY, transformOrigin: "50% 50%" });
// 	// TweenMax.set([thisCurl, thisCurlRO], {x: thisCurlX, y: thisCurlY, rotation, transformOrigin: "50% 50%" });


// 	// // // TweenMax.to([thisCurl], 5, {bezier: { values: animPath, autoRotate: true, type: 'cubic' }, ease: Power3.easeOut, delay: 5 });
// 	// // TweenMax.to([thisCurl], 5, {bezier: { values: animPath, autoRotate: true, type: 'cubic' }, transformOrigin: "50% 50%", ease: Power3.easeOut, delay: 5 });


// 	// -------------------- new theta for next curl --------------------

// 	if (thoughtIndex < numThoughts - 1) {
// 		theta = theta + deltaTheta;
// 		// console.log('theta = ' + theta);
// 	} else {
// 		theta = 0;
// 		// console.log('theta = ' + theta);
// 	}
// }


// //-------------------- FUNCTION: boing(thisElem) --------------------

// // function boing(evt) {
// function boing(thisElem) {
// 	// function boing(evt, thisElem) {

// 	console.log('');
// 	console.log('-------------------- custom.js - boing(evt) --------------------');

// 	console.log('MorphSVGPlugin.version = ' + MorphSVGPlugin.version);

// 	// var animPath = MorphSVGPlugin.pathDataToBezier( thisElem );

// 	console.log('');
// 	console.log('thisElem = ' + thisElem);
// 	console.log('thisElem.id = ' + thisElem.id);
// 	console.log('thisElem.attributes.length = ' + thisElem.attributes.length);

// 	console.log('');
// 	for (i = 0; i < thisElem.attributes.length; i++) {
// 		// console.log('thisElem.attributes[' + i + '].value = ' + thisElem.attributes[i].value);
// 		// console.log('thisElem.attributes[' + i + '].name = ' + thisElem.attributes[i].name + '     thisElem.attributes[' + i + '].value = ' + thisElem.attributes[i].value);
// 		// console.log('thisElem.attributes[' + i + '].name = ' + thisElem.attributes[i].name + ' = ' + thisElem.attributes[i].value);
// 		console.log('thisElem.attributes[' + i + '] = ' + thisElem.attributes[i].name + ' = ' + thisElem.attributes[i].value);
// 	}

// 	// var animPath = MorphSVGPlugin.pathDataToBezier(thisElem.path);
// 	var animPath = MorphSVGPlugin.pathDataToBezier($('#boingId'));

// 	// console.log('PING! boing(evt) triggered!   evt = ' + evt);
// 	// console.log('PING! boing(evt) triggered!   evt.type = ' + evt.type);
// 	// console.log('PING! boing(evt) triggered!   evt.target = ' + evt.target);
// 	// console.log('PING! boing(evt) triggered!   evt.target.getAttribute(id) = ' + evt.target.getAttribute('id'));

// 	// console.log('');
// 	// console.log('PING! boing(evt) triggered!   evt.target.parentNode = ' + evt.target.parentNode);
// 	// console.log('PING! boing(evt) triggered!   evt.target.parentNode.getAttribute(id) = ' + evt.target.parentNode.getAttribute('id'));
// 	// console.log('PING! boing(evt) triggered!   evt.target.parentNode.childNodes[1] = ' + evt.target.parentNode.childNodes[1]);
// 	// console.log('PING! boing(evt) triggered!   evt.target.parentNode.childNodes[1].getAttribute(id) = ' + evt.target.parentNode.childNodes[1].getAttribute('id'));

// 	// // var thisCurlId = evt.target.getAttribute('id');
// 	// // var thisBoingId = evt.target.parentNode.childNodes[1].getAttribute('id');
// 	// var thisCurlId = '#' + evt.target.getAttribute('id');
// 	// var thisBoingId = '#' + evt.target.parentNode.childNodes[1].getAttribute('id');

// 	// console.log('thisCurlId = ' + thisCurlId + '     thisBoingId = ' + thisBoingId);


// 	// var motionPath = MorphSVGPlugin.pathDataToBezier([thisBoingId], {align: [thisCurlId]});
// 	// var motionPath = MorphSVGPlugin.pathDataToBezier("#"+thisBoingId, {align:"#"+thisCurlId});
// 	// var motionPath = MorphSVGPlugin.pathDataToBezier("#boingPath_lf0", {align: "#curl0"});
// 	// var motionPath = MorphSVGPlugin.pathDataToBezier([evt.target.parentNode.childNodes[1]], {align: [evt.target]});

// 	// TweenMax.to([evt.target], 0.5, {x: -200, y: -200, scale: 0.125, transformOrigin:"50% 50%", ease: Power3.easeOut, delay: 0});


// 	// console.log('');
// 	// console.log('PING! boing(evt) triggered!   evt.target.previousSibling = ' + evt.target.previousSibling);
// 	// console.log('PING! boing(evt) triggered!   evt.target.previousSibling.firstElementChild = ' + evt.target.previousSibling.firstElementChild);
// 	// // console.log('PING! boing(evt) triggered!   evt.target.previousSibling.getAttribute(id) = ' + evt.target.previousSibling.getAttribute('id'));

// 	// console.log('PING! boing(thisElem) triggered!   thisElem = ' + thisElem);
// 	// console.log('PING! boing(thisElem) triggered!   thisElem.id = ' + thisElem.attributes.id);
// 	// console.log('PING! boing(thisElem) triggered!   thisElem.parentNode = ' + thisElem.parentNode);
// 	// console.log('PING! boing(thisElem) triggered!   thisElem.parentNode.id = ' + thisElem.parentNode.id);
// 	// console.log('PING! boing(thisElem) triggered!   thisElem.parentNode.firstChild.id = ' + thisElem.parentNode.firstChild.id);
// 	// console.log('PING! boing(thisElem) triggered!   thisElem.parentNode.lastChild.id = ' + thisElem.parentNode.lastChild.id);
// 	// // console.log('PING! boing(thisElem) triggered!   thisElem.parentNode.firstChild.nextSibling = ' + thisElem.parentNode.firstChild.nextSibling);
// 	// // console.log('PING! boing(thisElem) triggered!   thisElem.previousSibling = ' + thisElem.previousSibling);
// 	// // console.log('PING! boing(thisElem) triggered!   thisElem.nextSibling = ' + thisElem.nextSibling);


// 	// var animPath = MorphSVGPlugin.pathDataToBezier(thisElem.parentNode.lastChild, { align: thisElem.parentNode.firstChild });
// 	// var animPath = MorphSVGPlugin.pathDataToBezier([{"x":0,"y":245},{"x":10.1,"y":197},{"x":24.7,"y":153.8},{"x":42.8,"y":117.5},{"x":60.89999999999999,"y":81.19999999999999},{"x":82.4,"y":51.8},{"x":106.19999999999999,"y":31.5},{"x":129.99999999999997,"y":11.200000000000003},{"x":156.3,"y":0},{"x":183.9,"y":0},{"x":211.5,"y":0},{"x":237.7,"y":11.2},{"x":261.6,"y":31.5},{"x":285.50000000000006,"y":51.8},{"x":307,"y":81.2},{"x":325,"y":117.5}]);

// 	// TweenMax.to([thisElem], 0.5, {x: -200, y: -200, scale: 0.125, transformOrigin:"50% 50%", delay: 0});
// 	// TweenMax.to(['#'+thisElem.parentNode.id], 0.5, {x: -200, y: -200, scale: 0.125, transformOrigin:"50% 50%", ease:Power3.easeOut, delay: 0});
// 	// TweenMax.to([thisElem], 0.5, {x: -200, y: -200, scale: 0.125, transformOrigin:"50% 50%", delay: 0});

// 	// TweenMax.to([thisElem], 3 ,{bezier:{curviness:1.5, values:[{"x":0,"y":245},{"x":10.1,"y":197},{"x":24.7,"y":153.8},{"x":42.8,"y":117.5},{"x":60.89999999999999,"y":81.19999999999999},{"x":82.4,"y":51.8},{"x":106.19999999999999,"y":31.5},{"x":129.99999999999997,"y":11.200000000000003},{"x":156.3,"y":0},{"x":183.9,"y":0},{"x":211.5,"y":0},{"x":237.7,"y":11.2},{"x":261.6,"y":31.5},{"x":285.50000000000006,"y":51.8},{"x":307,"y":81.2},{"x":325,"y":117.5}]}, ease:Power3.easeOut});
// 	// TweenMax.to([thisElem], 3 ,{bezier:{values:[{"x":0,"y":245},{"x":10.1,"y":197},{"x":24.7,"y":153.8},{"x":42.8,"y":117.5},{"x":60.89999999999999,"y":81.19999999999999},{"x":82.4,"y":51.8},{"x":106.19999999999999,"y":31.5},{"x":129.99999999999997,"y":11.200000000000003},{"x":156.3,"y":0},{"x":183.9,"y":0},{"x":211.5,"y":0},{"x":237.7,"y":11.2},{"x":261.6,"y":31.5},{"x":285.50000000000006,"y":51.8},{"x":307,"y":81.2},{"x":325,"y":117.5}]}, ease:Power3.easeOut});
// 	// TweenMax.to([thisElem], 3 ,{bezier:{values:[{"x":325,"y":245},{"x":314.9,"y":197},{"x":300.3,"y":153.8},{"x":282.2,"y":117.5},{"x":264.09999999999997,"y":81.19999999999999},{"x":242.6,"y":51.8},{"x":218.79999999999998,"y":31.5},{"x":194.99999999999997,"y":11.200000000000003},{"x":168.7,"y":0},{"x":141.1,"y":0},{"x":113.5,"y":0},{"x":87.3,"y":11.2},{"x":63.4,"y":31.5},{"x":39.5,"y":51.8},{"x":18.1,"y":81.2},{"x":0,"y":117.5}]}});
// }

















// //-------------------- FUNCTION: bringToFront(thisElem, thisEvt) --------------------

// function bringToFront(thisElem, thisEvt) {

//     console.log('');
//     console.log('-------------------- custom.js - bringToFront(thisElem) --------------------');
//     console.log('PING! bringToFront(thisElem) triggered!   thisElem = ' + thisElem + '     thisEvt = ' + thisEvt);
//     console.log('PING! bringToFront(thisElem) triggered!   thisElem.id = ' + thisElem.id);

//     if (thisEvt === "mousenter") {
//         thisElem.style.zIndex = 99;
//     } else {
//         thisElem.style.zIndex = 1;
//     }
// }








// //-------------------- FUNCTION: randomStagger(thisObj) --------------------

// function randomStagger(thisObj) {
// 	console.log("PING!!! FUNCTION: randomStagger triggered!");

// 	var listItems = thisObj.children();
// 	var listItemsArray = listItems.toArray();

// 	listItemsArray.sort(function() {return 0.5-Math.random()});

// 	console.log("thisObj = " + thisObj + "   listItems = " + listItems + "   listItemsArray = " + listItemsArray);

// //	TweenMax.staggerFromTo(listItemsArray, staggerDuration, {scale:.25, alpha:0, ease:Power3.easeOut}, {scale:1, alpha:1, ease:Power3.easeOut}, staggerDelay, "frame01 +=0")
// 	TweenMax.staggerFromTo(listItemsArray, staggerDuration, {scale:2, ease:Power3.easeOut}, {scale:1, ease:Power3.easeOut}, staggerDelay, 0)
// 	TweenMax.staggerFromTo(listItemsArray, staggerDuration*0.5, {alpha:0, ease:Power3.easeOut, repeat:1, yoyo:true}, {alpha:1, ease:Power3.easeOut, repeat:1, yoyo:true}, staggerDelay, 0)
// }


// //-------------------- FUNCTION: shuffleArray(thisArray) - (ref: https://solidfoundationwebdev.com/blog/posts/how-to-shuffle-an-array-in-javascript) --------------------

// function shuffleArray(thisArray){
// 	for(var j, x, i = thisArray.length; i; j = Math.floor(Math.random() * i), x = thisArray[--i], thisArray[i] = thisArray[j], thisArray[j] = x);
// 	return thisArray;
// }


// //-------------------- FUNCTION: shuffle(thisContainer) - shuffle objects (rects) in container (#mask_maskA) --------------------

// function shuffle(thisContainer){
// 	thisContainer.each(function(){
// 		"use strict";

// 		var rects = $(this).find('rect');

// //		console.log('rects = ' + rects);

// //		for(var i = 0; i < rects.length; i++) {
// //			console.log('rects[i].id = ' + rects[i].id);
// //		}

// 		for(var i = 0; i < rects.length; i++) $(rects[i]).remove();            

// 		//the fisher yates algorithm, from https://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
// 		var i = rects.length;
// 		if ( i == 0 ) return false;

// 		while ( --i ) {
// 			var j = Math.floor( Math.random() * ( i + 1 ) );
// 			var tempi = rects[i];
// 			var tempj = rects[j];
// 			rects[i] = tempj;
// 			rects[j] = tempi;
// 		}

// //		for(var i = 0; i < rects.length; i++) {
// //			console.log('rects[i].id = ' + rects[i].id);
// //		}

// 		for(var i = 0; i < rects.length; i++) $(rects[i]).appendTo(this);
// 	});                    
// }

// shuffle($("#mask_maskH"));
// shuffle($("#mask_maskV"));


// //-------------------- FUNCTIONS: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

// var numParticle = 50;

// var container01W = container01.width();
// var container01H = container01.height();

// var container02W = container02.width();
// var container02H = container02.height();

// console.log("container01W x container01H = " + container01W + " x " + container01H);
// console.log("container02W x container02H = " + container02W + " x " + container02H);

// TweenMax.set("img", {xPercent:"-50%", yPercent:"-50%"})


// function addParticle(thisContainer){   
// 	for (var i = 0; i < numParticle; i++){ 
// 		thisContainer.append('<div class="particle"><img src="images/flash01.jpg"></div>');
// 	}

// 	positionParticle(thisContainer);
// }


// function positionParticle(thisContainer){
// 	thisContainer.children().each(function(){
// //		console.log("PING!!! found this " + this + " in " + thisContainer);

// 		var thisX = randRange(-thisContainer.width()*1, thisContainer.width()*1);
// 		var thisY = randRange(-thisContainer.height()*1, thisContainer.height()*1);
// 		var thisScale = randRange(25, 75) / 100;

// //		console.log("thisX, thisY, thisScale = " + thisX + ", " + thisY + ", " + thisScale);

// 		TweenLite.set(this, {x:thisX, y:thisY, alpha:0, scale:thisScale});

// 		particleAnim(this);
// 	});
// }


// function particleAnim(thisParticle){ 
// //	TweenMax.to(thisParticle, animDuration04, {x:randRange(-100, 100), rotationY:0, alpha:1, repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
// //	TweenMax.to(thisParticle, animDuration01, {x:0, alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
// 	TweenMax.to(thisParticle, animDuration01, {alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(0, 1.5)});
// };
