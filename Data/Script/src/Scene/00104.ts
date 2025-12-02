['Event_00104_00001_Trigger'];
SceneEnter(102);
PartySetPos(28, 56, 0);
FadeOut(0);

['Event_00104_00002_Trigger'];
SceneEnter(105);
PartySetPos(42, 110, 0);
FadeOut(0);

['Event_00104_00003_Trigger'];
SceneEnter(105);
PartySetPos(47, 106, 0);
FadeOut(0);

['Event_00104_00005_Trigger'];
VideoUpdate(0, true);
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);
SceneSetScript(102, "@53EC", "");
ReplaceAndPause();
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);

['Event_00104_00007_Trigger'];
EventSetDirFrame(103, 6, 0, 2);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
AddItem(202, 0);
ReplaceAndPause();
SetDlgCenter(0, false);
//未知对话

['Scene_00104_Enter'];
SetBattlefield(FbpWin.蛤蟆洞_前段);
SetBattleMusic(Music.兵凶战危_2);
MusicPlay(Music.神木林_变奏, true, false);

['Event_00104_00015_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(92, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(284, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(195, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00104_00020_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(87, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00104_00016_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(80, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00104_00019_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(76, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

