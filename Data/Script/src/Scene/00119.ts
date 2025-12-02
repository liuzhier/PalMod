['Event_00119_00001_Trigger'];
SceneEnter(116);
PartySetPos(32, 58, 0);
FadeOut(0);

['Event_00119_00002_Trigger'];
Call("@8E0D");
SceneEnter(120);
PartySetPos(22, 32, 0);
FadeOut(0);

['Event_00119_00003_Trigger'];
SceneEnter(115);
PartySetPos(40, 66, 1);
FadeOut(0);

['Event_00119_00005_Auto'];
NpcMoveToBlockMutexLock(23, 32, 1, 2);
NpcMoveToBlockMutexLock(28, 37, 1, 2);
NpcMoveToBlockMutexLock(25, 40, 1, 2);
NpcMoveToBlockMutexLock(28, 43, 0, 2);
NpcMoveToBlockMutexLock(24, 46, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(10, false, false);
['@3D5B'];
WaitEventAutoScriptRun(2, false, false);
GotoWithProbability(10, "@3D5B");
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(28, 43, 0, 2);
NpcMoveToBlockMutexLock(29, 44, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(13, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(19, 34, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(26, 41, 0, 2);
NpcMoveToBlockMutexLock(28, 38, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(23, 33, 0, 2);
NpcMoveToBlockMutexLock(31, 25, 0, 2);
WaitEventAutoScriptRun(7, false, false);
ReplaceAndPauseWithNop("Event_00119_00005_Auto", 0);

['Scene_00119_Enter'];
PartyWalkToBlock(30, 36, 1, 8);
PartyWalkToBlock(35, 31, 1, 8);
EventSetDirFrame(118, 8, 0, 0);
EventSetDirFrame(1, 0, 0, 0);
PartyWalkToBlock(36, 32, 0, 2);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
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
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(8, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();

['Event_00119_00008_Trigger'];
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话

//未知对话
//未知对话
//未知对话

['Event_00119_00004_Trigger'];
SceneEnter(121);
PartySetPos(17, 42, 0);
FadeOut(0);

['Event_00119_00010_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00119_00006_Trigger'];
//未知对话
//未知对话

['Event_00119_00007_Trigger'];
//未知对话
//未知对话

['Event_00119_00012_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(178, 0);
EventSetState(-1, -1, 0);

