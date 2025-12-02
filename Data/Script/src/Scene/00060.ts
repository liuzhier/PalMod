['Scene_00060_Enter'];
MusicPlay(Music.鬼影幢幢, true, false);
SetBattlefield(FbpWin.血池);
VideoWave(2, 0);
PartySetPos(54, 112, 1);
RoleMoveOneStep(0, 0, 6);
HeroSetSprite(0, 273, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(30, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//未知对话
FadeOut(2);
EventSetState(59, 1, 2);
EventSetState(59, 2, 2);
HeroSetSprite(0, 2, true);
PartySetPos(55, 112, 0);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(59, 2, 0, 0);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(59, 2, 1, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(59, 1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(59, 1, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(59, 1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
PartySetRole(1, 2, 3);
EventSetState(59, 1, 0);
EventSetState(59, 2, 0);
ReplaceAndPause();

['Event_00060_00010_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(59, 3, "@8EA1");
EventSetAutoScript(59, 5, "@8EA1");
EventSetAutoScript(59, 6, "@8EA1");
EventSetAutoScript(59, 7, "@8EA1");
EventSetAutoScript(59, 8, "@8EA1");
EventSetState(59, 4, 0);
EventSetState(59, 9, 0);

['Event_00060_00013_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(59, 11, "@8EA1");
EventSetState(59, 12, 0);

['Event_00060_00022_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 14, "@8EA1");
EventSetAutoScript(59, 16, "@8EA1");
EventSetAutoScript(59, 17, "@8EA1");
EventSetAutoScript(59, 18, "@8EA1");
EventSetAutoScript(59, 19, "@8EA1");
EventSetAutoScript(59, 20, "@8EA1");
EventSetState(59, 15, 0);
EventSetState(59, 21, 0);

['Event_00060_00025_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 23, "@8EA1");
EventSetState(59, 24, 0);

['Event_00060_00028_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 26, "@8EA1");
EventSetState(59, 27, 0);

['Event_00060_00031_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 29, "@8EA1");
EventSetState(59, 30, 0);

['Event_00060_00036_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 32, "@8EA1");
EventSetAutoScript(59, 33, "@8EA1");
EventSetState(59, 34, 0);
EventSetState(59, 35, 0);

['Event_00060_00041_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 37, "@8EA1");
EventSetAutoScript(59, 38, "@8EA1");
EventSetState(59, 39, 0);
EventSetState(59, 40, 0);

['Event_00060_00046_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 42, "@8EA1");
EventSetAutoScript(59, 43, "@8EA1");
EventSetState(59, 44, 0);
EventSetState(59, 45, 0);

['Event_00060_00049_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 47, "@8EA1");
EventSetState(59, 48, 0);

EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 50, "@8EA1");
EventSetAutoScript(1, 0, "@8EA1");
EventSetAutoScript(1, 0, "@8EA1");
EventSetAutoScript(1, 0, "@8EA1");
EventSetAutoScript(1, 0, "@8EA1");
EventSetState(59, 51, 0);
EventSetState(59, 52, 0);

['Event_00060_00059_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 53, "@8EA1");
EventSetAutoScript(59, 55, "@8EA1");
EventSetAutoScript(59, 56, "@8EA1");
EventSetAutoScript(59, 57, "@8EA1");
EventSetState(59, 54, 0);
EventSetState(59, 58, 0);

['Event_00060_00064_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(59, 60, "@8EA1");
EventSetAutoScript(59, 62, "@8EA1");
EventSetAutoScript(59, 63, "@8EA1");
EventSetState(59, 61, 0);

['Event_00060_00065_Trigger'];
SetDlgBox(0);
//未知对话
AddItem(92, 2);
ReplaceAndPause();
SetDlgBox(0);
//未知对话

['Event_00060_00066_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
MusicPlay(Music.十面埋伏, true, false);
EventSetState(59, 67, 1);
WaitEventAutoScriptRun(22, false, false);
SetDlgLower(86, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(61, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(61, 0, false);
//未知对话
EventSetState(-1, -1, 0);
SceneSetScript(60, "", "Scene_00061_Teleport");
EventSetStateSequence(61, 6, 61, 15, 0);
EventSetStateSequence(63, 3, 64, 0, 0);
EventSetStateSequence(64, 4, 64, 10, 0);
EventSetStateSequence(60, 31, 60, 50, 0);
EventSetStateSequence(65, 67, 65, 85, 0);
EventSetStateSequence(59, 68, 1, 0, 0);
EventSetStateSequence(53, 13, 54, 0, 0);
EventSetStateSequence(52, 5, 52, 14, 0);
EventSetStateSequence(50, 3, 50, 17, 0);
EventSetStateSequence(49, 33, 49, 40, 0);
EventSetState(53, 3, 0);
EventSetState(53, 4, 2);
EventSetState(53, 6, 0);
EventSetTriggerScript(50, 3, "@2B27");
EventSetTriggerScript(50, 4, "@2B2A");
EventSetTriggerScript(50, 2, "@2B2D");
EventSetTriggerScript(49, 14, "@2B35");
EventSetTriggerScript(49, 12, "@2B47");
EventSetTriggerScript(51, 9, "@2B5D");
EventSetTriggerScript(51, 13, "@2B59");
EventSetTriggerScript(52, 0, "@2B4F");
SetBattleMusic(Music.腥风血雨);
SetBattlefield(FbpWin.血池_极阳地);
BattleStart(27, "@A073", "");
AddItem(207, 0);
SetDlgBox(0);
//未知对话
SetBattlefield(FbpWin.血池);
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.血海余生, true, false);
BattleEnd();
VideoUpdate(0, false);
EventSetState(59, 67, 0);
VideoShake(72, 0);
FadeToScene(5, -1);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
SetDlgLower(22, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(24, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话

['Event_00060_00067_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(5);

['Event_00060_00093_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(1, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00090_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(35, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00094_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(36, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00092_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(95, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00096_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(11, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(57, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(58, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(59, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(60, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(61, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00091_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(4, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00069_Auto'];
NpcChase(9, 0, false);
ReplaceAndPauseWithNop("Event_00060_00069_Auto", 0);

