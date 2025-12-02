['Scene_00148_Enter'];
SetBattleMusic(Music.心急如焚);

['Event_00148_00001_Trigger'];
SceneEnter(168);
PartySetPos(26, 44, 1);
FadeOut(0);

['Event_00148_00002_Trigger'];
EventSetState(147, 5, 1);
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
AddItem(126, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgCenter(0, false);
//未知对话
RoleSetDirFrame(1, 0, 0);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetState(147, 3, 1);
PlaySound(212);
FadeToScene(2, -1);
SetDlgUpper(58, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
SetDlgLower(10, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(58, 0, false);
//未知对话
//未知对话
//未知对话
SetBattleMusic(Music.御剑伏魔_1);
SetBattlefield(FbpWin.锁妖塔);
BattleStart(163, "@A073", "");
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.孤雀无栖, true, false);
BattleEnd();
PartySetPos(47, 73, 1);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(147, 3, 0);
FadeToScene(3, -1);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(147, 4, 1);
FadeToScene(0, -1);
WaitEventAutoScriptRun(10, false, false);
PartyWalkToBlock(47, 73, 0, 2);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
SetDlgLower(2, 0, false);
//未知对话
//未知对话
EventSetDirFrame(147, 4, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(147, 4, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
EventSetDirFrame(147, 4, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
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
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(147, 4, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
EventSetState(147, 4, 0);
MusicStop(0);
PlaySound(170);
FadeToScene(3, -1);
MusicPlay(Music.救佳人, true, true);
ReplaceAndPause();
SetDlgLower(0, 0, false);
//未知对话
//未知对话

['Event_00148_00004_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(45, 71, 1, 2);

['Event_00148_00021_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(51, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

