['Scene_00204_Enter'];
MusicPlay(Music.情怨_1, true, false);

['Event_00204_00001_Trigger'];
SceneEnter(212);
PartySetPos(41, 46, 0);
FadeOut(0);

['Event_00204_00002_Trigger'];
SceneEnter(205);
PartySetPos(15, 93, 0);
FadeOut(0);

['Event_00204_00015_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00204_00016_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话

['Event_00204_00017_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00204_00018_Trigger'];
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
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00204_00019_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00204_00020_Trigger'];
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

['Event_00204_00004_Trigger'];
PartySetPos(35, 50, 0);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00005_Trigger");

['Event_00204_00024_Auto'];
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(0);

['Event_00204_00025_Auto'];
NpcMoveToBlockMutexLock(36, 46, 1, 2);
NpcMoveToBlockMutexLock(36, 47, 0, 2);
NpcSetDirFrame(3, 0);

['Event_00204_00027_Auto'];
ReplaceAndPause();
NpcSetDirFrame(1, 0);
NpcSetDirFrame(0, 0);
ReplaceAndPause();
NpcMoveToBlock(37, 47, 0, 3);

['Event_00204_00028_Trigger'];
SetDlgLower(2, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00204_00028_Trigger", 0);

['Event_00204_00021_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00204_00012_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00008_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00006_Trigger'];
RoleSetDirFrame(0, 1, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, false);

['Event_00204_00009_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00007_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00005_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);

