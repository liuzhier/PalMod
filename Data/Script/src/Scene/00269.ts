['Event_00269_00001_Trigger'];
SceneEnter(267);
PartySetPos(32, 44, 0);
FadeOut(0);

['Scene_00269_Enter'];
PartyWalkToBlock(15, 30, 1, 8);
EventSetDirFrame(268, 5, 0, 0);
VideoUpdate(0, false);
SetDlgLower(85, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();

['Event_00269_00005_Trigger'];
SetDlgLower(85, 0, false);
//未知对话
//未知对话

['Event_00269_00004_Trigger'];
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, false, 1);
PartyWalkToBlock(25, 23, 0, 4);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
NpcSetFrame(12);
VideoUpdate(0, false);
SetDlgUpper(74, 0, false);
//未知对话
//未知对话
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
EventSetState(268, 6, 1);
PlaySound(115);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(13, false, false);
EventSetAutoScript(268, 6, "");
SetDlgUpper(74, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(10, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(268, 2, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(75, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
SetDlgUpper(74, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(3, 0);

['Event_00269_00002_Trigger'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
AddItem(232, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(75, 0, false);
//未知对话
//未知对话

