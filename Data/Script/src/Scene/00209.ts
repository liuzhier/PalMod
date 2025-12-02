['Event_00209_00001_Trigger'];
SceneEnter(207);
PartySetPos(47, 106, 1);
FadeOut(0);

['Event_00209_00002_Trigger'];
SceneEnter(210);
PartySetPos(22, 87, 0);
FadeOut(0);

['Event_00209_00003_Trigger'];
SceneEnter(210);
PartySetPos(28, 59, 0);
FadeOut(0);

['Event_00209_00004_Trigger'];
SceneEnter(210);
PartySetPos(42, 59, 0);
FadeOut(0);

['Event_00209_00005_Trigger'];
SceneEnter(210);
PartySetPos(24, 28, 1);
FadeOut(0);

['Event_00209_00006_Trigger'];
SceneEnter(210);
PartySetPos(45, 28, 0);
FadeOut(0);

['Event_00209_00008_Trigger'];
WaitEventAutoScriptRun(3, false, false);
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
NpcSetDirFrame(1, 0);
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
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00209_00013_Trigger'];
//未知对话
//未知对话

['Event_00209_00017_Auto'];
NpcMoveToBlockMutexLock(27, 39, 0, 2);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
EventSetAutoScript(208, 13, "Event_00023_00016_Auto");
ReplaceAndPause();
GotoWithProbability(4, "");
NpcMoveToBlockMutexLock(33, 45, 1, 2);
NpcMoveToBlockMutexLock(32, 46, 1, 2);
NpcMoveToBlockMutexLock(34, 48, 0, 2);
NpcMoveToBlockMutexLock(32, 49, 1, 2);
NpcSetDirFrame(1, 0);

['Event_00209_00014_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00209_00015_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00209_00016_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00209_00017_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00209_00018_Trigger'];
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话

['Event_00209_00009_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00209_00010_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00209_00011_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00209_00012_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//未知对话
//未知对话

