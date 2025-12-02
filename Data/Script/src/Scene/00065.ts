['Event_00065_00001_Trigger'];
SceneEnter(64);
PartySetPos(49, 18, 0);
FadeOut(0);

['Event_00065_00002_Trigger'];
JumpIfItemNotEquipped(214, 0, "@2ED7");
EventSetState(64, 3, 0);
FadeToScene(0, -1);
ReplaceAndPauseWithNop("@2E58", 0);

['Scene_00065_Enter'];
SetBattlefield(FbpWin.乱葬岗_后段);
MusicPlay(Music.历险, true, false);

['Event_00065_00015_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(600, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00065_00012_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(31, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00065_00018_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(6, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

