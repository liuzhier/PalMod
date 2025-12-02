['Event_00105_00003_Trigger'];
SceneEnter(107);
PartySetPos(52, 32, 1);
FadeOut(0);

['Event_00105_00001_Trigger'];
SceneEnter(104);
PartySetPos(23, 53, 0);
FadeOut(0);

['Event_00105_00002_Trigger'];
SceneEnter(104);
PartySetPos(26, 49, 1);
FadeOut(0);

['Scene_00105_Enter'];
SetBattlefield(FbpWin.蛤蟆洞_后段);
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.险境_2, true, false);

['Event_00105_00039_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(72, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00105_00031_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(68, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00105_00032_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(88, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00105_00035_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(85, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

