async function getIpAddressInfo() {
    const ipAddressOutput = document.getElementById("ip-address");
    const countryOutput = document.getElementById("ip-country");
    const regionOutput = document.getElementById("ip-region");
    const cityOutput = document.getElementById("ip-city");
    const zipOutput = document.getElementById("ip-zip");
    const latituteOutput = document.getElementById("ip-latitute");
    const longitudeOutput = document.getElementById("ip-longitude");
    const timeZoneOutput = document.getElementById("ip-time-zone");
    const timeZoneOffsetOutput = document.getElementById("ip-time-zone-offset");
    const ispOutput = document.getElementById("ip-isp");
    const organizationOutput = document.getElementById("ip-organization");
    const asIdentifierOutput = document.getElementById("ip-as-identifier");
    const mobileNetworkOutput = document.getElementById("ip-mobile-network");
    const proxyOutput = document.getElementById("ip-proxy");

    const result = await fetch("http://ip-api.com/json?fields=33615871");

    if (!result.ok) {
        console.error(`IP request response failed with status: ${ipResult.status}`);
        return;
    }
    
    const json = await result.json();

    if (json.status != "success") {
        console.error(`IP request response failed with message: ${json.message}`);
        ipAddressOutput.innerText = json.query;
        countryOutput.innerText = "[Error]";
        regionOutput.innerText = "[Error]";
        cityOutput.innerText = "[Error]";
        zipOutput.innerText = "[Error]";
        latituteOutput.innerText = "[Error]";
        longitudeOutput.innerText = "[Error]";
        timeZoneOutput.innerText = "[Error]";
        timeZoneOffsetOutput.innerText = "[Error]";
        ispOutput.innerText = "[Error]";
        organizationOutput.innerText = "[Error]";
        asIdentifierOutput.innerText = "[Error]";
        mobileNetworkOutput.innerText = "[Error]";
        proxyOutput.innerText = "[Error]";
        return;
    }

    ipAddressOutput.innerText = json.query;
    countryOutput.innerText = json.country;
    regionOutput.innerText = json.regionName;
    cityOutput.innerText = json.city;
    zipOutput.innerText = json.zip;
    latituteOutput.innerText = json.lat;
    longitudeOutput.innerText = json.lon;
    timeZoneOutput.innerText = json.timezone;
    timeZoneOffsetOutput.innerText = `${json.offset > 0 ? "+" : ""}${json.offset/3600} hours`;
    ispOutput.innerText = json.isp;
    organizationOutput.innerText = json.org;
    asIdentifierOutput.innerText = json.as;
    mobileNetworkOutput.innerText = json.mobile == true ? "Yes" : "No";
    proxyOutput.innerText = json.proxy == true ? "Yes" : "No";
}

function getUserAgentInfo() {
    const browserOutput = document.getElementById("ua-browser");
    const browserVersionOutput = document.getElementById("ua-browser-version");
    const engineOutput = document.getElementById("ua-engine");
    const engineVersionOutput = document.getElementById("ua-engine-version");
    const osOutput = document.getElementById("ua-os");
    const osVersionOutput = document.getElementById("ua-os-version");
    const deviceTypeOutput = document.getElementById("ua-device-type");
    const deviceModelOutput = document.getElementById("ua-device-model");
    const deviceVendorOutput = document.getElementById("ua-device-vendor");
    const cpuTypeOutput = document.getElementById("ua-cpu-type");

    const uaParser = new UAParser();
    const result = uaParser.getResult();

    browserOutput.innerText = result.browser.name ?? "\xa0";
    browserVersionOutput.innerText = result.browser.version ?? "\xa0";
    engineOutput.innerText = result.engine.name ?? "\xa0";
    engineVersionOutput.innerText = result.engine.version ?? "\xa0";
    osOutput.innerText = result.os.name ?? "\xa0";
    osVersionOutput.innerText = result.os.version ?? "\xa0";
    deviceTypeOutput.innerText = result.device.type ?? "\xa0";
    deviceModelOutput.innerText = result.device.model ?? "\xa0";
    deviceVendorOutput.innerText = result.device.vendor ?? "\xa0";
    cpuTypeOutput.innerText = result.cpu.architecture ?? "\xa0";
}

function updateWindowInfo() {
    const innerWidthOutput = document.getElementById("window-inner-width");
    const innerHeightOutput = document.getElementById("window-inner-height");
    const outerWidthOutput = document.getElementById("window-outer-width");
    const outerHeightOutput = document.getElementById("window-outer-height");
    const xPositionOutput = document.getElementById("window-x-position");
    const yPositionOutput = document.getElementById("window-y-position");

    innerWidthOutput.innerText = `${window.innerWidth}px`;
    innerHeightOutput.innerText = `${window.innerHeight}px`;
    outerWidthOutput.innerText = `${window.outerWidth}px`;
    outerHeightOutput.innerText = `${window.outerHeight}px`;
    xPositionOutput.innerText = `${window.screenX}px`;
    yPositionOutput.innerText = `${window.screenY}px`;
}

function updateScreenInfo() {
    const widthOutput = document.getElementById("screen-width");
    const heightOutput = document.getElementById("screen-height");
    const availableWidthOutput = document.getElementById("screen-available-width");
    const availableHeightOutput = document.getElementById("screen-available-height");
    const orientationOutput = document.getElementById("screen-orientation");
    const orientationAngleOutput = document.getElementById("screen-orientation-angle");
    const pixelRatioOutput = document.getElementById("screen-pixel-ratio");

    widthOutput.innerText = `${window.screen.width}px`;
    heightOutput.innerText = `${window.screen.height}px`;
    availableWidthOutput.innerText = `${window.screen.availWidth}px`;
    availableHeightOutput.innerText = `${window.screen.availHeight}px`;
    orientationOutput.innerText = window.screen.orientation.type;
    orientationAngleOutput.innerText = window.screen.orientation.angle;
    pixelRatioOutput.innerText = window.devicePixelRatio;
}

function updateTime() {
    const currentOutput = document.getElementById("time-current");
    const timeZoneOffsetOutput = document.getElementById("time-zone-offset");

    const date = new Date();
    const offset = date.getTimezoneOffset()*-1;

    currentOutput.innerText = date.toLocaleString();
    timeZoneOffsetOutput.innerText = `${offset > 0 ? "+" : ""}${offset/60} hours`;
}

function getMediaFeatureInfo() {
    const colorSchemeOutput = document.getElementById("preferences-color-scheme");
    const contrastOutput = document.getElementById("preferences-contrast");
    const reducedMotionOutput = document.getElementById("preferences-reduced-motion");
    const primaryPointerOutput = document.getElementById("preferences-primary-pointer");
    const allPointersOutput = document.getElementById("preferences-all-pointers");

    let colorScheme = "No Preference";
    let contrast = "No Preference";
    let reducedMotion = "No Preference";
    let primaryPointer = "No Pointers";
    let allPointers = "No Pointers";

    // Get preferred color scheme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colorScheme = "Dark";
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        colorScheme = "Light";
    }

    // Get preferred contrast
    if (window.matchMedia('(prefers-contrast: more)').matches) {
        contrast = "More";
    }
    else if (window.matchMedia('(prefers-contrast: less)').matches) {
        contrast = "Less";
    }
    else if (window.matchMedia('(prefers-contrast: custom)').matches) {
        contrast = "Custom";
    }

    // Get reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        reducedMotion = "Reduce";
    }

    // Get primary pointer accuracy
    if (window.matchMedia('(pointer: none)').matches) {
        primaryPointer = "No pointer";
    }
    else if (window.matchMedia('(pointer: coarse)').matches) {
        primaryPointer = "Coarse (e.g. a Touch Screen)";
    }
    else if (window.matchMedia('(pointer: fine)').matches) {
        primaryPointer = "Fine (e.g. a Mouse)";
    }

    // Get all pointer accuracy
    if (window.matchMedia('(any-pointer: none)').matches) {
        allPointers = "No pointers";
    }
    else if (window.matchMedia('(pointer: coarse)').matches && window.matchMedia('(pointer: fine)').matches) {
        allPointers = "Both Fine and Coarse";
    }
    else if (window.matchMedia('(pointer: coarse)').matches) {
        allPointers = "Coarse (e.g. a Touch Screen)";
    }
    else if (window.matchMedia('(pointer: fine)').matches) {
        allPointers = "Fine (e.g. a Mouse)";
    }

    colorSchemeOutput.innerText = colorScheme;
    contrastOutput.innerText = contrast;
    reducedMotionOutput.innerText = reducedMotion;
    primaryPointerOutput.innerText = primaryPointer;
    allPointersOutput.innerText = allPointers;
}

// Get all of the info
getIpAddressInfo();
getUserAgentInfo();
updateWindowInfo();
updateScreenInfo();
updateTime();
getMediaFeatureInfo();

// Repeatedly update the info that is likely to change
window.setInterval(() => {
    updateWindowInfo();
    updateScreenInfo();
    updateTime();
}, 250);

// Set year in footer
let yearElement = document.getElementById("current-year");
yearElement.innerText = new Date().getFullYear();
