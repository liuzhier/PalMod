['Event_00251_00001_Trigger'];
SceneEnter(253);
PartySetPos(55, 70, 0);
FadeOut(0);

['Scene_00251_Enter'];
SetBattlefield(FbpWin.水底密道_3);

['Event_00251_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@836C");
SetBattleMusic(Music.势如破竹_副本);
BattleStart(315, "@A073", "");
SetBattleMusic(Music.心急如焚);

['Event_00251_00004_Trigger'];
EventSetState(-1, -1, 0);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(250, 2, 0);
EventSetState(250, 3, 1);
FadeToScene(0, -1);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
['@839E'];
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@839E", 3);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 12, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
PartySetRole(4, 0, 0);
RoleSetDirFrame(0, 12, 0);
EventSetState(250, 5, 1);
EventSetState(250, 6, 1);
PlaySound(103);
WaitEventAutoScriptRun(20, false, false);
EventSetAutoScript(250, 6, "Event_00251_00005_Auto");
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(250, 3, "Event_00253_00002_Auto");
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(22, false, false);
EventSetState(250, 5, 1);
EventSetState(250, 6, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
FadeColor(127, 4, false);
SceneEnter(252);

['Event_00251_00005_Auto'];
EventWalkOneStep(-1, -1, 0, -1);
EventWalkOneStep(-1, -1, 0, -1);
EventWalkOneStep(-1, -1, 0, -2);
EventWalkOneStep(-1, -1, 0, -2);
EventWalkOneStep(-1, -1, 0, -3);
EventWalkOneStep(-1, -1, 0, -3);
EventWalkOneStep(-1, -1, 0, -4);
EventWalkOneStep(-1, -1, 0, -4);
['@8402'];
EventWalkOneStep(-1, -1, 0, -5);
GotoWithNop("@8402", 0);

['Event_00251_00011_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(54, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

