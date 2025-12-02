['Event_00253_00001_Trigger'];
SceneEnter(251);
PartySetPos(10, 23, 0);
FadeOut(0);

['Scene_00253_Enter'];
HeroSetSprite(0, 531, false);
HeroSetSprite(3, 576, false);
PartySetRole(4, 1, 0);
RoleSetDirFrame(3, 0, 0);
PartySetPos(10, 23, 1);
VideoWave(2, 0);
MusicPlay(Music.险境_2, true, false);
SetBattlefield(FbpWin.水底密道_1);
GotoWithNop("@0002", 0);
['Event_00253_00004_Trigger'];
EventSetState(-1, -1, 0);
WaitEventAutoScriptRun(0, false, true);
EventSetState(252, 3, 1);
FadeToScene(0, -1);
SetDlgLower(80, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(252, 2, 1);
PlaySound(212);
FadeToScene(2, -1);
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(80, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(80, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
EventSetState(252, 3, 0);
PlaySound(217);
FadeToScene(2, -1);
SetBattlefield(FbpWin.水底密道_2);
SetBattleMusic(Music.兵凶战危_2);
BattleStart(315, "@A073", "");
SetBattleMusic(Music.心急如焚);
SetBattlefield(FbpWin.水底密道_1);
BattleEnd();
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话

['Event_00253_00002_Auto'];
NpcChase(128, 2, true);
ReplaceAndPauseWithNop("Event_00253_00002_Auto", 0);

