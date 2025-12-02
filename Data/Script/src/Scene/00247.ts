['Scene_00247_Enter'];
PlaySound(274);
PartySetPos(49, 106, 0);
RoleSetDirFrame(2, 0, 0);
VideoWave(255, -4);
VideoFadeAndUpdate(1);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
SetBattlefield(FbpWin.扬州山道);
ReplaceAndPause();

['Event_00247_00001_Auto'];
EventWalkOneStep(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 4);
GotoWithNop("Event_00247_00001_Auto", 0);

['Event_00247_00002_Auto'];
EventWalkOneStep(-1, -1, 0, -4);
EventModifyPos(-1, -1, 0, -6);
EventWalkOneStep(-1, -1, 0, -8);
EventModifyPos(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, 0, -8);
EventModifyPos(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, 0, -6);
EventModifyPos(-1, -1, 0, -4);
EventWalkOneStep(-1, -1, 0, -2);
EventModifyPos(-1, -1, 0, -1);
EventWalkOneStep(-1, -1, 0, -1);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventModifyPos(-1, -1, 0, 1);
EventWalkOneStep(-1, -1, 1, 1);
EventModifyPos(-1, -1, 2, 2);
EventWalkOneStep(-1, -1, 3, 3);
EventModifyPos(-1, -1, 4, 4);
EventWalkOneStep(-1, -1, 5, 5);
EventModifyPos(-1, -1, 6, 6);
EventWalkOneStep(-1, -1, 7, 7);
EventModifyPos(-1, -1, 8, 8);
EventWalkOneStep(-1, -1, 9, 9);
EventModifyPos(-1, -1, 10, 10);
EventWalkOneStep(-1, -1, 11, 11);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventSetState(-1, -1, 0);

['Event_00247_00009_Auto'];
NpcMoveToBlock(34, 110, 0, 8);

['Event_00247_00010_Auto'];
NpcMoveToBlock(34, 111, 1, 8);

['Event_00247_00003_Trigger'];
EventSetState(-1, -1, 0);
RoleSetDirFrame(1, 0, 0);
ViewportMove(-8, -4, 16);
SetDlgUpper(75, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
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
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
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
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(246, 6, 3, 0);
EventSetDirFrame(246, 7, 3, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
ViewportMove(8, 4, 16);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
SetBattlefield(FbpWin.扬州山道);
BattleStart(102, "@A073", "");
BattleEnd();
EventSetState(246, 5, 0);
EventSetState(246, 6, 0);
EventSetState(246, 7, 0);
EventSetState(246, 11, 2);
EventSetState(246, 12, 2);
FadeOut(0);
RoleSetDirFrame(3, 0, 0);
PartySetPos(37, 111, 1);
EventSetState(246, 1, 1);
EventSetState(246, 4, 1);
WaitEventAutoScriptRun(44, false, false);
EventSetAutoScript(246, 1, "");
EventSetAutoScript(246, 4, "@7F4C");
WaitEventAutoScriptRun(36, false, false);
SetDlgLower(75, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(75, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(75, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
EventSetDirFrame(246, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(246, 4, 0);
EventSetState(246, 1, 0);
EventSetState(246, 2, 1);
VideoUpdate(0, false);
//未知对话
WaitEventAutoScriptRun(28, false, false);
EventSetAutoScript(246, 8, "@7F54");
EventSetState(246, 9, 1);
EventSetState(246, 10, 1);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(246, 8, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(246, 10, 2, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
BattleStart(113, "@A073", "");
BattleEnd();
EventSetState(246, 8, 0);
EventSetState(246, 9, 0);
EventSetState(246, 10, 0);
EventSetState(246, 13, 2);
EventSetState(246, 14, 2);
EventSetState(246, 15, 2);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(3, false, false);
FadeOut(0);
EventSetState(246, 11, 0);
EventSetState(246, 12, 0);
EventSetState(246, 13, 0);
EventSetState(246, 14, 0);
EventSetState(246, 15, 0);
HeroSetSprite(0, 563, true);
VideoUpdate(0, false);
//未知对话
//未知对话

['Event_00247_00017_Trigger'];
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
FadeOut(0);
SceneEnter(255);
PartySetPos(52, 107, 1);

