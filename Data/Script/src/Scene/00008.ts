['Event_00008_00001_Trigger'];
EventSetState(7, 3, 0);
EventSetState(7, 4, 0);
PartySetPos(6, 11, 1);
SceneEnter(7);
FadeOut(0);

['Event_00008_00002_Trigger'];
SceneEnter(12);
PartySetPos(14, 31, 1);
FadeOut(0);

['Scene_00008_Teleport'];
SceneEnter(8);
PartySetPos(32, 44, 0);
FadeOut(0);

['Event_00008_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(7, 4, "@0F81");
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(7, 3, "@0F81");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(7, 3, 1, 0);
VideoUpdate(0, false);
EventSetDirFrame(7, 4, 0, 0);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);

