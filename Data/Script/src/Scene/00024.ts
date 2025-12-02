['Event_00024_00037_Trigger'];
SceneEnter(23);

['Event_00024_00001_Trigger'];
SceneEnter(33);
PartySetPos(43, 54, 0);
FadeOut(0);

['Event_00024_00017_Trigger'];
//未知对话
//未知对话

['Event_00024_00018_Trigger'];
//未知对话
//未知对话

['Event_00024_00019_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00024_00019_Trigger", 0);

['Event_00024_00026_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话

['Event_00024_00027_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

//未知对话

//未知对话

['Event_00024_00003_Trigger'];
//未知对话
//未知对话

['Event_00024_00009_Trigger'];
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
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
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00024_00010_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00024_00010_Trigger", 0);

['Event_00024_00013_Trigger'];
//未知对话
//未知对话

['Event_00024_00012_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话

['Event_00024_00014_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00024_00007_Trigger'];
//未知对话
//未知对话
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00024_00011_Trigger'];
JumpIfHeroInParty(2, "@18CD");
['@18C8'];
Replace();
//未知对话
//未知对话
ShowBuyItemMenu(7);

['Event_00024_00004_Trigger'];
//未知对话
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
Replace();
//未知对话
ShowBuyItemMenu(4);

['Event_00024_00005_Trigger'];
RemoveItem(16, 1, "@1911");
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
RemoveItem(20, 1, "@1911");
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
RemoveItem(18, 1, "@1911");
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
['@1911'];
//未知对话
//未知对话

['Event_00024_00031_Trigger'];
SceneEnter(26);
PartySetPos(30, 51, 0);
FadeOut(0);

['Event_00024_00032_Trigger'];
SceneEnter(30);
PartySetPos(22, 39, 0);
FadeOut(0);

['Event_00024_00033_Trigger'];
SceneEnter(31);
PartySetPos(26, 41, 0);
FadeOut(0);

['Event_00024_00034_Trigger'];
SceneEnter(32);
PartySetPos(26, 46, 0);
FadeOut(0);

['Event_00024_00035_Trigger'];
SceneEnter(25);
PartySetPos(11, 28, 1);
FadeOut(0);

['Event_00024_00036_Trigger'];
SceneEnter(25);
PartySetPos(38, 29, 1);
FadeOut(0);

['Event_00024_00006_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00024_00008_Trigger'];
//未知对话
//未知对话

['Event_00024_00003_Auto'];
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
NpcSetDirFrame(3, 0);
GotoWithProbability(50, "@1B7F");
['@1B7D'];
ReplaceAndPause();
GotoWithProbability(2, "@1B7D");
['@1B7F'];
EventAnimate(0);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(0);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPauseWithNop("Event_00024_00003_Auto", 0);

['Event_00024_00007_Auto'];
NpcMoveToBlock(37, 27, 0, 3);
NpcMoveToBlockMutexLock(36, 27, 1, 2);
NpcMoveToBlockMutexLock(45, 36, 0, 2);
NpcMoveToBlockMutexLock(45, 35, 1, 2);
NpcMoveToBlockMutexLock(51, 41, 0, 2);
NpcMoveToBlockMutexLock(35, 56, 1, 2);
NpcMoveToBlockMutexLock(34, 55, 0, 2);
['@1C54'];
ReplaceAndPause();
GotoWithProbability(4, "@1C54");
NpcMoveToBlockMutexLock(35, 53, 1, 2);
NpcMoveToBlockMutexLock(35, 53, 0, 2);
['@1C58'];
ReplaceAndPause();
GotoWithProbability(4, "@1C58");
NpcMoveToBlockMutexLock(45, 42, 1, 2);
NpcMoveToBlockMutexLock(43, 40, 0, 2);
NpcMoveToBlockMutexLock(46, 38, 0, 2);
NpcMoveToBlockMutexLock(31, 23, 1, 2);
NpcMoveToBlockMutexLock(28, 27, 0, 2);
NpcMoveToBlock(32, 22, 1, 3);
ReplaceAndPauseWithNop("Event_00024_00007_Auto", 0);

['Event_00024_00038_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
PlaySound(54);

['Event_00024_00005_Auto'];
ReplaceAndPause();
GotoWithProbability(5, "Event_00024_00005_Auto");
NpcSetDirFrame(2, 0);
['@8D1F'];
ReplaceAndPause();
GotoWithProbability(8, "@8D1F");
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00024_00005_Auto", 0);

['Event_00024_00038_Auto'];
NpcSetDirFrame(-1, 0);
ReplaceAndPause();
NpcSetDirFrame(-1, 1);
ReplaceAndPause();
GotoWithProbability(32, "Event_00024_00038_Auto");
['@8E82'];
NpcSetDirFrame(-1, 0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPause();
GotoWithProbability(50, "@8E82");
EventSetTriggerMode(-1, -1, true, 3);
GotoWithNop("Event_00024_00038_Auto", 0);

