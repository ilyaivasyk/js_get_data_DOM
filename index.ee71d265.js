var t=document.querySelectorAll("span.population"),e=[];t.forEach(function(t){var n=parseInt(t.textContent.trim().replace(/,/g,""),10);isNaN(n)||e.push(n)});var n=e.reduce(function(t,e){return t+e},0),o=n/e.length,r=function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},a=document.querySelector("span.total-population"),u=document.querySelector("span.average-population");a.textContent=r(n),u.textContent=r(o);
//# sourceMappingURL=index.ee71d265.js.map
