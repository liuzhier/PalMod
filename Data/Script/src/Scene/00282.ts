['Event_00282_00001_Trigger'];
SceneEnter(281);
PartySetPos(40, 49, 0);
FadeOut(0);

['Event_00282_00002_Trigger'];
SceneEnter(283);
PartySetPos(36, 106, 1);
FadeOut(0);

['Event_00282_00003_Trigger'];
SceneEnter(284);
PartySetPos(9, 54, 1);
FadeOut(0);

['Event_00282_00004_Trigger'];
SceneEnter(279);
PartySetPos(22, 106, 0);
FadeOut(0);

['Event_00282_00005_Trigger'];
SceneEnter(279);
PartySetPos(9, 91, 0);
FadeOut(0);

['Event_00282_00006_Trigger'];
SceneEnter(278);
PartySetPos(22, 103, 1);
FadeOut(0);

['Event_00282_00010_Auto'];
NpcMoveToBlock(36, 84, 1, 8);

['Event_00282_00009_Trigger'];
EventSetState(-1, -1, 0);
PartyWalkToBlock(35, 84, 1, 8);
PartyWalkToBlock(34, 85, 1, 8);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
EventSetState(281, 10, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(281, 7, 3, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(281, 7, 2, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(81, 0, false);
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
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
EventSetDirFrame(281, 7, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
EventSetDirFrame(281, 7, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
PlaySound(212);
EventSetState(281, 11, 1);
FadeToScene(2, -1);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
PartySetRole(1, 2, 5);
SetBattleMusic(Music.逆天而行);
SetBattlefield(FbpWin.南绍_王宫);
BattleStart(313, "@A073", "");
BattleEnd();
MusicPlay(Music.危机, true, false);
SetRng(9);
PlayRng(0, 1, 8);
SetDlgLower(9, 0, true);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
PlayRng(1, 16, 8);
SetDlgLower(81, 0, true);
//未知对话
VideoUpdate(0, false);
PlayRng(17, 54, 8);
SetDlgUpper(1, 0, true);
//未知对话
//未知对话
VideoUpdate(0, false);
PlayRng(55, 59, 8);
SetDlgUpper(32, 0, true);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(88, 0, true);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
PlayRng(60, 74, 8);
SetDlgUpper(1, 0, true);
//未知对话
//未知对话
SetDlgLower(29, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
MusicStop(1);
VideoShake(90, 1);
PlayRng(75, 109, 8);
SetDlgUpper(1, 0, true);
//未知对话
//未知对话
SetDlgLower(88, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
QuitGame();


