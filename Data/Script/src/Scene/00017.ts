['Event_00017_00001_Trigger'];
SceneEnter(19);
PartySetPos(57, 32, 0);
FadeOut(0);

['Event_00017_00002_Trigger'];
SceneEnter(20);
PartySetPos(9, 68, 0);
FadeOut(0);

['Scene_00017_Teleport'];
SceneEnter(17);
PartySetPos(56, 66, 1);
FadeOut(0);

['Event_00017_00007_Trigger'];
SetDlgBox(0);
//未知对话
RoleMoveOneStep(-32, 16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-12, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-4, 2, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话

['Event_00017_00008_Auto'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
ReplaceAndPauseWithNop("Event_00017_00008_Auto", 0);

['Scene_00017_Enter'];
MusicPlay(Music.云谷鹤峰_3, true, false);

['Event_00017_00003_Trigger'];
SetDlgUpper(10, 0, false);
//未知对话
MusicStop(0);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
MusicPlay(Music.窥春, false, false);
ViewportMove(4, 2, 48);
WaitEventAutoScriptRun(10, false, false);
FadeOut(0);
HeroSetSprite(0, 361, true);
RoleSetDirFrame(0, 0, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
//未知对话
MusicPlay(Music.戏仙, true, false);
FadeOut(0);
ViewportMove(192, 96, 0);
EventSetDirFrame(16, 8, 0, 0);
EventSetAutoScript(16, 8, "Event_00017_00008_Auto");
WaitEventAutoScriptRun(16, false, false);
EventSetAutoScript(16, 8, "");
VideoUpdate(0, false);
EventSetDirFrame(16, 8, 0, 8);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
FadeOut(0);
EventSetState(-1, -1, 0);
EventModifyPos(16, 8, -128, -64);
EventSetDirFrame(16, 8, 0, 10);
RoleSetDirFrame(0, 4, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(16, 8, 0, 9);
PlaySound(194);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(16, 8, 0, 10);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
EventSetDirFrame(16, 8, 0, 11);
PlaySound(275);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(16, 8, 0, 12);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(16, 8, 0, 13);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(16, 8, 0, 14);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(16, 8, 0, 15);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(16, 8, 0, 16);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(16, 8, 0, 15);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//未知对话
EventSetDirFrame(16, 8, 0, 16);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(16, 8, 0, 15);
VideoUpdate(0, false);
PlaySound(89);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//未知对话
EventSetDirFrame(16, 8, 0, 16);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
EventSetState(-1, -1, 1);
VideoUpdate(0, false);
PartySetPos(34, 89, 0);
PartyWalkToBlock(21, 76, 0, 8);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(0, 0, false);
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
EventSetState(16, 8, 0);
EventSetState(-1, -1, 0);
EventSetState(16, 4, 1);

['Event_00017_00004_Trigger'];
EventSetState(-1, -1, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
MusicStop(1);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//未知对话
EventModifyPos(16, 9, -128, 16);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
PartyWalkToBlock(35, 84, 1, 4);
EventSetPos(16, 9, 1152, 1344);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(7, false, false);
PartyWalkToBlock(34, 86, 0, 4);
PartyWalkToBlock(33, 85, 0, 4);
EventSetPos(16, 9, 1072, 1378);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
PartyWalkToBlock(32, 84, 0, 8);
EventSetPos(16, 9, 1030, 1350);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
PartyWalkToBlock(31, 83, 0, 8);
PartyWalkToBlock(33, 81, 0, 8);
EventSetPos(16, 9, 1088, 1280);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleMoveOneStep(8, -4, 0);
HeroSetSprite(0, 193, true);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(0, 0, false);
//未知对话
EventSetPos(16, 9, 1072, 1270);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(0, -2, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(0, 2, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(0, 0, false);
//未知对话
WaitEventAutoScriptRun(6, false, false);
EventSetState(16, 10, 2);
EventSetState(16, 11, 1);
PlaySound(170);
WaitEventAutoScriptRun(32, false, false);
SetDlgUpper(16, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
HeroSetSprite(0, 2, true);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetPos(16, 9, 1032, 1288);
EventSetState(16, 9, 1);
EventSetAutoScript(16, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(4, false, false);
HeroSetSprite(0, 193, true);
RoleSetDirFrame(0, 7, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(18, 0, false);
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
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(16, false, false);
EventSetAutoScript(16, 10, "@15D4");
WaitEventAutoScriptRun(16, false, false);
MusicPlay(Music.小桥流水, true, true);
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(16, 10, 0);
EventSetState(16, 12, 2);
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(16, 12, 2, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(16, 12, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
EventSetAutoScript(16, 12, "@15DC");
WaitEventAutoScriptRun(12, false, false);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
EventSetState(16, 7, 0);

['Event_00017_00009_Auto'];
NpcSetFrame(0);
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(3);
EventSetState(-1, -1, 0);

['Event_00017_00011_Auto'];
EventModifyPos(16, 10, 8, 4);
GotoWithNop("Event_00017_00011_Auto", 10);
EventModifyPos(16, 10, 4, 2);
EventModifyPos(16, 10, 4, 2);
EventModifyPos(16, 10, 2, 1);
EventModifyPos(16, 10, 2, 1);
EventModifyPos(16, 10, 2, 1);
EventModifyPos(16, 10, 2, 1);
EventSetState(-1, -1, 0);

['Event_00017_00010_Auto'];
NpcSetFrame(0);
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(3);
GotoWithNop("Event_00017_00010_Auto", 0);

['Event_00017_00015_Trigger'];
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(44, 0);

['Event_00017_00013_Trigger'];
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(32, 0);

