['Event_00092_00001_Trigger'];
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
SceneEnter(89);
PartySetPos(14, 98, 0);
FadeOut(0);

['Event_00092_00016_Trigger'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(2, 0);
EventSetTriggerMode(-1, -1, false, -1);

['Event_00092_00002_Trigger'];
Call("@8E29");
Call("@8E29");

['Event_00092_00003_Trigger'];
Call("@8E0D");
Call("@8E0D");

['Event_00092_00023_Auto'];
NpcMoveToBlockMutexLock(32, 100, 0, 2);
GotoWithProbability(10, "");
NpcMoveToBlockMutexLock(34, 102, 1, 2);
GotoWithProbability(10, "");
ReplaceAndPauseWithNop("Event_00092_00023_Auto", 0);

['Event_00092_00018_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
GotoWithSelect("@3C26");
CashModify(-300, "@3C26");
VideoUpdate(0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(0, 0, false);
//未知对话
//未知对话

['Event_00092_00019_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00092_00020_Trigger'];
//未知对话
//未知对话

['Event_00092_00021_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00092_00022_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00092_00023_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00092_00017_Trigger'];
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话

