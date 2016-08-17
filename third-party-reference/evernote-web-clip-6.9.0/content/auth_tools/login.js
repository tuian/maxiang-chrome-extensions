/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
function clearError(a){a.className=a.className.replace(/\s*error/g,""),a.nextElementSibling.removeAttribute("data-error")}function clearGlobalError(){globalError.innerHTML=""}function handleInputKeypress(a){13==a.keyCode&&login()}function login(){Persistent.set("popup_savedUsername",username.value),clearError(username),clearError(password),clearGlobalError(),validateUsername()&&validatePassword()&&background.msgHandlerLogin({username:username.value,password:password.value,useSearchHelper:simsearch.checked},null,msgHandlerLoginResponse)}function msgHandlerLoginResponse(a,b,c){if(a.error){if("INVALID_PASSWORD"==a.error)setError(password,Browser.i18n.getMessage("loginForm_passwordInvalidError"));else if("PASSWORD_REQUIRED"==a.error)setError(password,Browser.i18n.getMessage("loginForm_passwordError_5"));else if("USERNAME_REQUIRED"==a.error)setError(username,Browser.i18n.getMessage("loginForm_usernameError_5"));else if("INVALID_USERNAME"==a.error)setError(username,Browser.i18n.getMessage("loginForm_usernameInvalidError"));else if("ACCOUNT_DEACTIVATED"==a.error)setError(username,Browser.i18n.getMessage("EDAMError_3_User_active"));else if("EXPIRED_PASSWORD"==a.error){var d="Your password has expired. Please reset it now.";/en/.test(navigator.language)||(d=Browser.i18n.getMessage("expiredV1Password")),setGlobalError(d);var e=document.createElement("button");e.innerText=Browser.i18n.getMessage("ok"),e.addEventListener("click",function(){background.msgHandlerOpenWindow({height:600,width:800,url:baseUrl+"/Login.action?username="+encodeURIComponent(username.value)+"&targetUrl="+encodeURIComponent("/ChangePassword.action")})}),globalError.insertBefore(e,globalError.firstChild),background.trackEvent({category:"Account",action:"sign_in",label:"pw_reset_needed"})}else GLOBAL_ERRORS[a.error]&&setGlobalError(Browser.i18n.getMessage(GLOBAL_ERRORS[a.error][0],GLOBAL_ERRORS[a.error][1]));handleCheckTextSize(username)}else a.secondFactorDeliveryHint?(background.trackEvent({category:"Account",action:"sign_in",label:"tfa_sms_needed"}),window.location.href="content/auth_tools/two_factor.html?auth="+encodeURIComponent(a.authenticationToken)+"&expiration="+encodeURIComponent(a.expiration)+"&sms="+encodeURIComponent(a.secondFactorDeliveryHint)):a.sso?(background.trackEvent({category:"Account",action:"sign_in",label:"sso_needed",data:background.generateUserCustomDimensions()}),window.location.href="content/auth_tools/sso.html?bizName="+encodeURIComponent(a.bizName)):a.username?(background.trackEvent({category:"Account",action:"sign_in",label:"completed",data:background.generateUserCustomDimensions()}),Browser.getCurrentTab(function(a){background.toggleClipper({afterAuth:!0},{tab:a}),closePopup()})):(background.trackEvent({category:"Account",action:"sign_in",label:"tfa_ga_needed"}),window.location.href="content/auth_tools/two_factor.html?auth="+encodeURIComponent(a.authenticationToken)+"&expiration="+encodeURIComponent(a.expiration))}function register(){background.msgHandlerGetRegistrationLinks(null,null,function(a){a.error?GLOBAL_ERRORS[a.error]&&setGlobalError(GLOBAL_ERRORS[a.error]):window.location.href="content/auth_tools/registration.html?captcha="+encodeURIComponent(a.captcha)+"&submit="+encodeURIComponent(a.submit)})}function setError(a,b){a.className+=" error",a.nextElementSibling.setAttribute("data-error",b)}function setGlobalError(a){globalError.innerHTML=a}function setupLogin(){username.value=Persistent.get("popup_savedUsername"),/china/i.test(locale)?(logo.className+=" china",regButton.innerHTML=Browser.i18n.getMessage("header_register")):(logo.className=logo.className.replace(/\s*china/g,""),/zh-cn/i.test(navigator.language)&&(regButton.innerHTML="\u5efa\u7acb Evernote \u5e33\u6236")),background.getBootstrapInfoLength()>1?(switcher.className="visible",/china/i.test(locale)?switcher.innerHTML="\u5207\u6362\u5230Evernote International":switcher.innerHTML="\u5207\u6362\u5230\u5370\u8c61\u7b14\u8bb0"):switcher.className=switcher.className.replace(/\s*visible/g,""),forgotPassword.addEventListener("click",function(){background.msgHandlerOpenTab({url:baseUrl+"/ForgotPassword.action"}),closePopup()}),/globalError=([^&]+)/.test(window.location.search)&&setGlobalError(GlobalUtils.escapeXML(decodeURIComponent(/globalError=([^&]+)/.exec(window.location.search)[1]))),simsearch.checked=background.getOption("useSearchHelper")}function validatePassword(){var a=new RegExp("^[A-Za-z0-9!#$%&'()*+,./:;<=>?@^_`{|}~\\[\\]\\\\-]{6,64}$");return""==password.value.length?(setError(password,Browser.i18n.getMessage("loginForm_passwordError_5")),!1):a.test(password.value)?!0:(setError(password,Browser.i18n.getMessage("loginForm_passwordInvalidError")),!1)}function validateUsername(){return 0==username.value.length&&setError(username,Browser.i18n.getMessage("loginForm_usernameError_5")),handleCheckTextSize(username),0!=username.value.length}function updateTempElText(a){autoResizeElement.textContent=a.value,""==autoResizeElement.textContent&&a.placeholder&&(autoResizeElement.textContent=a.placeholder);var b=window.getComputedStyle(a,null);document.getElementById("tempDiv").setAttribute("style","font: "+b.getPropertyValue("font"))}function getTextWidth(a){var b=window.getComputedStyle(a,null),c=a.offsetWidth,d=b.getPropertyValue("padding-left").replace("px",""),e=b.getPropertyValue("padding-right").replace("px",""),f=b.getPropertyValue("border-left-width").replace("px",""),g=b.getPropertyValue("border-right-width").replace("px","");return c-d-e-f-g}function handleCheckTextSize(a){updateTempElText(a);var b=getTextWidth(a),c=getTextWidth(autoResizeElement),d=parseFloat(window.getComputedStyle(a,null).getPropertyValue("font-size"));if(!(d==minFontSize&&c>=b||d==maxFontSize&&b>=c)){var e=d,f=b>=c?1:-1;do{if(e+=f,document.getElementById("tempDiv").style.fontSize=e+"px",c=getTextWidth(autoResizeElement),1==f){if(!(b>c))break;d=e}if(-1==f&&(d=e,b>=c))break}while(e>minFontSize&&maxFontSize>e);a.style.fontSize=d+"px"}}function createAutoResizeElement(){var a=document.createElement("div");a.id="tempDiv",autoResizeElement=document.createElement("span"),autoResizeElement.style.position="absolute",autoResizeElement.style.whiteSpace="nowrap",autoResizeElement.style.left="-9999px",a.appendChild(autoResizeElement),document.body.appendChild(a)}function konami(a){event.keyCode==konamiSequence[konamiPosition]?konamiPosition++:konamiPosition=0,konamiPosition==konamiSequence.length&&(konamiPosition=0,SAFARI?(safari.extension.globalPage.contentWindow.extension.msgHandlerSetPersistentValue({key:"isDevelopOptionsEnable",value:"true"}),safari.extension.globalPage.contentWindow.extension.msgHandlerOpenTab({url:Browser.getExtensionURL("options.html")})):(Browser.sendToExtension({name:"setPersistentValue",key:"isDevelopOptionsEnable",value:"true"}),background.msgHandlerOpenTab({url:Browser.getExtensionURL("options.html")})))}var logo,closeButton,globalError,switcher,username,password,simsearch,loginButton,regButton,forgotPassword,background=Browser.extension.getBackgroundPage().extension,baseUrl=background.getOption("secureProto")+background.getBootstrapInfo("serviceHost"),locale=background.getBootstrapInfo("name"),autoResizeElement,maxFontSize=14,minFontSize=11,GLOBAL_ERRORS={UNKNOWN:["EDAMError_1"],DATA_REQUIRED:["loginForm_usernameError_8"],INVALID_AUTH:["loginForm_usernameError_8"],"HTTP/503":["Error_HTTP_Transport",["503"]],NETWORK:["Error_Network_Unavailable"],TOO_MANY_FAILURES:["EDAMError_3_User_tooManyFailuresTryAgainLater"],TIMEOUT:["popup_loginCheckTimeout"]};window.addEventListener("keydown",konami);var konamiSequence=[38,38,40,40,37,39,37,39,66,65],konamiPosition=0;window.addEventListener("DOMContentLoaded",function(){logo=document.getElementById("logo"),closeButton=document.getElementById("close"),globalError=document.getElementById("globalError"),switcher=document.getElementById("switcher"),username=document.getElementById("username"),password=document.getElementById("password"),simsearch=document.getElementById("simsearch"),loginButton=document.getElementById("login"),regButton=document.getElementById("reg"),forgotPassword=document.getElementById("forgotPw"),createAutoResizeElement(),GlobalUtils.localize(document.body),username.placeholder=Browser.i18n.getMessage("loginForm_username"),password.placeholder=Browser.i18n.getMessage("loginForm_password"),handleCheckTextSize(username),errorClickHandler=function(a){var b=a.currentTarget,c=b.style.display;b.style.display="none";var d=document.elementFromPoint(a.clientX,a.clientY);b.style.display=c,clearError(d),d.focus()};for(var a=document.getElementsByClassName("errorHoverRegion"),b=0;b<a.length;b++)a[b].addEventListener("click",errorClickHandler);closeButton.addEventListener("click",closePopup),closeButton.addEventListener("keypress",function(a){13==a.keyCode&&closePopup()}),logo.addEventListener("click",function(){background.msgHandlerOpenTab({url:baseUrl+"/Home.action"})}),switcher.addEventListener("click",function(){background.switchService(null,null,function(){window.location.reload()})}),switcher.addEventListener("keypress",function(a){13==a.keyCode&&background.switchService(null,null,function(){window.location.reload()})}),username.addEventListener("keypress",handleInputKeypress),username.addEventListener("input",function(){clearError(username),clearGlobalError(),handleCheckTextSize(username)}),password.addEventListener("keypress",handleInputKeypress),password.addEventListener("input",function(){clearError(password),clearGlobalError()}),loginButton.addEventListener("click",login),loginButton.addEventListener("keypress",function(a){13==a.keyCode&&login()}),regButton.addEventListener("click",register),regButton.addEventListener("keypress",function(a){13==a.keyCode&&register()}),setupLogin(),background.trackEvent({category:"Account",action:"sign_in",label:"started",startSession:!0})});