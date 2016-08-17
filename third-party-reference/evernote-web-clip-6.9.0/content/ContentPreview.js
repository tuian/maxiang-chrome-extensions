/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
define(["GlobalUtils","PageInfo"],function(a,b){function c(){var a=document.createElement("div");return a.addEventListener("mousewheel",Browser.overrideScroll,!0),a.id="evernotePreviewContainer",a.className="evernotePreviewContainer evernotePreviewUrlContainer",a.style.setProperty("line-height","normal","important"),a}function d(){ya.parentNode||document.documentElement.appendChild(ya);var a=window.getComputedStyle(ya,""),b=parseInt(a.getPropertyValue("width")),c=parseInt(a.getPropertyValue("height"));b&&c&&(ya.style.marginLeft=0-b/2+"px",ya.style.marginTop=0-c/2+"px"),la.fixPosition(!0)}function e(){la.fixPosition(!1),ya.parentNode&&ya.parentNode.removeChild(ya)}function f(c,d,e,f,g){var h,i,j={"http://localhost/favicon.ico":!0},k=a.createTitleAndLinkPortionOfUrlClipContent(c,d),l=k.content,m=k.textPortion,n=k.link,o=k.url,p=document.createElement("div"),q=document.createElement("img"),r=document.createElement("img"),s=document.createElement("div");if(""!=f.trim()&&(f.length<500?s.textContent=f:s.textContent=f.slice(0,500)+"...",s.style.fontFamily="Helvetica, Arial, sans-serif",s.style.fontSize="12px",s.style.color="#0C0C0C",s.style.display="block",s.style.whiteSpace="normal",s.style.marginTop="15px",s.style.maxHeight="154px",s.style.overflow="hidden",m.appendChild(s)),b.getThumbnail(function(a){if(h=!0,a.src){var b=150;p.style.position="relative",p.style.display="inline-block",p.style.margin="15px 30px 0px 0px",p.style.overflow="hidden",p.style.verticalAlign="top",q.setAttribute("thumbnail",a.src),sa=q,Browser.sendToExtension({name:"cropImage",url:a.src,cropToWidth:b,cropToHeight:b}),q.style.maxWidth="none",q.style.maxHeight="none",q.style.verticalAlign="top",q.style.margin="0",q.style.padding="0",p.appendChild(q),m.parentNode?l.insertBefore(p,m):l.appendChild(p)}i&&g(l)}),e&&!j[e.toLowerCase()])r.onload=function(){i=!0,r.style.display="inline-block",r.style.border="none",r.style.width="16px",r.style.height="16px",r.style.padding="0px",r.style.margin="0px 8px -2px 0px",r.width="16",r.height="16",n.insertBefore(r,o),h&&g(l)},r.onerror=function(){i=!0,h&&g(l)},r.src=e;else if(i=!0,h)return l}function g(a,b,c){sa&&(a.datauri?(sa.src=a.datauri,sa.width=a.width,sa.height=a.height,sa.removeAttribute("thumbnail")):(sa.parentNode.parentNode.removeChild(sa.parentNode),sa=null))}function h(a,c,e){function g(a){ya.innerHTML="",ya.appendChild(a),d()}ka=!1;var h=b.getUrl();i(),la.gray(),b.getSnippet(function(a){var c=f(b.getTitle(),h,b.getFavIconUrl(),a,g);c&&(ya.innerHTML="",ya.appendChild(c),d())})}function i(){la.reset(),la.hide(),ma.reset(),ma.removeVeil(),e(),T(),s(),m(),v()}function j(){va=null,wa=null,xa=null,ra&&ra.parentNode&&(ra.parentNode.removeChild(ra),document.documentElement.classList.remove("clearlyBeforeVisible"))}function k(){pa&&pa.highlight__deleteAllHighlights()}function l(a){a?(oa.iframe.contentWindow.clearlyHighlight||(oa.iframe.contentWindow.clearlyHighlight={settings:{path:Browser.extension.getURL("clearly/highlight/")},window:oa.iframe.contentWindow,jQuery:window.jQuery},oa.iframe.contentWindow.clearlyHighlight=initClearlyComponent__highlight(oa.iframe.contentWindow.clearlyHighlight),oa.iframe.contentWindow.clearlyHighlight.insertCSS(),oa.iframe.contentWindow.clearlyHighlight.addMouseHandlers()),oa.iframe.contentWindow.clearlyHighlight.enable()):(pa||(pa={settings:{path:Browser.extension.getURL("clearly/highlight/")},window:window,jQuery:window.jQuery},pa=initClearlyComponent__highlight(pa),pa.insertCSS(),pa.addMouseHandlers()),pa.enable())}function m(){pa&&pa.disable(),oa&&oa.iframe.contentWindow.clearlyHighlight&&oa.iframe.contentWindow.clearlyHighlight.disable()}function n(){if(ta){var a;if(void 0!==typeof b&&(a=b.getSelectionFrame()),a){var c={width:a.width,height:a.height,top:a.offsetTop,bottom:a.height+a.offsetTop,left:a.offsetLeft,right:a.width+a.offsetLeft};la.revealStaticRect(la.expandRect(c,-9),a,!0),la.show()}else la.outlineElement(ta,!0,!0);l()}else log.warn("Couldn't find a preview element. We should switch to 'full page' mode.")}function o(a,c,d){if(ka=!0,window.focus(),i(),ta){var e=ta.getBoundingClientRect();(!e||e&&0==e.width&&0==e.height)&&(ta=null)}ta?(n(),ua>1&&la.setPageCount(ua-1)):b.getDefaultArticle(function(a){ta=a,n(),b.getNextPages(function(a,b){ua=Math.max(a.length,b.length),ua>1&&la.setPageCount(ua-1)})})}function p(){ka=!1,window.focus(),i(),oa?q():r()}function q(){document.body.classList.add("clearlyBeforeVisible"),document.documentElement.classList.add("clearlyBeforeVisible"),oa.iframe.classList.add("evernoteClipperVisible"),l(!0)}function r(){oa={callbacks:{frameCreated:function(){oa.applyUnencodedOptions(oa.defaultThemes.newsprint),oa.loadGoogleFontsRequiredByAppliedOptions(),oa.iframe.addEventListener("webkitTransitionEnd",function(a){"width"===a.propertyName&&(this.classList.contains("evernoteClipperVisible")?(document.body.classList.add("clearlyVisible"),document.documentElement.classList.add("clearlyVisible"),oa.iframe.contentDocument.body.classList.add("clearlyWaiting"),0==oa.pagesCount?b.getDefaultArticle(function(a,c){oa.addNewPage(c,window.location.href),oa.iframe.contentDocument.body.classList.add("clearlyReady"),b.getNextPages(function(a,b){for(var c=oa.pagesCount;c<b.length;c++)oa.addNewPage(b[c],window.location.href)})}):oa.iframe.contentDocument.body.classList.add("clearlyReady")):(document.body.classList.remove("clearlyVisible","clearlyBeforeVisible"),document.documentElement.classList.remove("clearlyVisible","clearlyBeforeVisible")))});var a=oa.iframe.contentDocument.createElement("link");a.rel="stylesheet",a.href=Browser.extension.getURL("clearly/reformat/css/additional.css"),oa.iframe.contentDocument.body.appendChild(a),oa.iframe.contentWindow.loading=oa.iframe.contentDocument.createElement("div"),oa.iframe.contentWindow.loading.id="loading",oa.iframe.contentDocument.body.appendChild(oa.iframe.contentWindow.loading),q()}},settings:{path:Browser.extension.getURL("clearly/reformat/"),pageLabel:function(a){return Browser.i18n.getMessage("page",[a])},onCreateFrameUseThisId:"evernoteClearlyArticle",onCreateFrameDoNotInsertCSS:!0},window:window,jQuery:window.jQuery},oa=initClearlyComponent__reformat(oa),oa.createFrame()}function s(){oa&&oa.iframe&&(oa.iframe.contentDocument.body.classList.remove("clearlyWaiting","clearlyReady"),oa.iframe.classList.remove("evernoteClipperVisible"))}function t(){return oa}function u(){if(ka=!1,window.focus(),i(),ra&&ra.parentNode)ra.classList.remove("evernoteClipperHidden"),document.documentElement.classList.add("clearlyBeforeVisible");else{var a=document.createElement("div");a.classList.add("evernoteLargeLoading"),document.documentElement.appendChild(a),qa?qa.createFrame():"function"==typeof initClearlyComponent__reformat_custom?(qa={callbacks:{frameCreated:function(){ra=qa.iframe,document.documentElement.classList.add("clearlyBeforeVisible"),Browser.sendToExtension({name:"getPersistentValue",key:b.getCustomFormatSiteName(b.isCustomFormat().id)+"UncheckedSections"})}},settings:{path:Browser.extension.getURL("clearly/reformat_custom/"),cssFontsFile:Browser.extension.getURL("content/"+(SAFARI?"safari":"chrome")+"_fonts.css"),onCreateFrameDoNotInsertCSS:!0,onCreateFrameUseThisId:"evernoteClearlyCustom"},window:window,jQuery:jQuery},qa=initClearlyComponent__reformat_custom(qa),qa?qa.createFrame():log.warn("could not initialize clearly custom reformat")):log.warn("could not find clearly custom reformat")}}function v(){ra&&ra.parentNode&&(ra.classList.add("evernoteClipperHidden"),document.documentElement.classList.remove("clearlyBeforeVisible"))}function w(){return qa.getContentToSaveNode()}function x(){return qa.getUncheckedSections()}function y(a){qa&&qa.setUncheckedSections(b.isCustomFormat().id,a)}function z(){for(var a=document.getElementsByClassName("evernoteLargeLoading");a.length;){var b=a[0];b.parentNode.removeChild(b)}}function A(a,b){if(!a)return log.warn("Can't determine if 'null' is interesting (it's probably not)."),!1;if(a===window.document)return!1;if(""==a.textContent.trim()&&0===a.getElementsByTagName("img").length)return!1;var c=a.getBoundingClientRect();if(!c.width||!c.height)return!1;var d=getComputedStyle(a);return"hidden"===d.visibility||"none"===d.display?!1:!a.parentNode||!b.parentNode||a.parentNode!=b&&b.parentNode!=a||!B(a,b)}function B(a,b){var c=a.getBoundingClientRect(),d=b.getBoundingClientRect();return c.bottom==d.bottom&&c.height==d.height&&c.left==d.left&&c.right==d.right&&c.top==d.top&&c.width==d.width?!1:a.textContent===b.textContent&&a.getElementsByTagName("img").length===b.getElementsByTagName("img").length?!1:void 0}function C(a){for(var b=0;b<a.children.length;b++){if(B(a.children[b],a))return C(a.children[b]);if(A(a.children[b],a))return a.children[b]}return a}function D(){return ta}function E(a){function c(){var a=ya.querySelector("[thumbnail]");a&&a.parentNode.parentNode.removeChild(a.parentNode);for(var b=new XMLSerializer,c="",d=0;d<ya.children.length;d++)c+=b.serializeToString(ya.children[d]);return c.replace(/\sxmlns=(?:'[^']+'|"[^"]+")/gi,"")}return ya.innerHTML?c():void b.getSnippet(function(d){var e=f(b.getTitle(),b.getUrl(),b.getFavIconUrl(),d,function(b){b&&(ya.innerHTML="",ya.appendChild(b),a(c()))});e&&(ya.innerHTML="",ya.appendChild(e),a(c()))})}function F(){for(var a=ta.parentNode;a;){if(A(a,ta)){a.enNudgeDescendToNode=ta,ta=a;break}a=a.parentNode}}function G(){if(ta.enNudgeDescendToNode){var a=ta.enNudgeDescendToNode;delete ta.enNudgeDescendToNode,ta=a}else ta=C(ta)}function H(){if(ka){var a=ta;F(),a!==ta&&la.outlineElement(ta,!1,!0,!0)}}function I(){if(ka){var a=ta;G(),a!==ta&&la.outlineElement(ta,!1,!0,!0)}}function J(){if(ka)for(var a=ta.previousElementSibling;a;){if(A(a,ta)){ta=a,la.outlineElement(ta,!1,!0,!0);break}a=a.previousElementSibling}}function K(){if(ka)for(var a=ta.nextElementSibling;a;){if(A(a,ta)){ta=a,la.outlineElement(ta,!1,!0,!0);break}a=a.nextElementSibling}}function L(){ka=!1;var a=4,b=document.body.scrollWidth,c=document.body.scrollHeight,d={bottom:c-a,top:a,left:a,right:b-a,width:b-2*a,height:c-2*a};i(),la.revealStaticRect(d,document.body),la.show(),l()}function M(){ka=!1,i()}function N(){var a=document.createElement("div");return a.id="evernoteEmailPreview",a.addEventListener("mousewheel",Browser.overrideScroll,!0),a}function O(){i(),Browser.sendToExtension({name:"bounce",message:{name:"gt_setSaveReady",value:!1}}),la.reset(),la.fixPosition(!0),la.gray(),za.innerHTML="";var a=document.createElement("div");a.classList.add("evernoteLargeLoading"),za.appendChild(a),U();var b=document.createElement("div"),c=document.createElement("div");c.className="evernoteEmailHeader evernoteEmailBig",b.appendChild(c);var d=document.createElement("div");d.id="evernoteEmailParticipants",d.className="evernoteEmailHeader evernoteEmailSmall",b.appendChild(d);var e=document.createElement("div");e.className="evernoteEmailDivider evernoteEmailLight evernoteEmailLong",b.appendChild(e);var f=document.createElement("div");f.id="evernoteEmailSelectAllMessages",f.className="evernoteEmailHeader evernoteEmailMedium evernoteEmailSelectedMessage";var g=document.createElement("div");g.className="evernoteEmailCheckbox",g.addEventListener("click",function(){var a=document.querySelectorAll(".evernoteEmail");if(/evernoteEmailSelectedMessage/.test(this.parentNode.className))for(var b=0;b<a.length;b++)Q(a.item(b));else for(var b=0;b<a.length;b++)P(a.item(b))}),f.appendChild(g);var h=document.createElement("span");h.innerText=Browser.i18n.getMessage("selectAllMessages"),f.appendChild(h),b.appendChild(f),na.getThread(function(a,f){if(a){Browser.sendToExtension({name:"bounce",message:{name:"gt_setTitle",title:a.subject}}),c.innerText=a.subject,a.participants&&a.participants.length>0&&(d.innerText=Browser.i18n.getMessage("participants")+": "+Object.keys(a.participants).join(", "));for(var h=0;h<a.messages.length;h++){0!=h&&(e=document.createElement("div"),e.className="evernoteEmailDivider evernoteEmailDark evernoteEmailShort",b.appendChild(e));var j=document.createElement("div");j.className="evernoteEmail evernoteEmailSelectedMessage",g=document.createElement("div"),g.className="evernoteEmailCheckbox",g.addEventListener("click",function(){/evernoteEmailSelectedMessage/.test(this.parentNode.className)?Q(this.parentNode):P(this.parentNode)}),j.appendChild(g);var k=document.createElement("div"),l=document.createElement("span");l.className="evernoteEmailHeader evernoteEmailMedium",l.innerText=a.messages[h].author.name+" ",k.appendChild(l);var m=document.createElement("span");m.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailRight",m.innerText=a.messages[h].date,k.appendChild(m),j.appendChild(k);var n=document.createElement("div");if(n.className="evernoteEmailBody",n.innerHTML=a.messages[h].body,j.appendChild(n),a.messages[h].attachments.length>0){var o=document.createElement("div");o.className="evernoteEmailAttachments";for(var p=0;p<a.messages[h].attachments.length;p++){var q=document.createElement("div"),r=document.createElement("input");r.type="checkbox",r.checked="true",r.addEventListener("click",function(){this.parentNode.getAttribute("evernoteIgnoreAttachment")?R(this.parentNode):S(this.parentNode)});var s=document.createElement("span");s.className="evernoteEmailSmall";var t=document.createElement("span");t.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailSize",s.textContent=a.messages[h].attachments[p].name,t.textContent="("+a.messages[h].attachments[p].size+")",q.setAttribute("evernote_attachment_url",a.messages[h].attachments[p].url),q.setAttribute("evernote_attachment_name",s.textContent),q.setAttribute("evernote_attachment_mime",a.messages[h].attachments[p].mime),q.appendChild(r),q.appendChild(s),q.appendChild(t),o.appendChild(q)}j.appendChild(o)}b.appendChild(j)}z(),za.appendChild(b)}else log.warn(f),i(),alert(Browser.i18n.getMessage("popup_couldntStart"));Browser.sendToExtension({name:"bounce",message:{name:"gt_setSaveReady",value:!0}})})}function P(a){a.className+=" evernoteEmailSelectedMessage";var b=a.children[1].firstElementChild;b.className=b.className.replace(/\s*evernoteEmailDimmed/g,""),document.querySelectorAll(".evernoteEmail").length===document.querySelectorAll(".evernoteEmail.evernoteEmailSelectedMessage").length&&(document.querySelector("#evernoteEmailSelectAllMessages").className+=" evernoteEmailSelectedMessage")}function Q(a){a.className=a.className.replace(/\s*evernoteEmailSelectedMessage/g,"");var b=a.children[1].firstElementChild;b.className+=" evernoteEmailDimmed";var c=document.querySelector("#evernoteEmailSelectAllMessages");c.className=c.className.replace(/\s*evernoteEmailSelectedMessage/g,"")}function R(a){a.removeAttribute("evernoteIgnoreAttachment")}function S(a){a.setAttribute("evernoteIgnoreAttachment","true")}function T(){za.parentNode&&za.parentNode.removeChild(za)}function U(){za.parentNode||document.documentElement.appendChild(za)}function V(){if(za){for(var a=za.firstElementChild,c=a.querySelectorAll('.evernoteEmailCheckbox, #evernoteEmailSelectAllMessages, .evernoteEmail:not(.evernoteEmailSelectedMessage), [evernoteignoreattachment="true"]'),d=0;d<c.length;d++)if(c.item(d).parentNode){if(c.item(d).webkitMatchesSelector(".evernoteEmail")){var e=c.item(d).previousElementSibling;e&&/evernoteEmailDivider/.test(e.className)&&/evernoteEmailShort/.test(e.className)||(e=c.item(d).nextElementSibling),e&&e.parentNode&&/evernoteEmailDivider/.test(e.className)&&/evernoteEmailShort/.test(e.className)&&e.parentNode.removeChild(e)}if("evernoteEmailSelectAllMessages"==c.item(d).id){var f=document.createElement("a");f.id="evernoteEmailLinkBack",f.className="evernoteEmailHeader evernoteEmailMedium",f.target="_blank",f.href=document.location.href;var g=document.createElement("div");g.id="evernoteEmailLinkBackArrow",f.appendChild(g);var h=document.createElement("span"),i="";b.isGmailThread()?i=Browser.i18n.getMessage("openConvoInGmail"):b.isGoogleInboxThread()&&(i=Browser.i18n.getMessage("openConvoInGoogleInbox")),h.innerText=i,f.appendChild(h),c.item(d).parentNode.insertBefore(f,c.item(d))}c.item(d).parentNode.removeChild(c.item(d))}var j=a.querySelector(".evernoteEmailDivider.evernoteEmailLong");return j&&(j.className=j.className.replace(/\s*evernoteEmailLong/g," evernoteEmailShort")),a}return null}function W(){for(var a="",b=["#evernoteEmailPreview .evernoteEmailHeader, #evernoteEmailPreview .evernoteEmailDimmed, #evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailHeader","#evernoteEmailPreview .evernoteEmailBig","#evernoteEmailPreview .evernoteEmailMedium","#evernoteEmailPreview .evernoteEmailSmall","#evernoteEmailPreview .evernoteEmailRight","#evernoteEmailPreview .evernoteEmailDimmed","#evernoteEmailPreview .evernoteEmailDivider","#evernoteEmailPreview .evernoteEmailLight","#evernoteEmailPreview .evernoteEmailDark","#evernoteEmailPreview .evernoteEmailLong","#evernoteEmailPreview .evernoteEmailShort","#evernoteEmailParticipants","#evernoteEmailLinkBack","#evernoteEmailLinkBackArrow","#evernoteEmailPreview .evernoteEmail","#evernoteEmailPreview .evernoteEmailBody","#evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailAttachments .evernoteEmailSize"],c=["font-family: Helvetica, Arial, sans-serif !important;","color: #333333 !important; font-weight: bold !important;","font-size: 15px !important;","font-size: 14px !important;","font-size: 12px !important;","float: right !important;","color: #888888 !important;","height: 1px !important;","background-color: #E9E9E9 !important;","background-color: #B3B3B3 !important;","left: -48px !important; position: relative !important; width: -webkit-calc(100% + 96px) !important;","width: 100% !important;","margin: 16px 0 29px 0 !important;","display: block; margin: 22px 0 8px 0 !important; position: relative !important; text-decoration: none !important;","background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAr0lEQVQoU2NkwAKMjY35gcLTzp49G41NHlmMEV2BgYGBNRMT0xJGRkYFoAEY8ujqkRWwGBoa1gI1VwMVMYMUEm2Arq6uEisr62KgrVbINhBlgJGRUQxQ41SgRj5C/sUmzwh0dhzQ2ZPJNgBkKtQLS4EusSDWC8CY+g9SixKIQME6oFgVMYGIzQCw5UAJm////4OiUR5fIOI0AGoIP9CQGefOnYvEFbB4DSAmNmAGAABi7TE0OfL+0wAAAABJRU5ErkJggg==) !important;background-repeat: no-repeat !important; background-size: 16px 11px !important;display: inline-block; height: 11px !important; margin-right: 12px; width: 16px !important;","margin: 24px 0 !important; position: relative !important;","color: #222; font-family: Arial, sans-serif; font-size: 13px; margin-top: 24px !important;","padding: 20px 0 0 40px !important;","margin-left: 10px !important;"],d=0;d<b.length;d++)a+=b[d]+"{"+c[d]+"}";var e=document.createElement("style");e.innerText=a,document.head||(document.head=document.createElement("head")),document.head.appendChild(e)}function X(a,b){var c={top:Math.min(a.top,b.top),bottom:Math.max(a.bottom,b.bottom),left:Math.min(a.left,b.left),right:Math.max(a.right,b.right)};return c.width=c.right-c.left,c.height=c.bottom-c.top,c}function Y(a,b){return a||b?a&&b?a.top!=b.top?!1:a.bottom!=b.bottom?!1:a.left!=b.left?!1:a.right!=b.right?!1:a.width!=b.width?!1:a.height==b.height:!1:!0}function Z(a){if(0!==a.endOffset||a.endContainer.nodeType!==Node.ELEMENT_NODE){var b=a.getBoundingClientRect(),c={top:b.top,bottom:b.bottom,left:b.left,right:b.right,width:b.width,height:b.height};return c}var d=null;try{d=a.endContainer.getBoundingClientRect()}catch(e){log.warn("Couldn't get a bounding client rect for our end element, maybe it's a text node.")}for(var f=!1,g=[],h=a.getClientRects(),i=0;i<h.length;i++)Y(d,h[i])&&!f?f=!0:g.push(h[i]);if(0==g.length)return a.getBoundingClientRect();if(1==g.length)return g[0];for(var b=g[0],i=1;i<g.length;i++)b=X(b,g[i]);return b}function $(a){return"rtl"==document.dir?!1:a.bottom<0&&a.top<0?!1:!(a.left<0&&a.right<0)}function _(a,b){var c=b,d=a.getBoundingClientRect();if(d={bottom:d.bottom+window.scrollY,height:d.height,left:d.left+window.scrollX,right:d.right+window.scrollX,top:d.top+window.scrollY,width:d.width},!$(d))return c;var e=getComputedStyle(a);if("none"==e.display)return c;if("hidden"==e.overflowX||"hidden"==e.overflowY)return c;if(d.width*d.height>1&&(c=X(d,b)),a.children)for(var f=0;f<a.children.length;f++)c=_(a.children[f],c);return c}function aa(a){if(!a)return{top:0,bottom:0,left:0,right:0,width:0,height:0};var b=a.getBoundingClientRect();return _(a,{bottom:b.bottom+window.scrollY,height:b.height,left:b.left+window.scrollX,right:b.right+window.scrollX,top:b.top+window.scrollY,width:b.width})}function ba(){var a;if(void 0!==typeof b&&!va){a=b.getSelection(),va=[],wa=[];for(var c=0;c<a.rangeCount;c++)va.push(a.getRangeAt(c).cloneRange()),wa.push([va[c].startOffset,va[c].endOffset]);xa=b.getSelectionFrame()}if(!a){a=window.getSelection(),a.removeAllRanges();for(var d=0;d<va.length;d++){var e=document.createRange();if((va[d].startContainer.length||va[d].startContainer.childNodes.length)<wa[d][0])for(var f=0,c=0;c<va[d].startContainer.childNodes.length;c++){var g=va[d].startContainer.childNodes[c],h=0;if(h=g.getAttribute&&g.getAttribute("clearly_highlight_id")?(g.innerText||g.textContent).length:g.length||g.childNodes.length,f+=h,f>=wa[d][0]){e.setStart(g,wa[d][0]-(f-h));break}}else e.setStart(va[d].startContainer,wa[d][0]);if((va[d].endContainer.length||va[d].endContainer.childNodes.length)<wa[d][1])for(var f=0,c=0;c<va[d].endContainer.childNodes.length;c++){var g=va[d].endContainer.childNodes[c],h=0;if(h=g.getAttribute&&g.getAttribute("clearly_highlight_id")?(g.innerText||g.textContent).length:g.length||g.childNodes.length,f+=h,f>=wa[d][1]){e.setEnd(g,wa[d][1]-(f-h));break}}else e.setEnd(va[d].endContainer,wa[d][1]);a.addRange(e)}}return a}function ca(){ka=!1;var a=ba();la.reset();var b=null;xa&&(b=xa.getBoundingClientRect());var c,d,e;if(a)for(i(),la.reset(),e=0;e<a.rangeCount;e++)c=a.getRangeAt(e),d=Z(c),d.top+=document.body.scrollTop,d.bottom+=document.body.scrollTop,d.left+=document.body.scrollLeft,d.right+=document.body.scrollLeft,b&&(d.left+=b.left,d.right+=b.left,d.top+=b.top,d.bottom+=b.top),la.revealStaticRect(d,xa,!1),la.show();la.show()}function da(a,b){var c=parseFloat(la.getElement().style.borderTopWidth),d=parseFloat(la.getElement().style.borderRightWidth),e=parseFloat(la.getElement().style.borderBottomWidth),f=parseFloat(la.getElement().style.borderLeftWidth),g=parseFloat(la.getElement().style.width),h=parseFloat(la.getElement().style.height);return!(g-d>a&&a>f&&b>c&&h-e>b)}function ea(a){i(),la.reset(),la.gray(a)}function fa(a){ta=a}function ga(){ea("transparent"),ma.reset(),ma.showVeil(),ma.setColor("rgba(0, 0, 0, 0.27)"),ma.enableCrosshair()}function ha(a){a.key===b.getCustomFormatSiteName(b.isCustomFormat().id)+"UncheckedSections"&&(a.value&&a.value[a.currentUserId]&&y(a.value[a.currentUserId]),b.getCustomFormatReformattedData(function(a){z(),qa.displayDetected(a)}))}function ia(){document.body.style.overflowY="",document.body.style.overflowX="",i()}var ja={},ka=!1,la=new ContentVeil,ma=new Veil,na=new GmailClipper,oa=null,pa=null,qa=null,ra=null;SAFARI&&b.isGmail()&&W();var sa,ta=null,ua=0,va=null,wa=null,xa=null,ya=c(),za=N();return Browser.addMessageHandlers({clearPreview:i,previewArticle:o,previewClearly:p,previewCustom:u,previewEmail:O,previewFullPage:L,previewPdf:M,previewSelection:ca,previewSkitch:ga,previewUrl:h,receiveCroppedImage:g,receivePersistentValue:ha,receiveScreenshot:ia}),ja.clear=i,ja.clearHighlights=k,ja.getArticleElement=D,ja.getUrlElement=E,ja.getClearlyReformat=t,ja.getCustomElementContent=w,ja.getCustomElementUncheckedSections=x,ja.looksInteresting=A,ja.computeDescendantBoundingBox=aa,ja.getEmailElement=V,ja.ensureSelectionIsShown=ba,ja.expandPreview=H,ja.contractPreview=I,ja.moveToElementAbove=J,ja.moveToElementBelow=K,ja.isPointOnVeil=da,ja.reset=j,ja.gray=ea,ja.setElement=fa,ja});