const rgba2Hex = ({ r, g, b, a }) => {
    let alpha = parseInt(a, 10); 
    let red = parseInt(r, 10);
    let green = parseInt(g, 10);
    let blue = parseInt(b, 10);
    const hexaDecimal = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
    return hexaDecimal;
}

export default rgba2Hex;