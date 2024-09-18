function $43d7963e56408b24$var$paint(color) {
    const circle = document.getElementById("circleID");
    circle.style = `background-color:${color}`;
}
function $43d7963e56408b24$var$deserialize(input) {
    const { version: version, data: data } = JSON.parse(input);
    switch(version){
        case "1.0.0":
            return $43d7963e56408b24$var$deserializeV1(data);
        case "1.1.0":
            return $43d7963e56408b24$var$deserializeV2(data);
        // Add cases as needed for new versions
        default:
            throw new Error(`Unsupported version: ${version}`);
    }
}
function $43d7963e56408b24$var$deserializeV1(data) {
// Handle deserialization for version 1.0.0
}
function $43d7963e56408b24$var$deserializeV2(data) {
// Handle deserialization for version 1.1.0
}


//# sourceMappingURL=index.js.map
