['Event_00185_00001_Trigger'];
SceneEnter(188);
PartySetPos(12, 78, 0);
FadeOut(0);

['Event_00185_00002_Trigger'];
SceneEnter(189);
PartySetPos(38, 71, 0);
FadeOut(0);

['Scene_00185_Teleport'];
SceneEnter(185);
PartySetPos(10, 39, 0);
FadeOut(0);

['Scene_00185_Enter'];
MusicStop(0);
PartySetPos(10, 38, 1);
PartySetRole(5, 1, 0);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
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
//未知对话
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(9, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
Replace();
SetBattlefield(FbpWin.木秘宫_1);
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.神木林_变奏, true, false);

['Event_00185_00004_Trigger'];
EventSetState(-1, -1, 0);
SetDlgCenter(0, false);
//未知对话
PartyWalkToBlock(21, 73, 0, 8);
PartyWalkToBlock(24, 69, 1, 8);
PartyWalkToBlock(21, 66, 1, 8);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(23, 64, 1, 8);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(184, 3, 0, 1);
VideoUpdate(0, false);
PlaySound(78);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(30, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(30, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
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
//未知对话
//未知对话
//未知对话
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
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
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
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
PartySetRole(1, 5, 0);

['Event_00185_00003_Trigger'];
SetDlgCenter(0, false);
//未知对话

PlaySound(113);
['Event_00185_00031_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(10000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(20000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(30000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(106, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(107, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(108, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00030_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(119, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00027_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(129, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00029_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(144, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00028_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(198, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00026_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(90, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00025_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(102, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00018_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(208, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

