['Event_00167_00001_Trigger'];
SceneEnter(148);
PartySetPos(47, 72, 1);
FadeOut(0);

['Event_00167_00022_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(46, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00167_00032_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(53, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

