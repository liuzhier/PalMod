['Event_00102_00001_Trigger'];
SceneEnter(103);
PartySetPos(19, 67, 1);
FadeOut(0);

['Event_00102_00003_Trigger'];
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
AddItem(211, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgCenter(0, false);
//未知对话

['Event_00102_00004_Trigger'];
EventSetState(-1, -1, 0);
SetDlgCenter(0, false);
//未知对话

['Event_00102_00005_Trigger'];
PartyWalkToBlock(25, 55, 1, 8);
RoleSetDirFrame(3, 0, 0);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetState(-1, -1, 0);
EventSetState(101, 6, 1);
VideoUpdate(0, false);
SetDlgLower(83, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(101, 6, "@537B");
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(26, 56, 1, 4);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(101, 6, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(101, 6, "@537F");
WaitEventAutoScriptRun(10, false, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话

['Event_00102_00002_Trigger'];
SceneEnter(104);
PartySetPos(17, 113, 0);
FadeOut(0);

['Event_00102_00033_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(59, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00102_00036_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(74, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00102_00031_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(84, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00102_00027_Trigger'];
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(69, 0);

['Event_00102_00030_Trigger'];
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(14, 0);

['Event_00102_00032_Trigger'];
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(67, 0);

['Event_00102_00035_Trigger'];
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(68, 0);

['Event_00102_00007_Auto'];
GotoWithProbability(8, "");
PlaySound(80);
WaitEventAutoScriptRun(16, false, false);
GotoWithProbability(40, "Event_00102_00007_Auto");
GotoWithProbability(5, "");
PlaySound(74);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("Event_00102_00007_Auto", 0);

['Event_00102_00008_Auto'];
NpcChase(10, 8, false);
NpcChase(10, 8, false);
NpcChase(10, 8, false);
EventAnimate(0);
WaitEventAutoScriptRun(4, false, false);
ReplaceAndPauseWithNop("Event_00102_00008_Auto", 0);

