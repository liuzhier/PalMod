['Scene_00170_Enter'];
SetPalette(Palette.忆往昔_日夜);
HeroSetSprite(0, 193, true);
RoleSetDirFrame(0, 12, 0);
PartySetPos(18, 93, 0);
VideoUpdate(3, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
SceneEnter(171);
ReplaceAndPause();
PartySetPos(36, 72, 0);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(0, 0, 0);
FadeToScene(6, -1);
EventSetDirFrame(170, 0, 0, 1);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(0, 0, false);
//未知对话
SceneSetScript(146, "@5DA7", "");
SceneEnter(146);
FadeOut(4);

