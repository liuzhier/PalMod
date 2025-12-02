['Event_00113_00002_Trigger'];
SceneEnter(108);
PartySetPos(27, 55, 0);
FadeOut(0);

['Event_00113_00001_Trigger'];
SceneEnter(112);

['Event_00113_00024_Auto'];
GotoWithProbability(40, "");
NpcSetFrame(0);
GotoWithProbability(30, "");
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
GotoWithProbability(30, "Event_00113_00024_Auto");
['@51AC'];
NpcSetFrame(2);
GotoWithProbability(50, "");
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
GotoWithProbability(40, "");
GotoWithProbability(30, "@51AC");
['@51B2'];
NpcSetFrame(3);
ReplaceAndPause();
GotoWithProbability(30, "");
NpcSetFrame(4);
ReplaceAndPause();
GotoWithProbability(40, "");
GotoWithProbability(30, "@51B2");
ReplaceAndPauseWithNop("Event_00113_00024_Auto", 0);

['Event_00113_00008_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00005_Trigger'];
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话

['Event_00113_00007_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00009_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00020_Trigger'];
//未知对话
//未知对话

['Event_00113_00021_Trigger'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetDirFrame(112, 20, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话

['Event_00113_00022_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00023_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00113_00012_Trigger'];
//未知对话
//未知对话

['Event_00113_00014_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00018_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00013_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00010_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00113_00016_Trigger'];
//未知对话
//未知对话

['Event_00113_00019_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00017_Trigger'];
//未知对话
//未知对话

['Event_00113_00015_Trigger'];
//未知对话
//未知对话

['Event_00113_00011_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00113_00025_Trigger'];
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
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
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
VideoUpdate(0, false);
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
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00113_00004_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, true);

['Event_00113_00003_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, true);

