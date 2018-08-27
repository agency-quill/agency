// templates of html structures for rendering
var templateMod = {
    'anchorScroll':'href="javascript:void(0)" onClick="anchorScroll($(this),$(\'{{end}}\'),{{offset}})"',
    'anchorTag':'<a {{href}} title="{{title}}">{{anchorContent}}</a>',
    'areaTag':'<area shape="{{shape}}" coords="{{coords}}" {{href}} title="{{title}}">',
    'heading':'<h1>{{heading}}</h1>',
    'headingIntro':'<p class="intro">{{headingIntro}}</p>',
    'iccDisclaimer':'<p class="iccDisclaimer" onclick="$(this).Tooltip(\'{{disclaimerText}}\',{{disclaimerBoxWidth}},{hasCloseButton:true})" style="{{disclaimerCss}}">{{disclaimerLink}}</p>',
	'iccDiv':'<div class="iccCode" style="{{iccCss}}"><p class="iccText">Use Code <strong>{{iccCode}}</strong></p></div>',
	'iccExpiry':'<p>Good through {{iccExpiry}}.</p>',
	'iccUsage':'<p>One-time use per {{iccUsage}}.</p>',
	'imageTag':'<img class="img" src="{{src}}" alt="{{alt}}">',
    'href':'href="{{url}}{{mcode}}"',
	'liTag':'<li>{{li}}</li>',
    'locator':'class="scTrack pfm" sctype="pfm" sku="{{sku}}" locater="carousel_1"',
    'mapTag':'<map name="{{mapName}}">{{mapAreas}}</map>',
    'qView':'href="javascript:void(0)" onClick="showPriceInCart(this, \'{{sku}}\', \'{{effort}}\', \'{{absolute}}\')"',
    'readMore':'<p class="accordion"><a href="javascript:void(0)">{{readMore}}</a></p>'
}
// anchor scroll
function anchorScroll(start, end, offset) { // start and end are DOM nodes offset is a number
    if(offset == null) offset = 0;
    offset = $('.is-sticky')[0] ? offset - 60 : offset - 210;   // adjust for sticky header
    $('html, body').animate({
        scrollTop: end.offset().top + offset // scroll to end + offset
    }, Math.abs(end.offset().top - start.offset().top) * 250 / 1000); // set speed to (end - start) * 150 / 1000
}
// build disclaimer(s)
function buildDisclaimer(obj){
    obj.disclaimerMultiple = obj.disclaimer.split('+');    // separate multiple disclaimers
    for(obj.i = 0; obj.i < obj.disclaimerMultiple.length; obj.i++){   // for each disclaimer
        obj.disclaimerArray = obj.disclaimerMultiple[obj.i].split(',');    // build disclaimer array
        obj.disclaimerLink = obj.disclaimerArray[0] ? obj.disclaimerArray[0] : 'View Disclaimer';  // if no disclaimer link text set to 'View Disclaimer'
        obj.disclaimerText = obj.disclaimerArray[1];    // get text
        obj.disclaimerBoxWidth = obj.disclaimerArray[2] ? parseInt(obj.disclaimerArray[2]) : 400;   // if no width set to 400
        obj.disclaimerCss = obj.disclaimerArray[3] ? obj.disclaimerArray[3] : '';   // if no css use null
        obj.disclaimerNumber = obj.disclaimerText.match(/[dD][0-9]+[a-zA-Z]*/g);    // find disclaimer number
        if(obj.disclaimerNumber){   // if disclaimer number(s) present
            for(obj.j = 0; obj.j < obj.disclaimerNumber.length; obj.j++){ // for each disclaimer number
                obj.disclaimerText = obj.disclaimerText.replace(obj.disclaimerNumber[obj.j], disclaimerText[obj.disclaimerNumber[obj.j]]);   // replace disclaimer number(s) with disclaimer text
            }
        }
        obj.html += render(templateMod.iccDisclaimer,obj); // render disclaimer 
    }
}
// get parameter value
function getParamVal(string, param){
    var paramArray = string.split(';'); // create array of parameters from string
    for(var i=0; i<paramArray.length; i++){ // go through array
        if(paramArray[i].indexOf(param) > 0){   // if parameter name matches param
            return paramArray[i].split('=')[1]; // return parameter value
        }
    }
    return false;   // return false if not found
}
// image roll over
function imgRollOvr(imgNode, imgUrl){
    imgNode.attr('src', imgUrl);    // replace imgNode src with imgUrl
}
// initialize module
function initMod(cssArray, content, node){
    var empty = 0;  // set empty to false
    if(content && node) {  // if content & node call isEmpty and set empty value
        if(isEmpty(content, node) && cssArray) loadCss(cssArray);   // if not empty and cssArray present call loadCss
    }
}
// is offer code empty
function isEmpty(content, node){
    if(content.trim() == ''){   // if no content
        node.remove();  // remove node
        return 0;   // yes offer code is empty
    } else {
        return 1;   // no offer code isn't empty
    }
}
// load css file(s)
function loadCss(cssArray){
    cssArray = cssArray.split(','); // create array of css urls
    for(var i = 0; i < cssArray.length; i++){
        if (!$('link[href="'+cssArray[i]+'"]').length) $('head').append('<link href="'+cssArray[i]+'" rel="stylesheet">');  // load style sheet if not loaded
    }
}
// renders html
function render(html, obj){
    for(var k in obj){
        html = html.replace(new RegExp('{{'+k+'}}','g'),obj[k]);
    }
    return html;  
}
// builds static web ads
function webAd(ad, obj){
    if(obj.src){    // if image
        if(obj.disclaimer || obj.icc || obj.htmlText) loadCss('/content/iw/styles/mod.min.css');   // if needed load css
        for(obj.g in obj){  // go through ad object
            if(obj[obj.g] != ''){   // if property not empty
                obj[obj.g] = obj[obj.g].replace(/\s*,\s*/g,',').replace(/\s*\+\s*/g,'+').trim();   // remove spaces around ',' and '+'
                if(obj.g == 'link' || obj.g == 'map') obj[obj.g] = obj[obj.g].replace(/[a-zA-Z0-9]\?/,function(str){return str.slice(0,-1)+',?';});    // if make sure mcode is preceded by a comma
            }
        }
        obj.anchorContent = render(templateMod.imageTag,obj);  // render img html
        if(obj.htmlText){   // if html text
            obj.anchorContent += obj.htmlText;
        }
        if(obj.link){    // if link
            obj.linkArray = obj.link.split(',');    // build link array
            if (obj.linkArray[3]){  // if qview
                obj.sku = obj.linkArray[0]; // get sku
                obj.effort = obj.linkArray[1] ? obj.linkArray[1] : '901';  // if no effort make 901
                obj.absolute = obj.linkArray[2];    // get absolute
                obj.href = render(templateMod.qView,obj) + render(templateMod.locator,obj);  // build qview html
                obj.html = render(templateMod.anchorTag,obj);  // build anchor tag html
                // if(obj.){
                //     obj.html += 'xxx';
                // }
            } else {    // not qview
                obj.url = obj.linkArray[0]; // get url
                if(obj.linkArray[2]){   // if locator
                    if(obj.linkArray[0].indexOf('/cbs/') >= 0){   // if sku url
                        obj.sku = obj.linkArray[0].slice(obj.linkArray[0].lastIndexOf('/')+1,obj.linkArray[0].indexOf('.'));    // get sku
                        obj.locator = obj.linkArray[1]; // get locator
                    }
                    obj.mcode = obj.linkArray[2];   // get mcode
                } else {
                    obj.mcode = obj.linkArray[1];   // get mcode
                }
                obj.href = render(templateMod.href,obj);   // build href html
                obj.html = render(templateMod.anchorTag,obj);  // build link html
            }
        } else if(obj.map){ // if image map
            obj.mapName = "map-"+ad;    // build map name
            obj.html = obj.anchorContent.slice(0,obj.anchorContent.search('s'))+'usemap="#'+obj.mapName+'" '+obj.anchorContent.slice(obj.anchorContent.search('s')); // add map name to img
            obj.mcode = obj.map.slice(obj.map.lastIndexOf(',')+1)+'-00';  // get mcode and customize
            obj.map = obj.map.slice(0,obj.map.lastIndexOf(','));    // remove mcode
            obj.mapMultiple = obj.map.split('+');   // separate multiple areas
            obj.mapAreas = '';  // initialize mapAreas
            for(obj.i = 0; obj.i < obj.mapMultiple.length; obj.i++){  // for each area
                obj.mapArray = obj.mapMultiple[obj.i].split(',');  // build map array
                obj.j = 1;  // initialize counter
                while(obj.mapArray[obj.j] != 'rect' && obj.mapArray[obj.j] != 'circle' && obj.mapArray[obj.j] != 'poly'){   // repeat until shape found
                    obj.j++;    // iterate loop
                }
                obj.shape = obj.mapArray[obj.j];    // get shape
                obj.title = obj.mapArray[obj.j+1];  // get title
                obj.coords = '';    // initialize coords string
                for(obj.k = obj.j+2;obj.k<obj.mapArray.length;obj.k++){ // for each coord
                    obj.coords += obj.mapArray[obj.k]+',';  // build coords string
                }
                obj.coords = obj.coords.slice(0,obj.coords.lastIndexOf(','));   // remove trailing comma
                if(obj.j == 3 || obj.j == 4){   // if qview
                    obj.sku = obj.mapArray[0]; // get sku
                    obj.effort = obj.mapArray[1] ? obj.mapArray[1] : '901';  // if no effort make 901
                    obj.absolute = obj.mapArray[2];    // get absolute
                    obj.href = render(templateMod.qView,obj);  // build qview html
                    if(obj.j == 4){
                        obj.locator = obj.mapArray[3];   // if locator get locator
                    } 
                } else {
                    obj.url = obj.mapArray[0]; // get url
                    if(obj.j == 2){   // if locator
                        if(obj.mapArray[0].indexOf('/cbs/') >= 0){   // if sku url
                            obj.sku = obj.mapArray[0].slice(obj.mapArray[0].lastIndexOf('/')+1,obj.mapArray[0].indexOf('.'));    // get sku
                            obj.locator = obj.mapArray[1]; // get locator
                        }
                    }
                    obj.href = render(templateMod.href,obj);  // build href html
                }
                if(obj.locator) obj.href = obj.href.concat(' ',render(templateMod.locator,obj));  // if locator add it
                obj.mapAreas += render(templateMod.areaTag,obj);   // add area to map
                if(obj.i < obj.mapMultiple.length) obj.mcode = obj.mcode.slice(0,obj.mcode.lastIndexOf('-')+1)+obj.i+1;  // if next area customize mcode
            }
            obj.html += render(templateMod.mapTag,obj);    // add map to html
        } else {
            obj.html = obj.anchorContent;   // add image html
        }
        if(obj.icc){    // if icc
            obj.iccMultiple = obj.icc.split('+');    // separate multiple iccs
            for(obj.i = 0; obj.i < obj.iccMultiple.length; obj.i++){  // for each icc
                obj.iccArray = obj.iccMultiple[obj.i].split(',');    // build icc array
                obj.iccCode = obj.iccArray[0];  // get icc
                obj.iccCss = obj.iccArray[3] ? obj.iccArray[3] : '';   // if no css use null
                obj.icc = render(templateMod.iccDiv,obj);  // render icc
                if(obj.iccArray[1]) {   // if usage
                    obj.iccUsage = obj.iccArray[1]; // get usage
                    obj.icc = obj.icc.slice(0,obj.icc.search('</d'))+render(templateMod.iccUsage,obj)+obj.icc.slice(obj.icc.search('</d'));  // add usage
                }
                if(obj.iccArray[2]){    // if expiry
                    obj.iccExpiry = obj.iccArray[2]; // get expiry
                    obj.icc = obj.icc.slice(0,obj.icc.search('</d'))+render(templateMod.iccExpiry,obj)+obj.icc.slice(obj.icc.search('</d')); // add expiry
                }
                obj.html += obj.icc;    // add icc to html
            }
        }
        if(obj.disclaimer){ // if disclaimer
            if(obj.disclaimer.search(/[dD][0-9]+[a-zA-Z]*/)>=0){   // if disclaimer number(s)
                $.getScript('/content/iw/scripts/disclaimers.js', function(){   // load disclaimer file
                    buildDisclaimer(obj);   // build disclaimer
                });
            } else {    // no disclaimer numbers
                buildDisclaimer(obj);   // build disclaimer
            }
        }
        if($.active > 0){ // if disclaimer file being loaded
            $(document).ajaxComplete(function(){    // wait until disclaimer file loaded
                $('#webAd-' + ad).html(obj.html);   // build module
            });
        } else {
            $('#webAd-' + ad).html(obj.html);   // build module
        }
    } else {    // if no image
        $('#webAd-' + ad).remove(); // remove module
    }
}
$('#mod .quarter, #mod .third, #mod .half, #mod .threeQuarter, #mod .full').each(function() {
    if ($(this).position().left - $(this).parent().position().left < 100) {
      $(this).css('margin-left','0');
    }
});