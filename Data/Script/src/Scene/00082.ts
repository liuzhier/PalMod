['Event_00082_00001_Trigger'];
SceneEnter(85);
PartySetPos(16, 58, 0);
FadeOut(0);

['Scene_00082_Enter'];
HeroSetSprite(0, 385, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(47, 63, 0);
PlaySound(213);
WaitEventAutoScriptRun(10, false, false);
MusicPlay(Music.乐逍遥, true, false);
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
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
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(81, 3, 1, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetDirFrame(81, 3, 0, 0);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(81, 3, 1, 0);
WaitEventAutoScriptRun(3, false, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetDirFrame(81, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//未知对话
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
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetAutoScript(81, 23, "@3AA3");
EventSetAutoScript(81, 24, "@3AAC");
EventSetAutoScript(81, 22, "@3AB0");
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(81, 23, "");
EventSetAutoScript(81, 24, "");
EventSetAutoScript(81, 22, "");
EventSetDirFrame(81, 23, 0, 0);
EventSetDirFrame(81, 24, 0, 0);
EventSetDirFrame(81, 22, 0, 0);
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
GotoWithNop("@3881", 0);
['@387E'];
SetDlgLower(62, 0, false);
//未知对话
//未知对话
['@3881'];
EventSetAutoScript(81, 23, "@3AA3");
EventSetAutoScript(81, 24, "@3AAC");
EventSetAutoScript(81, 22, "@3AB0");
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(15, false, false);
EventSetDirFrame(81, 3, 1, 0);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(81, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(81, 23, "");
EventSetAutoScript(81, 24, "");
EventSetAutoScript(81, 22, "");
EventSetDirFrame(81, 23, 0, 0);
EventSetDirFrame(81, 24, 0, 0);
EventSetDirFrame(81, 22, 0, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
GotoWithSelect("@A9F7");
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(81, 3, 1, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
EventSetDirFrame(81, 3, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(81, 3, 1, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
EventSetState(81, 22, 0);
EventSetState(81, 23, 0);
EventSetState(81, 24, 0);
EventSetState(91, 16, 1);
EventSetTriggerScript(84, 11, "@38F5");
EventSetTriggerScript(84, 12, "@AA18");
EventSetState(89, 2, 0);
EventSetState(92, 5, 2);
EventSetState(92, 7, 2);
EventSetState(92, 8, 2);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(0, 0, 0);
Call("Event_00082_00001_Trigger");
MusicPlay(Music.大开眼界, true, false);
ReplaceAndPause();

['Event_00082_00027_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00082_00028_Trigger'];
//未知对话
//未知对话

['Event_00082_00025_Auto'];
NpcMoveToBlock(51, 66, 1, 8);
NpcMoveToBlock(48, 63, 1, 3);

['Event_00082_00004_Trigger'];
//未知对话

['Event_00082_00002_Trigger'];
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(10, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
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
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
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
CashModify(5500, "");
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
SetDlgLower(10, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
SetDlgLower(5, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

