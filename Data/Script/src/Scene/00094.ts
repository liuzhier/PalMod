['Event_00094_00001_Trigger'];
SceneEnter(83);
PartySetPos(22, 34, 0);
FadeOut(0);

['Event_00094_00002_Trigger'];
SceneEnter(86);
PartySetPos(28, 22, 1);
FadeOut(0);

['Event_00094_00003_Trigger'];
SceneEnter(95);
PartySetPos(20, 30, 1);
FadeOut(0);

['Event_00094_00004_Trigger'];
SceneEnter(96);
PartySetPos(20, 35, 1);
FadeOut(0);

['Event_00094_00005_Trigger'];
SceneEnter(98);
PartySetPos(12, 31, 1);
FadeOut(0);

['Event_00094_00006_Trigger'];
SceneEnter(98);
PartySetPos(42, 27, 0);
FadeOut(0);

['Event_00094_00007_Trigger'];
SceneEnter(98);
PartySetPos(10, 79, 0);
FadeOut(0);

['Event_00094_00027_Trigger'];
Call("@8B3C", 93, 27);
Call("@8B3C", 93, 28);

['Event_00094_00029_Trigger'];
Call("@8B3C", 93, 29);
Call("@8B3C", 93, 30);

['Event_00094_00031_Trigger'];
Call("@8B3C", 93, 31);
Call("@8B3C", 93, 32);

['Event_00094_00033_Trigger'];
Call("@8B3C", 93, 33);
Call("@8B3C", 93, 34);

['Event_00094_00035_Trigger'];
EventSetAutoScript(93, 35, "@3479");
EventSetTriggerMode(-1, -1, false, -1);
PlaySound(178);

['Event_00094_00017_Auto'];
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(23, 31, 0, 2);
NpcMoveToBlockMutexLock(26, 34, 1, 2);
NpcSetDirFrame(2, 0);
Call("Event_00094_00031_Trigger");
NpcMoveToBlockMutexLock(27, 33, 1, 2);
EventSetState(97, 6, 2);
EventSetState(-1, -1, 0);

['Event_00094_00016_Trigger'];
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
//无赖∶
//小娘子，你好香喔！
//让大爷抱一抱吧！
VideoRestore();
//看你细皮嫩肉的，真想捏你一把
VideoRestore();
//晚上有没有空啊？
//跟咱们快活快活。
EventSetState(-1, -1, 0);
EventSetAutoScript(93, 10, "");
EventSetAutoScript(93, 11, "");
EventSetAutoScript(93, 12, "");
EventSetState(93, 17, 2);
EventSetDirFrame(93, 10, 2, 0);
VideoUpdate(0, false);
//哼．．！
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(93, 11, 2, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetState(93, 10, 0);
EventSetState(93, 11, 0);
EventSetState(93, 12, 0);
EventSetState(93, 13, 1);
EventSetState(93, 14, 1);
EventSetState(93, 15, 1);
WaitEventAutoScriptRun(15, false, false);
SetDlgLower(1, 0, false);
//李逍遥∶
//哇．．好悍的女人

['Event_00094_00013_Auto'];
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
PlaySound(93);

['Event_00094_00014_Auto'];
WaitEventAutoScriptRun(7, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(2);
PlaySound(93);

['Event_00094_00015_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
PlaySound(93);

['Event_00094_00017_Trigger'];
//柳媚娘∶
//那三个白痴只是中了醍醐香
//躺在那睡上一个时辰自会醒来
ReplaceAndPause();
//这是我的房间，请你们出去！

['Event_00094_00018_Trigger'];
EventSetState(97, 7, 1);
//掌柜∶
//客官，如果想住宿的话
//只剩下楼上最右边的一间厢房。
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥∶
//哦？一间房···
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//掌柜∶
//你们小俩口挤一下
//有什么关系呢？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥∶
//不是、不是，您老误会了
//我们不是夫妻。
VideoUpdate(0, false);
//林月如∶
//·····
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//掌柜∶
//不是．．也没办法啊！
//全扬州城就我们一家客栈
//到了晚上，一般老百姓又不
//得任意外出，你们不住这儿
//就没地方睡了。
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥∶
//嗯··好吧！只好将就一下。
ReplaceAndPause();
//掌柜∶
//你们的房间在楼上
//最右边的那间

['Event_00094_00037_Trigger'];
EventSetTriggerMode(-1, -1, false, -1);
SetDlgUpper(23, 0, false);
//林月如∶
//李大哥！你快拦下她
SetBattlefield(FbpWin.客栈);
BattleStart(29, "@35D7", "");
['@35D7'];
BattleEnd();
EventSetState(93, 36, 0);
PartySetRole(3, 1, 0);
PartySetPos(24, 32, 1);
EventModifyPos(-1, -1, -32, -16);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
EventSetAutoScript(-1, -1, "@3606");
EventSetLayer(94, 0, 13);
WaitEventAutoScriptRun(0, false, false);
PlaySound(201);
WaitEventAutoScriptRun(12, false, false);
EventSetState(-1, -1, 0);
PartyWalkToBlock(23, 31, 1, 8);
SetDlgLower(1, 0, false);
//李逍遥∶
//如妹！  别追了
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如∶
//不能这样就算了．．啊～
//李大哥．．刚才你怎么这么快
//就赶过来了！？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥∶
//有个人替我盖被子，还在我耳
//边讲一些奇怪的话，我怎么可
//能不知不觉？
SetDlgUpper(24, 0, false);
//林月如∶
//原来．．你都听到了！
//你．．你好坏。
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥∶
//你也太逞强了，那个黑衣贼
//身手不弱，你一个人对付她
//太冒险了
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如∶
//我们二人联手就不怕她了吧！
//走！　咱们出去逮那黑衣贼

['Event_00094_00019_Trigger'];
//掌柜∶
//快去抓贼呀！
//别让那飞贼跑了

['Event_00094_00023_Trigger'];
//旅客∶
//奉了师父之命，要到京城去
//谁知道一经过扬州，竟然出
//不了城，这该怎么办才好？

['Event_00094_00026_Trigger'];
//旅客∶
//最近女飞贼集团闹得满城风雨
//家家户户不得安宁，这新上任
//的太守，我看还是没什么办法
//可以解决。

['Event_00094_00025_Trigger'];
//旅客∶
//我看呐、这新任的太守八成也
//是用走后门的。京里头在传言
//现在普通的县令，两千两银子
//就可以买到，六百两银子一个
//师爷、二百两就可以买到一个
//巡捕的位子，你看是不是很夸
//张？
ReplaceAndPause();
//旅客∶
//赶明儿个出城后
//我也去买个县令的位子玩玩。

['Event_00094_00020_Trigger'];
//客人∶
//怎么办，扬州城再继续
//这样下去，哪还能住人啊？

['Event_00094_00022_Trigger'];
//客人∶
//我就是因为城里那么乱
//才特地请到威震镖局的
//人来保护我一家大小的性命

['Event_00094_00021_Trigger'];
//客人∶
//我是泉州「威震镖局」总镖头
//─萧剑虹，要是还有鼠辈来骚
//扰，我见一个杀一个，来两个
//杀一双。

