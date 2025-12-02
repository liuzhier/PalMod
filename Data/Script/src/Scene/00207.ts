['Scene_00207_Enter'];
SetBattlefield(FbpWin.白苗街巷);
MusicPlay(Music.白河寒秋, true, false);

['Event_00207_00001_Trigger'];
SceneEnter(203);
PartySetPos(47, 26, 0);
FadeOut(0);

SceneEnter(229);
PartySetPos(47, 26, 0);
FadeOut(0);

['Event_00207_00002_Trigger'];
SceneEnter(209);
PartySetPos(16, 29, 1);
FadeOut(0);

['Event_00207_00003_Trigger'];
SceneEnter(206);
PartySetPos(46, 99, 1);
FadeOut(0);

['Event_00207_00004_Trigger'];
SceneEnter(212);
PartySetPos(17, 79, 1);
FadeOut(0);

['Event_00207_00005_Trigger'];
SceneEnter(208);
PartySetPos(35, 85, 1);
FadeOut(0);

['Event_00207_00006_Trigger'];
SceneEnter(208);
PartySetPos(44, 112, 1);
FadeOut(0);

['Event_00207_00007_Trigger'];
SceneEnter(208);
PartySetPos(23, 110, 0);
FadeOut(0);

['Event_00207_00008_Trigger'];
SceneEnter(208);
PartySetPos(20, 81, 1);
FadeOut(0);

['Event_00207_00009_Trigger'];
SceneEnter(208);
PartySetPos(19, 54, 0);
FadeOut(0);

['Event_00207_00010_Trigger'];
SceneEnter(208);
PartySetPos(45, 59, 0);
FadeOut(0);

['Event_00207_00011_Trigger'];
SceneEnter(208);
PartySetPos(44, 32, 0);
FadeOut(0);

['Event_00207_00012_Trigger'];
SceneEnter(208);
PartySetPos(17, 24, 1);
FadeOut(0);

['Event_00207_00013_Trigger'];
SceneEnter(213);
PartySetPos(8, 100, 1);
FadeOut(0);

['Event_00207_00014_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00207_00022_Auto'];
NpcMoveToBlockMutexLock(20, 94, 1, 2);
NpcMoveToBlockMutexLock(24, 90, 1, 2);
NpcMoveToBlockMutexLock(20, 86, 0, 2);
NpcMoveToBlockMutexLock(16, 90, 0, 2);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
GotoWithProbability(2, "");
NpcMoveToBlockMutexLock(15, 91, 0, 2);
NpcMoveToBlockMutexLock(18, 94, 1, 2);
NpcMoveToBlockMutexLock(18, 95, 0, 2);
NpcMoveToBlockMutexLock(19, 96, 0, 2);
NpcMoveToBlockMutexLock(20, 95, 0, 2);
NpcMoveToBlockMutexLock(25, 100, 1, 2);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
GotoWithProbability(5, "");
NpcMoveToBlockMutexLock(26, 99, 1, 2);
ReplaceAndPause();
GotoWithProbability(4, "");
NpcSetDirFrame(1, 0);
NpcSetDirFrame(0, 0);
GotoWithProbability(8, "");
NpcMoveToBlockMutexLock(26, 100, 0, 2);
GotoWithProbability(15, "");
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00207_00022_Auto", 0);

['Event_00207_00023_Auto'];
NpcMoveToBlockMutexLock(30, 114, 1, 2);
NpcMoveToBlockMutexLock(36, 109, 0, 2);
NpcMoveToBlockMutexLock(37, 110, 1, 2);
NpcMoveToBlockMutexLock(44, 103, 1, 2);
NpcMoveToBlockMutexLock(56, 115, 0, 2);
NpcMoveToBlockMutexLock(44, 103, 1, 2);
NpcMoveToBlockMutexLock(37, 110, 1, 2);
NpcMoveToBlockMutexLock(36, 109, 0, 2);
NpcMoveToBlockMutexLock(30, 114, 1, 2);
NpcMoveToBlockMutexLock(20, 104, 0, 2);
NpcSetDirFrame(0, 0);
GotoWithProbability(3, "");
ReplaceAndPauseWithNop("Event_00207_00023_Auto", 0);

['Event_00207_00018_Auto'];
NpcSetDirFrame(2, 0);
GotoWithProbability(8, "Event_00207_00018_Auto");
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
GotoWithProbability(20, "");
NpcMoveToBlock(47, 90, 1, 3);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
EventSetAutoScript(206, 19, "@724E");
NpcMoveToBlock(45, 88, 0, 3);
ReplaceAndPause();
GotoWithProbability(10, "");
EventSetAutoScript(206, 19, "@7250");
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(48, 91, 1, 3);
WaitEventAutoScriptRun(3, false, false);
GotoWithProbability(10, "");
EventSetAutoScript(206, 19, "@7256");
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(49, 92, 1, 2);
ReplaceAndPauseWithNop("Event_00002_00020_Auto", 0);

['Event_00207_00018_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00207_00019_Trigger'];
//未知对话
//未知对话

['Event_00207_00026_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//未知对话
//未知对话

['Event_00207_00031_Trigger'];
PlaySound(178);
SetDlgCenter(0, false);
//未知对话

['Event_00207_00024_Auto'];
NpcSetDirFrame(3, 0);
GotoWithProbability(6, "Event_00207_00024_Auto");
NpcMoveToBlockMutexLock(52, 80, 1, 2);
NpcSetDirFrame(3, 0);
GotoWithProbability(6, "");
NpcMoveToBlockMutexLock(51, 79, 1, 2);
GotoWithProbability(4, "");
ReplaceAndPauseWithNop("Event_00207_00024_Auto", 0);

['Event_00207_00016_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00207_00017_Trigger'];
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

['Event_00207_00020_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00207_00021_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00207_00022_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00207_00023_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00207_00024_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00207_00025_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00207_00027_Trigger'];
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话

['Event_00207_00029_Trigger'];
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
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(-1, -1, 0);
SetBattlefield(FbpWin.白苗街巷);
SetBattleMusic(Music.势如破竹);
BattleStart(240, "@A073", "");

['Event_00207_00030_Trigger'];
//未知对话
//未知对话
//未知对话

