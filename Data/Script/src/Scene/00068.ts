['Scene_00068_Teleport'];
SceneEnter(70);
PartySetPos(42, 53, 0);
FadeOut(0);

['Event_00068_00001_Trigger'];
SceneEnter(77);
PartySetPos(15, 33, 0);
FadeOut(0);

['Event_00068_00004_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
MusicStop(0);
SetDlgLower(51, 0, false);
//未知对话
//未知对话
PlaySound(113);
EventSetState(67, 2, 0);
EventSetState(67, 3, 0);
EventSetState(67, 5, 2);
EventSetState(67, 6, 2);
EventSetState(67, 7, 2);
RoleSetDirFrame(1, 0, 1);
RoleSetDirFrame(1, 0, 2);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
PartyWalkToBlock(40, 63, 1, 8);
PartyWalkToBlock(38, 61, 1, 8);
WaitEventAutoScriptRun(7, false, false);
SetBattlefield(FbpWin.鬼阴坛);
SetBattleMusic(Music.战意昂);
BattleStart(34, "", "");
MusicPlay(Music.身陷囹圄, true, false);
BattleEnd();
HeroSetSprite(0, 394, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(67, 8, 1);
EventSetState(67, 9, 1);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(6, false, false);
HeroSetSprite(0, 3, true);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
ViewportMove(16, 8, 8);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(18, 0, false);
//未知对话
//未知对话
ViewportMove(-16, -8, 8);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(16, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
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
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(18, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
RoleUninstallEquip(1, UninstallEquip.Ornament);
RemoveItem(214, 0, "");
VideoUpdate(0, false);
SetDlgLower(86, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
SceneEnter(78);
FadeOut(2);

['Event_00068_00006_Auto'];
NpcMoveToBlock(33, 58, 1, 8);
NpcMoveToBlock(34, 59, 1, 8);

['Event_00068_00007_Auto'];
NpcMoveToBlock(35, 56, 1, 8);
NpcMoveToBlock(37, 58, 0, 8);

['Event_00068_00005_Auto'];
NpcMoveToBlock(35, 58, 0, 8);
NpcMoveToBlock(36, 59, 1, 8);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(12);

['Event_00068_00002_Trigger'];
SetDlgBox(0);
//未知对话

['Scene_00068_Enter'];
MusicPlay(Music.鬼阴山, true, false);
SetBattleMusic(Music.心急如焚);
SetBattlefield(FbpWin.鬼阴坛);

