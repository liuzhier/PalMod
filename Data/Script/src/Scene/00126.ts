['Scene_00126_Enter'];
PartySetPos(27, 36, 0);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(24, 0, false);
//未知对话
//未知对话
EventSetDirFrame(126, 0, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(126, 0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//未知对话
//未知对话
EventSetAutoScript(126, 0, "@4A69");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(20, false, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetState(118, 10, 0);
EventSetState(118, 6, 0);
EventSetState(118, 7, 0);
EventSetTriggerScript(100, 18, "@4D9D");
EventSetState(108, 11, 2);
RoleSetDirFrame(0, 0, 0);
ReplaceAndPause();

