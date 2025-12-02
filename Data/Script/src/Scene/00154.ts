['Event_00154_00003_Auto'];
NpcMoveToBlockMutexLock(50, 24, 0, 4);

['Event_00154_00004_Auto'];
NpcMoveToBlock(51, 23, 0, 3);
NpcSetDirFrame(3, 0);

['Event_00154_00005_Auto'];
NpcMoveToBlock(49, 25, 0, 3);
NpcSetDirFrame(3, 0);

['Event_00154_00006_Auto'];
NpcMoveToBlockMutexLock(51, 22, 0, 4);

['Event_00154_00007_Auto'];
NpcMoveToBlockMutexLock(49, 22, 0, 4);

['Event_00154_00008_Auto'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(50, 30, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00154_00009_Auto'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(49, 29, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00154_00010_Auto'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(48, 28, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00154_00011_Auto'];
NpcMoveToBlock(48, 26, 0, 3);

['Event_00154_00012_Auto'];
NpcMoveToBlockMutexLock(48, 24, 0, 4);

['Event_00154_00013_Auto'];
NpcMoveToBlockMutexLock(49, 20, 1, 4);

['Scene_00154_Enter'];
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
PartySetRole(1, 0, 0);
PartySetPos(52, 25, 1);
WaitEventAutoScriptRun(20, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(153, 1, 1, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(153, 1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
EventSetState(153, 3, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(153, 6, 0, 0);
EventSetDirFrame(153, 7, 0, 0);
EventSetDirFrame(153, 11, 2, 0);
EventSetDirFrame(153, 12, 2, 0);
EventSetDirFrame(153, 13, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(153, 4, 0, 0);
EventSetDirFrame(153, 5, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(153, 1, 1, 0);
WaitEventAutoScriptRun(10, false, false);
Call("@6049");
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(153, 3, "@5E33");
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(153, 2, "@5E51");
WaitEventAutoScriptRun(18, false, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@6029");
EventSetDirFrame(153, 2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(153, 2, 1, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 4, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 3, 3, 0);
EventSetDirFrame(153, 5, 3, 0);
EventSetDirFrame(153, 8, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 6, 3, 0);
EventSetDirFrame(153, 11, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 12, 3, 0);
EventSetDirFrame(153, 7, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 9, 2, 0);
EventSetDirFrame(153, 10, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 13, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 3, 1, 0);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(153, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 3, 1, 0);
VideoUpdate(0, false);
SetDlgLower(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@6029");
EventSetDirFrame(153, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(43, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
EventSetState(154, 0, 2);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(154, 0, 0, 1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(153, 1, 3, 0);
EventSetDirFrame(153, 2, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(153, 3, 3, 0);
VideoUpdate(0, false);
Call("@6049");
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 3, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 3, 3, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(153, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(91, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(153, 1, 2, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(153, 1, 3, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(154, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(153, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 2, 0, 0);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(153, 1, 1, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetAutoScript(153, 5, "@6059");
EventSetAutoScript(153, 6, "@605D");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(153, 4, "@6054");
EventSetAutoScript(153, 7, "@6060");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(153, 8, "@6063");
EventSetAutoScript(153, 9, "@6063");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(153, 10, "@6063");
EventSetAutoScript(153, 11, "@6067");
EventSetAutoScript(153, 12, "@606A");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(153, 13, "@606D");
WaitEventAutoScriptRun(26, false, false);
EventSetDirFrame(153, 3, 3, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetState(153, 3, 0);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(153, 1, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 2, 1, 0);
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(153, 1, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
EventSetDirFrame(153, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
//未知对话
SceneEnter(153);
ReplaceAndPause();

