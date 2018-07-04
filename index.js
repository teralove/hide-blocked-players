module.exports = function HideBlockedUsers(dispatch) {
    
    let blockList;
    
    dispatch.hook('S_USER_BLOCK_LIST', 2, (event) => {
        blockList = event.blockList;
    });   
    
    dispatch.hook('S_SPAWN_USER', 13, (event) => {
        if (!blockList) return;
        let player = blockList.find(p => p.name === event.name);
        if (player) return false;
    });       

}