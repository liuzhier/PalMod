['Scene_00178_Enter'];
PartySetPos(44, 44, 0);
WaitEventAutoScriptRun(26, false, false);
EventSetDirFrame(177, 2, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(177, 2, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(177, 2, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(177, 2, "@6D77");
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(177, 1, 0, 0);
WaitEventAutoScriptRun(30, false, false);
FadeOut(0);
EventSetState(177, 1, 0);
EventSetState(177, 2, 0);
SceneEnter(175);
ReplaceAndPause();

['Event_00178_00001_Auto'];
NpcMoveToBlockMutexLock(44, 44, 1, 2);
NpcSetDirFrame(1, 0);

