['Scene_00234_Enter'];
MusicStop(0);
HeroSetSprite(0, 232, true);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(37, 46, 1);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
MusicPlay(Music.今生情不悔, true, false);
EventSetState(233, 1, 1);
FadeToScene(4, -1);
SetDlgLower(73, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(233, 1, 0, 1);
FadeToScene(3, -1);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
FadeOut(0);
EventSetState(233, 1, 0);
EventSetState(233, 2, 0);
EventSetState(233, 3, 1);
WaitEventAutoScriptRun(10, false, false);
AddItem(200, 0);
AddItem(174, 0);
AddItem(135, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(233, 4, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(234, 0, 3, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(233, 4, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(234, 0, 0, 0);
ViewportMove(-2, 1, 32);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(233, 3, 3, 0);
VideoUpdate(0, false);
EventSetDirFrame(233, 3, 2, 0);
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(234, 15, "@7E46");
EventSetState(233, 3, 0);
EventSetState(233, 4, 0);
EventSetState(234, 0, 0);
RoleSetAttr(Attribute.AvatarId, 88, 2);
RoleSetAttr(Attribute.SpriteId, 38, 2);
RoleSetAttr(Attribute.SpriteIdInBattle, 9, 2);
HeroSetSprite(0, 2, false);
PartySetPos(35, 48, 1);
PartySetRole(2, 1, 5);
RoleSetDirFrame(0, 0, 0);
ViewportMove(0, 0, 0);
SceneEnter(235);

['Event_00234_00003_Auto'];
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(35, 48, 1, 2);

