['Scene_00191_Teleport'];
SceneEnter(176);
PartySetPos(8, 100, 1);
FadeOut(0);

['Event_00191_00001_Trigger'];
SceneEnter(182);
PartySetPos(48, 117, 1);
FadeOut(0);

['Event_00191_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventModifyPos(-1, -1, 8, -4);
VideoUpdate(0, false);
EventModifyPos(-1, -1, 8, -4);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
RoleMoveOneStep(16, -8, 0);
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
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话

['Scene_00191_Enter'];
SetBattleMusic(Music.势如破竹);

['Event_00191_00018_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(85, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00191_00022_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(50, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

