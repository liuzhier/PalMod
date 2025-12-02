['Event_00291_00001_Trigger'];
SceneEnter(280);
PartySetPos(22, 40, 1);
FadeOut(0);

['Event_00291_00002_Trigger'];
SceneEnter(280);
PartySetPos(30, 48, 0);
FadeOut(0);

['Event_00291_00011_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(130, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00291_00009_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(161, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

