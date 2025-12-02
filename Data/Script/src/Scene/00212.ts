['Scene_00212_Enter'];
MusicPlay(Music.白河寒秋, true, false);

['Event_00212_00001_Trigger'];
SceneEnter(207);
PartySetPos(14, 59, 0);
FadeOut(0);

['Event_00212_00002_Trigger'];
SceneEnter(204);
PartySetPos(9, 87, 0);
FadeOut(0);

['Event_00212_00005_Auto'];
NpcMoveToBlockMutexLock(39, 47, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(40, 48, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00212_00005_Auto", 0);

['Event_00212_00005_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00212_00003_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00212_00004_Trigger'];
//未知对话
//未知对话
//未知对话

