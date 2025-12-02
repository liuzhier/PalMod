['Event_00090_00001_Trigger'];
SceneEnter(85);
PartySetPos(34, 29, 0);
FadeOut(0);

['Event_00090_00002_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00090_00003_Trigger'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(89, 12, 2);
VideoUpdate(0, false);
EventSetState(86, 8, 2);
EventSetState(84, 42, 2);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(10, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
SceneSetScript(85, "@36C8", "");
ReplaceAndPause();
SetDlgUpper(42, 0, false);
//未知对话
//未知对话

['Event_00090_00012_Auto'];
NpcMoveToBlock(24, 78, 0, 8);
EventSetState(-1, -1, 0);

['Event_00090_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
VideoUpdate(0, false);
EventSetTriggerScript(84, 6, "@3327");
SceneEnter(91);
ReplaceAndPause();

['Event_00090_00004_Trigger'];
//未知对话
//未知对话

['Event_00090_00005_Trigger'];
//未知对话
//未知对话

['Event_00090_00006_Trigger'];
//未知对话
//未知对话

