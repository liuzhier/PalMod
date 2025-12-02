['Event_00085_00007_Trigger'];
Call("Event_00002_00003_Trigger");
SceneEnter(87);

['Event_00085_00001_Trigger'];
SceneEnter(83);
PartySetPos(53, 25, 1);
FadeOut(0);

['Event_00085_00002_Trigger'];
SceneEnter(83);
PartySetPos(52, 77, 0);
FadeOut(0);

['Event_00085_00003_Trigger'];
SceneEnter(97);
PartySetPos(38, 62, 1);
FadeOut(0);

['Event_00085_00004_Trigger'];
EventSetDirFrame(84, 19, 3, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
PartySetPos(17, 57, 0);
PartyWalkToBlock(16, 58, 0, 8);

SceneEnter(82);
PartySetPos(28, 82, 0);
FadeOut(0);

['Event_00085_00005_Trigger'];
SceneEnter(89);
PartySetPos(14, 113, 1);
FadeOut(0);

['Event_00085_00006_Trigger'];
SceneEnter(90);
PartySetPos(25, 76, 1);
FadeOut(0);

['Event_00085_00008_Trigger'];
SceneEnter(100);
PartySetPos(17, 29, 0);
FadeOut(0);

['Event_00085_00009_Trigger'];
SceneEnter(100);
PartySetPos(38, 24, 1);
FadeOut(0);

['Event_00085_00013_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(53, 63, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(52, 62, 0, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00085_00013_Auto", 0);

['Event_00085_00016_Auto'];
ReplaceAndPause();
GotoWithProbability(8, "Event_00085_00016_Auto");
NpcMoveToBlockMutexLock(33, 85, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(28, 80, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(11, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlockMutexLock(27, 79, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(29, 81, 0, 2);
ReplaceAndPauseWithNop("Event_00085_00016_Auto", 0);

NpcSetDirFrame(3, 0);
NpcMoveToBlockMutexLock(1, 90, 0, 2);
EventSetState(-1, -1, 0);

['Event_00085_00037_Trigger'];
EventSetState(-1, -1, 0);
SceneEnter(93);
PartySetPos(16, 19, 0);
RoleSetDirFrame(3, 0, 0);
FadeOut(0);

PartySetRole(1, 0, 0);
SceneEnter(85);
PartySetPos(16, 18, 0);
RoleSetDirFrame(2, 0, 0);
FadeOut(0);

['Event_00085_00041_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00040_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00039_Trigger'];
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
//未知对话

['Event_00085_00035_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00036_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
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

['Event_00085_00019_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00043_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00085_00021_Trigger'];
//未知对话

['Event_00085_00034_Trigger'];
//未知对话
//未知对话

['Event_00085_00032_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00085_00033_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00030_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00031_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00016_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00085_00017_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00018_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00033_Auto'];
NpcMoveToBlockMutexLock(15, 76, 0, 2);
NpcMoveToBlockMutexLock(7, 68, 1, 2);
NpcMoveToBlockMutexLock(13, 62, 1, 2);
NpcMoveToBlockMutexLock(17, 66, 0, 2);
NpcMoveToBlockMutexLock(18, 64, 1, 2);
NpcMoveToBlockMutexLock(24, 70, 0, 2);
NpcMoveToBlockMutexLock(39, 55, 0, 2);
NpcMoveToBlockMutexLock(32, 48, 0, 2);
NpcMoveToBlockMutexLock(35, 44, 1, 2);
NpcMoveToBlockMutexLock(22, 31, 0, 2);
NpcMoveToBlockMutexLock(19, 34, 0, 2);
NpcMoveToBlockMutexLock(9, 24, 1, 2);
NpcMoveToBlockMutexLock(8, 25, 1, 2);
NpcMoveToBlockMutexLock(4, 21, 0, 2);
EventSetState(-1, -1, 0);

['Event_00085_00027_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00085_00028_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00085_00029_Trigger'];
//未知对话
//未知对话

['Event_00085_00011_Trigger'];
//未知对话
//未知对话

['Event_00085_00012_Trigger'];
//未知对话
//未知对话

['Event_00085_00013_Trigger'];
//未知对话
//未知对话

['Event_00085_00010_Trigger'];
SceneEnter(106);
PartySetPos(7, 67, 0);
FadeOut(0);

