['Scene_00049_Teleport'];
SceneEnter(50);
PartySetPos(18, 102, 0);
FadeOut(0);

['Event_00049_00007_Trigger'];
EventSetAutoScript(48, 7, "@8D77");
WaitEventAutoScriptRun(0, false, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['Event_00049_00008_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@2889");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@288E");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@2894");
ReplaceAndPause();
['@287F'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@2899");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@28A1");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, -1);
EventSetAutoScript(-1, -1, "@28A9");
ReplaceAndPauseWithNop("@287F", 0);

['Event_00049_00009_Trigger'];
EventSetState(-1, -1, 0);
AddItem(225, 0);
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话

['Event_00049_00009_Auto'];
JumpIfEventNotInZone(48, 8, 0, "Event_00049_00009_Auto");
Call("@28BB");
EventSetState(-1, -1, 0);

['Event_00049_00010_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
ReplaceAndPauseWithNop("Event_00049_00010_Trigger", 0);

['Scene_00049_Enter'];
MusicPlay(Music.小桥流水, true, false);
PartySetPos(14, 104, 1);
RoleSetDirFrame(0, 0, 0);
SetPaletteTime(0);
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
//未知对话
WaitEventAutoScriptRun(30, false, false);
VideoFadeAndUpdate(-4);
EventSetState(48, 2, 0);
EventSetState(48, 3, 0);
EventSetState(48, 4, 0);
EventSetState(48, 5, 0);
EventSetState(48, 6, 0);
VideoUpdate(2, false);
SetDlgLower(4, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(4, 0, false);
//未知对话
//未知对话
Replace();
SetBattlefield(FbpWin.鬼阴山_山脚竹林);

['Event_00049_00002_Auto'];
ReplaceAndPause();
['Event_00049_00003_Auto'];
EventAnimate(0);
ReplaceAndPauseWithNop("Event_00049_00003_Auto", 0);

ReplaceAndPause();
