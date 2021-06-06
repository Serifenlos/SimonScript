!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e={entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"}},t=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,n=new RegExp("[\\-\\.0-9"+t.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),r=new RegExp("^"+t.source+n.source+"*(?::"+t.source+n.source+"*)?$");//closed el<el />
/**
	 * Creates an error that will not be caught by XMLReader aka the SAX parser.
	 *
	 * @param {string} message
	 * @param {any?} locator Optional, can provide details about the location in the source
	 * @constructor
	 */
function a(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,a)}function i(){}function o(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}
/**
	 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
	 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
	 */function s(e,t,n,r,a,i){
/**
		 * @param {string} qname
		 * @param {string} value
		 * @param {number} startIndex
		 */
function o(e,t,r){e in n.attributeNames&&i.fatalError("Attribute "+e+" redefined"),n.addValue(e,t,r)}//status
for(var s,c=++t,u=0;;){var l=e.charAt(c);switch(l){case"=":if(1===u)//attrName
s=e.slice(t,c),u=3;else{if(2!==u)
//fatalError: equal must after attrName or space after attrName
throw new Error("attribute equal must after attrName");// No known test case
u=3}break;case"'":case'"':if(3===u||1===u){if(//equal
1===u&&(i.warning('attribute value must after "="'),s=e.slice(t,c)),t=c+1,!((c=e.indexOf(l,t))>0))
//fatalError: no end quot match
throw new Error("attribute value no end '"+l+"' match");o(s,m=e.slice(t,c).replace(/&#?\w+;/g,a),t-1),u=5}else{if(4!=u)
//fatalError: no equal before
throw new Error('attribute value must after "="');// No known test case
//console.log(attrName,value,start,p)
o(s,m=e.slice(t,c).replace(/&#?\w+;/g,a),t),
//console.dir(el)
i.warning('attribute "'+s+'" missed start quot('+l+")!!"),t=c+1,u=5}break;case"/":switch(u){case 0:n.setTagName(e.slice(t,c));case 5:case 6:case 7:u=7,n.closed=!0;case 4:case 1:case 2:break;
//case S_EQ:
default:throw new Error("attribute invalid close char('/')");// No known test case
}break;case""://end document
return i.error("unexpected end of input"),0==u&&n.setTagName(e.slice(t,c)),c;case">":switch(u){case 0:n.setTagName(e.slice(t,c));case 5:case 6:case 7:break;//normal
case 4://Compatible state
case 1:"/"===(m=e.slice(t,c)).slice(-1)&&(n.closed=!0,m=m.slice(0,-1));case 2:2===u&&(m=s),4==u?(i.warning('attribute "'+m+'" missed quot(")!'),o(s,m.replace(/&#?\w+;/g,a),t)):("http://www.w3.org/1999/xhtml"===r[""]&&m.match(/^(?:disabled|checked|selected)$/i)||i.warning('attribute "'+m+'" missed value!! "'+m+'" instead!!'),o(m,m,t));break;case 3:throw new Error("attribute value missed!!")}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
return c;
/*xml space '\x20' | #x9 | #xD | #xA; */case"":l=" ";default:if(l<=" ")//space
switch(u){case 0:n.setTagName(e.slice(t,c)),//tagName
u=6;break;case 1:s=e.slice(t,c),u=2;break;case 4:var m=e.slice(t,c).replace(/&#?\w+;/g,a);i.warning('attribute "'+m+'" missed quot(")!!'),o(s,m,t);case 5:u=6;
//case S_TAG_SPACE:
//case S_EQ:
//case S_ATTR_SPACE:
//	void();break;
//case S_TAG_CLOSE:
//ignore warning
}else//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
switch(u){
//case S_TAG:void();break;
//case S_ATTR:void();break;
//case S_ATTR_NOQUOT_VALUE:void();break;
case 2:n.tagName,"http://www.w3.org/1999/xhtml"===r[""]&&s.match(/^(?:disabled|checked|selected)$/i)||i.warning('attribute "'+s+'" missed value!! "'+s+'" instead2!!'),o(s,s,t),t=c,u=1;break;case 5:i.warning('attribute space is required"'+s+'"!!');case 6:u=1,t=c;break;case 3:u=4,t=c;break;case 7:throw new Error("elements closed character '/' and '>' must be connected to")}}//end outer switch
//console.log('p++',p)
c++}}
/**
	 * @return true if has new namespace define
	 */function c(e,t,n){for(var r=e.tagName,a=null,i=e.length;i--;){var o=e[i],s=o.qName,c=o.value;if((h=s.indexOf(":"))>0)var u=o.prefix=s.slice(0,h),l=s.slice(h+1),d="xmlns"===u&&l;else l=s,u=null,d="xmlns"===s&&"";
//can not set prefix,because prefix !== ''
o.localName=l,
//prefix == null for no ns prefix attribute 
!1!==d&&(//hack!!
null==a&&(a={},
//console.log(currentNSMap,0)
m(n,n={})),n[d]=a[d]=c,o.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(d,c))}for(i=e.length;i--;){(u=(o=e[i]).prefix)&&(//no prefix attribute has no namespace
"xml"===u&&(o.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==u&&(o.uri=n[u||""]))}var h;(h=r.indexOf(":"))>0?(u=e.prefix=r.slice(0,h),l=e.localName=r.slice(h+1)):(u=null,//important!!
l=e.localName=r);
//no prefix element has default namespace
var p=e.uri=n[u||""];
//endPrefixMapping and startPrefixMapping have not any help for dom builder
//localNSMap = null
if(t.startElement(p,l,r,e),!e.closed)
//parseStack.push(el);
return e.currentNSMap=n,e.localNSMap=a,!0;if(t.endElement(p,l,r),a)for(u in a)t.endPrefixMapping(u)}function u(e,t,n,r,a){if(/^(?:script|textarea)$/i.test(n)){var i=e.indexOf("</"+n+">",t),o=e.substring(t+1,i);if(/[&<]/.test(o))return/^script$/i.test(n)?(
//if(!/\]\]>/.test(text)){
//lexHandler.startCDATA();
a.characters(o,0,o.length),i):(//}else{//text area
o=o.replace(/&#?\w+;/g,r),a.characters(o,0,o.length),i)}return t+1}function l(e,t,n,r){
//if(tagName in closeMap){
var a=r[n];return null==a&&(
//console.log(tagName)
(a=e.lastIndexOf("</"+n+">"))<t&&(//忘记闭合
a=e.lastIndexOf("</"+n)),r[n]=a),a<t;
//} 
}function m(e,t){for(var n in e)t[n]=e[n]}function d(e,t,n,r){switch(e.charAt(t+2)){case"-":return"-"===e.charAt(t+3)?
//append comment source.substring(4,end)//<!--
(a=e.indexOf("--\x3e",t+4))>t?(n.comment(e,t+4,a-t-4),a+3):(r.error("Unclosed comment"),-1):-1;default:if("CDATA["==e.substr(t+3,6)){var a=e.indexOf("]]>",t+9);return n.startCDATA(),n.characters(e,t+9,a-t-9),n.endCDATA(),a+3}
//<!DOCTYPE
//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
var i=function(e,t){var n,r=[],a=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;a.lastIndex=t,a.exec(e);//skip <
for(;n=a.exec(e);)if(r.push(n),n[1])return r}(e,t),o=i.length;if(o>1&&/!doctype/i.test(i[0][0])){var s=i[1][0],c=!1,u=!1;o>3&&(/^public$/i.test(i[2][0])?(c=i[3][0],u=o>4&&i[4][0]):/^system$/i.test(i[2][0])&&(u=i[3][0]));var l=i[o-1];return n.startDTD(s,c,u),n.endDTD(),l.index+l[0].length}}return-1}function h(e,t,n){var r=e.indexOf("?>",t);if(r){var a=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return a?(a[0].length,n.processingInstruction(a[1],a[2]),r+2):-1}return-1}function p(){this.attributeNames={}}a.prototype=new Error,a.prototype.name=a.name,i.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),m(t,t={}),function(e,t,n,r,i){function m(e){
// String.prototype.fromCharCode does not supports
// > 2 bytes unicode chars directly
if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}function f(e){var t=e.slice(1,-1);return t in n?n[t]:"#"===t.charAt(0)?m(parseInt(t.substr(1).replace("x","0x"))):(i.error("entity not found:"+e),e)}function g(t){//has some bugs
if(t>x){var n=e.substring(x,t).replace(/&#?\w+;/g,f);y&&N(x),r.characters(n,0,t-x),x=t}}function N(t,n){for(;t>=E&&(n=w.exec(e));)v=n.index,E=v+n[0].length,y.lineNumber++;y.columnNumber=t-v+1}var v=0,E=0,w=/.*(?:\r\n?|\n)|.*$/g,y=r.locator,b=[{currentNSMap:t}],T={},x=0;for(;;){try{var D=e.indexOf("<",x);if(D<0){if(!e.substr(x).match(/^\s*$/)){var C=r.doc,S=C.createTextNode(e.substr(x));C.appendChild(S),r.currentElement=S}return}switch(D>x&&g(D),e.charAt(D+1)){case"/":var A=e.indexOf(">",D+3),_=e.substring(D+2,A),I=b.pop();A<0?(_=e.substring(D+2).replace(/[\s<].*/,""),i.error("end tag name: "+_+" is not complete:"+I.tagName),A=D+1+_.length):_.match(/\s</)&&(_=_.replace(/[\s<].*/,""),i.error("end tag name: "+_+" maybe not complete"),A=D+1+_.length);var O=I.localNSMap,R=I.tagName==_;if(R||I.tagName&&I.tagName.toLowerCase()==_.toLowerCase()){if(r.endElement(I.uri,I.localName,_),O)for(var M in O)r.endPrefixMapping(M);R||i.fatalError("end tag name: "+_+" is not match the current start tagName:"+I.tagName)}else b.push(I);A++;break;
// end elment
case"?":// <?...?>
y&&N(D),A=h(e,D,r);break;case"!":// <!doctype,<![CDATA,<!--
y&&N(D),A=d(e,D,r,i);break;default:y&&N(D);var B=new p,k=b[b.length-1].currentNSMap,L=(A=s(e,D,B,k,f,i),B.length);if(!B.closed&&l(e,A,B.tagName,T)&&(B.closed=!0,n.nbsp||i.warning("unclosed xml attribute")),y&&L){
//try{//attribute position fixed
for(var F=o(y,{}),P=0;P<L;P++){var U=B[P];N(U.offset),U.locator=o(y,{})}r.locator=F,c(B,r,k)&&b.push(B),r.locator=y}else c(B,r,k)&&b.push(B);"http://www.w3.org/1999/xhtml"!==B.uri||B.closed?A++:A=u(e,A,B.tagName,f,r)}}catch(e){if(e instanceof a)throw e;i.error("element parse error: "+e),A=-1}A>x?x=A:
//TODO: 这里有可能sax回退，有位置错误风险
g(Math.max(D,x)+1)}}(e,t,n,r,this.errorHandler),r.endDocument()}},p.prototype={setTagName:function(e){if(!r.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,n){if(!r.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}
//	,getIndex:function(uri, localName)){
//		if(localName){

//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
};var f={XMLReader:i,ParseError:a};function g(e,t){for(var n in e)t[n]=e[n]}
/**
	^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
	^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
	 */function N(e,t){var n=e.prototype;if(!(n instanceof t)){function r(){}r.prototype=t.prototype,g(n,r=new r),e.prototype=n=r}n.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),n.constructor=e)}var v={},E=v.ELEMENT_NODE=1,w=v.ATTRIBUTE_NODE=2,y=v.TEXT_NODE=3,b=v.CDATA_SECTION_NODE=4,T=v.ENTITY_REFERENCE_NODE=5,x=v.ENTITY_NODE=6,D=v.PROCESSING_INSTRUCTION_NODE=7,C=v.COMMENT_NODE=8,S=v.DOCUMENT_NODE=9,A=v.DOCUMENT_TYPE_NODE=10,_=v.DOCUMENT_FRAGMENT_NODE=11,I=v.NOTATION_NODE=12,O={},R={};
// Node Types
O.INDEX_SIZE_ERR=(R[1]="Index size error",1),O.DOMSTRING_SIZE_ERR=(R[2]="DOMString size error",2);var M=O.HIERARCHY_REQUEST_ERR=(R[3]="Hierarchy request error",3);O.WRONG_DOCUMENT_ERR=(R[4]="Wrong document",4),O.INVALID_CHARACTER_ERR=(R[5]="Invalid character",5),O.NO_DATA_ALLOWED_ERR=(R[6]="No data allowed",6),O.NO_MODIFICATION_ALLOWED_ERR=(R[7]="No modification allowed",7);var B=O.NOT_FOUND_ERR=(R[8]="Not found",8);O.NOT_SUPPORTED_ERR=(R[9]="Not supported",9);var k=O.INUSE_ATTRIBUTE_ERR=(R[10]="Attribute in use",10);
//level2
/**
	 * DOM Level 2
	 * Object DOMException
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
	 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
	 */
function L(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,R[e]),this.message=R[e],Error.captureStackTrace&&Error.captureStackTrace(this,L);return n.code=e,t&&(this.message=this.message+": "+t),n}
/**
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
	 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
	 * The items in the NodeList are accessible via an integral index, starting from 0.
	 */
function F(){}function P(e,t){this._node=e,this._refresh=t,U(this)}function U(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var n=e._refresh(e._node);
//console.log(ls.length)
Ne(e,"length",n.length),g(n,e),e._inc=t}}
/**
	 * 
	 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
	 * NamedNodeMap objects in the DOM are live.
	 * used for attributes or DocumentType entities 
	 */
function q(){}function V(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function z(e,t,n,r){if(r?t[V(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var a=e.ownerDocument;a&&(r&&G(a,e,r),function(e,t,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&(
//update namespace
t._nsMap[n.prefix?n.localName:""]=n.value)}(a,e,n))}}function $(e,t,n){
//console.log('remove attr:'+attr)
var r=V(t,n);if(!(r>=0))throw L(B,new Error(e.tagName+"@"+n));for(var a=t.length-1;r<a;)t[r]=t[++r];if(t.length=a,e){var i=e.ownerDocument;i&&(G(i,e,n),n.ownerElement=null)}}
/**
	 * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
	 */
function X(/* Object */e){if(this._features={},e)for(var t in e)this._features=e[t]}
/**
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
	 */
function j(){}function H(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}
/**
	 * @param callback return true for continue,false for break
	 * @return boolean true: break visit;
	 */
function Y(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(Y(e,t))return!0}while(e=e.nextSibling)}function W(){}function G(e,t,n,r){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&
//update namespace
delete t._nsMap[n.prefix?n.localName:""]}function Z(e,t,n){if(e&&e._inc){e._inc++;
//update childNodes
var r=t.childNodes;if(n)r[r.length++]=n;else{for(
//console.log(1)
var a=t.firstChild,i=0;a;)r[i++]=a,a=a.nextSibling;r.length=i}}}
/**
	 * attributes;
	 * children;
	 * 
	 * writeable properties:
	 * nodeValue,Attr:value,CharacterData:data
	 * prefix
	 */function K(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,Z(e.ownerDocument,e),t}
/**
	 * preformance key(refChild == null)
	 */function Q(e,t,n){var r=t.parentNode;if(r&&r.removeChild(t),t.nodeType===_){var a=t.firstChild;if(null==a)return t;var i=t.lastChild}else a=i=t;var o=n?n.previousSibling:e.lastChild;a.previousSibling=o,i.nextSibling=n,o?o.nextSibling=a:e.firstChild=a,null==n?e.lastChild=i:n.previousSibling=i;do{a.parentNode=e}while(a!==i&&(a=a.nextSibling));return Z(e.ownerDocument||e,e),
//console.log(parentNode.lastChild.nextSibling == null)
t.nodeType==_&&(t.firstChild=t.lastChild=null),t}function J(){this._nsMap={}}function ee(){}function te(){}function ne(){}function re(){}function ae(){}function ie(){}function oe(){}function se(){}function ce(){}function ue(){}function le(){}function me(){}function de(e,t){var n=[],r=9==this.nodeType&&this.documentElement||this,a=r.prefix,i=r.namespaceURI;if(i&&null==a&&null==(a=r.lookupPrefix(i)))
//isHTML = true;
var o=[{namespace:i,prefix:null}];
//console.log('###',this.nodeType,uri,prefix,buf.join(''))
return pe(this,n,e,t,o),n.join("")}function he(e,t,n){var r=e.prefix||"",a=e.namespaceURI;if(!r&&!a)return!1;if("xml"===r&&"http://www.w3.org/XML/1998/namespace"===a||"http://www.w3.org/2000/xmlns/"==a)return!1;
//console.log('@@@@',node.tagName,prefix,uri,visibleNamespaces)
for(var i=n.length;i--;){var o=n[i];
// get namespace prefix
//console.log(node.nodeType,node.tagName,ns.prefix,prefix)
if(o.prefix==r)return o.namespace!=a}
//console.log(isHTML,uri,prefix=='')
//if(isHTML && prefix ==null && uri == 'http://www.w3.org/1999/xhtml'){
//	return false;
//}
//node.flag = '11111'
//console.error(3,true,node.flag,node.prefix,node.namespaceURI)
return!0}function pe(e,t,n,r,a){if(r){if(!(e=r(e)))return;
//buf.sort.apply(attrs, attributeSorter);
if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case E:a||(a=[]),a.length;var i=e.attributes,o=i.length,s=e.firstChild,c=e.tagName;n="http://www.w3.org/1999/xhtml"===e.namespaceURI||n,t.push("<",c);for(var u=0;u<o;u++){"xmlns"==(l=i.item(u)).prefix?a.push({prefix:l.localName,namespace:l.value}):"xmlns"==l.nodeName&&a.push({prefix:"",namespace:l.value})}for(u=0;u<o;u++){var l;if(he(l=i.item(u),0,a)){var m=l.prefix||"",d=l.namespaceURI,h=m?" xmlns:"+m:" xmlns";t.push(h,'="',d,'"'),a.push({prefix:m,namespace:d})}pe(l,t,n,r,a)}
// add namespace for current node		
if(he(e,0,a)){m=e.prefix||"";if(d=e.namespaceURI){
// Avoid empty namespace value like xmlns:ds=""
// Empty namespace URL will we produce an invalid XML document
h=m?" xmlns:"+m:" xmlns";t.push(h,'="',d,'"'),a.push({prefix:m,namespace:d})}}if(s||n&&!/^(?:meta|link|img|br|hr|input)$/i.test(c)){
//if is cdata child node
if(t.push(">"),n&&/^script$/i.test(c))for(;s;)s.data?t.push(s.data):pe(s,t,n,r,a),s=s.nextSibling;else for(;s;)pe(s,t,n,r,a),s=s.nextSibling;t.push("</",c,">")}else t.push("/>");
// remove added visible namespaces
//visibleNamespaces.length = startVisibleNamespaces;
return;case S:case _:for(s=e.firstChild;s;)pe(s,t,n,r,a),s=s.nextSibling;return;case w:
/**
			 * Well-formedness constraint: No < in Attribute Values
			 * The replacement text of any entity referred to directly or indirectly in an attribute value must not contain a <.
			 * @see https://www.w3.org/TR/xml/#CleanAttrVals
			 * @see https://www.w3.org/TR/xml/#NT-AttValue
			 */
return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,H),'"');case y:
/**
			 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
			 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
			 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
			 * `&amp;` and `&lt;` respectively.
			 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
			 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
			 * when that string is not marking the end of a CDATA section.
			 *
			 * In the content of elements, character data is any string of characters
			 * which does not contain the start-delimiter of any markup
			 * and does not include the CDATA-section-close delimiter, `]]>`.
			 *
			 * @see https://www.w3.org/TR/xml/#NT-CharData
			 */
return t.push(e.data.replace(/[<&]/g,H).replace(/]]>/g,"]]&gt;"));case b:return t.push("<![CDATA[",e.data,"]]>");case C:return t.push("\x3c!--",e.data,"--\x3e");case A:var p=e.publicId,f=e.systemId;if(t.push("<!DOCTYPE ",e.name),p)t.push(" PUBLIC ",p),f&&"."!=f&&t.push(" ",f),t.push(">");else if(f&&"."!=f)t.push(" SYSTEM ",f,">");else{var g=e.internalSubset;g&&t.push(" [",g,"]"),t.push(">")}return;case D:return t.push("<?",e.target," ",e.data,"?>");case T:return t.push("&",e.nodeName,";");
//case ENTITY_NODE:
//case NOTATION_NODE:
default:t.push("??",e.nodeName)}}function fe(e,t,n){var r;switch(t.nodeType){case E:(r=t.cloneNode(!1)).ownerDocument=e;
//var attrs = node2.attributes;
//var len = attrs.length;
//for(var i=0;i<len;i++){
//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
//}
case _:break;case w:n=!0;
//case ENTITY_REFERENCE_NODE:
//case PROCESSING_INSTRUCTION_NODE:
////case TEXT_NODE:
//case CDATA_SECTION_NODE:
//case COMMENT_NODE:
//	deep = false;
//	break;
//case DOCUMENT_NODE:
//case DOCUMENT_TYPE_NODE:
//cannot be imported.
//case ENTITY_NODE:
//case NOTATION_NODE：
//can not hit in level3
//default:throw e;
}if(r||(r=t.cloneNode(!1)),r.ownerDocument=e,r.parentNode=null,n)for(var a=t.firstChild;a;)r.appendChild(fe(e,a,n)),a=a.nextSibling;return r}

//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function ge(e,t,n){var r=new t.constructor;for(var a in t){var i=t[a];"object"!=typeof i&&i!=r[a]&&(r[a]=i)}switch(t.childNodes&&(r.childNodes=new F),r.ownerDocument=e,r.nodeType){case E:var o=t.attributes,s=r.attributes=new q,c=o.length;s._ownerElement=r;for(var u=0;u<c;u++)r.setAttributeNode(ge(e,o.item(u),!0));break;case w:n=!0}if(n)for(var l=t.firstChild;l;)r.appendChild(ge(e,l,n)),l=l.nextSibling;return r}function Ne(e,t,n){e[t]=n}
//do dynamic
O.INVALID_STATE_ERR=(R[11]="Invalid state",11),O.SYNTAX_ERR=(R[12]="Syntax error",12),O.INVALID_MODIFICATION_ERR=(R[13]="Invalid modification",13),O.NAMESPACE_ERR=(R[14]="Invalid namespace",14),O.INVALID_ACCESS_ERR=(R[15]="Invalid access",15),L.prototype=Error.prototype,g(O,L),F.prototype={
/**
		 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
		 * @standard level1
		 */
length:0,
/**
		 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
		 * @standard level1
		 * @param index  unsigned long 
		 *   Index into the collection.
		 * @return Node
		 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
		 */
item:function(e){return this[e]||null},toString:function(e,t){for(var n=[],r=0;r<this.length;r++)pe(this[r],n,e,t);return n.join("")}},P.prototype.item=function(e){return U(this),this[e]},N(P,F),q.prototype={length:0,item:F.prototype.item,getNamedItem:function(e){for(
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
//console.log()
var t=this.length;t--;){var n=this[t];
//console.log(attr.nodeName,key)
if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new L(k);var n=this.getNamedItem(e.nodeName);return z(this._ownerElement,this,e,n),n},
/* returns Node */
setNamedItemNS:function(e){// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
var t,n=e.ownerElement;if(n&&n!=this._ownerElement)throw new L(k);return t=this.getNamedItemNS(e.namespaceURI,e.localName),z(this._ownerElement,this,e,t),t},
/* returns Node */
removeNamedItem:function(e){var t=this.getNamedItem(e);return $(this._ownerElement,this,t),t},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
//for level2
removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return $(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}},X.prototype={hasFeature:function(/* string */e,/* string */t){var n=this._features[e.toLowerCase()];return!(!n||t&&!(t in n))},
// Introduced in DOM Level 2:
createDocument:function(e,t,n){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
var r=new W;if(r.implementation=this,r.childNodes=new F,r.doctype=n,n&&r.appendChild(n),t){var a=r.createElementNS(e,t);r.appendChild(a)}return r},
// Introduced in DOM Level 2:
createDocumentType:function(e,t,n){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
var r=new ie;
// Introduced in DOM Level 2:
//readonly attribute DOMString        internalSubset;
//TODO:..
//  readonly attribute NamedNodeMap     entities;
//  readonly attribute NamedNodeMap     notations;
return r.name=e,r.nodeName=e,r.publicId=t,r.systemId=n,r}},j.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,
// Modified in DOM Level 2:
insertBefore:function(e,t){//raises 
return Q(this,e,t)},replaceChild:function(e,t){//raises 
this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return K(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return ge(this.ownerDocument||this,this,e)},
// Modified in DOM Level 2:
normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==y&&e.nodeType==y?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},
// Introduced in DOM Level 2:
isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},
// Introduced in DOM Level 2:
hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;
//console.dir(map)
if(n)for(var r in n)if(n[r]==e)return r;t=t.nodeType==w?t.ownerDocument:t.parentNode}return null},
// Introduced in DOM Level 3:
lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;
//console.dir(map)
if(n&&e in n)return n[e];t=t.nodeType==w?t.ownerDocument:t.parentNode}return null},
// Introduced in DOM Level 3:
isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},g(v,j),g(v,j.prototype),W.prototype={
//implementation : null,
nodeName:"#document",nodeType:S,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){//raises 
if(e.nodeType==_){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return null==this.documentElement&&e.nodeType==E&&(this.documentElement=e),Q(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),K(this,e)},
// Introduced in DOM Level 2:
importNode:function(e,t){return fe(this,e,t)},
// Introduced in DOM Level 2:
getElementById:function(e){var t=null;return Y(this.documentElement,(function(n){if(n.nodeType==E&&n.getAttribute("id")==e)return t=n,!0})),t},getElementsByClassName:function(e){var t=new RegExp("(^|\\s)"+e+"(\\s|$)");return new P(this,(function(e){var n=[];return Y(e.documentElement,(function(r){r!==e&&r.nodeType==E&&t.test(r.getAttribute("class"))&&n.push(r)})),n}))},
//document factory method:
createElement:function(e){var t=new J;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new F,(t.attributes=new q)._ownerElement=t,t},createDocumentFragment:function(){var e=new ue;return e.ownerDocument=this,e.childNodes=new F,e},createTextNode:function(e){var t=new ne;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new re;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new ae;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new le;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new ee;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new ce;return t.ownerDocument=this,t.nodeName=e,t},
// Introduced in DOM Level 2:
createElementNS:function(e,t){var n=new J,r=t.split(":"),a=n.attributes=new q;return n.childNodes=new F,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==r.length?(n.prefix=r[0],n.localName=r[1]):
//el.prefix = null;
n.localName=t,a._ownerElement=n,n},
// Introduced in DOM Level 2:
createAttributeNS:function(e,t){var n=new ee,r=t.split(":");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==r.length?(n.prefix=r[0],n.localName=r[1]):
//el.prefix = null;
n.localName=t,n}},N(W,j),J.prototype={nodeType:E,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=""+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},
//four real opeartion method
appendChild:function(e){return e.nodeType===_?this.insertBefore(e,null):function(e,t){var n=t.parentNode;if(n){var r=e.lastChild;n.removeChild(t),r=e.lastChild}return r=e.lastChild,t.parentNode=e,t.previousSibling=r,t.nextSibling=null,r?r.nextSibling=t:e.firstChild=t,e.lastChild=t,Z(e.ownerDocument,e,t),t;
//console.log("__aa",parentNode.lastChild.nextSibling == null)
}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){
//console.log(this == oldAttr.ownerElement)
return this.attributes.removeNamedItem(e.nodeName)},
//get real attribute name,and remove it by removeAttributeNode
removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||""},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=""+n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new P(this,(function(t){var n=[];return Y(t,(function(r){r===t||r.nodeType!=E||"*"!==e&&r.tagName!=e||n.push(r)})),n}))},getElementsByTagNameNS:function(e,t){return new P(this,(function(n){var r=[];return Y(n,(function(a){a===n||a.nodeType!==E||"*"!==e&&a.namespaceURI!==e||"*"!==t&&a.localName!=t||r.push(a)})),r}))}},W.prototype.getElementsByTagName=J.prototype.getElementsByTagName,W.prototype.getElementsByTagNameNS=J.prototype.getElementsByTagNameNS,N(J,j),ee.prototype.nodeType=w,N(ee,j),te.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(R[M])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,n){n=this.data.substring(0,e)+n+this.data.substring(e+t),this.nodeValue=this.data=n,this.length=n.length}},N(te,j),ne.prototype={nodeName:"#text",nodeType:y,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},N(ne,te),re.prototype={nodeName:"#comment",nodeType:C},N(re,te),ae.prototype={nodeName:"#cdata-section",nodeType:b},N(ae,te),ie.prototype.nodeType=A,N(ie,j),oe.prototype.nodeType=I,N(oe,j),se.prototype.nodeType=x,N(se,j),ce.prototype.nodeType=T,N(ce,j),ue.prototype.nodeName="#document-fragment",ue.prototype.nodeType=_,N(ue,j),le.prototype.nodeType=D,N(le,j),me.prototype.serializeToString=function(e,t,n){return de.call(e,t,n)},j.prototype.toString=de;try{if(Object.defineProperty){function ve(e){switch(e.nodeType){case E:case _:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(ve(e)),e=e.nextSibling;return t.join("");default:return e.nodeValue}}Object.defineProperty(P.prototype,"length",{get:function(){return U(this),this.$$length}}),Object.defineProperty(j.prototype,"textContent",{get:function(){return ve(this)},set:function(e){switch(this.nodeType){case E:case _:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:
//TODO:
this.data=e,this.value=e,this.nodeValue=e}}}),Ne=function(e,t,n){
//console.log(value)
e["$$"+t]=n}}}catch(e){//ie8
}
//if(typeof require == 'function'){
var Ee,we={Node:j,DOMException:L,DOMImplementation:X,XMLSerializer:me},ye=(function(t,n){function r(e){this.options=e||{locator:{}}}
//console.log('#\n\n\n\n\n\n\n####')
/**
	 * +ContentHandler+ErrorHandler
	 * +LexicalHandler+EntityResolver2
	 * -DeclHandler-DTDHandler
	 *
	 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
	 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
	 */
function a(){this.cdata=!1}function i(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}
/**
	 * @see org.xml.sax.ContentHandler#startDocument
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
	 */function o(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function s(e,t,n){return"string"==typeof e?e.substr(t,n)://java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
e.length>=t+n||t?new java.lang.String(e,t,n)+"":e}
/*
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
	 * used method of org.xml.sax.ext.LexicalHandler:
	 *  #comment(chars, start, length)
	 *  #startCDATA()
	 *  #endCDATA()
	 *  #startDTD(name, publicId, systemId)
	 *
	 *
	 * IGNORED method of org.xml.sax.ext.LexicalHandler:
	 *  #endDTD()
	 *  #startEntity(name)
	 *  #endEntity(name)
	 *
	 *
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
	 * IGNORED method of org.xml.sax.ext.DeclHandler
	 * 	#attributeDecl(eName, aName, type, mode, value)
	 *  #elementDecl(name, model)
	 *  #externalEntityDecl(name, publicId, systemId)
	 *  #internalEntityDecl(name, value)
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
	 * IGNORED method of org.xml.sax.EntityResolver2
	 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
	 *  #resolveEntity(publicId, systemId)
	 *  #getExternalSubset(name, baseURI)
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
	 * IGNORED method of org.xml.sax.DTDHandler
	 *  #notationDecl(name, publicId, systemId) {};
	 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
	 */
/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function c(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}//appendChild and setAttributeNS are preformance key
//if(typeof require == 'function'){
r.prototype.parseFromString=function(t,n){var r=this.options,i=new u,s=r.domBuilder||new a,c=r.errorHandler,l=r.locator,m=r.xmlns||{},d=/\/x?html?$/.test(n),h=d?e.entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return l&&s.setDocumentLocator(l),i.errorHandler=function(e,t,n){if(!e){if(t instanceof a)return t;e=t}var r={},i=e instanceof Function;function s(t){var a=e[t];!a&&i&&(a=2==e.length?function(n){e(t,n)}:e),r[t]=a&&function(e){a("[xmldom "+t+"]\t"+e+o(n))}||function(){}}return n=n||{},s("warning"),s("error"),s("fatalError"),r}(c,s,l),i.domBuilder=r.domBuilder||s,d&&(m[""]="http://www.w3.org/1999/xhtml"),m.xml=m.xml||"http://www.w3.org/XML/1998/namespace",t&&"string"==typeof t?i.parse(t,m,h):i.errorHandler.error("invalid doc source"),s.doc},a.prototype={startDocument:function(){this.doc=(new m).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var a=this.doc,o=a.createElementNS(e,n||t),s=r.length;c(this,o),this.currentElement=o,this.locator&&i(this.locator,o);for(var u=0;u<s;u++){e=r.getURI(u);var l=r.getValue(u),m=(n=r.getQName(u),a.createAttributeNS(e,n));this.locator&&i(r.getLocator(u),m),m.value=m.nodeValue=l,o.setAttributeNode(m)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName,this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.doc.createProcessingInstruction(e,t);this.locator&&i(this.locator,n),c(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){
//console.log(chars)
if(e=s.apply(this,arguments)){if(this.cdata)var r=this.doc.createCDATASection(e);else r=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(r):/^\s*$/.test(e)&&this.doc.appendChild(r),this.locator&&i(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(// && !('lineNumber' in locator)){
e.lineNumber=0)},
//LexicalHandler
comment:function(e,t,n){e=s.apply(this,arguments);var r=this.doc.createComment(e);this.locator&&i(this.locator,r),c(this,r)},startCDATA:function(){
//used in characters() methods
this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.doc.implementation;if(r&&r.createDocumentType){var a=r.createDocumentType(e,t,n);this.locator&&i(this.locator,a),c(this,a)}},
/**
		 * @see org.xml.sax.ErrorHandler
		 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
		 */
warning:function(e){console.warn("[xmldom warning]\t"+e,o(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,o(this.locator))},fatalError:function(e){throw new l(e,this.locator)}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){a.prototype[e]=function(){return null}}));var u=f.XMLReader,l=f.ParseError,m=n.DOMImplementation=we.DOMImplementation;n.XMLSerializer=we.XMLSerializer,n.DOMParser=r,n.__DOMHandler=a}(Ee={exports:{}},Ee.exports),Ee.exports);const be="proofsetup",Te="proof_profil",xe="proof_intent",De="proof_tk",Ce="proof_group",Se=document.getElementById("proofinfo");
// fix bug: loose focus
function Ae(e){require("photoshop").core.performMenuCommand({commandID:e,kcanDispatchWhileModal:!0,_isCommand:!1})}
// menuCommand(2982);menuCommand(2986);menuCommand(2986);
// attach event listeners for tabs
Array.from(document.querySelectorAll(".sp-tab")).forEach((e=>{e.onclick=()=>{localStorage.setItem("currentTab",e.getAttribute("id")),Array.from(document.querySelectorAll(".sp-tab")).forEach((t=>{t.getAttribute("id")===e.getAttribute("id")?t.classList.add("selected"):t.classList.remove("selected")})),Array.from(document.querySelectorAll(".sp-tab-page")).forEach((t=>{t.getAttribute("id").startsWith(e.getAttribute("id"))?t.classList.add("visible"):t.classList.remove("visible")}))}}));const _e=document.querySelectorAll("sp-radio:not(.noSoftproof)"),Ie=document.querySelectorAll("sp-radio.noSoftproof");for(const e of _e)e.addEventListener("click",(async function(e){var t,n;for(t=0;t<_e.length;t++)// uncheck all other radios
_e[t].checked=!1;for(this.checked=!0,n=0;n<Ie.length;n++)// uncheck all noSoftproof-Radios
Ie[n].checked=!1;
// let dataProofProfil = `${event.target.getAttribute('data-proofProfil')}`;
// let dataProofIntent = `${event.target.getAttribute('data-proofIntent')}`;
// let dataproofTK = `${event.target.getAttribute('data-proofTK')}`;
let r=this.getAttribute("data-proofProfil"),a=this.getAttribute("data-proofIntent"),i=this.getAttribute("data-proofTK"),o="true"===i,s=this.getAttribute("data-proofGroup");Oe(r,a,o),ke(r,a,i,s);// loadScript("[panel] softproof2meta");
// proofinfo.innerHTML = dataProofProfil + " – " + dataProofIntent;
var c,u=document.getElementsByClassName("sp-tab");for(c=0;c<u.length;c++)u[c].classList.remove("active");var l=this.parentElement.parentElement.getAttribute("id").replace("-page","");document.getElementById(l).classList.add("active");
// showAlert(setMeta(dataProofProfil, dataProofIntent, dataproofTK))
var m,d=document.getElementsByClassName("noSoftproof");for(m=0;m<d.length;m++)d[m].classList.remove("checked");Ae(2982),Ae(2986),Ae(2986)}));for(const e of Ie)e.addEventListener("click",(function(e){if(!this.classList.contains("checked")){var t;for(Re(),
// loadScript("[panel] softproof2meta delete")
Fe(),document.getElementById("proofinfo").innerHTML="no Softproof",t=0;t<Ie.length;t++)// check all noSoftproof-Radios
Ie[t].checked=!0,Ie[t].classList.add("checked");var n,r=document.getElementsByClassName("sp-tab");for(n=0;n<r.length;n++)r[n].classList.remove("active")}Ae(2982),Ae(2986),Ae(2986)}));async function Oe(e,t,n){const r=require("photoshop").action.batchPlay;await r([{_obj:"proofSetup",profile:e,intent:{_enum:"intent",_value:t},mapBlack:n,_options:{dialogOptions:"dontDisplay"}}],{synchronousExecution:!1,modalBehavior:"fail"})}async function Re(){const e=require("photoshop").action.batchPlay;await e([{_obj:"select",_target:[{_ref:"menuItemClass",_enum:"menuItemType",_value:"toggleProofColors"}],_options:{dialogOptions:"dontDisplay"}}],{synchronousExecution:!1,modalBehavior:"fail"})}async function Me(e){const t=require("photoshop").action.batchPlay;await t([{_obj:"set",_target:[{_ref:"property",_property:"XMPMetadataAsUTF8"},{_ref:"document",_enum:"ordinal",_value:"targetEnum"}],to:{_obj:"document",XMPMetadataAsUTF8:e}}],{synchronousExecution:!0,modalBehavior:"fail"})}async function Be(){const e=require("photoshop").action.batchPlay;return(await e([{_obj:"get",_target:[{_property:"XMPMetadataAsUTF8"},{_ref:"document",_enum:"ordinal",_value:"targetEnum"}]}],{synchronousExecution:!1,modalBehavior:"fail"}))[0].XMPMetadataAsUTF8}
// setSoftproof(dataProofProfil, dataProofIntent, dataproofTK)
async function ke(e,t,n,r){const a=await Be(),i=await(new ye.DOMParser).parseFromString(a,"text/xml");i.documentElement.getElementsByTagName("rdf:Description")[0].hasAttribute("xmlns:"+be)||i.documentElement.getElementsByTagName("rdf:Description")[0].setAttribute("xmlns:"+be,"http://ns.simonadrian.de/proofsetup/1.0");var o=i.documentElement;if(0!=i.getElementsByTagName(be+":"+Te).length){var s=i.getElementsByTagName(be+":"+Te)[0];(c=i.createElement(be+":"+Te)).textContent=e,o.replaceChild(c,s)}else{var c;(c=i.createElement(be+":"+Te)).textContent=e,i.getElementsByTagName("rdf:Description")[0].appendChild(c)}if(0!=i.getElementsByTagName(be+":"+xe).length){var u=i.getElementsByTagName(be+":"+xe)[0];(l=i.createElement(be+":"+xe)).textContent=t,o.replaceChild(l,u)}else{var l;(l=i.createElement(be+":"+xe)).textContent=t,i.getElementsByTagName("rdf:Description")[0].appendChild(l)}if(0!=i.getElementsByTagName(be+":"+De).length){var m=i.getElementsByTagName(be+":"+De)[0];(d=i.createElement(be+":"+De)).textContent=n,o.replaceChild(d,m)}else{var d;(d=i.createElement(be+":"+De)).textContent=n,i.getElementsByTagName("rdf:Description")[0].appendChild(d)}if(0!=i.getElementsByTagName(be+":"+Ce).length){var h=i.getElementsByTagName(be+":"+Ce)[0];(p=i.createElement(be+":"+Ce)).textContent=r,o.replaceChild(p,h)}else{var p;(p=i.createElement(be+":"+Ce)).textContent=r,i.getElementsByTagName("rdf:Description")[0].appendChild(p)}const f=await(new ye.XMLSerializer).serializeToString(i);
// console.log(serialized);
await Me(f),
// console.log("setMeta!");
await Le()}async function Le(){const e=await Be(),t=await(new ye.DOMParser).parseFromString(e,"text/xml");
// console.log("getMeta! start");
if(0!=t.getElementsByTagName(be+":"+Te).length&&0!=t.getElementsByTagName(be+":"+xe).length&&0!=t.getElementsByTagName(be+":"+De).length){var n,r=t.getElementsByTagName(be+":"+Te)[0].childNodes[0].nodeValue,a=t.getElementsByTagName(be+":"+xe)[0].childNodes[0].nodeValue,i=t.getElementsByTagName(be+":"+De)[0].childNodes[0].nodeValue;for(0!=t.getElementsByTagName(be+":"+Ce).length&&t.getElementsByTagName(be+":"+Ce)[0].childNodes[0].nodeValue,Se.innerHTML=r+" – "+a,n=0;n<_e.length;n++)// uncheck all other radios
_e[n].checked=!1;document.querySelectorAll('sp-radio[data-proofProfil="'+r+'"][data-proofIntent="'+a+'"][data-proofTK="'+i+'"]')[0].checked=!0,
// for(e = 0; e < noSoftproofs.length; e++ ) {                          // uncheck all noSoftproof-Radios
//   noSoftproofs[e].checked = false;
// }
// console.log(metaProofProfil);
// console.log(metaProofIntent);
// console.log(metaProofTK);
console.log("end getMeta if true")}else{
// showAlert("nix da")
var o;for(document.getElementById("proofinfo").innerHTML="no Softproof",o=0;o<_e.length;o++)// uncheck all other radios
_e[o].checked=!1;document.querySelectorAll("sp-radio")[0].checked=!0}}async function Fe(){const e=await Be(),t=await(new ye.DOMParser).parseFromString(e,"text/xml");try{t.getElementsByTagName("rdf:Description")[0].removeAttribute("xmlns:"+be)}catch(e){}try{var n=t.getElementsByTagName(be+":"+Te)[0];t.documentElement.removeChild(n)}catch(e){}try{var r=t.getElementsByTagName(be+":"+xe)[0];t.documentElement.removeChild(r)}catch(e){}try{var a=t.getElementsByTagName(be+":"+De)[0];t.documentElement.removeChild(a)}catch(e){}const i=await(new ye.XMLSerializer).serializeToString(t);await Me(i)}
// var listener = (e,d) => { console.log(e,d); }
// require('photoshop').action.addNotificationListener([
//     // {
//     //     event: "select"
//     // },
//     // {
//     //     event: "open"
//     // },
//     {
//       event: "all"
//   },
// ], listener);
require("photoshop").action.addNotificationListener([
// {
//     event: "select"
// },
{event:"open"},{event:"layersFiltered"}],(function(){
// showAlert("dingAlert")
// console.log("ding");
Le()}))}));