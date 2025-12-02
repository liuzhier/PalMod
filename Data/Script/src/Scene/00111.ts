['Event_00111_00001_Trigger'];
SceneEnter(107);
PartySetPos(28, 66, 1);
FadeOut(0);

['Event_00111_00007_Auto'];
ReplaceAndPause();
NpcMoveToBlock(26, 40, 0, 3);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(0, 0);

['Event_00111_00007_Trigger'];
//未知对话
VideoFadeAndUpdate(-4);
HeroSetSprite(0, 232, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(24, 41, 1);
EventSetState(110, 5, 1);
EventSetState(110, 6, 1);
EventSetAutoScript(110, 2, "@4190");
WaitEventAutoScriptRun(28, false, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
EventSetDirFrame(110, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(110, 5, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(110, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
EventSetAutoScript(110, 2, "@4194");
WaitEventAutoScriptRun(18, false, false);
EventSetDirFrame(110, 5, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
FadeOut(0);
EventSetState(110, 2, 0);
EventSetState(110, 7, 0);
EventSetState(110, 15, 1);
EventSetState(111, 0, 1);
EventSetState(110, 3, 1);
EventSetDirFrame(110, 5, 0, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(110, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(110, 5, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(110, 8, 1);
WaitEventAutoScriptRun(15, false, false);
MusicStop(0);
//未知对话
//未知对话
EventSetDirFrame(110, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(44, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(110, 3, 0, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(110, 3, 0, 2);
PlaySound(144);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(110, 5, 0, 2);
EventSetDirFrame(110, 6, 0, 1);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(10, false, false);
EventSetState(110, 3, 0);
EventSetState(110, 4, 1);
VideoUpdate(0, false);
SetDlgLower(44, 0, false);
//未知对话
//未知对话
EventSetAutoScript(110, 8, "@424B");
WaitEventAutoScriptRun(12, false, false);
EventSetState(110, 8, 0);
EventSetState(110, 4, 0);
EventSetState(110, 9, 0);
EventSetState(110, 10, 0);
EventSetState(110, 11, 0);
EventSetState(110, 12, 0);
EventSetState(110, 13, 0);
EventSetState(110, 14, 0);
EventSetState(1, 0, 0);
EventSetState(1, 0, 0);
EventSetState(106, 4, 1);
EventSetState(106, 5, 1);
EventSetState(106, 6, 1);
EventSetState(106, 7, 1);
EventSetState(106, 8, 1);
EventSetState(106, 9, 1);
EventSetState(106, 10, 1);
EventSetState(106, 11, 1);
EventSetState(106, 12, 1);
EventSetState(106, 13, 1);
EventSetState(106, 14, 1);
EventSetState(106, 15, 1);
EventSetState(106, 16, 1);
EventSetState(107, 0, 1);
EventSetState(106, 18, 2);
EventSetState(106, 19, 2);
EventSetState(106, 20, 2);
EventSetState(106, 21, 2);
SceneSetScript(107, "@40F3", "");
FadeOut(0);
SceneEnter(107);

['Event_00111_00008_Auto'];
NpcMoveToBlock(25, 39, 1, 8);
NpcMoveToBlock(24, 40, 1, 8);

