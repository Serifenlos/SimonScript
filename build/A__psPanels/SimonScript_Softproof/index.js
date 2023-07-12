!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e={entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"}},t={},n=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,r=new RegExp("[\\-\\.0-9"+n.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),a=new RegExp("^"+n.source+r.source+"*(?::"+n.source+r.source+"*)?$"),i=0,o=1,s=2,c=3,u=4,l=5,m=6,d=7;//closed el<el />
/**
        * Creates an error that will not be caught by XMLReader aka the SAX parser.
        *
        * @param {string} message
        * @param {any?} locator Optional, can provide details about the location in the source
        * @constructor
        */
function h(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,h)}function p(){}function f(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}
/**
        * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
        * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
        */function g(e,t,n,r,a,h){
/**
       	 * @param {string} qname
       	 * @param {string} value
       	 * @param {number} startIndex
       	 */
function p(e,t,r){e in n.attributeNames&&h.fatalError("Attribute "+e+" redefined"),n.addValue(e,t,r)}//status
for(var f,g=++t,N=i;;){var v=e.charAt(g);switch(v){case"=":if(N===o)//attrName
f=e.slice(t,g),N=c;else{if(N!==s)
//fatalError: equal must after attrName or space after attrName
throw new Error("attribute equal must after attrName");// No known test case
N=c}break;case"'":case'"':if(N===c||N===o){if(//equal
N===o&&(h.warning('attribute value must after "="'),f=e.slice(t,g)),t=g+1,!((g=e.indexOf(v,t))>0))
//fatalError: no end quot match
throw new Error("attribute value no end '"+v+"' match");p(f,E=e.slice(t,g).replace(/&#?\w+;/g,a),t-1),N=l}else{if(N!=u)
//fatalError: no equal before
throw new Error('attribute value must after "="');// No known test case
//console.log(attrName,value,start,p)
p(f,E=e.slice(t,g).replace(/&#?\w+;/g,a),t),
//console.dir(el)
h.warning('attribute "'+f+'" missed start quot('+v+")!!"),t=g+1,N=l}break;case"/":switch(N){case i:n.setTagName(e.slice(t,g));case l:case m:case d:N=d,n.closed=!0;case u:case o:case s:break;
//case S_EQ:
default:throw new Error("attribute invalid close char('/')");// No known test case
}break;case""://end document
return h.error("unexpected end of input"),N==i&&n.setTagName(e.slice(t,g)),g;case">":switch(N){case i:n.setTagName(e.slice(t,g));case l:case m:case d:break;//normal
case u://Compatible state
case o:"/"===(E=e.slice(t,g)).slice(-1)&&(n.closed=!0,E=E.slice(0,-1));case s:N===s&&(E=f),N==u?(h.warning('attribute "'+E+'" missed quot(")!'),p(f,E.replace(/&#?\w+;/g,a),t)):("http://www.w3.org/1999/xhtml"===r[""]&&E.match(/^(?:disabled|checked|selected)$/i)||h.warning('attribute "'+E+'" missed value!! "'+E+'" instead!!'),p(E,E,t));break;case c:throw new Error("attribute value missed!!")}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
return g;
/*xml space '\x20' | #x9 | #xD | #xA; */case"":v=" ";default:if(v<=" ")//space
switch(N){case i:n.setTagName(e.slice(t,g)),//tagName
N=m;break;case o:f=e.slice(t,g),N=s;break;case u:var E=e.slice(t,g).replace(/&#?\w+;/g,a);h.warning('attribute "'+E+'" missed quot(")!!'),p(f,E,t);case l:N=m;
//case S_TAG_SPACE:
//case S_EQ:
//case S_ATTR_SPACE:
//	void();break;
//case S_TAG_CLOSE:
//ignore warning
}else//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
switch(N){
//case S_TAG:void();break;
//case S_ATTR:void();break;
//case S_ATTR_NOQUOT_VALUE:void();break;
case s:n.tagName,"http://www.w3.org/1999/xhtml"===r[""]&&f.match(/^(?:disabled|checked|selected)$/i)||h.warning('attribute "'+f+'" missed value!! "'+f+'" instead2!!'),p(f,f,t),t=g,N=o;break;case l:h.warning('attribute space is required"'+f+'"!!');case m:N=o,t=g;break;case c:N=u,t=g;break;case d:throw new Error("elements closed character '/' and '>' must be connected to")}}//end outer switch
//console.log('p++',p)
g++}}
/**
        * @return true if has new namespace define
        */function N(e,t,n){for(var r=e.tagName,a=null,i=e.length;i--;){var o=e[i],s=o.qName,c=o.value;if((d=s.indexOf(":"))>0)var u=o.prefix=s.slice(0,d),l=s.slice(d+1),m="xmlns"===u&&l;else l=s,u=null,m="xmlns"===s&&"";
//can not set prefix,because prefix !== ''
o.localName=l,
//prefix == null for no ns prefix attribute 
!1!==m&&(//hack!!
null==a&&(a={},
//console.log(currentNSMap,0)
w(n,n={})),n[m]=a[m]=c,o.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(m,c))}for(i=e.length;i--;){(u=(o=e[i]).prefix)&&(//no prefix attribute has no namespace
"xml"===u&&(o.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==u&&(o.uri=n[u||""]))}var d;(d=r.indexOf(":"))>0?(u=e.prefix=r.slice(0,d),l=e.localName=r.slice(d+1)):(u=null,//important!!
l=e.localName=r);
//no prefix element has default namespace
var h=e.uri=n[u||""];
//endPrefixMapping and startPrefixMapping have not any help for dom builder
//localNSMap = null
if(t.startElement(h,l,r,e),!e.closed)
//parseStack.push(el);
return e.currentNSMap=n,e.localNSMap=a,!0;if(t.endElement(h,l,r),a)for(u in a)t.endPrefixMapping(u)}function v(e,t,n,r,a){if(/^(?:script|textarea)$/i.test(n)){var i=e.indexOf("</"+n+">",t),o=e.substring(t+1,i);if(/[&<]/.test(o))return/^script$/i.test(n)?(
//if(!/\]\]>/.test(text)){
//lexHandler.startCDATA();
a.characters(o,0,o.length),i):(//}else{//text area
o=o.replace(/&#?\w+;/g,r),a.characters(o,0,o.length),i)}return t+1}function E(e,t,n,r){
//if(tagName in closeMap){
var a=r[n];return null==a&&(
//console.log(tagName)
(a=e.lastIndexOf("</"+n+">"))<t&&(//忘记闭合
a=e.lastIndexOf("</"+n)),r[n]=a),a<t;
//} 
}function w(e,t){for(var n in e)t[n]=e[n]}function y(e,t,n,r){if("-"===e.charAt(t+2))return"-"===e.charAt(t+3)?
//append comment source.substring(4,end)//<!--
(a=e.indexOf("--\x3e",t+4))>t?(n.comment(e,t+4,a-t-4),a+3):(r.error("Unclosed comment"),-1):-1;if("CDATA["==e.substr(t+3,6)){var a=e.indexOf("]]>",t+9);return n.startCDATA(),n.characters(e,t+9,a-t-9),n.endCDATA(),a+3}
//<!DOCTYPE
//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
var i=function(e,t){var n,r=[],a=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;a.lastIndex=t,a.exec(e);//skip <
for(;n=a.exec(e);)if(r.push(n),n[1])return r}(e,t),o=i.length;if(o>1&&/!doctype/i.test(i[0][0])){var s=i[1][0],c=!1,u=!1;o>3&&(/^public$/i.test(i[2][0])?(c=i[3][0],u=o>4&&i[4][0]):/^system$/i.test(i[2][0])&&(u=i[3][0]));var l=i[o-1];return n.startDTD(s,c,u),n.endDTD(),l.index+l[0].length}return-1}function b(e,t,n){var r=e.indexOf("?>",t);if(r){var a=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return a?(a[0].length,n.processingInstruction(a[1],a[2]),r+2):-1}return-1}function T(){this.attributeNames={}}h.prototype=new Error,h.prototype.name=h.name,p.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),w(t,t={}),function(e,t,n,r,a){function i(e){
// String.prototype.fromCharCode does not supports
// > 2 bytes unicode chars directly
if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}function o(e){var t=e.slice(1,-1);return t in n?n[t]:"#"===t.charAt(0)?i(parseInt(t.substr(1).replace("x","0x"))):(a.error("entity not found:"+e),e)}function s(t){//has some bugs
if(t>x){var n=e.substring(x,t).replace(/&#?\w+;/g,o);d&&c(x),r.characters(n,0,t-x),x=t}}function c(t,n){for(;t>=l&&(n=m.exec(e));)u=n.index,l=u+n[0].length,d.lineNumber++;d.columnNumber=t-u+1}var u=0,l=0,m=/.*(?:\r\n?|\n)|.*$/g,d=r.locator,p=[{currentNSMap:t}],w={},x=0;for(;;){try{var D=e.indexOf("<",x);if(D<0){if(!e.substr(x).match(/^\s*$/)){var C=r.doc,S=C.createTextNode(e.substr(x));C.appendChild(S),r.currentElement=S}return}switch(D>x&&s(D),e.charAt(D+1)){case"/":var A=e.indexOf(">",D+3),_=e.substring(D+2,A),I=p.pop();A<0?(_=e.substring(D+2).replace(/[\s<].*/,""),a.error("end tag name: "+_+" is not complete:"+I.tagName),A=D+1+_.length):_.match(/\s</)&&(_=_.replace(/[\s<].*/,""),a.error("end tag name: "+_+" maybe not complete"),A=D+1+_.length);var R=I.localNSMap,O=I.tagName==_;if(O||I.tagName&&I.tagName.toLowerCase()==_.toLowerCase()){if(r.endElement(I.uri,I.localName,_),R)for(var B in R)r.endPrefixMapping(B);O||a.fatalError("end tag name: "+_+" is not match the current start tagName:"+I.tagName)}else p.push(I);A++;break;
// end elment
case"?":// <?...?>
d&&c(D),A=b(e,D,r);break;case"!":// <!doctype,<![CDATA,<!--
d&&c(D),A=y(e,D,r,a);break;default:d&&c(D);var M=new T,k=p[p.length-1].currentNSMap,L=(A=g(e,D,M,k,o,a),M.length);if(!M.closed&&E(e,A,M.tagName,w)&&(M.closed=!0,n.nbsp||a.warning("unclosed xml attribute")),d&&L){
//try{//attribute position fixed
for(var q=f(d,{}),F=0;F<L;F++){var U=M[F];c(U.offset),U.locator=f(d,{})}r.locator=q,N(M,r,k)&&p.push(M),r.locator=d}else N(M,r,k)&&p.push(M);"http://www.w3.org/1999/xhtml"!==M.uri||M.closed?A++:A=v(e,A,M.tagName,o,r)}}catch(e){if(e instanceof h)throw e;a.error("element parse error: "+e),A=-1}A>x?x=A:
//TODO: 这里有可能sax回退，有位置错误风险
s(Math.max(D,x)+1)}}(e,t,n,r,this.errorHandler),r.endDocument()}},T.prototype={setTagName:function(e){if(!a.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,n){if(!a.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}
//	,getIndex:function(uri, localName)){
//		if(localName){

//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
},t.XMLReader=p,t.ParseError=h;var x={};function D(e,t){for(var n in e)t[n]=e[n]}
/**
       ^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
       ^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
        */function C(e,t){var n=e.prototype;if(!(n instanceof t)){function r(){}r.prototype=t.prototype,D(n,r=new r),e.prototype=n=r}n.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),n.constructor=e)}var S="http://www.w3.org/1999/xhtml",A={},_=A.ELEMENT_NODE=1,I=A.ATTRIBUTE_NODE=2,R=A.TEXT_NODE=3,O=A.CDATA_SECTION_NODE=4,B=A.ENTITY_REFERENCE_NODE=5,M=A.ENTITY_NODE=6,k=A.PROCESSING_INSTRUCTION_NODE=7,L=A.COMMENT_NODE=8,q=A.DOCUMENT_NODE=9,F=A.DOCUMENT_TYPE_NODE=10,U=A.DOCUMENT_FRAGMENT_NODE=11,P=A.NOTATION_NODE=12,V={},j={};
// Node Types
V.INDEX_SIZE_ERR=(j[1]="Index size error",1),V.DOMSTRING_SIZE_ERR=(j[2]="DOMString size error",2);var z=V.HIERARCHY_REQUEST_ERR=(j[3]="Hierarchy request error",3);V.WRONG_DOCUMENT_ERR=(j[4]="Wrong document",4),V.INVALID_CHARACTER_ERR=(j[5]="Invalid character",5),V.NO_DATA_ALLOWED_ERR=(j[6]="No data allowed",6),V.NO_MODIFICATION_ALLOWED_ERR=(j[7]="No modification allowed",7);var X=V.NOT_FOUND_ERR=(j[8]="Not found",8);V.NOT_SUPPORTED_ERR=(j[9]="Not supported",9);var H=V.INUSE_ATTRIBUTE_ERR=(j[10]="Attribute in use",10);
//level2
/**
        * DOM Level 2
        * Object DOMException
        * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
        * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
        */
function Y(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,j[e]),this.message=j[e],Error.captureStackTrace&&Error.captureStackTrace(this,Y);return n.code=e,t&&(this.message=this.message+": "+t),n}
/**
        * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
        * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
        * The items in the NodeList are accessible via an integral index, starting from 0.
        */
function G(){}function W(e,t){this._node=e,this._refresh=t,Z(this)}function Z(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var n=e._refresh(e._node);
//console.log(ls.length)
Ae(e,"length",n.length),D(n,e),e._inc=t}}
/**
        * 
        * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
        * NamedNodeMap objects in the DOM are live.
        * used for attributes or DocumentType entities 
        */
function K(){}function Q(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function J(e,t,n,r){if(r?t[Q(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var a=e.ownerDocument;a&&(r&&oe(a,e,r),function(e,t,n){e&&e._inc++;var r=n.namespaceURI;"http://www.w3.org/2000/xmlns/"==r&&(
//update namespace
t._nsMap[n.prefix?n.localName:""]=n.value)}(a,e,n))}}function ee(e,t,n){
//console.log('remove attr:'+attr)
var r=Q(t,n);if(!(r>=0))throw Y(X,new Error(e.tagName+"@"+n));for(var a=t.length-1;r<a;)t[r]=t[++r];if(t.length=a,e){var i=e.ownerDocument;i&&(oe(i,e,n),n.ownerElement=null)}}
/**
        * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
        */
function te(/* Object */e){if(this._features={},e)for(var t in e)this._features=e[t]}
/**
        * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
        */
function ne(){}function re(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}
/**
        * @param callback return true for continue,false for break
        * @return boolean true: break visit;
        */
function ae(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(ae(e,t))return!0}while(e=e.nextSibling)}function ie(){}function oe(e,t,n,r){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&
//update namespace
delete t._nsMap[n.prefix?n.localName:""]}function se(e,t,n){if(e&&e._inc){e._inc++;
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
        */function ce(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,se(e.ownerDocument,e),t}
/**
        * preformance key(refChild == null)
        */function ue(e,t,n){var r=t.parentNode;if(r&&r.removeChild(t),t.nodeType===U){var a=t.firstChild;if(null==a)return t;var i=t.lastChild}else a=i=t;var o=n?n.previousSibling:e.lastChild;a.previousSibling=o,i.nextSibling=n,o?o.nextSibling=a:e.firstChild=a,null==n?e.lastChild=i:n.previousSibling=i;do{a.parentNode=e}while(a!==i&&(a=a.nextSibling));return se(e.ownerDocument||e,e),
//console.log(parentNode.lastChild.nextSibling == null)
t.nodeType==U&&(t.firstChild=t.lastChild=null),t}function le(){this._nsMap={}}function me(){}function de(){}function he(){}function pe(){}function fe(){}function ge(){}function Ne(){}function ve(){}function Ee(){}function we(){}function ye(){}function be(){}function Te(e,t){var n=[],r=9==this.nodeType&&this.documentElement||this,a=r.prefix,i=r.namespaceURI;if(i&&null==a&&null==(a=r.lookupPrefix(i)))
//isHTML = true;
var o=[{namespace:i,prefix:null}];
//console.log('###',this.nodeType,uri,prefix,buf.join(''))
return De(this,n,e,t,o),n.join("")}function xe(e,t,n){var r=e.prefix||"",a=e.namespaceURI;if(!r&&!a)return!1;if("xml"===r&&"http://www.w3.org/XML/1998/namespace"===a||"http://www.w3.org/2000/xmlns/"==a)return!1;
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
return!0}function De(e,t,n,r,a){if(r){if(!(e=r(e)))return;
//buf.sort.apply(attrs, attributeSorter);
if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case _:a||(a=[]),a.length;var i=e.attributes,o=i.length,s=e.firstChild,c=e.tagName;n=S===e.namespaceURI||n,t.push("<",c);for(var u=0;u<o;u++){"xmlns"==(l=i.item(u)).prefix?a.push({prefix:l.localName,namespace:l.value}):"xmlns"==l.nodeName&&a.push({prefix:"",namespace:l.value})}for(u=0;u<o;u++){var l;if(xe(l=i.item(u),0,a)){var m=l.prefix||"",d=l.namespaceURI,h=m?" xmlns:"+m:" xmlns";t.push(h,'="',d,'"'),a.push({prefix:m,namespace:d})}De(l,t,n,r,a)}
// add namespace for current node		
if(xe(e,0,a)){m=e.prefix||"";if(d=e.namespaceURI){
// Avoid empty namespace value like xmlns:ds=""
// Empty namespace URL will we produce an invalid XML document
h=m?" xmlns:"+m:" xmlns";t.push(h,'="',d,'"'),a.push({prefix:m,namespace:d})}}if(s||n&&!/^(?:meta|link|img|br|hr|input)$/i.test(c)){
//if is cdata child node
if(t.push(">"),n&&/^script$/i.test(c))for(;s;)s.data?t.push(s.data):De(s,t,n,r,a),s=s.nextSibling;else for(;s;)De(s,t,n,r,a),s=s.nextSibling;t.push("</",c,">")}else t.push("/>");
// remove added visible namespaces
//visibleNamespaces.length = startVisibleNamespaces;
return;case q:case U:for(s=e.firstChild;s;)De(s,t,n,r,a),s=s.nextSibling;return;case I:
/**
       		 * Well-formedness constraint: No < in Attribute Values
       		 * The replacement text of any entity referred to directly or indirectly in an attribute value must not contain a <.
       		 * @see https://www.w3.org/TR/xml/#CleanAttrVals
       		 * @see https://www.w3.org/TR/xml/#NT-AttValue
       		 */
return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,re),'"');case R:
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
return t.push(e.data.replace(/[<&]/g,re).replace(/]]>/g,"]]&gt;"));case O:return t.push("<![CDATA[",e.data,"]]>");case L:return t.push("\x3c!--",e.data,"--\x3e");case F:var p=e.publicId,f=e.systemId;if(t.push("<!DOCTYPE ",e.name),p)t.push(" PUBLIC ",p),f&&"."!=f&&t.push(" ",f),t.push(">");else if(f&&"."!=f)t.push(" SYSTEM ",f,">");else{var g=e.internalSubset;g&&t.push(" [",g,"]"),t.push(">")}return;case k:return t.push("<?",e.target," ",e.data,"?>");case B:return t.push("&",e.nodeName,";");
//case ENTITY_NODE:
//case NOTATION_NODE:
default:t.push("??",e.nodeName)}}function Ce(e,t,n){var r;switch(t.nodeType){case _:(r=t.cloneNode(!1)).ownerDocument=e;
//var attrs = node2.attributes;
//var len = attrs.length;
//for(var i=0;i<len;i++){
//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
//}
case U:break;case I:n=!0;
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
}if(r||(r=t.cloneNode(!1)),r.ownerDocument=e,r.parentNode=null,n)for(var a=t.firstChild;a;)r.appendChild(Ce(e,a,n)),a=a.nextSibling;return r}

//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function Se(e,t,n){var r=new t.constructor;for(var a in t){var i=t[a];"object"!=typeof i&&i!=r[a]&&(r[a]=i)}switch(t.childNodes&&(r.childNodes=new G),r.ownerDocument=e,r.nodeType){case _:var o=t.attributes,s=r.attributes=new K,c=o.length;s._ownerElement=r;for(var u=0;u<c;u++)r.setAttributeNode(Se(e,o.item(u),!0));break;case I:n=!0}if(n)for(var l=t.firstChild;l;)r.appendChild(Se(e,l,n)),l=l.nextSibling;return r}function Ae(e,t,n){e[t]=n}
//do dynamic
V.INVALID_STATE_ERR=(j[11]="Invalid state",11),V.SYNTAX_ERR=(j[12]="Syntax error",12),V.INVALID_MODIFICATION_ERR=(j[13]="Invalid modification",13),V.NAMESPACE_ERR=(j[14]="Invalid namespace",14),V.INVALID_ACCESS_ERR=(j[15]="Invalid access",15),Y.prototype=Error.prototype,D(V,Y),G.prototype={
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
item:function(e){return this[e]||null},toString:function(e,t){for(var n=[],r=0;r<this.length;r++)De(this[r],n,e,t);return n.join("")}},W.prototype.item=function(e){return Z(this),this[e]},C(W,G),K.prototype={length:0,item:G.prototype.item,getNamedItem:function(e){for(
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
//console.log()
var t=this.length;t--;){var n=this[t];
//console.log(attr.nodeName,key)
if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new Y(H);var n=this.getNamedItem(e.nodeName);return J(this._ownerElement,this,e,n),n},
/* returns Node */
setNamedItemNS:function(e){// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
var t,n=e.ownerElement;if(n&&n!=this._ownerElement)throw new Y(H);return t=this.getNamedItemNS(e.namespaceURI,e.localName),J(this._ownerElement,this,e,t),t},
/* returns Node */
removeNamedItem:function(e){var t=this.getNamedItem(e);return ee(this._ownerElement,this,t),t},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
//for level2
removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return ee(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}},te.prototype={hasFeature:function(/* string */e,/* string */t){var n=this._features[e.toLowerCase()];return!(!n||t&&!(t in n))},
// Introduced in DOM Level 2:
createDocument:function(e,t,n){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
var r=new ie;if(r.implementation=this,r.childNodes=new G,r.doctype=n,n&&r.appendChild(n),t){var a=r.createElementNS(e,t);r.appendChild(a)}return r},
// Introduced in DOM Level 2:
createDocumentType:function(e,t,n){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
var r=new ge;
// Introduced in DOM Level 2:
//readonly attribute DOMString        internalSubset;
//TODO:..
//  readonly attribute NamedNodeMap     entities;
//  readonly attribute NamedNodeMap     notations;
return r.name=e,r.nodeName=e,r.publicId=t,r.systemId=n,r}},ne.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,
// Modified in DOM Level 2:
insertBefore:function(e,t){//raises 
return ue(this,e,t)},replaceChild:function(e,t){//raises 
this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return ce(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return Se(this.ownerDocument||this,this,e)},
// Modified in DOM Level 2:
normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==R&&e.nodeType==R?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},
// Introduced in DOM Level 2:
isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},
// Introduced in DOM Level 2:
hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;
//console.dir(map)
if(n)for(var r in n)if(n[r]==e)return r;t=t.nodeType==I?t.ownerDocument:t.parentNode}return null},
// Introduced in DOM Level 3:
lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;
//console.dir(map)
if(n&&e in n)return n[e];t=t.nodeType==I?t.ownerDocument:t.parentNode}return null},
// Introduced in DOM Level 3:
isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},D(A,ne),D(A,ne.prototype),ie.prototype={
//implementation : null,
nodeName:"#document",nodeType:q,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){//raises 
if(e.nodeType==U){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return null==this.documentElement&&e.nodeType==_&&(this.documentElement=e),ue(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),ce(this,e)},
// Introduced in DOM Level 2:
importNode:function(e,t){return Ce(this,e,t)},
// Introduced in DOM Level 2:
getElementById:function(e){var t=null;return ae(this.documentElement,(function(n){if(n.nodeType==_&&n.getAttribute("id")==e)return t=n,!0})),t},getElementsByClassName:function(e){var t=new RegExp("(^|\\s)"+e+"(\\s|$)");return new W(this,(function(e){var n=[];return ae(e.documentElement,(function(r){r!==e&&r.nodeType==_&&t.test(r.getAttribute("class"))&&n.push(r)})),n}))},
//document factory method:
createElement:function(e){var t=new le;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new G,(t.attributes=new K)._ownerElement=t,t},createDocumentFragment:function(){var e=new we;return e.ownerDocument=this,e.childNodes=new G,e},createTextNode:function(e){var t=new he;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new pe;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new fe;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new ye;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new me;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new Ee;return t.ownerDocument=this,t.nodeName=e,t},
// Introduced in DOM Level 2:
createElementNS:function(e,t){var n=new le,r=t.split(":"),a=n.attributes=new K;return n.childNodes=new G,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==r.length?(n.prefix=r[0],n.localName=r[1]):
//el.prefix = null;
n.localName=t,a._ownerElement=n,n},
// Introduced in DOM Level 2:
createAttributeNS:function(e,t){var n=new me,r=t.split(":");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==r.length?(n.prefix=r[0],n.localName=r[1]):
//el.prefix = null;
n.localName=t,n}},C(ie,ne),le.prototype={nodeType:_,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=""+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},
//four real opeartion method
appendChild:function(e){return e.nodeType===U?this.insertBefore(e,null):function(e,t){var n=t.parentNode;if(n){var r=e.lastChild;n.removeChild(t),r=e.lastChild}return r=e.lastChild,t.parentNode=e,t.previousSibling=r,t.nextSibling=null,r?r.nextSibling=t:e.firstChild=t,e.lastChild=t,se(e.ownerDocument,e,t),t;
//console.log("__aa",parentNode.lastChild.nextSibling == null)
}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){
//console.log(this == oldAttr.ownerElement)
return this.attributes.removeNamedItem(e.nodeName)},
//get real attribute name,and remove it by removeAttributeNode
removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||""},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=""+n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new W(this,(function(t){var n=[];return ae(t,(function(r){r===t||r.nodeType!=_||"*"!==e&&r.tagName!=e||n.push(r)})),n}))},getElementsByTagNameNS:function(e,t){return new W(this,(function(n){var r=[];return ae(n,(function(a){a===n||a.nodeType!==_||"*"!==e&&a.namespaceURI!==e||"*"!==t&&a.localName!=t||r.push(a)})),r}))}},ie.prototype.getElementsByTagName=le.prototype.getElementsByTagName,ie.prototype.getElementsByTagNameNS=le.prototype.getElementsByTagNameNS,C(le,ne),me.prototype.nodeType=I,C(me,ne),de.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(j[z])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,n){n=this.data.substring(0,e)+n+this.data.substring(e+t),this.nodeValue=this.data=n,this.length=n.length}},C(de,ne),he.prototype={nodeName:"#text",nodeType:R,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},C(he,de),pe.prototype={nodeName:"#comment",nodeType:L},C(pe,de),fe.prototype={nodeName:"#cdata-section",nodeType:O},C(fe,de),ge.prototype.nodeType=F,C(ge,ne),Ne.prototype.nodeType=P,C(Ne,ne),ve.prototype.nodeType=M,C(ve,ne),Ee.prototype.nodeType=B,C(Ee,ne),we.prototype.nodeName="#document-fragment",we.prototype.nodeType=U,C(we,ne),ye.prototype.nodeType=k,C(ye,ne),be.prototype.serializeToString=function(e,t,n){return Te.call(e,t,n)},ne.prototype.toString=Te;try{if(Object.defineProperty){function at(e){switch(e.nodeType){case _:case U:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(at(e)),e=e.nextSibling;return t.join("");default:return e.nodeValue}}Object.defineProperty(W.prototype,"length",{get:function(){return Z(this),this.$$length}}),Object.defineProperty(ne.prototype,"textContent",{get:function(){return at(this)},set:function(e){switch(this.nodeType){case _:case U:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:
//TODO:
this.data=e,this.value=e,this.nodeValue=e}}}),Ae=function(e,t,n){
//console.log(value)
e["$$"+t]=n}}}catch(it){//ie8
}
//if(typeof require == 'function'){
function _e(e){this.options=e||{locator:{}}}
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
function Ie(){this.cdata=!1}function Re(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}
/**
        * @see org.xml.sax.ContentHandler#startDocument
        * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
        */function Oe(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function Be(e,t,n){return"string"==typeof e?e.substr(t,n)://java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
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
function Me(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}//appendChild and setAttributeNS are preformance key
//if(typeof require == 'function'){
x.Node=ne,x.DOMException=Y,x.DOMImplementation=te,x.XMLSerializer=be,_e.prototype.parseFromString=function(e,t){var n=this.options,r=new qe,a=n.domBuilder||new Ie,i=n.errorHandler,o=n.locator,s=n.xmlns||{},c=/\/x?html?$/.test(t),u=c?ke.entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return o&&a.setDocumentLocator(o),r.errorHandler=function(e,t,n){if(!e){if(t instanceof Ie)return t;e=t}var r={},a=e instanceof Function;function i(t){var i=e[t];!i&&a&&(i=2==e.length?function(n){e(t,n)}:e),r[t]=i&&function(e){i("[xmldom "+t+"]\t"+e+Oe(n))}||function(){}}return n=n||{},i("warning"),i("error"),i("fatalError"),r}(i,a,o),r.domBuilder=n.domBuilder||a,c&&(s[""]="http://www.w3.org/1999/xhtml"),s.xml=s.xml||"http://www.w3.org/XML/1998/namespace",e&&"string"==typeof e?r.parse(e,s,u):r.errorHandler.error("invalid doc source"),a.doc},Ie.prototype={startDocument:function(){this.doc=(new Ue).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var a=this.doc,i=a.createElementNS(e,n||t),o=r.length;Me(this,i),this.currentElement=i,this.locator&&Re(this.locator,i);for(var s=0;s<o;s++){e=r.getURI(s);var c=r.getValue(s),u=(n=r.getQName(s),a.createAttributeNS(e,n));this.locator&&Re(r.getLocator(s),u),u.value=u.nodeValue=c,i.setAttributeNode(u)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName,this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.doc.createProcessingInstruction(e,t);this.locator&&Re(this.locator,n),Me(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){
//console.log(chars)
if(e=Be.apply(this,arguments)){if(this.cdata)var r=this.doc.createCDATASection(e);else r=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(r):/^\s*$/.test(e)&&this.doc.appendChild(r),this.locator&&Re(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(// && !('lineNumber' in locator)){
e.lineNumber=0)},
//LexicalHandler
comment:function(e,t,n){e=Be.apply(this,arguments);var r=this.doc.createComment(e);this.locator&&Re(this.locator,r),Me(this,r)},startCDATA:function(){
//used in characters() methods
this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.doc.implementation;if(r&&r.createDocumentType){var a=r.createDocumentType(e,t,n);this.locator&&Re(this.locator,a),Me(this,a)}},
/**
       	 * @see org.xml.sax.ErrorHandler
       	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       	 */
warning:function(e){console.warn("[xmldom warning]\t"+e,Oe(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,Oe(this.locator))},fatalError:function(e){throw new Fe(e,this.locator)}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){Ie.prototype[e]=function(){return null}}));var ke=e,Le=t,qe=Le.XMLReader,Fe=Le.ParseError,Ue=x.DOMImplementation,Pe=x.XMLSerializer,Ve=_e;const $e="proofsetup",je="proof_profil",ze="proof_intent",Xe="proof_tk",He="proof_group",Ye=document.getElementById("proofinfo");
// attach event listeners for tabs
Array.from(document.querySelectorAll(".sp-tab")).forEach((e=>{e.onclick=()=>{localStorage.setItem("currentTab",e.getAttribute("id")),Array.from(document.querySelectorAll(".sp-tab")).forEach((t=>{t.getAttribute("id")===e.getAttribute("id")?t.classList.add("selected"):t.classList.remove("selected")})),Array.from(document.querySelectorAll(".sp-tab-page")).forEach((t=>{t.getAttribute("id").startsWith(e.getAttribute("id"))?t.classList.add("visible"):t.classList.remove("visible")}))}}));
// menuCommand(2982);menuCommand(2986);menuCommand(2986);
const Ge=document.querySelectorAll("sp-radio:not(.noSoftproof)"),We=document.querySelectorAll("sp-radio.noSoftproof");for(const ot of Ge)ot.addEventListener("click",(async function(e){if(0!=require("photoshop").app.documents.length){
//   showAlert("Please open at least one document.");
//   return;
// }
// else {
var t,n;for(t=0;t<Ge.length;t++)// uncheck all other radios
Ge[t].checked=!1;for(this.checked=!0,n=0;n<We.length;n++)// uncheck all noSoftproof-Radios
We[n].checked=!1;
// let dataProofProfil = `${event.target.getAttribute('data-proofProfil')}`;
// let dataProofIntent = `${event.target.getAttribute('data-proofIntent')}`;
// let dataproofTK = `${event.target.getAttribute('data-proofTK')}`;
let e=this.getAttribute("data-proofProfil"),r=this.getAttribute("data-proofIntent"),a=this.getAttribute("data-proofTK"),i="true"===a,o=this.getAttribute("data-proofGroup");await Ze(e,r,i),await et(e,r,a,o),// loadScript("[panel] softproof2meta");
await nt()}}));for(const st of We)st.addEventListener("click",(async function(){0!=require("photoshop").app.documents.length&&(
// console.log(noSoftproof);
await Ke(),await tt(),await nt())}));async function Ze(e,t,n){const r=require("photoshop").action.batchPlay;await r([{_obj:"proofSetup",profile:e,intent:{_enum:"intent",_value:t},mapBlack:n,_options:{dialogOptions:"dontDisplay"}}],{synchronousExecution:!1,modalBehavior:"fail"})}async function Ke(){const e=require("photoshop").action.batchPlay;await e([{_obj:"select",_target:[{_ref:"menuItemClass",_enum:"menuItemType",_value:"toggleProofColors"}],_options:{dialogOptions:"dontDisplay"}}],{synchronousExecution:!1,modalBehavior:"fail"})}async function Qe(e){const t=require("photoshop").action.batchPlay;await t([{_obj:"set",_target:[{_ref:"property",_property:"XMPMetadataAsUTF8"},{_ref:"document",_enum:"ordinal",_value:"targetEnum"}],to:{_obj:"document",XMPMetadataAsUTF8:e}}],{synchronousExecution:!0,modalBehavior:"fail"})}async function Je(){const e=require("photoshop").action.batchPlay;return(await e([{_obj:"get",_target:[{_property:"XMPMetadataAsUTF8"},{_ref:"document",_enum:"ordinal",_value:"targetEnum"}]}],{synchronousExecution:!1,modalBehavior:"fail"}))[0].XMPMetadataAsUTF8}
// setSoftproof(dataProofProfil, dataProofIntent, dataproofTK)
async function et(e,t,n,r){const a=await Je(),i=await(new Ve).parseFromString(a,"text/xml");i.documentElement.getElementsByTagName("rdf:Description")[0].hasAttribute("xmlns:"+$e)||i.documentElement.getElementsByTagName("rdf:Description")[0].setAttribute("xmlns:"+$e,"http://ns.simonadrian.de/proofsetup/1.0");var o=i.documentElement;if(0!=i.getElementsByTagName($e+":"+je).length){var s=i.getElementsByTagName($e+":"+je)[0];(c=i.createElement($e+":"+je)).textContent=e,o.replaceChild(c,s)}else{var c;(c=i.createElement($e+":"+je)).textContent=e,i.getElementsByTagName("rdf:Description")[0].appendChild(c)}if(0!=i.getElementsByTagName($e+":"+ze).length){var u=i.getElementsByTagName($e+":"+ze)[0];(l=i.createElement($e+":"+ze)).textContent=t,o.replaceChild(l,u)}else{var l;(l=i.createElement($e+":"+ze)).textContent=t,i.getElementsByTagName("rdf:Description")[0].appendChild(l)}if(0!=i.getElementsByTagName($e+":"+Xe).length){var m=i.getElementsByTagName($e+":"+Xe)[0];(d=i.createElement($e+":"+Xe)).textContent=n,o.replaceChild(d,m)}else{var d;(d=i.createElement($e+":"+Xe)).textContent=n,i.getElementsByTagName("rdf:Description")[0].appendChild(d)}if(0!=i.getElementsByTagName($e+":"+He).length){var h=i.getElementsByTagName($e+":"+He)[0];(p=i.createElement($e+":"+He)).textContent=r,o.replaceChild(p,h)}else{var p;(p=i.createElement($e+":"+He)).textContent=r,i.getElementsByTagName("rdf:Description")[0].appendChild(p)}const f=await(new Pe).serializeToString(i);
// console.log(serialized);
await Qe(f)}async function tt(){const e=await Je(),t=await(new Ve).parseFromString(e,"text/xml");try{t.getElementsByTagName("rdf:Description")[0].removeAttribute("xmlns:"+$e)}catch(e){console.log("Error "+e)}try{var n=t.getElementsByTagName($e+":"+je);t.documentElement.removeChild(n)}catch(e){console.log("Error "+e+n)}try{var r=t.getElementsByTagName($e+":"+ze);t.documentElement.removeChild(r)}catch(e){console.log("Error "+e)}try{var a=t.getElementsByTagName($e+":"+Xe);t.documentElement.removeChild(a)}catch(e){console.log("Error "+e)}try{var i=t.getElementsByTagName($e+":"+He);t.documentElement.removeChild(i)}catch(e){console.log("Error "+e)}const o=await(new Pe).serializeToString(t);await Qe(o)}async function nt(){
// console.log("setUI start");
const e=await Je(),t=await(new Ve).parseFromString(e,"text/xml");
// IF METAPROOF-TAG FOUND ###############################
if(0!=t.getElementsByTagName($e+":"+je).length&&0!=t.getElementsByTagName($e+":"+ze).length&&0!=t.getElementsByTagName($e+":"+Xe).length){var n,r=t.getElementsByTagName($e+":"+je)[0].childNodes[0].nodeValue,a=t.getElementsByTagName($e+":"+ze)[0].childNodes[0].nodeValue,i=t.getElementsByTagName($e+":"+Xe)[0].childNodes[0].nodeValue,o="";if(0!=t.getElementsByTagName($e+":"+He).length)o=t.getElementsByTagName($e+":"+He)[0].childNodes[0].nodeValue;for(Ye.innerHTML=r+" – "+a,n=0;n<Ge.length;n++)// uncheck all other radios
Ge[n].checked=!1;try{document.querySelectorAll('sp-radio[data-proofProfil="'+r+'"][data-proofIntent="'+a+'"][data-proofTK="'+i+'"]')[0].checked=!0}catch(e){}var s=document.getElementsByClassName("sp-tab");// uncheck all tabs
for(c=0;c<s.length;c++)s[c].classList.remove("active","selected");try{document.getElementById(o+"-tab").classList.add("active","selected")}// check spezific tab
catch(e){}var c;// uncheck all tab-pages
s=document.getElementsByClassName("sp-tab-page");for(c=0;c<s.length;c++)s[c].classList.remove("active","visible");try{document.getElementById(o+"-tab-page").classList.add("active","visible")}// check spezific tab-page
catch(e){}
// console.log("setUI-> " + metaProofProfil +" - "+ metaProofIntent +" - "+ metaProofTK +" - "+ metaProofGroup);
var u="true"===i;// convert metaProofTK to boolean
await Ze(r,a,u)}
// IF NO METAPROOF-TAG FOUND ############################# 
else await rt();
// console.log("no Softproof");
// console.log("setUI end");
}async function rt(){var e,t;for(document.getElementById("proofinfo").innerHTML="no Softproof",e=0;e<Ge.length;e++)// uncheck all other radios
Ge[e].checked=!1;for(document.querySelectorAll("sp-radio")[0].checked=!0,t=0;t<We.length;t++)// check all noSoftproof-Radios
We[t].checked=!0,We[t].classList.add("checked");var n=document.getElementsByClassName("sp-tab");for(r=0;r<n.length;r++)n[r].classList.remove("active");var r;n=document.getElementsByClassName("sp-tab-page");for(r=0;r<n.length;r++)n[r].classList.remove("active")}
// var listener = function ding() {
//   // showAlert("dingAlert")
//   // console.log("ding");
//   getMeta()
// }
// require('photoshop').action.addNotificationListener([
//   // {event: "select"},
//   // {event: "open"},
//   {event: "layersFiltered"}       // switch Doc  
// ], listener);
require("photoshop").action.addNotificationListener([{event:"open"},
// {event: "select"},
{event:"layersFiltered"}],(async function(){await nt()}));require("photoshop").action.addNotificationListener([{event:"proofSetup"}],(async function(){var e=await async function(){const e=require("photoshop").action.batchPlay;return(await e([{_obj:"proofSetup",_target:[{_ref:"application",_enum:"ordinal",_value:"targetEnum"}],_options:{dialogOptions:"silent"}}],{synchronousExecution:!1,modalBehavior:"fail"}))[0]}();
// console.log(getProofSetup.profile);
// console.log(getProofSetup.intent._value);
// console.log(getProofSetup.mapBlack);
await et(e.profile,e.intent._value,e.mapBlack,void 0),await nt()}));require("photoshop").action.addNotificationListener([{event:"close"}],(async function(){await rt()}))}));