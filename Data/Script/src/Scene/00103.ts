['Event_00103_00001_Trigger'];
SceneEnter(106);
PartySetPos(55, 40, 1);
FadeOut(0);

['Event_00103_00002_Trigger'];
SceneEnter(102);
PartySetPos(56, 109, 0);
FadeOut(0);

['Event_00103_00005_Trigger'];
EventSetState(-1, -1, 0);
EventSetState(102, 6, 1);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
VideoUpdate(0, true);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
SetDlgUpper(63, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(102, 6, "@4083");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventSetState(1, 0, 0);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
JumpIfEventStateMatches(102, 4, 0, "@405B");
EventSetState(102, 4, 0);

['Event_00103_00006_Auto'];
EventModifyPos(-1, -1, 0, 8);
GotoWithNop("Event_00103_00006_Auto", 12);

['Event_00103_00004_Trigger'];
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
GotoWithSelect("@52E4");
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgBox(0);
//未知对话
CashModify(1000, "");
EventSetState(-1, -1, 0);
PartySetFollower(82, 0);

['Event_00103_00007_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00103_00008_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Scene_00103_Enter'];
SetBattlefield(FbpWin.蛤蟆山_前段);
MusicPlay(Music.神木林, true, false);

NpcMoveToBlock(23, 26, 0, 8);

['Event_00103_00010_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(82, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

