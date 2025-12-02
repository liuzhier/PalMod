['Event_00020_00002_Trigger'];
PartySetPos(16, 95, 0);
SceneEnter(21);
FadeOut(0);

['Event_00020_00009_Trigger'];
//未知对话

['Event_00020_00019_Trigger'];
SetDlgUpper(15, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(17, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话

['Event_00020_00004_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgLower(14, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(14, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(19, 4, "@10EA");
WaitEventAutoScriptRun(14, false, false);
EventSetState(-1, -1, 0);

['Event_00020_00007_Trigger'];
//未知对话
ReplaceAndPause();
//未知对话

['Event_00020_00011_Trigger'];
//未知对话
//未知对话

['Event_00020_00010_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话

['Scene_00020_Enter'];
EventSetState(16, 12, 0);

['Event_00020_00061_Auto'];
EventAnimate(0);
GotoWithProbability(10, "Event_00020_00061_Auto");
EventAnimate(0);
EventWalkOneStep(-1, -1, -4, 0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, 2);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 4, 0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, -2);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
['@8C2A'];
EventAnimate(0);
GotoWithProbability(10, "@8C2A");
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, -2);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 4, 0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, -4, 0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, 2);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPauseWithNop("Event_00020_00061_Auto", 0);

['Event_00020_00062_Auto'];
EventAnimate(0);
GotoWithProbability(10, "Event_00020_00062_Auto");
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
['@8C8A'];
EventAnimate(0);
GotoWithProbability(10, "@8C8A");
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, 2);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, 4);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 4, 0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, -2);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 0, -4);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, -4, 0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
ReplaceAndPauseWithNop("Event_00020_00062_Auto", 0);

['Event_00020_00007_Auto'];
WaitEventAutoScriptRun(2, false, false);
GotoWithProbability(60, "Event_00020_00007_Auto");
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(0);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(1);
ReplaceAndPauseWithNop("Event_00020_00007_Auto", 0);

['Event_00020_00070_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(44, 0);
EventSetState(-1, -1, 0);

['Event_00020_00068_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(46, 0);
EventSetState(-1, -1, 0);

