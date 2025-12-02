['Scene_00127_Enter'];
PartySetPos(25, 34, 1);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
ViewportMove(4, 2, 10);
EventSetDirFrame(126, 4, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(126, 4, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetState(126, 4, 0);
EventSetState(126, 5, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(126, 5, 0, 1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(126, 5, 0, 2);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
VideoUpdate(0, false);
EventSetAutoScript(126, 5, "@4CAD");
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(126, 5, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(126, 5, 0, 13);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 5, 0, 14);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 5, 0, 13);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 5, 0, 14);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 5, 0, 15);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 5, 0, 16);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(126, 5, 0, 17);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
EventSetDirFrame(126, 5, 0, 18);
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(126, 5, "@4CAD");
WaitEventAutoScriptRun(12, false, false);
EventSetState(126, 5, 0);
EventSetState(126, 4, 2);
EventSetDirFrame(126, 4, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(126, 4, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(126, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(5, false, false);
//未知对话
//未知对话
EventSetState(126, 4, 0);
EventSetState(126, 5, 1);
EventSetDirFrame(126, 5, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(126, 5, 0, 19);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 5, 0, 20);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(126, 5, 0, 21);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 5, 0, 22);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetAutoScript(126, 5, "@4CB9");
WaitEventAutoScriptRun(6, false, false);
EventSetState(127, 0, 1);
WaitEventAutoScriptRun(0, false, false);
SetDlgCenter(0, false);
//未知对话
WaitEventAutoScriptRun(8, false, false);
EventSetAutoScript(126, 2, "@4CCD");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(126, 3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(126, 4, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(126, 2, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(126, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(126, 2, "@4CD0");
WaitEventAutoScriptRun(15, false, false);
ViewportMove(-2, -1, 20);
EventSetDirFrame(126, 3, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(126, 3, 2, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(126, 3, 0);
PartySetRole(3, 1, 0);
EventSetState(136, 0, 2);
SceneSetScript(109, "@4CEF", "");
ReplaceAndPause();

['Event_00127_00006_Auto'];
EventWalkOneStep(-1, -1, -10, 5);
GotoWithNop("Event_00127_00006_Auto", 0);

