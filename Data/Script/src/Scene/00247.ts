['Scene_00247_Enter'];
PlaySound(274);
PartySetPos(49, 106, 0);
RoleSetDirFrame(2, 0, 0);
VideoWave(255, -4);
VideoFadeAndUpdate(1);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//李逍遥∶
//咦．．这是哪里？
SetBattlefield(FbpWin.扬州山道);
ReplaceAndPause();

['Event_00247_00001_Auto'];
EventWalkOneStep(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 4);
GotoWithNop("Event_00247_00001_Auto", 0);

['Event_00247_00002_Auto'];
EventWalkOneStep(-1, -1, 0, -4);
EventModifyPos(-1, -1, 0, -6);
EventWalkOneStep(-1, -1, 0, -8);
EventModifyPos(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, 0, -8);
EventModifyPos(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, 0, -6);
EventModifyPos(-1, -1, 0, -4);
EventWalkOneStep(-1, -1, 0, -2);
EventModifyPos(-1, -1, 0, -1);
EventWalkOneStep(-1, -1, 0, -1);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
ReplaceAndPause();
EventAnimate(0);
EventModifyPos(-1, -1, 0, 1);
EventWalkOneStep(-1, -1, 1, 1);
EventModifyPos(-1, -1, 2, 2);
EventWalkOneStep(-1, -1, 3, 3);
EventModifyPos(-1, -1, 4, 4);
EventWalkOneStep(-1, -1, 5, 5);
EventModifyPos(-1, -1, 6, 6);
EventWalkOneStep(-1, -1, 7, 7);
EventModifyPos(-1, -1, 8, 8);
EventWalkOneStep(-1, -1, 9, 9);
EventModifyPos(-1, -1, 10, 10);
EventWalkOneStep(-1, -1, 11, 11);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventModifyPos(-1, -1, 12, 12);
EventWalkOneStep(-1, -1, 12, 12);
EventSetState(-1, -1, 0);

['Event_00247_00009_Auto'];
NpcMoveToBlock(34, 110, 0, 8);

['Event_00247_00010_Auto'];
NpcMoveToBlock(34, 111, 1, 8);

['Event_00247_00003_Trigger'];
EventSetState(-1, -1, 0);
RoleSetDirFrame(1, 0, 0);
ViewportMove(-8, -4, 16);
SetDlgUpper(75, 0, false);
//妇人∶
//是谁派你们来的？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//黑苗士兵∶
//奉教主之命，凡王后的
//同党一律格杀！
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//妇人∶
//哼～　教主、教主、
//你们眼中还有巫王吗！？
//竟然连小公主也不放过
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//黑苗士兵∶
//哈哈哈～此事乃教主奉了
//巫王陛下的旨意，制裁你们
//这群妖言惑众的妖女！拯救
//黑苗族
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//妇人∶
//哼！你们那狗屁教主才是妖孽
//你们不相信巫后娘娘，竟然相
//信那老魔头的鬼话！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//黑苗士兵∶
//好一付尖牙利嘴，弟兄们～
//砍下这泼妇的头去见教主！
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥∶
//请问．．．你们是谁？
//这里又是哪里？
EventSetDirFrame(246, 6, 3, 0);
EventSetDirFrame(246, 7, 3, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//黑苗士兵∶
//哦！　居然还有汉人
//是漏网之鱼吗？
ViewportMove(8, 4, 16);
SetDlgLower(10, 0, false);
//李逍遥∶
//　　咦．．！(
SetBattlefield(FbpWin.扬州山道);
BattleStart(102, "@A073", "");
BattleEnd();
EventSetState(246, 5, 0);
EventSetState(246, 6, 0);
EventSetState(246, 7, 0);
EventSetState(246, 11, 2);
EventSetState(246, 12, 2);
FadeOut(0);
RoleSetDirFrame(3, 0, 0);
PartySetPos(37, 111, 1);
EventSetState(246, 1, 1);
EventSetState(246, 4, 1);
WaitEventAutoScriptRun(44, false, false);
EventSetAutoScript(246, 1, "");
EventSetAutoScript(246, 4, "@7F4C");
WaitEventAutoScriptRun(36, false, false);
SetDlgLower(75, 0, false);
//妇人∶
//谢谢你替我们解围
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥∶
//大婶．．可否请你告诉我
//这里到底是什么地方？
//我刚刚才到神殿祭拜一具
//石像，然后就突然在这里了
VideoUpdate(0, false);
SetDlgLower(75, 0, false);
//妇人∶
//这里是黑苗族的都城－南绍
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//李逍遥∶
//南绍！？我明明在大理城．．
VideoUpdate(0, false);
SetDlgLower(75, 0, false);
//妇人∶
//你穿着汉人的服装，又杀了
//那三名士兵，你得赶紧想办
//法离开，否则你的处境会很
//危险
VideoRestore();
//我得带公主离开了．．
//年轻人～请好自为之
EventSetDirFrame(246, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(246, 4, 0);
EventSetState(246, 1, 0);
EventSetState(246, 2, 1);
VideoUpdate(0, false);
//嘟儿．．飞吧！
WaitEventAutoScriptRun(28, false, false);
EventSetAutoScript(246, 8, "@7F54");
EventSetState(246, 9, 1);
EventSetState(246, 10, 1);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//黑苗士兵∶
//啊～被她们逃了！！
EventSetDirFrame(246, 8, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(246, 10, 2, 0);
VideoUpdate(0, false);
//黑苗士兵∶
//这汉狗一定是她的同伙
//抓他去见教主！
BattleStart(113, "@A073", "");
BattleEnd();
EventSetState(246, 8, 0);
EventSetState(246, 9, 0);
EventSetState(246, 10, 0);
EventSetState(246, 13, 2);
EventSetState(246, 14, 2);
EventSetState(246, 15, 2);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥∶
//这些喽罗杀完一批又来一批
//这样下去不是办法．．．
VideoRestore();
//嗯～　对了．．
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(3, false, false);
FadeOut(0);
EventSetState(246, 11, 0);
EventSetState(246, 12, 0);
EventSetState(246, 13, 0);
EventSetState(246, 14, 0);
EventSetState(246, 15, 0);
HeroSetSprite(0, 563, true);
VideoUpdate(0, false);
//李逍遥∶
//嘿．．还满好看的

['Event_00247_00017_Trigger'];
//黑苗士兵∶
//喂！　你是哪个单位的？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥∶
//我．．．我是新来的
//跟伙伴走散了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//黑苗士兵∶
//喔～　你还有没有看到
//这里还有其他的弟兄？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥∶
//没有，就只我一人
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//黑苗士兵∶
//教主有重要的事
//要所有弟兄回王宫报到
//你就搭我们的船一道回去吧
FadeOut(0);
SceneEnter(255);
PartySetPos(52, 107, 1);

