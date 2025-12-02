['Scene_00202_Enter'];
SetBattlefield(FbpWin.火麒麟洞);
VideoWave(2, 0);
MusicPlay(Music.鬼影幢幢, true, false);
SetBattleMusic(Music.势如破竹_副本);

['Scene_00202_Teleport'];
SceneEnter(207);
PartySetPos(52, 54, 0);
FadeOut(0);

['Event_00202_00001_Trigger'];
SceneEnter(213);
PartySetPos(20, 28, 1);
FadeOut(0);

['Event_00202_00002_Trigger'];
VideoUpdate(0, true);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
NpcSetFrame(1);
VideoUpdate(0, false);
PlaySound(236);
//未知对话
//未知对话
VideoUpdate(0, false);
SetBattlefield(FbpWin.火麒麟洞);
SetBattleMusic(Music.侠客行);
BattleStart(224, "@A073", "");
SetBattleMusic(Music.势如破竹);
SetDlgBox(0);
//未知对话
AddItem(206, 0);
EventSetState(201, 11, 1);
PartySetRole(1, 0, 0);
PartySetPos(50, 91, 0);
RoleSetDirFrame(1, 0, 0);
BattleEnd();
WaitEventAutoScriptRun(4, false, false);
EventSetState(-1, -1, 0);
EventSetStateSequence(201, 3, 201, 9, 0);
EventSetState(201, 10, 2);
FadeToScene(2, -1);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(201, 10, 0, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(201, 10, 0, 2);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
AddItem(216, 0);
EventSetDirFrame(201, 10, 0, 3);
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
EventSetDirFrame(201, 11, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(201, 11, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(201, 10, 0);
FadeToScene(0, -1);
EventSetDirFrame(201, 11, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(32, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(31, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(7, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(201, 10, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(201, 11, 1, 0);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetState(201, 10, 0);
VideoUpdate(0, false);
EventSetState(201, 11, 0);
PartySetRole(5, 1, 0);
EventSetState(205, 8, 0);
EventSetState(205, 9, 0);
EventSetState(205, 10, 0);
EventSetState(205, 11, 0);
EventSetState(205, 12, 0);
EventSetState(205, 13, 0);
EventSetState(205, 14, 0);
EventSetState(205, 15, 0);
EventSetState(205, 16, 0);
EventSetState(205, 18, 0);
EventSetState(206, 0, 0);
EventSetTriggerScript(205, 7, "@7608");
EventSetTriggerScript(206, 16, "@7608");
EventSetTriggerScript(206, 17, "@7608");
EventSetTriggerScript(211, 3, "@7608");
EventSetTriggerScript(211, 4, "@7608");
EventSetTriggerScript(203, 3, "@766B");
EventSetTriggerScript(206, 1, "@7758");
EventSetTriggerScript(202, 11, "@71A6");

