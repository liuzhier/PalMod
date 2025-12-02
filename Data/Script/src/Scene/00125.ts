['Event_00125_00001_Trigger'];
SceneEnter(124);
PartySetPos(11, 39, 0);
FadeOut(0);

['Event_00125_00002_Auto'];
NpcMoveToBlockMutexLock(24, 42, 0, 4);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(29, 37, 0, 8);
NpcMoveToBlock(28, 36, 0, 8);

['Event_00125_00003_Trigger'];
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00125_00004_Trigger'];
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
EventSetState(124, 2, 1);
WaitEventAutoScriptRun(31, false, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
EventSetState(-1, -1, 0);
EventSetState(124, 2, 0);
EventSetState(124, 5, 1);
EventSetState(124, 6, 1);
EventSetState(124, 7, 1);
PartySetPos(27, 36, 1);
RoleSetDirFrame(2, 0, 0);
PartySetRole(3, 0, 0);
FadeOut(0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(124, 6, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(124, 6, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(124, 6, 0, 1);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(124, 6, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(124, 5, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
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
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetState(124, 6, 0);
EventSetState(124, 3, 2);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(124, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
EventSetDirFrame(124, 5, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(124, 3, 1, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(124, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
EventSetAutoScript(124, 3, "Event_00002_00026_Auto");
EventSetState(124, 7, 0);
PartySetRole(3, 1, 0);
EventSetState(108, 7, 1);
SceneSetScript(124, "@463E", "");
ReplaceAndPause();

