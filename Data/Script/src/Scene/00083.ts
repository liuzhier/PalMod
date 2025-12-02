['Event_00083_00001_Trigger'];
SceneEnter(85);
PartySetPos(6, 23, 1);
FadeOut(0);

['Event_00083_00002_Trigger'];
SceneEnter(85);
PartySetPos(11, 80, 1);
FadeOut(0);

['Event_00083_00003_Trigger'];
SceneEnter(94);
PartySetPos(25, 56, 1);
FadeOut(0);

['Event_00083_00004_Trigger'];
SceneEnter(97);
PartySetPos(21, 41, 0);
FadeOut(0);

['Event_00083_00005_Trigger'];
SceneEnter(97);
PartySetPos(45, 42, 1);
FadeOut(0);

['Event_00083_00006_Trigger'];
SceneEnter(97);
PartySetPos(17, 67, 0);
FadeOut(0);

['Event_00083_00007_Trigger'];
SceneEnter(96);
PartySetPos(17, 44, 0);
FadeOut(0);

['Event_00083_00008_Trigger'];
SceneEnter(95);
PartySetPos(15, 31, 0);
FadeOut(0);

['Event_00083_00009_Auto'];
NpcMoveToBlock(29, 71, 0, 3);
NpcMoveToBlock(28, 72, 0, 3);
['Event_00083_00010_Auto'];
NpcMoveToBlock(29, 73, 0, 3);
NpcMoveToBlock(30, 72, 0, 3);
GotoWithNop("Event_00083_00009_Auto", 0);

['Event_00083_00011_Auto'];
NpcMoveToBlockMutexLock(29, 41, 0, 2);
NpcMoveToBlockMutexLock(21, 33, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(15, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(30, 42, 0, 2);
NpcMoveToBlockMutexLock(50, 21, 1, 2);
NpcMoveToBlock(49, 20, 1, 3);
GotoWithNop("Event_00083_00011_Auto", 0);

['Event_00083_00014_Auto'];
NpcMoveToBlockMutexLock(42, 87, 0, 2);
NpcMoveToBlockMutexLock(28, 73, 1, 2);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(20, 65, 0, 2);
NpcMoveToBlockMutexLock(45, 40, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(20, 65, 0, 2);
NpcMoveToBlockMutexLock(42, 87, 0, 2);
NpcMoveToBlockMutexLock(57, 72, 0, 2);
ReplaceAndPauseWithNop("Event_00083_00014_Auto", 0);

['Event_00083_00015_Auto'];
NpcMoveToBlockMutexLock(41, 86, 1, 2);
NpcMoveToBlockMutexLock(29, 74, 1, 2);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(19, 64, 1, 2);
NpcMoveToBlockMutexLock(44, 39, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(19, 64, 1, 2);
NpcMoveToBlockMutexLock(41, 86, 1, 2);
NpcMoveToBlockMutexLock(56, 71, 1, 2);
ReplaceAndPauseWithNop("Event_00083_00015_Auto", 0);

['Event_00083_00016_Auto'];
NpcMoveToBlockMutexLock(42, 87, 1, 2);
NpcMoveToBlockMutexLock(30, 75, 1, 2);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(20, 65, 1, 2);
NpcMoveToBlockMutexLock(45, 40, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(20, 65, 1, 2);
NpcMoveToBlockMutexLock(42, 87, 1, 2);
NpcMoveToBlockMutexLock(57, 72, 1, 2);
ReplaceAndPauseWithNop("Event_00083_00016_Auto", 0);

['Event_00083_00017_Auto'];
NpcMoveToBlockMutexLock(16, 69, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlockMutexLock(7, 60, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(30, 83, 0, 2);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00083_00017_Auto", 0);

['Event_00083_00024_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@34AF");
EventSetTriggerMode(-1, -1, false, -1);

['Event_00083_00025_Trigger'];
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@34C9");
EventSetTriggerMode(-1, -1, false, -1);

['Event_00083_00024_Auto'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(3);
WaitEventAutoScriptRun(5, false, false);
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(2);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00083_00024_Auto", 0);

['Event_00083_00025_Auto'];
NpcSetFrame(0);
GotoWithProbability(40, "Event_00083_00025_Auto");
WaitEventAutoScriptRun(12, false, false);
NpcSetFrame(1);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00083_00025_Auto", 0);

['Event_00083_00018_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00083_00019_Trigger'];
//未知对话
//未知对话
VideoUpdate(0, false);
ShowBuyItemMenu(12);

['Event_00083_00020_Trigger'];
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
ShowSellItemMenu();

['Event_00083_00009_Trigger'];
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话

['Event_00083_00014_Trigger'];
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00083_00015_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00083_00016_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00083_00012_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00083_00013_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00083_00011_Trigger'];
//未知对话
//未知对话
//未知对话

