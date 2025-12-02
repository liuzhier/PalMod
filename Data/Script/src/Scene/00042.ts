['Event_00042_00001_Trigger'];
SceneEnter(48);
PartySetPos(40, 83, 0);
FadeOut(0);

['Event_00042_00003_Trigger'];
SceneEnter(47);
PartySetPos(50, 98, 0);
FadeOut(0);

['Event_00042_00004_Trigger'];
SceneEnter(47);
PartySetPos(20, 64, 0);
FadeOut(0);

['Event_00042_00005_Trigger'];
SceneEnter(47);
PartySetPos(7, 71, 0);
FadeOut(0);

['Event_00042_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(57, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(57, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
NpcSetFrame(1);
SetBattleMusic(Music.心急如焚);
SetBattlefield(FbpWin.隐龙窟);
BattleStart(45, "@A073", "");
SetBattleMusic(Music.战意昂);
ReplaceAndPause();
SetDlgCenter(0, false);
//未知对话

['Event_00042_00014_Trigger'];
Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(300, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(400, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99");
SetDlgBox(0);
//未知对话
CashModify(500, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

