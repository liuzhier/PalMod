['Scene_00157_Enter'];
MusicPlay(Music.步步为营, true, false);
PartySetPos(10, 107, 0);
RoleMoveOneStep(0, 0, 6);
['Scene_00169_Enter'];
SetBattlefield(FbpWin.血池);

['Event_00157_00001_Trigger'];
SceneEnter(169);
PartySetPos(14, 53, 1);
FadeOut(0);

['Event_00157_00006_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(156, 2, "@8EA1");
EventSetAutoScript(156, 3, "@8EA1");
EventSetState(156, 4, 0);
EventSetState(156, 5, 0);

['Event_00157_00013_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(156, 7, "@8EA1");
EventSetAutoScript(156, 8, "@8EA1");
EventSetAutoScript(156, 9, "@8EA1");
EventSetAutoScript(156, 10, "@8EA1");
EventSetState(156, 11, 0);
EventSetState(156, 12, 0);

['Event_00157_00020_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(156, 14, "@8EA1");
EventSetAutoScript(156, 15, "@8EA1");
EventSetAutoScript(156, 16, "@8EA1");
EventSetAutoScript(156, 17, "@8EA1");
EventSetState(156, 18, 0);
EventSetState(156, 19, 0);

['Event_00157_00021_Auto'];
NpcSetFrame(0);
GotoWithProbability(3, "");
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
NpcSetFrame(8);
ReplaceAndPause();
NpcSetFrame(9);
ReplaceAndPause();
NpcSetFrame(10);
ReplaceAndPause();
NpcSetFrame(11);
ReplaceAndPause();
NpcSetFrame(12);
ReplaceAndPause();
NpcSetFrame(13);
ReplaceAndPauseWithNop("Event_00157_00021_Auto", 0);

['Event_00157_00056_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(197, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00157_00064_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(2, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00157_00057_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(52, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

