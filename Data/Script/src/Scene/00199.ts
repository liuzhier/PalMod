['Scene_00199_Enter'];
PartySetPos(12, 109, 0);
FadeToScene(4, -1);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(198, 2, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
EventSetDirFrame(198, 2, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(198, 2, 4, -2);
WaitEventAutoScriptRun(2, false, false);
EventWalkOneStep(198, 2, 4, -2);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(198, 2, 2, 0);
EventWalkOneStep(198, 1, -4, 2);
WaitEventAutoScriptRun(2, false, false);
EventWalkOneStep(198, 1, -4, 2);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(198, 1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetState(199, 0, 2);
WaitEventAutoScriptRun(18, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventWalkOneStep(198, 1, 8, -4);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(198, 2, -8, 4);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(198, 1, 2, 0);
EventSetDirFrame(198, 2, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(198, 2, 0, 0);
WaitEventAutoScriptRun(10, false, false);
FadeOut(2);
SceneEnter(200);

['Event_00199_00003_Auto'];
NpcMoveToBlock(13, 104, 0, 8);
NpcMoveToBlock(14, 105, 1, 3);
NpcMoveToBlock(13, 106, 1, 3);

