['Event_00056_00002_Trigger'];
SceneEnter(55);
PartySetPos(8, 79, 0);
FadeOut(0);

['Event_00056_00003_Trigger'];
SceneEnter(71);
PartySetPos(51, 45, 0);
FadeOut(0);

['Event_00056_00004_Trigger'];
EventSetTriggerMode(55, 4, false, 1);
EventSetTriggerMode(56, 0, false, 1);
EventSetDirFrame(55, 4, 3, 0);
EventSetDirFrame(56, 0, 3, 0);
//苗人∶
//看什么看！　滚开！
ReplaceAndPause();
//苗人∶
//没听到是不是？！你欠扁吗？

['Scene_00056_Enter'];
SetBattlefield(FbpWin.鬼阴山_山脚竹林);

