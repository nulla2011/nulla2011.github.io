// ==UserScript==
// @name         show-av
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  show av number on panel
// @author       nulla
// @match        *://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function() {
    var av_url=document.querySelector('meta[itemprop="url"]').content;
    var av=av_url.match(/[a-zA-z]+\:\/\/.*\/.*\/(av+[0-9]*)\//);
    function create_av(){
        var videodata=document.getElementsByClassName('video-data');
        var new_av=document.createElement('span');
        new_av.style.margin="16px";
        new_av.innerHTML += "<a href='"+av_url+"' target='_blank'>"+av[1]+"</a>"+"<span>   （从右边推荐点进来的话av号不会变，需要手动刷新！！）</span>";
        videodata[0].appendChild(new_av);
    }
    window.setTimeout(create_av, 3000);
})();