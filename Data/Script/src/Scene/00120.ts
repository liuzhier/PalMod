['Event_00120_00001_Trigger'];
Call("@8E3B");
SceneEnter(119);
PartySetPos(31, 25, 0);
FadeOut(0);

['Event_00120_00002_Trigger'];
SetDlgCenter(0, false);
//未知对话

['Event_00120_00003_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00120_00004_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00120_00007_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00120_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgCenter(0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00109_00013_Trigger", 0);

['Event_00120_00014_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(23, 0);
AddItem(21, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00120_00015_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(22, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00120_00016_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(3000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

