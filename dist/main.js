(()=>{var e={138:e=>{e.exports=function(e){function t(e){const t=e.split("="),r=t[1].slice(t[1].length-1);return{name:t[0],value:'"'!==r?t[1].slice(1):t[1].slice(1,t[1].length-1)}}let r={property:Array(),geometry:Array()};const n=e.replaceAll("\n","").split(">"),l=n[0].split('" ');l[0]=l[0].slice(5);for(let e=1;e<l.length;e+=1){const n=t(l[e]);"xmlns"===n.name?r.xmlns=n.value:r.property.push(n)}for(let e=1;e<n.length-2;e+=1)r.geometry.push(n[e]+">");return`export default ((result = ${JSON.stringify(r)})=>{\n        const svg = document.createElementNS(result.xmlns, "svg");\n        for (let i = 0; i < result.property.length; i++) {\n            svg.setAttributeNS(null,\`\${result.property[i].name}\`,\`\${result.property[i].value}\`);\n        }\n        for (let i = 0; i < result.geometry.length; i++) {\n            svg.insertAdjacentHTML('beforeend',result.geometry[i]);\n        }\n        return svg;})()`}}},t={},r=function r(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}(138);module.exports=r})();