['Event_00045_00001_Trigger'];
SceneEnter(43);
PartySetPos(15, 46, 0);
FadeOut(0);

['Event_00045_00002_Trigger'];
SceneEnter(47);
PartySetPos(17, 42, 1);
FadeOut(0);

['Event_00045_00004_Trigger'];
SceneEnter(47);
PartySetPos(47, 86, 0);
FadeOut(0);

['Event_00045_00003_Trigger'];
SceneEnter(47);
PartySetPos(24, 33, 1);
FadeOut(0);

['Scene_00045_Enter'];
SetBattlefield(FbpWin.隐龙窟);
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.步步为营, true, false);

['Event_00045_00015_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(45, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

