['Event_00028_00001_Trigger'];
SceneEnter(26);
PartySetPos(23, 29, 1);
FadeOut(0);

['Event_00028_00002_Trigger'];
SceneEnter(26);
PartySetPos(18, 34, 1);
FadeOut(0);

['Event_00028_00003_Trigger'];
SceneEnter(26);
PartySetPos(13, 39, 1);
FadeOut(0);

['Event_00028_00004_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(54, 0);
ReplaceAndPause();
SetDlgBox(0);
//未知对话

['Event_00028_00010_Auto'];
NpcMoveToBlockMutexLock(31, 33, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(34, 36, 0, 2);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
ReplaceAndPauseWithNop("Event_00028_00010_Auto", 0);

['Event_00028_00005_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00028_00006_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话

['Event_00028_00007_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00028_00008_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00028_00009_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00028_00010_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00028_00011_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

