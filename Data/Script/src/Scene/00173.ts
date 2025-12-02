['Event_00173_00001_Trigger'];
SceneEnter(177);
PartySetPos(44, 44, 1);
FadeOut(0);

['Event_00173_00011_Trigger'];
SetDlgCenter(0, false);
//未知对话

['Event_00173_00005_Auto'];
NpcMoveToBlockMutexLock(21, 35, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(23, 34, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00173_00005_Auto", 0);

['Event_00173_00009_Auto'];
NpcMoveToBlock(21, 33, 1, 3);

['Event_00173_00007_Auto'];
NpcSetDirFrame(0, 0);

['Event_00173_00008_Auto'];
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlock(19, 30, 1, 3);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(1, 0);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['Scene_00173_Enter'];
SceneSetScript(183, "", "");
EventSetTriggerScript(180, 2, "Event_00181_00002_Trigger");
PartySetPos(22, 34, 1);
HeroSetSprite(0, 232, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(42, false, false);
SetDlgUpper(31, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(172, 5, "Event_00002_00026_Auto");
EventSetState(172, 6, 0);
EventSetState(172, 7, 1);
EventSetState(172, 2, 0);
EventSetState(172, 3, 0);
EventSetState(172, 9, 2);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(82, 0, false);
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetAutoScript(172, 5, "@6F7D");
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(172, 9, 2, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//未知对话
//未知对话
EventSetAutoScript(172, 7, "@6E4C");
EventSetAutoScript(172, 9, "@6E47");
VideoFadeAndUpdate(-1);
EventModifyPos(172, 9, -32, 16);
EventSetDirFrame(172, 4, 0, 1);
EventSetState(172, 10, 1);
EventSetState(172, 5, 0);
PartySetPos(18, 29, 0);
HeroSetSprite(0, 550, true);
RoleSetDirFrame(0, 0, 0);
PlaySound(272);
VideoUpdate(3, false);
SetDlgCenter(0, false);
//未知对话
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(172, 7, "@6E51");
WaitEventAutoScriptRun(8, false, false);
EventSetState(172, 10, 0);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
SetDlgLower(32, 0, false);
//未知对话
//未知对话
EventSetState(172, 10, 0);
EventSetState(172, 7, 0);
EventSetState(172, 8, 2);
WaitEventAutoScriptRun(22, false, false);
PlaySound(273);
WaitEventAutoScriptRun(6, false, false);
SetDlgCenter(0, false);
//未知对话
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(17, 29, 1, 2);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
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
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetStateSequence(214, 3, 215, 0, 0);
EventSetAutoScript(172, 8, "@6F0C");
EventSetDirFrame(172, 4, 0, 0);
EventSetTriggerScript(176, 2, "@6C55");
EventSetTriggerScript(205, 3, "@7404");
EventSetTriggerScript(205, 4, "@743C");
EventSetState(202, 11, 0);
EventSetState(202, 4, 0);
EventSetState(202, 6, 0);
EventSetState(206, 16, 0);
EventSetState(206, 17, 0);
EventSetState(205, 8, 0);
EventSetState(205, 9, 0);
EventSetState(212, 0, 0);
EventSetState(205, 5, 0);
EventSetState(206, 29, 0);
ReplaceAndPause();
MusicPlay(Music.盟誓, true, false);

['Event_00173_00008_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(0, 0, false);
//未知对话
//未知对话

['Event_00173_00004_Trigger'];
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgCenter(0, false);
//未知对话

['Event_00173_00010_Auto'];
RoleSetDirFrame(0, 0, 0);
ReplaceAndPause();
RoleSetDirFrame(0, 1, 0);
ReplaceAndPauseWithNop("Event_00173_00010_Auto", 0);

['Event_00173_00012_Trigger'];
SetDlgCenter(0, false);
//未知对话

