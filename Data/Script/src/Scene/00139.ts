['Scene_00139_Teleport'];
SceneEnter(118);
PartySetPos(16, 106, 0);
FadeOut(0);

['Event_00139_00001_Trigger'];
SceneEnter(140);
PartySetPos(19, 49, 0);
FadeOut(0);

['Event_00139_00006_Trigger'];
EventSetState(-1, -1, 0);
EventSetPos(3, 0, 85, 0);
PartyWalkToBlock(42, 83, 0, 8);
MusicPlay(Music.危机, true, false);
ViewportMove(0, -4, 28);
SetDlgUpper(53, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
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
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(138, 2, 0);
EventSetState(138, 3, 1);
PlaySound(260);
FadeToScene(2, -1);
EventSetDirFrame(138, 3, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
ViewportMove(0, 14, 8);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
PartyWalkToBlock(43, 81, 1, 8);
PartyWalkToBlock(41, 79, 0, 8);
PartyWalkToBlock(43, 76, 1, 8);
RoleSetDirFrame(1, 0, 0);
RoleSetDirFrame(1, 0, 1);
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
EventModifyPos(138, 3, 16, 8);
EventSetDirFrame(138, 3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(138, 3, 16, 8);
EventSetDirFrame(138, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(138, 3, 16, 8);
EventSetDirFrame(138, 3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(138, 3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
PartySetRole(1, 3, 0);
SetBattlefield(FbpWin.终南山_巨蜘蛛网);
SetBattleMusic(Music.势如破竹_副本);
BattleStart(42, "", "");
EnemySetScript(38, EnemyScript.TurnStart, "");
MusicPlay(Music.停止播放, true, false);
BattleEnd();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
MusicPlay(Music.救黎民, true, false);
EventSetState(138, 7, 1);
EventSetState(138, 4, 0);
EventSetState(138, 5, 0);
EventSetState(1, 0, 2);
EventSetState(1, 0, 2);
ViewportMove(42, 32, -1);
ViewportMove(0, 24, 18);
ViewportMove(0, 0, 0);
EventSetState(138, 7, 0);
EventSetDirFrame(138, 3, 0, 2);
PlaySound(95);
WaitEventAutoScriptRun(8, false, false);
PlaySound(269);
EventSetDirFrame(138, 3, 0, 3);
FadeToScene(2, -1);
EventSetState(139, 0, 2);
WaitEventAutoScriptRun(16, false, false);
EventSetAutoScript(139, 0, "@5587");
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(139, 0, "");
PartyWalkToBlock(43, 76, 0, 2);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
MusicStop(1);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
EventSetDirFrame(139, 0, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(139, 0, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
PartySetRole(1, 0, 0);
FadeOut(0);
SceneEnter(141);

['Event_00139_00007_Auto'];
EventModifyPos(-1, -1, 0, 32);
GotoWithNop("Event_00139_00007_Auto", 0);

['Event_00139_00008_Auto'];
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 10);
EventModifyPos(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 2);

