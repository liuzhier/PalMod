['Scene_00184_Enter'];
MusicPlay(Music.桃花幻梦, true, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(1, 0, 0);
PartySetPos(32, 80, 1);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
EventSetAutoScript(183, 1, "@6B33");
WaitEventAutoScriptRun(18, false, false);
EventSetAutoScript(183, 1, "@6B36");
WaitEventAutoScriptRun(14, false, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(183, 1, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(183, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
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
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(183, 1, 1, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(183, 5, 0);
EventSetState(183, 6, 0);
EventSetState(183, 7, 0);
EventSetState(183, 13, 2);
EventSetState(183, 14, 2);
EventSetState(183, 15, 2);
FadeToScene(0, -1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
EventSetState(183, 8, 0);
EventSetState(183, 9, 0);
EventSetState(183, 16, 2);
EventSetState(184, 0, 2);
FadeToScene(0, -1);
EventSetDirFrame(183, 1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(183, 1, 1, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(183, 2, 0);
EventSetState(183, 3, 0);
EventSetState(183, 4, 0);
EventSetState(183, 10, 2);
EventSetState(183, 11, 2);
EventSetState(183, 12, 2);
FadeToScene(2, -1);
SetDlgCenter(0, false);
//未知对话
AddItem(209, 0);
SceneEnter(183);

