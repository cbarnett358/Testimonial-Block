!function(){"use strict";var e,n={227:function(){var e=window.wp.blocks,n=window.wp.element,t=window.wp.i18n,r=window.wp.blockEditor,o=JSON.parse('{"u2":"cb/cb-testimonial"}');(0,e.registerBlockType)(o.u2,{edit:function(){return(0,n.createElement)("p",(0,r.useBlockProps)(),(0,t.__)("Testimonial Block – hello from the editor!","cb-testimonial"))},save:function(){return(0,n.createElement)("p",r.useBlockProps.save(),"Testimonial Block – hello from the saved content!")}})}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,o,i){if(!t){var c=1/0;for(a=0;a<e.length;a++){t=e[a][0],o=e[a][1],i=e[a][2];for(var u=!0,l=0;l<t.length;l++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(u=!1,i<c&&(c=i));if(u){e.splice(a--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[t,o,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,c=t[0],u=t[1],l=t[2],s=0;if(c.some((function(n){return 0!==e[n]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var a=l(r)}for(n&&n(t);s<c.length;s++)i=c[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(a)},t=self.webpackChunkcb_testimonial=self.webpackChunkcb_testimonial||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[431],(function(){return r(227)}));o=r.O(o)}();