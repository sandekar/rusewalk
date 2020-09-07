import * as Marzipano from "marzipano";

export function mapScenes(data, viewer, tilesPrefix) {
    let constructedScenes = [];

    constructedScenes.push(...data.scenes.map((sceneData) => {
        const url = tilesPrefix + "/" + sceneData.id;
        const source = Marzipano.ImageUrlSource.fromString(url + "/{z}/{f}/{y}/{x}.jpg",
            {cubeMapPreviewUrl: url + "/preview.jpg"});

        const geometry = new Marzipano.CubeGeometry(sceneData.levels);
        const limiter = Marzipano.RectilinearView.limit.traditional(sceneData.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
        const view = new Marzipano.RectilinearView(sceneData.initialViewParameters, limiter);

        const scene = viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
        });

        // Create link hotspots.
        sceneData.linkHotspots.forEach((hotspot) => {
            const element = createLinkHotspotElement(hotspot, data, constructedScenes);
            scene.hotspotContainer().createHotspot(element, {
                yaw: hotspot.yaw,
                pitch: hotspot.pitch
            });
        });

        // Create info hotspots.
        sceneData.infoHotspots.forEach((hotspot) => {
            const element = createInfoHotspotElement(hotspot);
            scene.hotspotContainer().createHotspot(element, {
                yaw: hotspot.yaw,
                pitch: hotspot.pitch
            });
        });

        return {
            data: sceneData,
            scene: scene,
            view: view
        };
    }));

    return constructedScenes;
}

export function switchScene(scene, targetYaw) {
    scene.view.setParameters(scene.data.initialViewParameters);
    if (targetYaw) {
        scene.view.setYaw(targetYaw);
    }
    scene.scene.switchTo({}, () => {});
}

function createLinkHotspotElement(hotspot, data, constructedScenes) {

    // TODO change to react elements

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = '/api/static/img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
    for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i];
        icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function () {
        switchScene(findSceneById(hotspot.target, constructedScenes), hotspot.targetYaw);
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target, data).name;

    wrapper.appendChild(icon);
    // Disable tooltips
    // wrapper.appendChild(tooltip);

    return wrapper;
}

function createInfoHotspotElement(hotspot) {

    // TODO: change to react elements

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = '/api/static/img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = '/api/static/img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    const text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    const modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');

    // .MarzipanoWrapperModals
    const modalsHolder = document.querySelector('.modals-wrapper');
    modalsHolder.appendChild(modal);

    const toggle = function () {
        wrapper.classList.toggle('visible');
        modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
}

function stopTouchAndScrollEventPropagation(element) {
    const eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
        'wheel', 'mousewheel'];
    for (let i = 0; i < eventList.length; i++) {
        element.addEventListener(eventList[i], function (event) {
            event.stopPropagation();
        });
    }
}

function findSceneById(id, scenes) {
    for (let i = 0; i < scenes.length; i++) {
        if (scenes[i].data.id === id) {
            return scenes[i];
        }
    }
    return null;
}

function findSceneDataById(id, data) {
    for (let i = 0; i < data.scenes.length; i++) {
        if (data.scenes[i].id === id) {
            return data.scenes[i];
        }
    }
    return null;
}