['Scene_00174_Enter'];
MusicPlay(Music.红尘路缈, true, false);
RoleUninstallEquip(1, UninstallEquip.Ornament);
RoleUninstallEquip(2, UninstallEquip.All);
PartySetPos(15, 23, 0);
HeroSetSprite(0, 232, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(0, 0, false);
//未知对话
VideoRestore();
//未知对话
FadeToScene(0, -1);
EventSetAutoScript(173, 1, "@6C59");
WaitEventAutoScriptRun(37, false, false);
EventSetState(173, 1, 0);
WaitEventAutoScriptRun(3, false, false);
SceneEnter(175);

