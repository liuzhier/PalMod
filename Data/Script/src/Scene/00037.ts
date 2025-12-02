['Event_00037_00001_Trigger'];
SceneEnter(36);
PartySetPos(16, 52, 1);
FadeOut(0);

['Event_00037_00002_Trigger'];
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(17, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(17, 0, false);
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//未知对话
//未知对话
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(36, 4, 2);
EventSetState(35, 9, 2);
EventSetState(35, 11, 2);
EventSetState(35, 12, 2);
EventSetTriggerScript(35, 10, "@23A4");
ReplaceAndPause();
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00037_00004_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00037_00003_Trigger'];
EventSetState(35, 16, 0);
EventSetState(35, 17, 0);
EventSetState(36, 0, 0);
EventSetState(34, 4, 0);
EventSetState(34, 6, 0);
EventSetState(34, 8, 0);
EventSetState(34, 9, 0);
EventSetState(35, 0, 0);
EventSetTriggerScript(35, 8, "@1DFD");
PartySetRole(1, 3, 0);
SetBattlefield(FbpWin.客栈);
SetBattleMusic(Music.御剑伏魔_2);
BattleStart(25, "", "");
MusicStop(1);
SceneSetScript(38, "@2299", "");
SceneEnter(38);

['Scene_00037_Enter'];
SetPaletteTime(0);

['Event_00037_00008_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(178, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00037_00010_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
CashModify(15, "");
EventSetState(-1, -1, 0);

['Event_00037_00011_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(195, 0);
EventSetState(-1, -1, 0);

['Event_00037_00009_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(193, 0);
EventSetState(-1, -1, 0);

