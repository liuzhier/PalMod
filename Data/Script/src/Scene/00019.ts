['Scene_00019_Enter'];
EventSetTriggerScript(15, 1, "@1073");
EventSetTriggerScript(1, 0, "@1077");
PlaySound(260);
FadeToScene(2, -1);
ReplaceAndPause();

['Scene_00019_Teleport'];
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
Replace();
SceneEnter(17);
PartySetPos(9, 51, 1);
FadeOut(0);

