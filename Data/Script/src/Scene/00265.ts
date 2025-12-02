['Event_00265_00001_Trigger'];
SceneEnter(262);
PartySetPos(35, 59, 1);
FadeOut(0);

['Event_00265_00022_Trigger'];
EventSetDirFrame(264, 22, 0, 1);
EventSetState(264, 22, 1);
EventSetState(264, 23, 0);
EventSetTriggerMode(264, 22, false, -1);

['Event_00265_00024_Trigger'];
EventSetDirFrame(264, 24, 0, 1);
EventSetState(264, 24, 1);
EventSetState(264, 25, 0);
EventSetTriggerMode(264, 24, false, -1);

['Event_00265_00026_Trigger'];
EventSetDirFrame(264, 26, 0, 1);
EventSetState(264, 26, 1);
EventSetState(264, 27, 0);
EventSetTriggerMode(264, 26, false, -1);

['Event_00265_00039_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(186, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

