define("editorjs-styledblocks",[],(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor({data:e,config:t}){e||(e=""),this.data=e,this.styles=[],t&&t.styles&&(this.styles=t.styles)}static get isTune(){return!0}wrap(e,t){var n;if(e.style.backgroundColor="",e.style.paddingLeft="",null===(n=e.querySelector(".styled-blocks-label"))||void 0===n||n.remove(),this.data){const n=window.document.createElement("div");n.classList.add("styled-blocks-label"),n.innerText=t.title,n.style.position="absolute",n.style.top="8px",n.style.right="24px",n.style.opacity="0.5",n.style.fontSize="0.7em",e.appendChild(n),e.style.backgroundColor=t.background,e.style.position="relative",e.style.paddingLeft="1em",e.querySelector}return this.blockContent=e,e}save(){return this.data}addButton(e){const t=window.document.createElement("div"),n=window.document.createElement("div");n.classList.add("ce-popover__item-icon"),n.style.display="inline-block",n.style.marginRight="8px",n.style.clear="left",n.innerHTML=e.icon;const o=window.document.createElement("div");return o.innerText=e.title,o.classList.add("ce-popover__item-label"),o.style.display="inline-block",t.classList.add("ce-popover__item"),t.style.paddingBottom="4px",t.appendChild(n),t.setAttribute("data-styled-block-style",e.key),t.appendChild(o),t.addEventListener("click",()=>{e.key===this.data?this.data="":this.data=e.key,this.wrap(this.blockContent,e)}),t}render(){const e=this,t=window.document.createElement("div");return this.styles.forEach(n=>{const o=e.addButton(n);t.appendChild(o)}),t}}}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGl0b3Jqcy1zdHlsZWRibG9ja3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtc3R5bGVkYmxvY2tzLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZGVmYXVsdCIsImRhdGEiLCJjb25maWciLCJ0aGlzIiwic3R5bGVzIiwiYmxvY2tDb250ZW50Iiwic3R5bGUiLCJfYSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdMZWZ0IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImxhYmVsIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0Iiwib3BhY2l0eSIsImZvbnRTaXplIiwiYXBwZW5kQ2hpbGQiLCJiYWNrZ3JvdW5kIiwiYnV0dG9uIiwiaWNvbiIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImNsZWFyIiwiaW5uZXJIVE1MIiwicGFkZGluZ0JvdHRvbSIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3cmFwIiwic2VsZiIsIndyYXBwZXIiLCJmb3JFYWNoIiwiYWRkQnV0dG9uIl0sIm1hcHBp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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBTdHlsZWRCbG9ja3NUdW5lIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGRhdGEsIGNvbmZpZyB9KSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gW107XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLnN0eWxlcykge1xuICAgICAgICAgICAgdGhpcy5zdHlsZXMgPSBjb25maWcuc3R5bGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgaXNUdW5lKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgd3JhcChibG9ja0NvbnRlbnQsIHN0eWxlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYmxvY2tDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICBibG9ja0NvbnRlbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgKF9hID0gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHlsZWQtYmxvY2tzLWxhYmVsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzdHlsZWQtYmxvY2tzLWxhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBzdHlsZS50aXRsZTtcbiAgICAgICAgICAgIGxhYmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGxhYmVsLnN0eWxlLnRvcCA9ICc4cHgnO1xuICAgICAgICAgICAgbGFiZWwuc3R5bGUucmlnaHQgPSAnMjRweCc7XG4gICAgICAgICAgICBsYWJlbC5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICBsYWJlbC5zdHlsZS5mb250U2l6ZSA9ICcwLjdlbSc7XG4gICAgICAgICAgICBibG9ja0NvbnRlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgYmxvY2tDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmQ7XG4gICAgICAgICAgICBibG9ja0NvbnRlbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgYmxvY2tDb250ZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzFlbSc7XG4gICAgICAgICAgICBibG9ja0NvbnRlbnQucXVlcnlTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrQ29udGVudCA9IGJsb2NrQ29udGVudDtcbiAgICAgICAgcmV0dXJuIGJsb2NrQ29udGVudDtcbiAgICB9XG4gICAgc2F2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgYWRkQnV0dG9uKHN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdjZS1wb3BvdmVyX19pdGVtLWljb24nKTtcbiAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGljb24uc3R5bGUubWFyZ2luUmlnaHQgPSAnOHB4JztcbiAgICAgICAgaWNvbi5zdHlsZS5jbGVhciA9ICdsZWZ0JztcbiAgICAgICAgaWNvbi5pbm5lckhUTUwgPSBzdHlsZS5pY29uO1xuICAgICAgICAvLyBDcmVhdGUgbGFiZWxcbiAgICAgICAgY29uc3QgbGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHN0eWxlLnRpdGxlO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjZS1wb3BvdmVyX19pdGVtLWxhYmVsJyk7XG4gICAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NlLXBvcG92ZXJfX2l0ZW0nKTtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnNHB4JztcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXN0eWxlZC1ibG9jay1zdHlsZScsIHN0eWxlLmtleSk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdHlsZS5rZXkgPT09IHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gc3R5bGUua2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53cmFwKHRoaXMuYmxvY2tDb250ZW50LCBzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBsZXQgYnV0dG9uO1xuICAgICAgICB0aGlzLnN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gc2VsZi5hZGRCdXR0b24oc3R5bGUpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgKCFidXR0b24pIHtcbiAgICAgICAgLy8gICAgIGJ1dHRvbiA9IHRoaXMuYWRkQnV0dG9uKHRoaXMuc3R5bGVzWzBdKTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZWRCbG9ja3NUdW5lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==