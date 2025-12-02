['Scene_00254_Enter'];
PartySetPos(44, 68, 0);
PartySetRole(1, 4, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 1, 0);
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00254_00006_Trigger'];
EventSetState(-1, -1, 0);
PartyWalkToBlock(39, 72, 0, 8);
PartyWalkToBlock(37, 74, 0, 8);
PartyWalkToBlock(36, 73, 1, 8);
SetDlgUpper(0, 0, false);
//未知对话
RoleSetDirFrame(1, 0, 1);
EventSetAutoScript(253, 2, "@8287");
ViewportMove(-2, -1, 24);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(71, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(71, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(253, 3, "@828B");
WaitEventAutoScriptRun(16, false, false);
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(253, 3, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(71, 0, false);
//未知对话
//未知对话
EventSetDirFrame(253, 2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(253, 2, 1, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(253, 2, "@8289");
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(253, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
MusicPlay(Music.十面埋伏, true, false);
EventSetAutoScript(253, 3, "@828E");
EventSetAutoScript(253, 4, "@8293");
EventSetAutoScript(253, 5, "@8297");
WaitEventAutoScriptRun(16, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(253, 3, 0, 12);
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
PlaySound(175);
FadeColor(79, 2, false);
HeroSetSprite(0, 2, false);
PartySetRole(1, 0, 0);
EventSetState(254, 0, 1);
VideoUpdate(0, false);
FadeColor(79, 2, true);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(253, 3, 3, 0);
PartyWalkToBlock(37, 72, 1, 4);
HeroSetSprite(0, 232, true);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(254, 0, 0, 1);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
EventSetDirFrame(254, 0, 0, 2);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(254, 0, 0, 3);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(254, 0, "@829B");
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(253, 3, "@8291");
EventSetAutoScript(253, 4, "@8295");
EventSetAutoScript(253, 5, "@8299");
ViewportMove(4, 2, 16);
EventSetState(254, 0, 0);
WaitEventAutoScriptRun(14, false, false);
FadeOut(0);
SceneEnter(253);

