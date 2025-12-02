['Event_00078_00001_Trigger'];
SceneEnter(79);
PartySetPos(13, 66, 0);
FadeOut(0);

['Scene_00078_Enter'];
HeroSetSprite(0, 193, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 12, 0);
PartySetPos(38, 61, 0);
WaitEventAutoScriptRun(16, false, false);
EventSetDirFrame(77, 2, 0, 0);
WaitEventAutoScriptRun(20, false, false);
SetDlgLower(65, 0, false);
//未知对话
//未知对话
SetDlgUpper(51, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(77, 3, 1, 0);
EventSetDirFrame(77, 2, 1, 0);
VideoUpdate(0, false);
EventSetAutoScript(77, 3, "@3271");
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(26, 0, false);
//未知对话
//未知对话
SetDlgLower(65, 0, false);
//未知对话
//未知对话
FadeOut(0);
EventSetState(77, 7, 0);
HeroSetSprite(0, 2, false);
PartySetRole(1, 3, 0);
RoleSetDirFrame(3, 0, 0);
RoleSetDirFrame(0, 0, 1);
EventModifyPos(77, 3, 32, 16);
EventSetDirFrame(77, 3, 1, 0);
RoleRevive(true, 10);
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//未知对话
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
SetDlgLower(65, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
FadeOut(0);
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(0, 0, 1);
EventSetState(77, 2, 0);
EventSetState(77, 3, 0);
EventSetState(77, 4, 0);
EventSetState(77, 5, 0);
EventSetState(77, 6, 0);
EventSetState(53, 5, 0);
EventSetState(53, 7, 2);
EventSetState(53, 6, 2);
EventSetAutoScript(53, 6, "Event_00002_00026_Auto");
EventSetState(53, 3, 2);
EventSetState(54, 0, 1);
EventSetState(52, 14, 2);
EventSetTriggerScript(53, 6, "@2A97");
EventSetTriggerScript(53, 3, "@2A9A");
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
GotoWithNop("@0002", 0);
['Event_00078_00003_Auto'];
NpcMoveToBlock(38, 62, 1, 3);

['Event_00078_00004_Auto'];
NpcMoveToBlock(36, 62, 1, 3);

['Event_00078_00005_Auto'];
NpcMoveToBlock(38, 64, 0, 3);
NpcSetDirFrame(1, 0);

['Event_00078_00006_Auto'];
NpcMoveToBlock(36, 61, 0, 3);
ReplaceAndPause();
NpcSetDirFrame(3, 0);

