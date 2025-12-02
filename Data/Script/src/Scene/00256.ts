['Scene_00256_Enter'];
MusicPlay(Music.颓城, true, false);

['Event_00256_00001_Trigger'];
SceneEnter(249);
PartySetPos(40, 49, 0);
FadeOut(0);

['Event_00256_00002_Trigger'];
SceneEnter(259);
PartySetPos(36, 106, 1);
FadeOut(0);

['Event_00256_00003_Trigger'];
SceneEnter(260);
PartySetPos(9, 54, 1);
FadeOut(0);

['Event_00256_00004_Trigger'];
SceneEnter(257);
PartySetPos(22, 106, 0);
FadeOut(0);

['Event_00256_00005_Trigger'];
SceneEnter(257);
PartySetPos(9, 91, 0);
FadeOut(0);

['Event_00256_00006_Trigger'];
SceneEnter(258);
PartySetPos(22, 103, 1);
FadeOut(0);

['Event_00256_00045_Auto'];
NpcMoveToBlockMutexLock(49, 90, 1, 2);
NpcMoveToBlockMutexLock(27, 68, 1, 2);
NpcMoveToBlockMutexLock(30, 66, 0, 2);
EventSetState(-1, -1, 0);

['Event_00256_00046_Auto'];
NpcMoveToBlockMutexLock(29, 90, 0, 2);
NpcMoveToBlockMutexLock(25, 94, 0, 2);
GotoWithProbability(10, "");
NpcSetDirFrame(1, 0);
GotoWithProbability(8, "");
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);
GotoWithProbability(10, "");
NpcMoveToBlockMutexLock(29, 90, 0, 2);
NpcMoveToBlockMutexLock(36, 97, 0, 2);
NpcMoveToBlockMutexLock(31, 102, 0, 2);
NpcMoveToBlockMutexLock(35, 106, 1, 2);
NpcMoveToBlockMutexLock(43, 99, 0, 2);
NpcMoveToBlockMutexLock(39, 95, 0, 2);

['Event_00256_00007_Auto'];
GotoWithProbability(40, "");
EventModifyPos(-1, -1, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventModifyPos(-1, -1, 0, -1);
GotoWithProbability(50, "");
WaitEventAutoScriptRun(6, false, false);
ReplaceAndPauseWithNop("Event_00256_00007_Auto", 0);

['Event_00256_00045_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00046_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00039_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00025_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00256_00037_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00038_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00040_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00256_00041_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00042_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00043_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00256_00044_Trigger'];
//未知对话
//未知对话

['Event_00256_00026_Trigger'];
//未知对话
//未知对话

