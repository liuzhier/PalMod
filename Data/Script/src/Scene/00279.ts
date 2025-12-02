['Event_00279_00001_Trigger'];
SceneEnter(282);
PartySetPos(52, 91, 0);
FadeOut(0);

['Event_00279_00002_Trigger'];
SceneEnter(282);
PartySetPos(28, 67, 1);
FadeOut(0);

['Event_00279_00003_Trigger'];
SceneEnter(285);
PartySetPos(16, 50, 1);
FadeOut(0);

['Event_00279_00006_Trigger'];
EventSetState(-1, -1, 0);
MusicStop(0);
PartyWalkToBlock(44, 69, 0, 8);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(88, 0, false);
//未知对话
//未知对话
MusicPlay(Music.今生情不悔, true, false);
VideoUpdate(0, false);
SetDlgLower(70, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(88, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(278, 4, 0);
EventSetState(278, 5, 1);
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(70, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
HeroSetSprite(0, 232, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetStateSequence(278, 10, 278, 12, 1);
EventSetState(285, 2, 0);
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(70, 0, false);
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
SetDlgUpper(88, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(70, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(278, 7, 1);
EventSetState(278, 8, 1);
EventSetState(278, 9, 1);
WaitEventAutoScriptRun(24, false, false);
MusicPlay(Music.危机, true, false);
SetDlgLower(81, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(278, 11, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(278, 10, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(278, 12, 0, 0);
SetDlgUpper(30, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(88, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(81, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
PartySetRole(1, 2, 5);
SetBattleMusic(Music.心急如焚);
SetBattlefield(FbpWin.南绍_王座);
BattleStart(289, "@A073", "");
MusicPlay(Music.停止播放, true, false);
BattleEnd();
EventSetStateSequence(278, 8, 278, 9, 0);
PartySetPos(44, 71, 0);
HeroSetSprite(0, 630, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetStateSequence(278, 10, 278, 12, 0);
EventSetState(278, 5, 0);
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//未知对话
//未知对话
SetDlgLower(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
PlaySound(2);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
VideoUpdate(0, false);
PlaySound(20);
SetDlgCenter(0, false);
//未知对话
HeroSetSprite(0, 631, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(0, false, false);
MusicPlay(Music.十面埋伏, true, false);
SetDlgUpper(28, 0, false);
//未知对话
//未知对话
HeroSetSprite(0, 632, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
PlaySound(212);
FadeToScene(3, -1);
SetDlgLower(81, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(278, 7, 0);
PlaySound(217);
FadeToScene(2, -1);
PartySetRole(1, 5, 0);
SetBattleMusic(Music.势如破竹_副本);
BattleStart(222, "@A073", "");
BattleEnd();
MusicPlay(Music.危机, true, false);
EventSetState(279, 0, 2);
EventSetState(1, 0, 0);
EventSetState(281, 7, 2);
EventSetState(281, 9, 1);
PartySetPos(44, 71, 1);
HeroSetSprite(0, 193, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 7, 0);
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(31, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
HeroSetSprite(0, 2, true);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话

['Event_00279_00005_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(46, 66, 0, 2);

['Event_00279_00007_Auto'];
NpcMoveToBlockMutexLock(41, 72, 0, 4);

['Event_00279_00008_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(40, 71, 0, 4);

['Event_00279_00009_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(42, 73, 0, 4);

['Event_00279_00012_Auto'];
EventWalkOneStep(-1, -1, 8, -8);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00279_00012_Auto", 4);

['Event_00279_00013_Trigger'];
SetDlgCenter(0, false);
//未知对话

