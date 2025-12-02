['Scene_00152_Enter'];
MusicPlay(Music.蝶恋_3, true, false);
VideoShake(0, 0);
PartySetPos(51, 104, 0);
VideoUpdate(0, false);
EventSetState(151, 1, 1);
FadeToScene(0, -1);
EventSetState(151, 2, 1);
EventSetState(151, 3, 1);
EventSetState(151, 4, 1);
FadeToScene(0, -1);
EventSetDirFrame(151, 1, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(151, 2, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(151, 3, 3, 0);
EventSetDirFrame(151, 4, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetState(151, 5, 1);
EventSetState(152, 0, 1);
FadeToScene(0, -1);
EventSetDirFrame(151, 1, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
EventSetDirFrame(151, 5, 1, 0);
EventSetDirFrame(152, 0, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(151, 5, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(152, 0, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(151, 5, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(152, 0, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(151, 1, 1, 0);
VideoUpdate(0, false);
SetDlgLower(43, 0, false);
//未知对话
//未知对话
EventSetDirFrame(151, 2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(151, 3, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(151, 2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(151, 1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(43, 0, false);
//未知对话
//未知对话
//未知对话
RemoveItem(230, 0, "");
FadeOut(2);
SceneEnter(174);

