['Event_00128_00001_Trigger'];
SceneEnter(101);
PartySetPos(29, 37, 1);
FadeOut(0);

['Event_00128_00002_Trigger'];
Call("@8E0D");
SceneEnter(129);
PartySetPos(22, 81, 1);
FadeOut(0);

['Event_00128_00003_Trigger'];
//未知对话
//未知对话

['Event_00128_00003_Auto'];
NpcMoveToBlockMutexLock(35, 37, 1, 2);
NpcMoveToBlockMutexLock(30, 43, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(25, 38, 1, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlock(28, 36, 0, 3);
NpcMoveToBlock(26, 34, 1, 3);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(33, 40, 1, 2);
NpcMoveToBlockMutexLock(36, 38, 0, 2);
NpcMoveToBlockMutexLock(31, 33, 1, 2);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("Event_00128_00003_Auto", 0);

['Event_00128_00005_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00128_00008_Trigger'];
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
['@4E66'];
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
CashModify(-500, "@4E66");
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgBox(0);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00128_00009_Trigger'];
SetDlgLower(0, 0, false);
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
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
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
ReplaceAndPause();
//未知对话
//未知对话

['Event_00128_00006_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话

