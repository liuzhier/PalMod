['Event_00094_00001_Trigger'];
SceneEnter(83);
PartySetPos(22, 34, 0);
FadeOut(0);

['Event_00094_00002_Trigger'];
SceneEnter(86);
PartySetPos(28, 22, 1);
FadeOut(0);

['Event_00094_00003_Trigger'];
SceneEnter(95);
PartySetPos(20, 30, 1);
FadeOut(0);

['Event_00094_00004_Trigger'];
SceneEnter(96);
PartySetPos(20, 35, 1);
FadeOut(0);

['Event_00094_00005_Trigger'];
SceneEnter(98);
PartySetPos(12, 31, 1);
FadeOut(0);

['Event_00094_00006_Trigger'];
SceneEnter(98);
PartySetPos(42, 27, 0);
FadeOut(0);

['Event_00094_00007_Trigger'];
SceneEnter(98);
PartySetPos(10, 79, 0);
FadeOut(0);

['Event_00094_00027_Trigger'];
Call("@8B3C", 93, 27);
Call("@8B3C", 93, 28);

['Event_00094_00029_Trigger'];
Call("@8B3C", 93, 29);
Call("@8B3C", 93, 30);

['Event_00094_00031_Trigger'];
Call("@8B3C", 93, 31);
Call("@8B3C", 93, 32);

['Event_00094_00033_Trigger'];
Call("@8B3C", 93, 33);
Call("@8B3C", 93, 34);

['Event_00094_00035_Trigger'];
EventSetAutoScript(93, 35, "@3479");
EventSetTriggerMode(-1, -1, false, -1);
PlaySound(178);

['Event_00094_00017_Auto'];
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(23, 31, 0, 2);
NpcMoveToBlockMutexLock(26, 34, 1, 2);
NpcSetDirFrame(2, 0);
Call("Event_00094_00031_Trigger");
NpcMoveToBlockMutexLock(27, 33, 1, 2);
EventSetState(97, 6, 2);
EventSetState(-1, -1, 0);

['Event_00094_00016_Trigger'];
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoRestore();
//未知对话
//未知对话
EventSetState(-1, -1, 0);
EventSetAutoScript(93, 10, "");
EventSetAutoScript(93, 11, "");
EventSetAutoScript(93, 12, "");
EventSetState(93, 17, 2);
EventSetDirFrame(93, 10, 2, 0);
VideoUpdate(0, false);
//未知对话
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(93, 11, 2, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetState(93, 10, 0);
EventSetState(93, 11, 0);
EventSetState(93, 12, 0);
EventSetState(93, 13, 1);
EventSetState(93, 14, 1);
EventSetState(93, 15, 1);
WaitEventAutoScriptRun(15, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话

['Event_00094_00013_Auto'];
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
PlaySound(93);

['Event_00094_00014_Auto'];
WaitEventAutoScriptRun(7, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(2);
PlaySound(93);

['Event_00094_00015_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
PlaySound(93);

['Event_00094_00017_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话

['Event_00094_00018_Trigger'];
EventSetState(97, 7, 1);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00094_00037_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
SetBattlefield(FbpWin.客栈);
BattleStart(29, "@35D7", "");
['@35D7'];
BattleEnd();
EventSetState(93, 36, 0);
PartySetRole(3, 1, 0);
PartySetPos(24, 32, 1);
EventModifyPos(-1, -1, -32, -16);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
EventSetAutoScript(-1, -1, "@3606");
EventSetLayer(94, 0, 13);
WaitEventAutoScriptRun(0, false, false);
PlaySound(201);
WaitEventAutoScriptRun(12, false, false);
EventSetState(-1, -1, 0);
PartyWalkToBlock(23, 31, 1, 8);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00094_00019_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00094_00023_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00094_00026_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00094_00025_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00094_00020_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00094_00022_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00094_00021_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

