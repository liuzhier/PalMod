['Event_00023_00008_Trigger'];
SceneEnter(24);

['Event_00023_00009_Trigger'];
SceneEnter(22);
PartySetPos(42, 24, 1);
FadeOut(0);

['Event_00023_00001_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00023_00002_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00023_00006_Trigger'];
SceneEnter(25);
PartySetPos(10, 67, 0);
FadeOut(0);

['Event_00023_00007_Trigger'];
SceneEnter(25);
PartySetPos(37, 69, 1);
FadeOut(0);

['Event_00023_00003_Trigger'];
//未知对话
//未知对话

['Event_00023_00004_Trigger'];
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
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
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
SetDlgLower(15, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Scene_00023_Enter'];
MusicPlay(Music.风光, true, false);

['Event_00023_00004_Auto'];
NpcMoveToBlockMutexLock(39, 101, 1, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(41, 99, 1, 2);
NpcMoveToBlockMutexLock(37, 95, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(39, 93, 0, 2);
NpcMoveToBlockMutexLock(37, 94, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(25, 82, 0, 2);
NpcMoveToBlockMutexLock(23, 83, 1, 2);
NpcMoveToBlockMutexLock(32, 92, 0, 2);
NpcMoveToBlockMutexLock(33, 91, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(41, 99, 1, 2);
NpcMoveToBlockMutexLock(42, 99, 0, 2);
ReplaceAndPauseWithNop("Event_00023_00004_Auto", 0);

['Event_00023_00005_Auto'];
NpcMoveToBlockMutexLock(25, 85, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(29, 89, 1, 2);
NpcMoveToBlockMutexLock(22, 82, 1, 2);
NpcMoveToBlockMutexLock(23, 82, 0, 2);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(18, 77, 0, 2);
NpcMoveToBlockMutexLock(12, 82, 1, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(13, 83, 0, 2);
NpcMoveToBlockMutexLock(18, 78, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(26, 86, 0, 2);
NpcMoveToBlockMutexLock(28, 84, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(27, 83, 0, 2);
WaitEventAutoScriptRun(5, false, false);
ReplaceAndPauseWithNop("Event_00023_00005_Auto", 0);

['Event_00023_00005_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00023_00010_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
['Event_00023_00011_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话

['Event_00023_00012_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00023_00012_Trigger", 0);

['Event_00023_00013_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00023_00014_Trigger'];
//未知对话
//未知对话

['Event_00023_00015_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00023_00016_Trigger'];
//未知对话
//未知对话

['Event_00023_00011_Auto'];
EventAnimate(0);
GotoWithNop("Event_00023_00011_Auto", 0);

['Event_00023_00016_Auto'];
NpcSetDirFrame(0, 0);
ReplaceAndPauseWithNop("Event_00023_00016_Auto", 0);

['Event_00023_00002_Auto'];
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
['@8CF5'];
ReplaceAndPause();
GotoWithProbability(20, "@8CF5");
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
['@8D04'];
ReplaceAndPause();
GotoWithProbability(20, "@8D04");
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPauseWithNop("Event_00023_00002_Auto", 0);

['Event_00023_00003_Auto'];
ReplaceAndPause();
GotoWithProbability(5, "Event_00023_00003_Auto");
NpcSetDirFrame(2, 0);
['@8D27'];
ReplaceAndPause();
GotoWithProbability(8, "@8D27");
NpcSetDirFrame(1, 0);
ReplaceAndPauseWithNop("Event_00023_00003_Auto", 0);

['Event_00023_00010_Auto'];
NpcSetFrame(0);
WaitEventAutoScriptRun(8, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(20, false, false);
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPauseWithNop("Event_00023_00010_Auto", 0);

