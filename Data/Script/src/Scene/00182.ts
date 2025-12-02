['Event_00182_00001_Trigger'];
SceneEnter(191);
PartySetPos(56, 48, 0);
FadeOut(0);

['Scene_00182_Enter'];
PartySetPos(48, 117, 1);
ReplaceAndPause();

['Event_00182_00003_Trigger'];
EventSetState(-1, -1, 0);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
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
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
PartyWalkToBlock(23, 105, 1, 4);
PartyWalkToBlock(23, 105, 0, 4);
EventSetDirFrame(181, 2, 3, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
EventSetState(181, 2, 0);
SetBattlefield(FbpWin.木道人);
SetBattleMusic(Music.势如破竹_副本);
BattleStart(221, "@A073", "");
BattleEnd();
SetBattleMusic(Music.心急如焚);
SetDlgBox(0);
//未知对话
AddItem(201, 0);
SetDlgLower(28, 0, false);
//未知对话
EventSetState(181, 5, 1);
PartySetPos(21, 102, 1);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(20, false, false);
SetDlgLower(0, 0, false);
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
EventSetDirFrame(181, 5, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 1);
EventSetState(182, 0, 1);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(181, 5, 3, 0);
WaitEventAutoScriptRun(8, false, false);
EventWalkOneStep(181, 5, 8, 4);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(181, 5, 8, 4);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(46, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(182, 0, "@6B18");
WaitEventAutoScriptRun(16, false, false);
EventSetDirFrame(181, 5, 2, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(181, 5, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(182, 0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(181, 5, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(182, 0, 1, 0);
EventSetDirFrame(181, 5, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(181, 5, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(181, 5, 2, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(181, 4, 4, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(182, 0, "@6B1D");
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(181, 5, 1, 0);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(181, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(182, 0, "@6B1F");
WaitEventAutoScriptRun(25, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(181, 5, 2, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(182, 0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
FadeOut(2);
SceneEnter(184);

['Event_00182_00006_Auto'];
NpcMoveToBlockMutexLock(24, 106, 0, 2);

['Event_00182_00005_Auto'];
NpcMoveToBlock(20, 103, 1, 3);

