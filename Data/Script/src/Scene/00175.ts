['Event_00175_00007_Auto'];
NpcMoveToBlockMutexLock(19, 31, 0, 4);

['Scene_00175_Enter'];
PartySetPos(28, 31, 1);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(174, 4, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(174, 4, 0, 2);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(174, 4, 0);
HeroSetSprite(0, 538, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(174, 6, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
PartyWalkToBlock(24, 36, 0, 8);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(3, false, false);
PartyWalkToBlock(17, 29, 1, 8);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
EventSetState(174, 6, 0);
EventSetState(174, 7, 2);
PartyWalkToBlock(18, 29, 0, 4);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(22, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(7, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
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
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(174, 7, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
PartyWalkToBlock(16, 31, 0, 8);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetDirFrame(174, 7, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
HeroSetSprite(0, 232, true);
EventSetDirFrame(174, 2, 0, 1);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(174, 2, 0, 2);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(174, 2, 0, 3);
WaitEventAutoScriptRun(10, false, false);
MusicStop(1);
SetDlgUpper(0, 0, false);
//未知对话
FadeOut(6);
PlayCDOrMusic(CD.蝶恋, Music.蝶恋_4);
SceneEnter(194);
ReplaceAndPause();
PartySetPos(16, 31, 0);
EventSetAutoScript(174, 7, "@6C77");
VideoFadeAndUpdate(1);
MusicStop(1);
SetDlgCenter(0, false);
//未知对话
EventSetDirFrame(174, 2, 0, 4);
EventSetState(174, 7, 0);
EventSetState(174, 8, 2);
SceneEnter(178);
FadeOut(0);
ReplaceAndPause();
PartySetPos(16, 30, 1);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['Event_00175_00005_Trigger'];
//未知对话

['Event_00175_00008_Trigger'];
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00175_00008_Trigger", 0);

['Event_00175_00012_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(90, 0);
ReplaceAndPause();

['Event_00175_00014_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(76, 0);
ReplaceAndPause();

['Event_00175_00015_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(65, 3);
ReplaceAndPause();

['Event_00175_00016_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(97, 3);
ReplaceAndPause();

['Event_00175_00017_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(77, 0);
ReplaceAndPause();

['Event_00175_00018_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(87, 7);
ReplaceAndPause();
['Event_00175_00019_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(208, 0);
ReplaceAndPause();

['Event_00175_00011_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话

