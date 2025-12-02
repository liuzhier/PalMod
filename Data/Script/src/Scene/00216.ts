['Event_00216_00001_Trigger'];
SceneEnter(215);
PartySetPos(12, 54, 0);
FadeOut(0);

['Event_00216_00002_Trigger'];
SceneEnter(217);
PartySetPos(14, 72, 0);
FadeOut(0);

['Event_00216_00003_Trigger'];
SceneEnter(217);
PartySetPos(21, 80, 0);
FadeOut(0);

['Event_00216_00004_Trigger'];
SceneEnter(217);
PartySetPos(33, 52, 1);
FadeOut(0);

['Event_00216_00012_Auto'];
NpcMoveToBlock(36, 22, 0, 3);
NpcMoveToBlock(36, 21, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00216_00005_Trigger'];
MusicStop(0);
SetDlgCenter(0, false);
//未知对话
SetBattleMusic(Music.势如破竹_副本);
BattleStart(223, "", "");
SetBattleMusic(Music.势如破竹);
BattleEnd();
EventSetState(215, 12, 1);
WaitEventAutoScriptRun(18, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(18, false, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(215, 12, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(215, 12, 1, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
EventSetState(172, 8, 0);
EventSetState(173, 0, 1);
EventSetStateSequence(215, 5, 215, 11, 0);
EventSetDirFrame(215, 12, 3, 0);
RoleSetDirFrame(3, 0, 0);
FadeOut(0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(215, 12, 0);
PartySetRole(1, 5, 0);
MusicPlay(Music.灵山, true, false);

