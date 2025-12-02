['Event_00155_00001_Trigger'];
SceneEnter(149);
PartySetPos(11, 37, 1);
FadeOut(0);

['Event_00155_00002_Trigger'];
SceneEnter(157);
PartySetPos(10, 107, 0);
FadeOut(0);

['Scene_00155_Enter'];
PartySetPos(45, 86, 1);
ReplaceAndPause();

['Event_00155_00006_Trigger'];
EventSetTriggerScript(154, 4, "@5D13");
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, true);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
SetDlgLower(8, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00155_00004_Trigger'];
NpcSetFrame(1);
FadeToScene(0, -1);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetFrame(0);
ReplaceAndPause();
SetDlgCenter(0, false);
//未知对话

['Event_00155_00024_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(120, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(124, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(132, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00155_00023_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(42, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

