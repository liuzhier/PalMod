['Event_00176_00006_Trigger'];
SceneEnter(181);
PartySetPos(29, 32, 1);
FadeOut(0);

['Event_00176_00007_Trigger'];
SceneEnter(191);
PartySetPos(29, 117, 1);
FadeOut(0);

['Event_00176_00001_Trigger'];
SceneEnter(192);
PartySetPos(43, 83, 0);
FadeOut(0);

['Event_00176_00002_Trigger'];
SceneEnter(192);
PartySetPos(29, 60, 1);
FadeOut(0);

['Event_00176_00003_Trigger'];
SceneEnter(192);
PartySetPos(46, 31, 1);
FadeOut(0);

['Event_00176_00004_Trigger'];
SceneEnter(192);
PartySetPos(19, 22, 0);
FadeOut(0);

['Event_00176_00005_Trigger'];
SceneEnter(192);
PartySetPos(16, 92, 1);
FadeOut(0);

['Scene_00176_Enter'];
MusicPlay(Music.桃花幻梦, true, false);

['Event_00176_00010_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@68A3");
WaitEventAutoScriptRun(8, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPause();
//未知对话
//未知对话
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
EventSetState(175, 8, 2);
EventSetState(175, 9, 2);
VideoUpdate(0, false);

['Event_00176_00011_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(175, 11, "@68C4");
WaitEventAutoScriptRun(8, false, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetDirFrame(175, 12, 1, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(175, 12, 3, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetAutoScript(175, 12, "@68C7");
WaitEventAutoScriptRun(6, false, false);
EventSetState(175, 14, 2);
EventSetState(175, 15, 2);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00176_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@68E6");
SetDlgCenter(0, false);
//未知对话
WaitEventAutoScriptRun(2, false, false);

['Event_00176_00022_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
WaitEventAutoScriptRun(0, false, true);
SetDlgLower(46, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(46, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(46, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
EventSetState(175, 23, 2);
EventSetState(175, 24, 2);
EventSetState(175, 25, 2);
EventSetState(175, 26, 2);
EventSetState(175, 27, 2);
WaitEventAutoScriptRun(24, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(14, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(20, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(3, 0);
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
NpcSetDirFrame(2, 0);
EventSetDirFrame(175, 24, 3, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(175, 24, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(175, 25, 3, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
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
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(175, 25, 0, 0);
VideoUpdate(0, false);
SetDlgLower(46, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(46, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(46, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(1, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(46, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(175, 8, 0);
EventSetState(175, 9, 0);
EventSetState(175, 14, 0);
EventSetState(175, 15, 0);
EventSetState(175, 16, 0);
EventSetState(175, 17, 0);
EventSetState(175, 18, 0);
EventSetState(175, 19, 0);
EventSetState(175, 20, 0);
EventSetState(175, 21, 0);
EventSetState(175, 10, 0);
EventSetState(175, 11, 0);
EventSetState(175, 12, 0);
EventSetState(175, 13, 0);
ReplaceAndPause();
SetDlgUpper(46, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(46, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00176_00023_Auto'];
NpcMoveToBlock(16, 108, 0, 3);
NpcSetDirFrame(1, 0);

['Event_00176_00024_Auto'];
NpcMoveToBlock(19, 100, 1, 3);
NpcMoveToBlockMutexLock(16, 103, 1, 2);

['Event_00176_00025_Auto'];
NpcMoveToBlock(15, 102, 0, 3);
NpcMoveToBlockMutexLock(16, 103, 0, 2);
NpcSetDirFrame(0, 0);

['Event_00176_00026_Auto'];
NpcMoveToBlockMutexLock(17, 104, 0, 2);

['Event_00176_00027_Auto'];
NpcMoveToBlockMutexLock(17, 107, 1, 2);

['Event_00176_00023_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00176_00024_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00176_00025_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00176_00026_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00176_00027_Trigger'];
//未知对话
//未知对话

['Event_00176_00028_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(42, 0);
EventSetState(-1, -1, 0);

