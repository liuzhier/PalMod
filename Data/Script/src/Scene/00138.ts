['Event_00138_00001_Trigger'];
SceneEnter(101);
PartySetPos(22, 29, 0);
FadeOut(0);

['Event_00138_00003_Auto'];
NpcMoveToBlockMutexLock(30, 24, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(28, 27, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00138_00003_Auto", 0);

['Event_00138_00002_Trigger'];
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话

['Event_00138_00003_Trigger'];
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话

