module.exports = function HideBlockedUsers(mod) {

    let blockList = []

    mod.hook('S_USER_BLOCK_LIST', 2, (event) => {
        blockList = event.blockList;
    });

    mod.hook('S_SPAWN_USER', 15, (event) => {
        if (mod.game.me.inBattleground) return;
        let player = blockList.find(p => p.name === event.name);
        if (player) return false;
    });
}