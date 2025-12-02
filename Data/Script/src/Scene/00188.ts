['Event_00188_00001_Trigger'];
SceneEnter(187);
PartySetPos(7, 88, 0);
FadeOut(0);

['Event_00188_00002_Trigger'];
SceneEnter(185);
PartySetPos(9, 88, 1);
FadeOut(0);

['Event_00188_00005_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetFrame(1);
EventSetAutoScript(187, 3, "@8EA6");
EventSetState(187, 3, 1);
EventSetState(187, 4, 0);

['Scene_00188_Enter'];
SetBattlefield(FbpWin.木道人);
MusicPlay(Music.神木林_变奏, true, false);

