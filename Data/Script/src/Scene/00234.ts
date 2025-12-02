['Scene_00234_Enter'];
MusicStop(0);
HeroSetSprite(0, 232, true);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(37, 46, 1);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//$08娘亲．．．孩儿来看您了
VideoUpdate(0, false);
MusicPlay(Music.今生情不悔, true, false);
EventSetState(233, 1, 1);
FadeToScene(4, -1);
SetDlgLower(73, 0, false);
//灵儿．．我的孩子～辛苦你了
//你能够到这里来，一定受了不
//少委屈和苦难吧．．
VideoRestore();
//为娘最感到欣慰的是．．
//你有一位能宽容你、爱护你
//的丈夫，这一点．．你比为
//娘的幸福多了
//希望你能继承为娘最后的心愿
//用爱来化解两族之间的仇恨。
//这是你做得到、也应该做的
VideoRestore();
//娘虽不能在人世间与你团聚
//但是娘在天上，也会默默的
//为你祝福．．
VideoUpdate(0, false);
EventSetDirFrame(233, 1, 0, 1);
FadeToScene(3, -1);
SetDlgLower(11, 0, false);
//赵灵儿：
//娘．．．！
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
//赵灵儿：
//$02走吧～到祭坛去！
//我要学娘一样施法祭天祈雨
//只要解除干旱，大家就不必
//再为争夺水源而打仗了
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

