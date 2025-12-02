['Scene_00156_Enter'];
PartySetPos(32, 100, 0);
RoleSetDirFrame(2, 0, 0);
MusicPlay(Music.看尽前尘, true, false);
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(155, 3, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(155, 3, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(155, 3, 2, 0);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(155, 3, 3, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(155, 1, "@580F");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(155, 3, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(155, 3, 3, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(25, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetDirFrame(155, 3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(155, 3, 3, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
PartySetRole(1, 3, 0);
EventSetState(155, 3, 0);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
ReplaceAndPause();
MusicPlay(Music.看尽前尘, true, false);

['Event_00156_00001_Auto'];
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcSetDirFrame(0, 0);

['Event_00156_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetAutoScript(155, 2, "@5822");
WaitEventAutoScriptRun(4, false, false);

['Event_00156_00004_Trigger'];
SceneEnter(158);
PartySetPos(18, 104, 0);
FadeOut(0);

