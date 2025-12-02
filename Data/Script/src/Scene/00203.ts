['Event_00203_00001_Trigger'];
SceneEnter(180);
PartySetPos(54, 64, 1);
FadeOut(0);

['Scene_00203_Enter'];
SetBattlefield(FbpWin.毒仙林);

['Event_00203_00002_Trigger'];
SceneEnter(207);
PartySetPos(11, 109, 0);
FadeOut(0);

['Event_00203_00011_Trigger'];
JumpIfHeroInParty(4, "@7182");
//未知对话
//未知对话
RoleMoveOneStep(-16, 8, 0);
ReplaceAndPause();
JumpIfHeroInParty(4, "@7182");
//未知对话
//未知对话
//未知对话
RoleMoveOneStep(-16, 8, 0);

['Event_00203_00004_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00203_00005_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00203_00006_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00203_00007_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00203_00012_Trigger'];
SetDlgCenter(0, false);
//未知对话

['Event_00203_00003_Trigger'];
SceneEnter(215);
PartySetPos(23, 11, 1);
FadeOut(0);

