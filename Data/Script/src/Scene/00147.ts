['Scene_00147_Enter'];
PartySetRole(1, 3, 0);
SetBattlefield(FbpWin.锁妖塔);
SetBattleMusic(Music.罗汉阵);
PartySetPos(37, 35, 0);
MusicPlay(Music.救佳人, true, false);

['Event_00147_00001_Trigger'];
SceneEnter(166);
PartySetPos(45, 18, 0);
FadeOut(0);

['Event_00147_00002_Trigger'];
EventSetState(-1, -1, 0);
EventSetState(147, 0, 1);
FadeToScene(0, -1);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(2, false, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
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
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
EventSetState(147, 0, 0);
FadeToScene(0, -1);

