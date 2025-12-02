['Event_00196_00002_Auto'];
NpcMoveToBlock(34, 42, 1, 3);

['Event_00196_00001_Auto'];
NpcMoveToBlockMutexLock(34, 43, 1, 2);
NpcSetDirFrame(3, 0);
NpcSetFrame(12);
WaitEventAutoScriptRun(3, false, false);
EventSetAutoScript(196, 0, "Event_00021_00024_Auto");
WaitEventAutoScriptRun(12, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(34, 43, 0, 2);
NpcMoveToBlockMutexLock(33, 43, 1, 2);
NpcSetDirFrame(1, 0);

['Scene_00196_Enter'];
SetPaletteTime(1);
PartySetPos(33, 43, 0);
VideoFadeAndUpdate(4);
EventSetState(195, 2, 1);
TogglePaletteTime(true);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(195, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SceneEnter(197);

