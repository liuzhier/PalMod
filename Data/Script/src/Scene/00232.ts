['Scene_00232_Enter'];
AddItem(200, 0);
AddItem(203, 0);
AddItem(204, 0);
AddItem(205, 0);
AddItem(206, 0);
AddItem(207, 0);
MusicPlay(Music.雨_1, true, false);
HeroSetSprite(0, 2, false);
PartySetRole(2, 1, 5);
RoleSetDirFrame(0, 0, 0);
PartySetPos(30, 73, 1);
PartyWalkToBlock(29, 74, 1, 4);
['@7D5F'];
RoleMoveOneStep(-6, 7, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@7D5F", 8);
WaitEventAutoScriptRun(8, false, false);
EventSetAutoScript(232, 0, "@7DD5");
WaitEventAutoScriptRun(26, false, false);
SetDlgUpper(45, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(89, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(89, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(232, 0, "@7DDA");
WaitEventAutoScriptRun(18, false, false);
PartyWalkToBlock(27, 78, 1, 2);
ViewportMove(-2, 1, 48);
WaitEventAutoScriptRun(32, false, false);
MusicStop(1);
VideoShake(99, 1);
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(1, 0, "Event_00231_00007_Auto");
EventSetAutoScript(232, 0, "Event_00231_00007_Auto");
WaitEventAutoScriptRun(4, false, false);
EventSetStateSequence(231, 1, 231, 3, 0);
EventSetStateSequence(231, 12, 231, 14, 1);
WaitEventAutoScriptRun(2, false, false);
EventSetStateSequence(231, 4, 231, 5, 0);
EventSetStateSequence(231, 15, 231, 16, 1);
WaitEventAutoScriptRun(2, false, false);
EventSetStateSequence(231, 6, 231, 9, 0);
EventSetStateSequence(231, 17, 231, 20, 1);
VideoShake(99, 2);
WaitEventAutoScriptRun(3, false, false);
EventSetStateSequence(231, 10, 231, 11, 0);
EventSetStateSequence(231, 21, 231, 22, 1);
WaitEventAutoScriptRun(20, false, false);
VideoShake(99, 5);
EventSetState(231, 23, 1);
PlaySound(132);
WaitEventAutoScriptRun(2, false, false);
MusicPlay(Music.十面埋伏, true, false);
VideoShake(28, 4);
EventSetAutoScript(232, 0, "@7DDE");
EventSetAutoScript(231, 12, "@7DE4");
EventSetAutoScript(231, 13, "@7DEA");
EventSetAutoScript(231, 14, "@7DF0");
EventSetAutoScript(231, 15, "@7DF6");
EventSetAutoScript(231, 16, "@7DFD");
EventSetAutoScript(231, 17, "@7E03");
EventSetAutoScript(231, 18, "@7E09");
EventSetAutoScript(231, 19, "@7E0E");
EventSetAutoScript(231, 20, "@7E14");
EventSetAutoScript(231, 21, "@7E1B");
EventSetAutoScript(231, 22, "@7E21");
WaitEventAutoScriptRun(36, false, false);
SetDlgLower(45, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(231, 23, "");
EventSetDirFrame(231, 23, 0, 6);
EventSetLayer(231, 23, -10);
SetBattleMusic(Music.势如破竹_副本);
SetBattlefield(FbpWin.无底深渊);
BattleStart(287, "@A073", "");
BattleEnd();
PartySetPos(27, 79, 0);
ViewportMove(0, 0, 0);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoRestore();
//未知对话
['@7DCF'];
RoleMoveOneStep(-6, 7, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@7DCF", 8);
FadeOut(0);
SceneEnter(292);

['Event_00232_00023_Auto'];
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00232_00023_Auto", 5);

['Event_00232_00001_Auto'];
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00232_00001_Auto", 0);

