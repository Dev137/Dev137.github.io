function returnControls(camera, renderer){
    let controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 5.0;
    controls.zoomSpeed = 5;
    controls.panSpeed = 2;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    return controls;
 }
 export{
    returnControls
 }