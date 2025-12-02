['Event_00143_00001_Auto'];
EventWalkOneStep(-1, -1, -1, 4);
GotoWithNop("Event_00143_00001_Auto", 0);

['Event_00143_00003_Auto'];
NpcSetDirFrame(1, 0);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['Scene_00143_Enter'];
SetPalette(Palette.忆往昔_日夜);
ViewportMove(15, 56, -1);
WaitEventAutoScriptRun(30, false, false);
EventSetAutoScript(142, 1, "");
WaitEventAutoScriptRun(8, false, false);
EventSetState(142, 1, 0);
EventSetState(142, 2, 1);
FadeToScene(3, -1);
EventSetDirFrame(142, 2, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(142, 2, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(142, 2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetAutoScript(142, 2, "Event_00143_00003_Auto");
WaitEventAutoScriptRun(4, false, false);
EventSetState(142, 2, 0);
EventSetState(143, 0, 1);
WaitEventAutoScriptRun(10, false, false);
SceneEnter(144);
FadeOut(0);
ReplaceAndPause();

