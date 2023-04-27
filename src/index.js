module.exports = function (content) {
    const EOL = '\n';
    const SEPARATOR_PROPERTY = '" ';
    const SEPARATOR_VALUE = '=';
    const QUOTE = '"';
    const TAG_CLOSE = '>';
    const NMSP = 'xmlns';

    function parseString(svgString) {
        return svgString.split(SEPARATOR_PROPERTY);
    }
    function parseProperty(strProperty) {
        const result = strProperty.split(SEPARATOR_VALUE);
        const lastSymbol = result[1].slice(result[1].length - 1);
        return {
            name: result[0].trim(),
            value: (lastSymbol !== QUOTE ? result[1].slice(1) : result[1].slice(1, result[1].length - 1)).trim()
        }
    }
    
    let result = {
        property: Array(),
        geometry: Array()
    };
    const svgParced = content.replaceAll(EOL, '').split(TAG_CLOSE);
    const svgProperty = parseString(svgParced[0]);
    svgProperty[0] = svgProperty[0].slice(5);
    for (let i = 0; i < svgProperty.length; i += 1) {
        const prop = parseProperty(svgProperty[i]);
        if (prop.name === NMSP) {
            result.xmlns = prop.value;
        } else {
            result.property.push(prop);
        }
    }
    for (let i = 1; i < svgParced.length - 2; i += 1) {
        result.geometry.push(svgParced[i] + TAG_CLOSE);
    }
    return `export default ((result = ${JSON.stringify(result)})=>{
        const svg = document.createElementNS(result.xmlns, "svg");
        for (let i = 0; i < result.property.length; i++) {
            svg.setAttributeNS(null,\`\${result.property[i].name}\`,\`\$\{result.property[i].value\}\`);
        }
        for (let i = 0; i < result.geometry.length; i++) {
            svg.insertAdjacentHTML('beforeend',result.geometry[i]);
        }
        return svg;})()`;
};
