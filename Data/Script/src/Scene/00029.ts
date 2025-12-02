['Event_00029_00001_Trigger'];
SceneEnter(26);
PartySetPos(15, 44, 1);
FadeOut(0);

//未知对话

['Event_00029_00003_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00029_00004_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00029_00005_Trigger'];
//未知对话
//未知对话

['Event_00029_00006_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00029_00007_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00029_00008_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00029_00009_Trigger'];
//未知对话
//未知对话
//未知对话

//未知对话
//未知对话
//未知对话
//未知对话

['Event_00029_00010_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00029_00002_Trigger'];
MusicStop(0);
WaitEventAutoScriptRun(6, false, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
SetBattlefield(FbpWin.客栈);
BattleStart(23, "@A073", "");
BattleEnd();
EventSetStateSequence(23, 16, 23, 30, 0);
EventSetAutoScript(28, 2, "");
EventSetDirFrame(28, 2, 0, 2);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetState(-1, -1, 0);
SceneSetScript(27, "@1A7D", "");
SceneEnter(27);
FadeOut(0);
MusicPlay(Music.繁华看尽, true, false);

['Event_00029_00002_Auto'];
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00029_00002_Auto", 0);

