['Event_00116_00001_Trigger'];
SceneEnter(117);
PartySetPos(54, 111, 1);
FadeOut(0);

['Event_00116_00002_Trigger'];
SceneEnter(119);
PartySetPos(22, 32, 1);
FadeOut(0);

['Event_00116_00012_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
EventSetTriggerScript(115, 2, "@5050");
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 1);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 2);
WaitEventAutoScriptRun(20, false, false);
NpcSetDirFrame(0, 3);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(0, 4);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 5);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 6);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 6);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 6);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 8);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 9);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 10);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 11);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
PlaySound(265);
SetDlgCenter(0, false);
//未知对话
MusicPlay(Music.醉仙驱魔, true, false);
WaitEventAutoScriptRun(8, false, false);
Call("@50E9");
Call("@510E");
Call("@50E9");
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 21);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 22);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 23);
EventSetAutoScript(115, 3, "@50DB");
WaitEventAutoScriptRun(32, false, false);
MusicStop(1);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
PartyWalkToBlock(34, 32, 1, 4);
PartyWalkToBlock(36, 34, 0, 4);
SetDlgCenter(0, false);
//未知对话
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
SetDlgLower(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
EventSetAutoScript(115, 13, "@5129");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
EventSetState(108, 17, 1);
EventSetState(108, 15, 1);
EventSetState(108, 16, 1);
SceneSetScript(115, "@50D9", "");
SceneSetScript(116, "@50D9", "");
SceneSetScript(117, "@50D9", "");
SceneSetScript(109, "@50D9", "");
SceneSetScript(119, "@50D9", "");
SceneSetScript(120, "@50D9", "");
SceneSetScript(122, "@50D9", "");
SceneSetScript(123, "@50D9", "");
SceneSetScript(124, "@50D9", "");
SceneSetScript(125, "@50D9", "");
VideoWave(0, 0);
MusicPlay(Music.宿命, true, false);
ReplaceAndPause();
SetDlgCenter(0, false);
//未知对话

