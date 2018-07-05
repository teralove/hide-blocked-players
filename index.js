module.exports = function HideBlockedUsers(dispatch) {
    
    let blockList = [],
    inBg = false;
    
    dispatch.hook('S_LOAD_TOPO', 3, (event) => {
        console.log('Load topo: ' + event.zone);
        inBg = [116, 112].includes(event.zone) ? true : false;
    });     
    
    dispatch.hook('S_USER_BLOCK_LIST', 2, (event) => {
        blockList = event.blockList;
    });   
    
    dispatch.hook('S_SPAWN_USER', 13, (event) => {
        if (inBg) return;
        let player = blockList.find(p => p.name === event.name);
        if (player) return false;
    });       

}