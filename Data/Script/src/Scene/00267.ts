['Event_00267_00001_Trigger'];
PartySetPos(6, 11, 1);
SceneEnter(270);
FadeOut(0);

['Event_00267_00002_Trigger'];
SceneEnter(269);
PartySetPos(14, 31, 1);
FadeOut(0);

['Event_00267_00004_Auto'];
EventWalkOneStep(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 4);
GotoWithNop("Event_00267_00004_Auto", 15);
EventWalkOneStep(-1, -1, 0, 3);
EventModifyPos(-1, -1, 0, 2);
EventWalkOneStep(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 1);
['@860E'];
EventAnimate(0);
ReplaceAndPauseWithNop("@860E", 4);
EventWalkOneStep(-1, -1, 0, -2);
EventModifyPos(-1, -1, 0, -2);
EventWalkOneStep(-1, -1, 0, -3);
EventModifyPos(-1, -1, 0, -3);
EventWalkOneStep(-1, -1, 0, -4);
EventModifyPos(-1, -1, 0, -4);
['@8616'];
EventWalkOneStep(-1, -1, 0, -5);
EventModifyPos(-1, -1, 0, -5);
GotoWithNop("@8616", 0);

['Scene_00267_Enter'];
MusicPlay(Music.回梦, true, false);
SetBattlefield(FbpWin.十里坡);
SetBattleMusic(Music.势如破竹);
PartySetPos(30, 46, 0);
HeroSetSprite(0, 232, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(22, false, false);
EventSetDirFrame(266, 3, 0, 0);
WaitEventAutoScriptRun(14, false, false);
EventSetState(266, 5, 0);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(12, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(266, 4, 0);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(266, 3, "@861A");
WaitEventAutoScriptRun(7, false, false);
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(266, 3, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(266, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(266, 3, "@861C");
WaitEventAutoScriptRun(12, false, false);
ReplaceAndPause();

['Event_00267_00008_Auto'];
NpcMoveToBlock(32, 102, 1, 3);

['Event_00267_00007_Trigger'];
EventSetState(266, 6, 2);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['Event_00267_00007_Auto'];
NpcMoveToBlock(27, 40, 0, 3);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(28, 39, 0, 3);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlock(25, 42, 0, 3);
WaitEventAutoScriptRun(20, false, false);
NpcMoveToBlock(33, 50, 0, 3);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(29, 46, 1, 3);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlock(31, 44, 1, 3);
WaitEventAutoScriptRun(30, false, false);
ReplaceAndPauseWithNop("Event_00267_00007_Auto", 0);

['Event_00267_00006_Trigger'];
Call("@8E99");
SetDlgCenter(0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
EventSetState(267, 0, 2);
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(85, 0, false);
//未知对话
//未知对话
PartyWalkToBlock(34, 101, 0, 2);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(85, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(267, 0, "@87E0");
PartyWalkToBlock(33, 102, 0, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(267, 0, "@87E8");
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
ReplaceAndPause();

NpcMoveToBlock(44, 58, 0, 3);
NpcMoveToBlock(52, 66, 0, 8);

NpcMoveToBlock(50, 62, 0, 3);

