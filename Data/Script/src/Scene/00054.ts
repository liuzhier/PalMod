['Event_00054_00001_Trigger'];
SceneEnter(53);
PartySetPos(28, 52, 0);
FadeOut(0);

['Event_00054_00006_Auto'];
NpcSetDirFrame(2, 0);
GotoWithProbability(6, "Event_00054_00006_Auto");
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(40, 33, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(38, 35, 0, 2);
NpcMoveToBlockMutexLock(37, 34, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(36, 35, 1, 2);
NpcMoveToBlockMutexLock(35, 34, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(11, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(36, 35, 1, 2);
NpcMoveToBlockMutexLock(35, 37, 0, 2);
NpcMoveToBlockMutexLock(33, 35, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(35, 37, 0, 2);
NpcMoveToBlockMutexLock(38, 34, 0, 2);
WaitEventAutoScriptRun(9, false, false);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(37, 33, 0, 2);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(38, 34, 1, 2);
NpcMoveToBlockMutexLock(34, 38, 1, 2);
NpcMoveToBlockMutexLock(35, 39, 1, 2);
NpcMoveToBlockMutexLock(33, 41, 1, 2);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(14, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(9, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(12, false, false);
NpcMoveToBlockMutexLock(36, 38, 1, 2);
NpcMoveToBlockMutexLock(35, 37, 0, 2);
NpcMoveToBlockMutexLock(39, 32, 1, 2);
NpcMoveToBlockMutexLock(40, 33, 0, 2);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(38, 31, 0, 2);
ReplaceAndPauseWithNop("Event_00054_00006_Auto", 0);

['Event_00054_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
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
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(52, 14, "@2805");
ReplaceAndPause();
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00054_00020_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话

['Event_00054_00006_Trigger'];
SetDlgUpper(51, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00054_00008_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(76, 0);
EventSetState(-1, -1, 0);

['Event_00054_00009_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(29, 0);
EventSetState(-1, -1, 0);

['Event_00054_00010_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(38, 0);
EventSetState(-1, -1, 0);

['Event_00054_00011_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(50, 0);
EventSetState(-1, -1, 0);

['Event_00054_00012_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(52, 0);
EventSetState(-1, -1, 0);

['Event_00054_00002_Trigger'];
SetDlgBox(0);
//未知对话

['Event_00054_00004_Trigger'];
FadeOut(0);
EventSetState(-1, -1, 0);
EventSetState(53, 5, 2);
EventSetState(49, 14, 0);
EventSetTriggerScript(55, 4, "@2A35");
EventSetTriggerScript(56, 0, "@2A35");
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00054_00005_Trigger'];
//未知对话
//未知对话

['Event_00054_00007_Trigger'];
SetDlgUpper(38, 0, false);
//未知对话
//未知对话

['Event_00054_00018_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00054_00019_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00054_00013_Trigger'];
//未知对话
//未知对话

['Event_00054_00014_Trigger'];
//未知对话
//未知对话

['Event_00054_00015_Trigger'];
//未知对话
//未知对话

['Event_00054_00016_Trigger'];
//未知对话
//未知对话

['Event_00054_00017_Trigger'];
//未知对话
//未知对话
//未知对话

