['Event_00061_00001_Trigger'];
Call("@30E3");
['Scene_00061_Teleport'];
VideoShake(0, 0);
VideoWave(0, 0);
SceneEnter(65);
PartySetPos(19, 15, 0);
FadeOut(0);

['Event_00061_00002_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(38, 72, 1);
FadeOut(0);

['Event_00061_00003_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(43, 56, 1);
FadeOut(0);

['Event_00061_00004_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(51, 50, 0);
FadeOut(0);

['Event_00061_00005_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(46, 33, 0);
FadeOut(0);

['Event_00061_00006_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(36, 26, 1);
FadeOut(0);

['Event_00061_00007_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(12, 52, 1);
FadeOut(0);

['Event_00061_00008_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(9, 70, 0);
FadeOut(0);

['Event_00061_00009_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(15, 116, 1);
FadeOut(0);

['Event_00061_00010_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(24, 102, 1);
FadeOut(0);

['Event_00061_00011_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(20, 87, 0);
FadeOut(0);

['Event_00061_00012_Trigger'];
Call("@8E3B");
SceneEnter(66);
PartySetPos(31, 65, 1);
FadeOut(0);

['Event_00061_00025_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(60, 13, "@8EA6");
EventSetState(60, 13, 1);
EventSetState(60, 14, 0);

['Event_00061_00026_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(60, 15, "@8EA6");
EventSetState(60, 15, 1);
EventSetState(60, 16, 0);

['Event_00061_00027_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(60, 17, "@8EA6");
EventSetState(60, 17, 1);
EventSetState(60, 18, 0);

['Event_00061_00028_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(60, 19, "@8EA6");
EventSetState(60, 19, 1);
EventSetState(60, 20, 0);

['Event_00061_00029_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(60, 21, "@8EA6");
EventSetState(60, 21, 1);
EventSetState(60, 22, 0);

['Event_00061_00030_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(60, 23, "@8EA6");
EventSetState(60, 23, 1);
EventSetState(60, 24, 0);

['Scene_00061_Enter'];
SetBattlefield(FbpWin.将军冢);
MusicPlay(Music.步步为营, true, false);
SetBattleMusic(Music.战意昂);

['Event_00061_00052_Trigger'];
Call("@8E99");
SetDlgBox(0);
//获得１００文钱
CashModify(100, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//获得２００文钱
CashModify(200, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00061_00056_Trigger'];
Call("@8E99");
SetDlgBox(0);
//获得１０００文钱
CashModify(1000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00061_00055_Trigger'];
Call("@8E99");
SetDlgBox(0);
//获得行军丹
AddItem(40, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//获得腌肉
AddItem(34, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00061_00053_Trigger'];
Call("@8E99");
SetDlgBox(0);
//获得金创药
AddItem(41, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00061_00054_Trigger'];
Call("@8E99");
SetDlgBox(0);
//获得蜂王蜜
AddItem(71, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00061_00051_Trigger'];
Call("@8E99");
SetDlgBox(0);
//获得梅花镖
AddItem(93, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00061_00035_Auto'];
NpcChase(7, 0, false);
GotoWithNop("Event_00061_00035_Auto", 0);

