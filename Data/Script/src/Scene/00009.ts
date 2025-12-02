['Event_00009_00001_Trigger'];
PartySetPos(46, 104, 1);
SceneEnter(5);
FadeOut(0);

['Event_00009_00006_Trigger'];
PartySetPos(39, 78, 0);
SceneEnter(5);
FadeOut(0);

['Event_00009_00004_Auto'];
ReplaceAndPause();
GotoWithProbability(10, "Event_00009_00004_Auto");
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
WaitEventAutoScriptRun(4, false, false);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00009_00004_Auto", 0);

['Event_00009_00002_Trigger'];
//丁大伯：
//我．．我不行了．．呵～呵～
ReplaceAndPause();
//呵．．咳～

['Event_00009_00003_Trigger'];
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥，拜托你帮帮忙
//我爹爹的哮喘病的突然发作了
//你能否帮我们把洪大夫请过来
EventSetTriggerScript(4, 28, "@081B");
EventSetTriggerScript(4, 29, "@081B");
ReplaceAndPause();
//这回爹爹的病发的急，现在又
//是三更半夜的，我们姐妹俩真
//不知该怎么办才好

['Event_00009_00004_Trigger'];
SetDlgUpper(35, 0, false);
//秀兰：
//呜～怎么办．．怎么办．．

['Event_00009_00007_Trigger'];
//老王：
//哦～逍遥老弟．．
//你有没有看到我们家小虎子啊
ReplaceAndPause();
//这孩子又不知跑到哪里玩去了
//这么晚了还不知道要回来
ReplaceAndPauseWithNop("Event_00009_00007_Trigger", 0);

['Event_00009_00010_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
CashModify(5, "");
EventSetState(-1, -1, 0);

['Event_00009_00008_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(15, 0);
EventSetState(-1, -1, 0);

['Event_00009_00009_Trigger'];
PlaySound(78);
SetDlgBox(0);
//未知对话
AddItem(17, 0);
EventSetState(-1, -1, 0);

