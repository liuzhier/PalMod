['Event_00048_00003_Trigger'];
SceneEnter(42);
PartySetPos(25, 43, 0);
FadeOut(0);

['Event_00048_00002_Trigger'];
SceneEnter(49);
PartySetPos(14, 104, 1);
FadeOut(0);

['Event_00048_00005_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
EventModifyPos(-1, -1, -16, -8);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00048_00006_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00048_00007_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00048_00008_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00048_00009_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00048_00010_Trigger'];
//未知对话
//未知对话

['Event_00048_00011_Trigger'];
//未知对话
//未知对话
//未知对话

['Event_00048_00012_Trigger'];
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00048_00013_Trigger'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00048_00004_Trigger'];
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
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
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
VideoRestore();
//未知对话
//未知对话
VideoRestore();
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
EventSetState(-1, -1, 0);
SetBattleMusic(Music.势如破竹_副本);
SetBattlefield(FbpWin.隐龙窟);
BattleStart(44, "@A073", "");
SetBattleMusic(Music.战意昂);
AddItem(229, 0);
SetDlgBox(0);
//未知对话
BattleEnd();
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话

['Event_00048_00014_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@2590");
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00048_00015_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@2598");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@259E");
ReplaceAndPause();
//未知对话
//未知对话

['Event_00048_00016_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@25AE");
ReplaceAndPause();
//未知对话

['Event_00048_00017_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@25B5");
ReplaceAndPause();
//未知对话

['Event_00048_00001_Trigger'];
SetDlgCenter(0, false);
//未知对话

['Event_00048_00019_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(139, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(140, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(142, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00022_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(179, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(180, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(181, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00020_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(192, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(194, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00021_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(193, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00018_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(196, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00029_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(26, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(20, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(33, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00030_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(37, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00031_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(90, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00032_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
AddItem(81, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00026_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
CashModify(100, "");
EventSetState(-1, -1, 0);

['Event_00048_00027_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
CashModify(230, "");
EventSetState(-1, -1, 0);

['Event_00048_00028_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
CashModify(300, "");
EventSetState(-1, -1, 0);

