['Event_00027_00001_Trigger'];
SceneEnter(26);
PartySetPos(25, 29, 1);
FadeOut(0);

['Event_00027_00002_Trigger'];
SceneEnter(26);
PartySetPos(30, 34, 1);
FadeOut(0);

['Event_00027_00003_Trigger'];
SceneEnter(26);
PartySetPos(35, 39, 1);
FadeOut(0);

['Event_00027_00004_Trigger'];
SetDlgBox(0);
//未知对话

['Event_00027_00008_Trigger'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(-1, -1, 0);
EventSetState(26, 9, 1);
VideoUpdate(0, false);
SetDlgUpper(12, 0, false);
//未知对话
//未知对话
EventSetState(26, 9, 0);
PartySetRole(1, 2, 0);
EventSetTriggerScript(25, 15, "Event_00026_00015_Trigger");

['Event_00027_00006_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(6, false, false);
NpcSetFrame(0);
WaitEventAutoScriptRun(7, false, false);
ReplaceAndPauseWithNop("Event_00027_00006_Auto", 0);

['Event_00027_00011_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话

['Event_00027_00012_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话

