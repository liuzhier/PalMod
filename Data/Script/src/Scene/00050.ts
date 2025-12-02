['Event_00050_00030_Trigger'];
SceneEnter(51);
PartySetPos(25, 57, 1);
FadeOut(0);

['Event_00050_00003_Trigger'];
SceneEnter(53);
PartySetPos(13, 79, 0);
FadeOut(0);

['Event_00050_00002_Trigger'];
SceneEnter(55);
PartySetPos(27, 106, 0);
FadeOut(0);

['Event_00050_00004_Trigger'];
SceneEnter(52);
PartySetPos(23, 28, 1);
FadeOut(0);

['Event_00050_00005_Trigger'];
SceneEnter(52);
PartySetPos(20, 67, 1);
FadeOut(0);

['Event_00050_00006_Trigger'];
SceneEnter(52);
PartySetPos(26, 104, 0);
FadeOut(0);

['Event_00050_00007_Trigger'];
SceneEnter(52);
PartySetPos(50, 62, 1);
FadeOut(0);

['Event_00050_00008_Trigger'];
SceneEnter(52);
PartySetPos(51, 28, 1);
FadeOut(0);

['Event_00050_00009_Trigger'];
SceneEnter(52);
PartySetPos(48, 106, 0);
FadeOut(0);

['Event_00050_00001_Trigger'];
SceneEnter(49);
PartySetPos(55, 95, 1);
FadeOut(0);

['Event_00050_00010_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00050_00010_Auto'];
ReplaceAndPause();
GotoWithProbability(5, "Event_00050_00010_Auto");
NpcMoveToBlockMutexLock(25, 89, 0, 2);
NpcMoveToBlockMutexLock(25, 89, 1, 2);
NpcMoveToBlock(25, 89, 0, 3);
NpcMoveToBlock(22, 91, 1, 3);
NpcMoveToBlock(18, 87, 0, 3);
NpcMoveToBlock(20, 85, 0, 3);
NpcMoveToBlock(19, 84, 0, 3);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(26, 77, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlock(31, 82, 1, 3);
NpcMoveToBlock(26, 87, 1, 3);
NpcMoveToBlock(27, 87, 0, 3);
WaitEventAutoScriptRun(11, false, false);
NpcMoveToBlock(22, 91, 1, 3);
ReplaceAndPauseWithNop("Event_00050_00010_Auto", 0);

['Event_00050_00011_Trigger'];
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@2659");
ReplaceAndPause();

['Event_00050_00012_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00050_00013_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00050_00014_Trigger'];
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话

['Event_00050_00017_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00050_00018_Trigger'];
//未知对话
//未知对话

['Event_00050_00017_Auto'];
NpcSetDirFrame(1, 0);
GotoWithProbability(50, "Event_00050_00017_Auto");
NpcMoveToBlock(38, 49, 0, 3);
NpcMoveToBlock(37, 49, 1, 3);
NpcMoveToBlock(42, 54, 1, 3);
NpcMoveToBlock(43, 54, 0, 3);
GotoWithNop("Event_00050_00017_Auto", 0);

['Event_00050_00018_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(39, 48, 0, 3);
NpcSetDirFrame(0, 0);
NpcMoveToBlock(44, 53, 1, 3);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(1, 0);
NpcMoveToBlock(44, 53, 0, 3);
GotoWithNop("Event_00050_00018_Auto", 0);

['Event_00050_00019_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话

['Event_00050_00033_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00050_00034_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00050_00035_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00050_00036_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00050_00037_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00050_00038_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00050_00039_Trigger'];
//未知对话
//未知对话

['Event_00050_00040_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00050_00031_Trigger'];
SetDlgBox(0);
//未知对话

['Scene_00050_Enter'];
MusicPlay(Music.小桥流水, true, false);

['Event_00050_00032_Auto'];
NpcChase(24, 4, false);
GotoWithProbability(10, "Event_00050_00032_Auto");
['@8E8D'];
ReplaceAndPause();
GotoWithProbability(20, "@8E8D");
ReplaceAndPauseWithNop("Event_00050_00032_Auto", 0);

