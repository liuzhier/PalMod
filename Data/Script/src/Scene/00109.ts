['Event_00109_00001_Trigger'];
SceneEnter(118);
PartySetPos(8, 117, 0);
FadeOut(0);

['Event_00109_00002_Trigger'];
SceneEnter(123);
PartySetPos(25, 41, 0);
FadeOut(0);

['Event_00109_00003_Trigger'];
SceneEnter(117);
PartySetPos(21, 91, 1);
FadeOut(0);

['Scene_00109_Enter'];
SceneSetScript(115, "@4328", "");
Replace();
['@4328'];
MusicPlay(Music.蝶舞春园_1, true, false);

['Event_00109_00007_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
FadeOut(0);
EventSetState(-1, -1, 0);
SceneSetScript(121, "@465F", "");
SceneEnter(121);

['Event_00109_00004_Trigger'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00109_00005_Trigger'];
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
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话

['Event_00109_00006_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
WaitEventAutoScriptRun(2, false, true);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
SetDlgLower(9, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
ReplaceAndPause();
//未知对话
//未知对话
NpcSetDirFrame(3, 0);

['Event_00109_00011_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@4B0E");
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(18, 88, 1, 8);
WaitEventAutoScriptRun(2, false, false);
EventSetState(108, 8, 2);
EventSetState(108, 9, 2);
EventSetState(108, 10, 2);
WaitEventAutoScriptRun(2, false, false);
PartyWalkToBlock(21, 91, 0, 8);
WaitEventAutoScriptRun(2, false, true);
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventWalkOneStep(-1, -1, -8, 4);
VideoUpdate(0, false);
EventWalkOneStep(-1, -1, -8, 4);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
EventWalkOneStep(-1, -1, 8, -4);
VideoUpdate(0, false);
EventWalkOneStep(-1, -1, 8, -4);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(76, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(108, 8, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(76, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(108, 8, 1, 0);
VideoUpdate(0, false);
EventSetDirFrame(108, 8, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(108, 8, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(108, 9, "@4B1A");
EventSetAutoScript(108, 10, "@4B1D");
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(108, 8, 3, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(108, 8, 2, 0);
WaitEventAutoScriptRun(14, false, false);
SetDlgLower(76, 0, false);
//未知对话
//未知对话
EventSetAutoScript(108, 11, "@4B20");
EventSetAutoScript(108, 9, "@4B25");
EventSetAutoScript(108, 10, "@4B27");
WaitEventAutoScriptRun(30, false, false);
EventSetDirFrame(108, 8, 3, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(108, 8, "@4B2A");
WaitEventAutoScriptRun(16, false, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(108, 8, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
EventSetAutoScript(108, 8, "@4B2C");
EventSetTriggerScript(129, 0, "@4B6F");
EventSetTriggerScript(108, 4, "@4AFF");
EventSetTriggerScript(108, 5, "@4B0B");
EventSetState(119, 2, 1);
EventSetState(119, 3, 2);
EventSetState(119, 4, 2);

['Event_00109_00008_Auto'];
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);

['Event_00109_00008_Trigger'];
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
CashModify(30000, "");
SetDlgBox(0);
//未知对话
['@4B3D'];
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
CashModify(-30000, "@4B45");
CashModify(30000, "");
GotoWithNop("@4B3D", 0);
['@4B45'];
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
GotoWithSelect("@4B3D");
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
CashModify(30000, "");
SetDlgBox(0);
//未知对话
['@4B51'];
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
CashModify(-30000, "@4B59");
CashModify(30000, "");
GotoWithNop("@4B51", 0);
['@4B59'];
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
GotoWithSelect("@4B51");
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
CashModify(30000, "");
SetDlgBox(0);
//未知对话
VideoUpdate(0, false);
Replace();
SetDlgUpper(67, 0, false);
//未知对话
//未知对话

['Event_00109_00012_Auto'];
Call("@4CE9");
EventModifyPos(-1, -1, 12, -5);
Call("@4CEC");
EventModifyPos(-1, -1, 12, -5);
GotoWithNop("Event_00109_00012_Auto", 0);

['Event_00109_00013_Trigger'];
SetDlgCenter(0, false);
//未知对话

['Event_00109_00015_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetTriggerScript(115, 2, "Event_00116_00002_Trigger");
RoleSetDirFrame(2, 0, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
//未知对话
PartySetRole(3, 1, 0);
SetBattleMusic(Music.御剑伏魔_1);
SetBattlefield(FbpWin.尚书府);
BattleStart(39, "", "");
PartySetRole(3, 1, 0);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
BattleEnd();
EventSetState(108, 17, 0);
EventSetState(108, 16, 0);
EventModifyPos(-1, -1, 0, -80);
EventSetLayer(-1, -1, 33);
EventSetAutoScript(-1, -1, "Event_00109_00012_Auto");
PartySetPos(20, 92, 1);
ViewportMove(128, -96, 0);
PartyWalkToBlock(22, 91, 0, 4);
ViewportMove(10, -7, 42);
WaitEventAutoScriptRun(20, false, false);
EventSetState(-1, -1, 0);
ViewportMove(0, 0, 0);
EventSetStateSequence(115, 3, 115, 11, 0);
EventSetState(115, 12, 0);
EventSetStateSequence(117, 6, 117, 8, 0);
EventSetState(118, 0, 1);

['Event_00109_00040_Trigger'];
EventSetState(-1, -1, 0);
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
AddItem(49, 0);

