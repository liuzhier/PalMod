['Scene_00249_Enter'];
MusicPlay(Music.回梦, true, false);

['Event_00249_00001_Trigger'];
SceneEnter(256);
PartySetPos(20, 100, 0);
FadeOut(0);

['Event_00249_00002_Trigger'];
SceneEnter(255);
PartySetPos(8, 60, 0);
FadeOut(0);

['Event_00249_00003_Auto'];
NpcMoveToBlockMutexLock(38, 51, 0, 2);

['Event_00249_00004_Auto'];
NpcMoveToBlock(38, 50, 0, 3);
NpcMoveToBlock(37, 49, 0, 3);
NpcSetDirFrame(3, 0);

['Event_00249_00005_Auto'];
NpcMoveToBlock(39, 51, 0, 3);
NpcMoveToBlock(40, 52, 0, 3);
NpcSetDirFrame(1, 0);

['Event_00249_00024_Trigger'];
EventSetState(-1, -1, 0);
PartyWalkToBlock(31, 60, 0, 8);
PartyWalkToBlock(32, 59, 0, 2);
ViewportMove(8, -4, 14);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@8413");
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@8420");
EventSetAutoScript(248, 6, "@80E7");
WaitEventAutoScriptRun(5, false, false);
EventSetState(248, 3, 2);
EventSetState(248, 4, 2);
EventSetState(248, 5, 2);
ViewportMove(2, -1, 32);
WaitEventAutoScriptRun(24, false, false);
Call("@8413");
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@8420");
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@8413");
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@8420");
SetDlgUpper(80, 0, false);
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
VideoUpdate(0, false);
Call("@8413");
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@8420");
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Call("@8413");
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(248, 6, "@8173");
WaitEventAutoScriptRun(3, false, false);
Call("@8420");
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(248, 3, "@8178");
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(248, 11, "@817B");
EventSetAutoScript(248, 12, "@8181");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(248, 13, "@8184");
EventSetAutoScript(248, 14, "@8187");
EventSetAutoScript(248, 15, "@818A");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(248, 16, "@818F");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(248, 17, "@8192");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(248, 18, "@8196");
EventSetAutoScript(248, 19, "@8199");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(248, 6, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(248, 6, 1, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(248, 6, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(248, 6, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(248, 6, "@8176");
WaitEventAutoScriptRun(6, false, false);
ViewportMove(-4, 2, 44);

['Event_00249_00020_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00249_00021_Trigger'];
//未知对话
//未知对话

['Event_00249_00022_Trigger'];
//未知对话
//未知对话

['Event_00249_00023_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00249_00004_Trigger'];
//未知对话
//未知对话

['Event_00249_00005_Trigger'];
//未知对话
//未知对话

['Event_00249_00007_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00249_00008_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00249_00009_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00249_00010_Trigger'];
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话

