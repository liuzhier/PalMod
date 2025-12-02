['Event_00101_00006_Auto'];
NpcMoveToBlockMutexLock(11, 17, 1, 2);
EventSetState(-1, -1, 0);

['Event_00101_00007_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(12, 17, 0, 2);
EventSetState(-1, -1, 0);

['Event_00101_00010_Trigger'];
SceneEnter(115);
PartySetPos(49, 76, 0);
FadeOut(0);

['Event_00101_00011_Trigger'];
SceneEnter(128);
PartySetPos(23, 42, 1);
FadeOut(0);

['Event_00101_00019_Trigger'];
SceneEnter(130);
PartySetPos(30, 45, 0);
FadeOut(0);

['Event_00101_00020_Trigger'];
EventSetState(100, 24, 2);
PartySetRole(1, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SceneEnter(131);
PartySetPos(23, 69, 0);
FadeOut(0);
ReplaceAndPause();
EventSetState(100, 24, 2);
PartySetRole(1, 0, 0);
SceneEnter(131);
PartySetPos(23, 69, 0);
FadeOut(0);

['Event_00101_00021_Trigger'];
SceneEnter(138);
PartySetPos(19, 36, 0);
FadeOut(0);

['Event_00101_00022_Trigger'];
SceneEnter(136);
PartySetPos(12, 29, 1);
FadeOut(0);

['Event_00101_00023_Trigger'];
SceneEnter(137);
PartySetPos(22, 39, 0);
FadeOut(0);

['Event_00101_00024_Trigger'];
EventSetState(-1, -1, 0);
PartySetRole(3, 1, 0);

['Event_00101_00025_Trigger'];
NpcSetFrame(0);
//未知对话
//未知对话
GotoWithSelect("@445C");
CashModify(-10, "");

['Event_00101_00025_Auto'];
EventAnimate(0);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00101_00025_Auto", 0);

['Scene_00101_Enter'];
MusicPlay(Music.蝶舞春园_2, true, false);
PartySetRole(3, 1, 0);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
PartySetPos(13, 21, 0);
VideoUpdate(0, false);
WaitEventAutoScriptRun(9, false, false);
PartyWalkToBlock(13, 20, 1, 2);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(4, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(10, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(0, false, false);
ReplaceAndPause();
MusicPlay(Music.蝶舞春园_2, true, false);

['Event_00101_00012_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
['Event_00101_00013_Trigger'];
//未知对话
//未知对话

['Event_00101_00014_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00101_00016_Trigger'];
//未知对话
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
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00101_00017_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00101_00027_Trigger'];
//未知对话
//未知对话

['Event_00101_00029_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00101_00030_Trigger'];
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
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
ReplaceAndPause();
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00101_00031_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
WaitEventAutoScriptRun(0, false, false);
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00101_00009_Auto'];
NpcMoveToBlock(14, 47, 0, 3);
['@4F00'];
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(14, 47, 1, 2);
WaitEventAutoScriptRun(12, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(22, 39, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(22, 39, 0, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(9, false, false);
ReplaceAndPauseWithNop("@4F00", 0);

['Event_00101_00009_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
EventSetAutoScript(-1, -1, "@4F0C");
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Replace();
//未知对话
//未知对话

['Event_00101_00032_Auto'];
NpcSetDirFrame(0, 0);
GotoWithProbability(5, "Event_00101_00032_Auto");
NpcMoveToBlock(13, 32, 1, 3);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(15, 34, 0, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(11, 30, 0, 3);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(11, 30, 0, 2);
ReplaceAndPauseWithNop("Event_00101_00032_Auto", 0);

['Event_00101_00032_Trigger'];
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
VideoRestore();
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00101_00033_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
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
//未知对话
ReplaceAndPause();
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00101_00034_Trigger'];
//未知对话
//未知对话

['Event_00101_00035_Trigger'];
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(1, 0);

['Event_00101_00036_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00101_00037_Trigger'];
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00101_00039_Trigger'];
JumpIfItemCountLessThan(21, 1, "@503E");
JumpIfItemCountLessThan(23, 1, "@503E");
JumpIfItemCountLessThan(22, 1, "@503E");
JumpIfItemCountLessThan(26, 1, "@5042");
RemoveItem(21, 0, "");
RemoveItem(23, 0, "");
RemoveItem(22, 0, "");
RemoveItem(26, 0, "");
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(-1, -1, 0);
SceneSetScript(116, "@5047", "");
SceneEnter(116);
FadeOut(0);
MusicPlay(Music.宿命, true, false);

['Event_00101_00040_Trigger'];
ShowBuyItemMenu(14);

['Event_00101_00041_Trigger'];
ShowBuyItemMenu(15);

['Event_00101_00042_Trigger'];
ShowSellItemMenu();

