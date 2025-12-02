['Event_00098_00001_Trigger'];
SceneEnter(94);
PartySetPos(37, 45, 1);
FadeOut(0);

['Event_00098_00002_Trigger'];
SceneEnter(94);
PartySetPos(32, 40, 0);
FadeOut(0);

['Event_00098_00003_Trigger'];
SceneEnter(94);
PartySetPos(27, 35, 0);
FadeOut(0);

['Event_00098_00007_Trigger'];
EventSetState(-1, -1, 0);
EventSetTriggerMode(93, 1, false, -1);
EventSetTriggerMode(94, 1, false, -1);
EventSetTriggerMode(95, 1, false, -1);
EventSetState(93, 13, 0);
EventSetState(93, 14, 0);
EventSetState(93, 15, 0);
EventSetState(93, 17, 0);
EventSetState(93, 18, 0);
EventSetState(93, 19, 2);
EventSetState(93, 20, 0);
EventSetState(93, 21, 0);
EventSetState(93, 22, 0);
EventSetState(93, 23, 0);
EventSetState(93, 24, 0);
EventSetState(93, 25, 0);
EventSetState(93, 26, 0);
EventSetState(97, 6, 0);
EventSetState(95, 3, 0);
EventSetState(84, 35, 2);
EventSetState(84, 36, 2);
EventSetState(86, 6, 2);
EventSetState(86, 7, 2);
EventSetState(97, 5, 0);
EventSetPos(97, 4, 1408, 400);
EventSetTriggerScript(97, 4, "@36E7");
PartyWalkToBlock(17, 27, 0, 8);
PartyWalkToBlock(15, 25, 0, 8);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(98, 0, 1);
PartySetRole(1, 0, 0);
PartyWalkToBlock(14, 25, 1, 4);
PartyWalkToBlock(17, 28, 1, 4);
EventSetDirFrame(98, 0, 0, 0);
PartyWalkToBlock(16, 29, 1, 4);
EventSetDirFrame(98, 0, 3, 0);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetDirFrame(98, 0, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//未知对话
//未知对话
EventSetAutoScript(98, 0, "@3523");
WaitEventAutoScriptRun(15, false, false);
MusicStop(1);
FadeOut(2);
MusicPlay(Music.神木林, true, false);
RoleModifyHPMP(true, 9999);
PartySetPos(16, 30, 0);
HeroSetSprite(0, 379, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(0, 0, 5);
EventSetState(98, 0, 0);
EventSetState(97, 8, 1);
SetPaletteTime(1);
WaitEventAutoScriptRun(5, false, false);
EventSetState(97, 8, 0);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
MusicStop(0);
WaitEventAutoScriptRun(5, false, false);
//未知对话
MusicPlay(Music.神木林_变奏, true, false);
RoleSetDirFrame(0, 3, 0);
EventSetState(97, 8, 1);
EventSetDirFrame(97, 8, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
EventSetAutoScript(97, 8, "@35CB");
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(97, 8, 3, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(97, 8, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetAutoScript(97, 8, "@35CE");
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
HeroSetSprite(0, 2, true);
RoleSetDirFrame(0, 0, 0);
PartySetPos(16, 29, 1);
RoleMoveOneStep(0, 0, 0);
EventSetState(93, 36, 1);
EventSetState(94, 0, 1);

['Event_00098_00004_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

