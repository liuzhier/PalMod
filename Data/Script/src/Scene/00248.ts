['Scene_00248_Enter'];
SetBattlefield(FbpWin.南绍_地牢);
MusicPlay(Music.情怨_1, true, false);

['Event_00248_00001_Trigger'];
SceneEnter(257);
PartySetPos(55, 89, 1);
FadeOut(0);

['Event_00248_00005_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(42, 62, 0, 2);
NpcMoveToBlockMutexLock(43, 63, 1, 2);

['Event_00248_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(247, 4, 0, 1);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(247, 4, 0, 2);
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(247, 4, 0, 1);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(247, 4, 0, 2);
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetDirFrame(247, 4, 0, 1);
VideoUpdate(0, false);
EventSetState(247, 4, 0);
EventSetState(248, 0, 2);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(45, 65, 1, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(30, false, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
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
SetDlgLower(73, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(262, 3, "@8531");
ReplaceAndPause();
['@8248'];
JumpIfItemCountLessThan(135, 1, "@8250");
SetDlgLower(0, 0, false);
//未知对话
//未知对话
RemoveItem(135, 0, "");
FadeOut(0);
SceneEnter(254);

