['Scene_00041_Teleport'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
Replace();
SceneEnter(45);
PartySetPos(57, 117, 0);
FadeOut(0);
PartySetRole(1, 3, 0);

['Event_00041_00001_Trigger'];
SceneEnter(47);
PartySetPos(18, 105, 1);
FadeOut(0);

['Event_00041_00002_Trigger'];
SceneEnter(47);
PartySetPos(52, 106, 0);
FadeOut(0);

['Event_00041_00032_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(39, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00034_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(67, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00031_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(27, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(26, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(28, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00033_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(195, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00003_Auto'];
NpcChase(0, 0, false);
GotoWithNop("Event_00041_00003_Auto", 0);

['Event_00041_00004_Trigger'];
BattleStart(7, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00041_00006_Trigger'];
BattleStart(14, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

