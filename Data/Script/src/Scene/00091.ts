['Scene_00091_Enter'];
PlaySound(134);
FadeToScene(0, -1);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
//未知对话
EventSetStateSequence(92, 20, 92, 23, 2);
ReplaceAndPause();

['Event_00091_00002_Trigger'];
SceneEnter(93);
PartySetPos(16, 85, 0);
FadeOut(0);

